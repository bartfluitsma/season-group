import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import LeadershipView from './leadership-detail-view'

const LeadershipController = ({ slug }) => {
  const [loading, setLoading] = useState(false)
  const [dataLeadership, setDataLeadership] = useState([])

  // catch with useEffect so the data will be contained
  const getLeadershipData = async () => {
    setLoading(true)
    const fields = 'id,title,content,slug,acf,thumbnail,featured_media'
    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'leadership',
      params: {
        fields,
        slug,
      },
    }).then((resp) => {
      setDataLeadership(resp.data[0])
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getLeadershipData()
  }, [])
  console.log('Home data controller after reqeust', dataLeadership)

  const viewProps = {
    data: dataLeadership,
    loading,
  }
  return (
    <LeadershipView {...viewProps}/>
  )
}

export default LeadershipController
