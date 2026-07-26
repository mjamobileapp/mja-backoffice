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
  return $fetch<T>(url, {
    ...options,
    headers,
  })
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
  })
}
