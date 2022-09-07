import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import ServicesView from './services-view'

const ServicesController = ({ slug }) => {
  const [loading, setLoading] = useState(false)
  const [dataServices, setDataServices] = useState([])

  // catch with useEffect so the data will be contained
  const getDataServices = async () => {
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
      setDataServices(resp.data)
      setLoading(false)
    })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDataServices()
  }, [])

  console.log('Home data controller after reqeust', dataServices)
  const viewProps = {
    data: dataServices,
    loading,
  }
  return (
    <ServicesView {...viewProps}/>
  )
}

export default ServicesController
