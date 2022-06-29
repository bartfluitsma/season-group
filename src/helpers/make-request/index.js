/* eslint-disable prefer-destructuring */
import _ from 'lodash'
import axios from 'axios'

// const GATSBY_API_WORDPRESS = 'https://tam.wecreatelabs.com.hk/wp-json/wp/v2'
// const GATSBY_API_WORDPRESS_CUSTOM = 'https://tam.wecreatelabs.com.hk/wp-json/custom/v2'

// const GATSBY_API_WORDPRESS = 'https://reflections.wecreatelabs.com.hk/wp-json/wp/v2'
// const GATSBY_API_WORDPRESS_CUSTOM = 'https://reflections.wecreatelabs.com.hk/wp-json/custom/v2'

function makeRequest({
  headers,
  method,
  endPoint,
  // body,
  custom,
  params,
  data,
  urlString,
} = {}) {
  const urlBase = process.env.GATSBY_API_URL
  const url = !_.isEmpty(urlString) ? urlString : `${urlBase}${endPoint}`
  return axios({
    method,
    url,
    data,
    params,
    headers,
  })
    .catch((error) => {
      console.error('error', error)
      throw error
    })
    .then((response) => ({
      data: response.data,
    }))
}

export default makeRequest
