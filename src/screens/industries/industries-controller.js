import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import IndustriesView from './industries-view'

const IndustriesController = ({ slug }) => {
  const [loading, setLoading] = useState(false)
  const [dataIndustries, setDataIndustries] = useState([])

  // catch with useEffect so the data will be contained
  const getIndustriesData = async () => {
    setLoading(true)
    const fields = 'id,title,slug,acf'
    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'industries',
      params: {
        fields,
        slug,
      },
    }).then((resp) => {
      setDataIndustries(resp.data[0])
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getIndustriesData()
  }, [])

  console.log('Home data controller after reqeust', dataIndustries)
  const viewProps = {
    data: dataIndustries,
    loading,
  }
  return (
    <IndustriesView {...viewProps}/>
  )
}

export default IndustriesController
