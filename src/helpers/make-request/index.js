/* eslint-disable prefer-destructuring */
import _ from 'lodash'
import axios from 'axios'

function makeRequest({
  headers,
  method,
  endPoint,
  // body,
  // custom,
  params,
  data,
  urlString,
} = {}) {
  const urlBase = process.env.GATSBY_API_URL // getting the url from env file, https://seasongr-1935.demosrv.dev/
  const url = !_.isEmpty(urlString) ? urlString : `${urlBase}${endPoint}` // what is the url string?
  return axios({
    method,
    url,
    data,
    params,
    headers,
  })
    // logging if there is an error
    .catch((error) => {
      console.error('error', error)
      throw error
    })
    // responding with the data as "data"
    .then((response) => {
      console.log('🚀 ~ file: index.js ~ line 31 ~ .then ~ response', response)
      return {
        data: response.data,
        total_items: response.headers['x-wp-total'],
        total_pages: response.headers['x-wp-totalpages'],
      }
    })
}

export default makeRequest
