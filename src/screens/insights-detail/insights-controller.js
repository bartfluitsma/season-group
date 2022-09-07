import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import InsightsView from './insights-view'

const InsightsDetailController = ({ slug }) => {
  const [loading, setLoading] = useState(false)
  const [dataInsights, setDataInsights] = useState([])

  // catch with useEffect so the data will be contained
  const getDataInsightsDetail = async () => {
    setLoading(true)
    const fields = 'id,title,slug,acf,human_date,thumbnail,related,categories,featured_media'
    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'insights',
      params: {
        slug,
        fields,
      },
    }).then((resp) => {
      setDataInsights(resp.data[0])
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDataInsightsDetail()
  }, [])

  console.log('Home data controller after reqeust', dataInsights)
  const viewProps = {
    data: dataInsights,
    loading,
  }
  return (
    <InsightsView {...viewProps}/>
  )
}

export default InsightsDetailController
