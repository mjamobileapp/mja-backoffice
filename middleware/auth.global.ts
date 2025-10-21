export default defineNuxtRouteMiddleware(to => {
  const user = useCookie('currentUser')

  if (!user.value && to.path !== '/login') {
    return navigateTo('/login')
  }

  if (user.value && to.path === '/login') {
    return navigateTo('/')
  }
})
