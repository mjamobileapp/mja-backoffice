const publicRoutes = [
  '/login',
  '/forgot-password',
  '/activate-account',
]

const publicErrorRoutes = [
  '/access-denied',
  '/401',
  '/403',
  '/404',
  '/500',
  '/503',
]

const authenticatedUtilityRoutes = [
  '/user-home',
  '/settings/profile',
  '/settings/change-password',
  '/settings/app-version',
]

function parseUser(value: unknown) {
  if (typeof value !== 'string')
    return value as any

  try {
    return JSON.parse(value)
  }
  catch {
    return null
  }
}

export default defineNuxtRouteMiddleware(async (to) => {
  const userCookie = useCookie<any>('currentUser')
  const user = parseUser(userCookie.value)

  if (!user && !publicRoutes.includes(to.path) && !publicErrorRoutes.includes(to.path)) {
    return navigateTo('/login')
  }

  if (user && publicRoutes.includes(to.path)) {
    return navigateTo('/')
  }

  if (user && to.path === '/') {
    const role = user.role?.toLowerCase()

    if (role !== 'admin' && role !== 'super admin') {
      return navigateTo('/user-home')
    }
  }

  // Do not use the sidebar as the security boundary: users can navigate to a
  // page directly. Resolve the server-provided menu permissions for every
  // protected route and fail closed when the permission lookup fails.
  const isAdmin = ['admin', 'super admin'].includes(user?.role?.toLowerCase())
  const requiresMenuAccess = user
    && !publicRoutes.includes(to.path)
    && !publicErrorRoutes.includes(to.path)
    && !authenticatedUtilityRoutes.includes(to.path)
    && (to.path !== '/' || isAdmin)

  if (requiresMenuAccess) {
    const username = user.username || user.email

    if (!username)
      return navigateTo('/access-denied')

    try {
      const allowedLinks = await getUserMenuLinks(username)

      if (!isMenuPathAllowed(to.path, allowedLinks))
        return navigateTo('/access-denied')
    }
    catch (error) {
      if (isAuthSessionError(error))
        return redirectToLogin()

      console.error('Gagal memvalidasi hak akses menu:', error)
      return navigateTo('/access-denied')
    }
  }
})
