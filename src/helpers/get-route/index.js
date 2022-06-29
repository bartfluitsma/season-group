const getRoute = (route, lang) => {
  if (lang === 'en') {
    return route
  }
  return `/${lang}${route}`
}

export default getRoute
