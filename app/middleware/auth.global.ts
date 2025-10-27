export default defineNuxtRouteMiddleware((to) => {
  const authRoutes = ['/login', '/register']
  const { loggedIn } = useUserSession()

  if (loggedIn.value && to.meta.guest) {
    return navigateTo('/dashboard')
  }

  if (!loggedIn.value && !authRoutes.includes(to.path) && !to.meta.guest) {
    return navigateTo('/login')
  }

  return true
})
