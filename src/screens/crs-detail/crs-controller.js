import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import CrsView from './crs-view'

const CrsCotroller = ({ slug }) => {
  const [loading, setLoading] = useState(false)
  const [dataCrs, setDataCrs] = useState([])

  // catch with useEffect so the data will be contained
  const getDataCrs = async () => {
    setLoading(true)
    const fields = 'id,title,slug,acf'
    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'csr',
      params: {
        slug,
        fields,
      },
    }).then((resp) => {
      setDataCrs(resp.data[0])
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDataCrs()
  }, [])

  console.log('Home data controller after reqeust', dataCrs)
  const viewProps = {
    data: dataCrs,
    loading,
  }
  return (
    <CrsView {...viewProps}/>
  )
}

export default CrsCotroller
