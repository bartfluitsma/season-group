import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import LeadershipView from './leadership-view'

const LeadershipController = () => {
  const [loading, setLoading] = useState(false)
  const [dataLeadership, setDataLeadership] = useState([])

  // catch with useEffect so the data will be contained
  const getLeadershipData = async () => {
    setLoading(true)
    const fields = 'id,title,slug,acf.position,acf.linkedin,thumbnail,featured_media'
    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'leadership',
      params: {
        fields,
      },
    }).then((resp) => {
      setDataLeadership(resp.data)
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
