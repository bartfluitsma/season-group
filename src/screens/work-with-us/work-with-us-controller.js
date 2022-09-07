import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import WorkWithUsView from './work-with-us-view'

const WorkWithusController = () => {
  const [loading, setLoading] = useState(false)
  const [dataWorkVhitUs, setDataWorkVhitUs] = useState([])

  // catch with useEffect so the data will be contained
  const getDataWorkVhitUs = async () => {
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
        slug: 'work-with-us',
        fields,
      },
    }).then((resp) => {
      setDataWorkVhitUs(resp.data[0])
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDataWorkVhitUs()
  }, [])

  console.log('WorkWithus data controller after reqeust', dataWorkVhitUs)
  const viewProps = {
    data: dataWorkVhitUs,
    loading,
  }
  return (
    <WorkWithUsView {...viewProps} />
  )
}

export default WorkWithusController
