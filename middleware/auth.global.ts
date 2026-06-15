// export default defineNuxtRouteMiddleware(to => {
//   const user = useCookie('currentUser')

//   if (!user.value && to.path !== '/login') {
//     return navigateTo('/login')
//   }

//   if (user.value && to.path === '/login') {
//     return navigateTo('/')
//   }
// })

export default defineNuxtRouteMiddleware(to => {
  const userCookie = useCookie('currentUser')

  // Parse cookie jika masih string
  let user = userCookie.value
  if (typeof user === 'string') {
    try {
      user = JSON.parse(user)
    } catch {
      user = null
    }
  }

  // Route yang bisa diakses tanpa login
  const publicRoutes = ['/login', '/forgot-password', '/activate-account']

  // Belum login → hanya boleh akses public routes
  if (!user && !publicRoutes.includes(to.path)) {
    return navigateTo('/login')
  }

  // Sudah login → cegah akses login & forgot-password
  if (user && publicRoutes.includes(to.path)) {
    return navigateTo('/')
  }

  // Redirect khusus user non-admin
  if (user && to.path === '/') {
    const role = user.role?.toLowerCase()

    if (role !== 'admin' && role !== 'super admin') {
      return navigateTo('/user-home')
    }
  }
})
