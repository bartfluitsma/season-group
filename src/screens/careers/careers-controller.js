import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import CareersView from './careers-view'

const CareersCotroller = () => {
  const [loading, setLoading] = useState(false)
  const [dataCareers, setDataCareers] = useState([])

  // catch with useEffect so the data will be contained
  const getDataCareers = async () => {
    setLoading(true)
    const fields = 'id,title,slug,acf'
    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'pages',
      params: {
        slug: 'careers',
        fields,
      },
    }).then((resp) => {
      setDataCareers(resp.data[0])
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDataCareers()
  }, [])

  console.log('Home data controller after reqeust', dataCareers)
  const viewProps = {
    data: dataCareers,
    loading,
  }
  return (
    <CareersView {...viewProps}/>
  )
}

export default CareersCotroller
