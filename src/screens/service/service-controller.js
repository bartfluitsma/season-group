import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import ServiceView from './service-view'

const ServiceController = ({ slug }) => {
  const [loading, setLoading] = useState(false)
  const [dataService, setDataService] = useState([])

  // catch with useEffect so the data will be contained
  const getDataService = async () => {
    setLoading(true)
    const fields = 'id,title,slug,acf'
    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'services',
      params: {
        fields,
        slug,
      },
    }).then((resp) => {
      setDataService(resp.data)
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDataService()
  }, [])

  console.log('Home data controller after reqeust', dataService)
  const viewProps = {
    data: dataService,
    loading,
  }
  return (
    <ServiceView {...viewProps} />
  )
}

export default ServiceController
