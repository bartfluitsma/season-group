/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
const _ = require('lodash')
const coreResources = require('../locales')
const routeConfig = require('../../config/route')

/**
 * getRouteMatchPath
 * find page's match path base on provided route config
 * @param {*} pagePath
 * @param {*} routes
 */
function getRouteMatchPath(pagePath = '', routes = []) {
  if (pagePath === undefined || pagePath === '/') {
    return undefined
  }
  return _.find(routes, (o) => _.includes(pagePath, o.route))
}

exports.onCreatePage = ({
  page,
  actions,
}, pluginConfig) => {
  const {
    createPage,
    deletePage,
  } = actions

  // local variable
  // const availableLocales = process.env.GATSBY_AVAILABLE_LOCALES
  const locales = process.env.GATSBY_AVAILABLE_LOCALES || 'en zh-hant'
  const availableLocales = locales.split(' ')
  const defaultLocale = process.env.GATSBY_DEFAULT_LOCALE

  return new Promise((resolve) => {
    // First delete the incoming page that was automatically created by Gatsby
    // So everything in src/pages/
    deletePage(page)

    // check routes config to find page's matchPath
    const pageRoute = getRouteMatchPath(page.path, routeConfig)
    availableLocales.map((lang) => {
      let localizedPath = lang === defaultLocale ? `${page.path}` : `/${lang}${page.path}`
      // REMARK: rewrite rule in AWS Lamda need to be configured as well
      if (pageRoute) {
        localizedPath = lang === defaultLocale ? `${pageRoute.route}` : `/${lang}${pageRoute.route}`
        page.matchPath = lang === defaultLocale ? `${pageRoute.matchPath}` : `/${lang}${pageRoute.matchPath}`
      }

      // merge locale resource from plugin config
      const localeResources = coreResources[lang]

      return createPage({
        // Pass on everything from the original page
        ...page,
        // Since page.path returns with a trailing slash (e.g. "/de/")
        // if need the path without trailing slash, need the use `removeTrailingSlash(localizedPath)` instead
        // path: removeTrailingSlash(localizedPath),
        path: localizedPath,
        // Pass in the locale as context to every page
        // This context also gets passed to the src/components/layout file
        // This should ensure that the locale is available on every page
        context: {
          ...page.context,
          locale: lang,
          localeResources,
          // : currentLocale.dateFormat,
        },
      })
    })

    resolve()
  })
}
