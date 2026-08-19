export function getApiBaseUrl(): string {
  const config = useRuntimeConfig()
  return (config.public.apiBase as string) || 'http://localhost:3001'
}

export function getAuthToken(): string | null {
  const accessTokenCookie = useCookie<any>('accessToken')
  let val = accessTokenCookie.value
  if (typeof val === 'string') {
    try {
      val = JSON.parse(val)
    }
    catch {
      return val
    }
  }
  return val?.token || (typeof val === 'string' ? val : null)
}

export function getAuthHeaders(): Record<string, string> {
  const token = getAuthToken()
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  return headers
}

function getErrorData(error: any) {
  return error?.data || error?.response?._data || error?.response?.data
}

function getErrorStatus(error: any): number | undefined {
  return error?.statusCode
    || error?.status
    || error?.response?.status
    || error?.response?._data?.statusCode
}

export function isTokenExpiredError(error: unknown): boolean {
  if (getErrorStatus(error) === 401)
    return true

  const data = getErrorData(error)
  const code = data?.code || data?.error || data?.message || (error as any)?.message

  if (typeof code !== 'string')
    return false

  const normalized = code.toUpperCase()
  return normalized.includes('TOKEN_EXPIRED')
    || normalized.includes('UNAUTHORIZED')
    || normalized.includes('INVALID TOKEN')
    || normalized.includes('TOKEN INVALID')
    || normalized.includes('NOT_AUTHENTICATED')
    || normalized.includes('JWT_EXPIRED')
    || normalized.includes('JWT_MALFORMED')
    || normalized.includes('LOGIN_REQUIRED')
    || normalized.includes('EXPIRED')
}

export function isAuthSessionError(error: unknown): boolean {
  const status = getErrorStatus(error)
  if (status === 401 || status === 403)
    return true

  return isTokenExpiredError(error)
}

export function clearAuthSession() {
  const userCookie = useCookie<any>('currentUser', { path: '/' })
  userCookie.value = null

  const tokenCookie = useCookie<any>('accessToken', { path: '/' })
  tokenCookie.value = null
}

export function redirectToLogin() {
  clearAuthSession()
  return navigateTo('/login')
}

/**
 * Wrapper for $fetch with base URL and Auth headers automatically injected.
 */
export async function apiFetch<T = any>(request: string, options: any = {}): Promise<T> {
  const baseUrl = getApiBaseUrl()
  const url = request.startsWith('http') ? request : `${baseUrl}${request.startsWith('/') ? '' : '/'}${request}`
  const headers = {
    ...getAuthHeaders(),
    ...(options.headers || {}),
  }
  try {
    return await $fetch<T>(url, {
      ...options,
      headers,
    })
  }
  catch (error) {
    if (isTokenExpiredError(error))
      await redirectToLogin()

    throw error
  }
}

/**
 * Nuxt useFetch wrapper with base URL and Auth headers.
 */
export function useApiFetch<T = any>(request: string | (() => string), options: any = {}) {
  const baseUrl = getApiBaseUrl()
  const url = typeof request === 'function'
    ? () => {
        const req = request()
        return req.startsWith('http') ? req : `${baseUrl}${req.startsWith('/') ? '' : '/'}${req}`
      }
    : (request.startsWith('http') ? request : `${baseUrl}${request.startsWith('/') ? '' : '/'}${request}`)

  const headers = computed(() => ({
    ...getAuthHeaders(),
    ...(options.headers || {}),
  }))

  return useFetch<T>(url, {
    ...options,
    headers,
    async onResponseError(context) {
      await options.onResponseError?.(context)

      if (isTokenExpiredError(context.error || context.response))
        await redirectToLogin()
    },
  })
}
