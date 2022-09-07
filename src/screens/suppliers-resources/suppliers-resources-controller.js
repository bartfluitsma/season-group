import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import SuppliersResourcesView from './suppliers-resources-view'

const SuppliersResourcesController = () => {
  const [loading, setLoading] = useState(false)
  const [dataSuppliersResources, setDataSuppliersResources] = useState([])

  // catch with useEffect so the data will be contained
  const getDataSuppliersResources = async () => {
    setLoading(true)
    const fields = 'id,title,slug,acf,human_date,location'
    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'suppliers-resources',
      params: {
        fields,
      },
    }).then((resp) => {
      setDataSuppliersResources(resp.data)
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDataSuppliersResources()
  }, [])

  console.log('Home data controller after reqeust', dataSuppliersResources)
  const viewProps = {
    data: dataSuppliersResources,
    loading,
  }
  return (
    <SuppliersResourcesView {...viewProps}/>
  )
}

export default SuppliersResourcesController
