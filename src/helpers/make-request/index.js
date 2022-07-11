/* eslint-disable prefer-destructuring */
import _ from 'lodash'
import axios from 'axios'

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
