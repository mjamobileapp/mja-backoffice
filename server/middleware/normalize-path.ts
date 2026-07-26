export default defineEventHandler((event) => {
  const requestUrl = getRequestURL(event)

  if (!requestUrl.pathname.startsWith('//'))
    return

  const normalizedPath = requestUrl.pathname.replace(/^\/+/, '/')
  return sendRedirect(event, `${normalizedPath}${requestUrl.search}`, 301)
})
