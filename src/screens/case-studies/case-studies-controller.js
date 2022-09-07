import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import CaseStudyView from './case-studies-view'

const CaseStudyController = ({ slug }) => {
  const [loading, setLoading] = useState(false)
  const [dataCaseStudy, setDataCaseStudy] = useState([])

  // catch with useEffect so the data will be contained
  const getCaseStudyData = async () => {
    setLoading(true)
    const fields = 'id,title,slug,acf'
    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'case-studies',
      params: {
        fields,
        slug,
      },
    }).then((resp) => {
      setDataCaseStudy(resp.data[0])
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getCaseStudyData()
  }, [])

  console.log('Home data controller after reqeust', dataCaseStudy)
  const viewProps = {
    data: dataCaseStudy,
    loading,
  }
  return (
    <CaseStudyView {...viewProps}/>
  )
}

export default CaseStudyController
