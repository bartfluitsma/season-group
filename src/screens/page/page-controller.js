import _ from 'lodash'
import React, { useState, useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { makeRequest } from '../../helpers'
import PageView from './page-view'

const PageController = (props) => {
  const { pathname } = props.location
  const slug = _.replace(pathname, '/', '')
  const [page, setPage] = useState([])
  const [loading, setLoading] = useState(false)
  const { t, i18n } = useTranslation()
  const getTerms = useCallback(async () => {
    setLoading(true)

    const headers = {
      'Content-Type': 'application/json',
    }
    makeRequest({
      headers,
      endPoint: 'pages',
      params: {
        lang: i18n.language,
        slug,
      },
    }).then((resp) => {
      setPage(resp.data[0])
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    getTerms()
  }, [i18n.language])

  const viewProps = {

    loading,
    data: page,
    t,
  }
  return (
    <PageView {...viewProps} />
  )
}

export default PageController
