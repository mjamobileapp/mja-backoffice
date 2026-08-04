interface MenuAccessItem {
  link?: unknown
  path?: unknown
  url?: unknown
  href?: unknown
  route?: unknown
  children?: unknown
  items?: unknown
  subMenus?: unknown
}

function normalizePath(value: string) {
  const path = value.split(/[?#]/, 1)[0] || '/'
  const normalized = `/${path.replace(/^\/+|\/+$/g, '')}`
  return normalized === '//' ? '/' : normalized
}

function collectMenuLinks(value: unknown, links: Set<string>) {
  if (Array.isArray(value)) {
    value.forEach(item => collectMenuLinks(item, links))
    return
  }

  if (!value || typeof value !== 'object')
    return

  const item = value as MenuAccessItem
  for (const key of ['link', 'path', 'url', 'href', 'route']) {
    if (typeof item[key] === 'string' && item[key])
      links.add(normalizePath(item[key]))
  }

  collectMenuLinks(item.children, links)
  collectMenuLinks(item.items, links)
  collectMenuLinks(item.subMenus, links)
  collectMenuLinks((value as Record<string, unknown>).data, links)
  collectMenuLinks((value as Record<string, unknown>).menus, links)
  collectMenuLinks((value as Record<string, unknown>).menu, links)
}

/** Fetches and flattens the same menu permission tree used by the sidebar. */
export async function getUserMenuLinks(username: string): Promise<Set<string>> {
  const response = await apiFetch(`/api/backoffice/akses/user/${encodeURIComponent(username)}`)
  const links = new Set<string>()
  collectMenuLinks(response, links)
  return links
}

export function isMenuPathAllowed(path: string, allowedLinks: Set<string>) {
  const normalizedPath = normalizePath(path)

  return [...allowedLinks].some((link) => {
    // Exact match protects each menu route. The second condition also allows
    // a parent route used only to redirect to an authorized child route.
    return normalizedPath === link || normalizedPath.startsWith(`${link}/`)
  })
}
