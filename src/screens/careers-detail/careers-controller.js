import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import CareersDetailView from './careers-view'

const CareersDetailController = ({ slug }) => {
  const [loading, setLoading] = useState(false)
  const [dataCareersDetail, setDataCareersDetail] = useState([])

  // catch with useEffect so the data will be contained
  const getCareersDetailData = async () => {
    setLoading(true)
    const fields = 'id,title,slug,acf'
    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'careers',
      params: {
        fields,
        slug,
      },
    }).then((resp) => {
      setDataCareersDetail(resp.data[0])
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getCareersDetailData()
  }, [])

  console.log('Home data controller after reqeust', dataCareersDetail)
  const viewProps = {
    data: dataCareersDetail,
    loading,
  }
  return (
    <CareersDetailView {...viewProps}/>
  )
}

export default CareersDetailController
