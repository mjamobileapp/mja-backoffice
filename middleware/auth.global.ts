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

  // Kalau belum login → paksa ke login
  if (!user && to.path !== '/login') {
    return navigateTo('/login')
  }

  // Kalau sudah login → cegah buka halaman login
  if (user && to.path === '/login') {
    return navigateTo('/')
  }

  // **Redirect khusus user non-admin**
  if (user && to.path === '/') {
    const role = user.role?.toLowerCase()

    // Admin atau Super Admin tetap di "/"
    if (role !== 'admin' && role !== 'super admin') {
      return navigateTo('/user-home')
    }
  }
})
