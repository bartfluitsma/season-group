import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import HomeView from './home-view'

const HomeController = () => {
  const [loading, setLoading] = useState(false)

  const [dataHome, setDataHome] = useState([])

  const getDataHome = async () => {
    setLoading(true)
    const headers = {
      'Content-Type': 'application/json',
    }
    makeRequest({
      headers,
      endPoint: 'pages', // place the endpoint of where the data is in, from the json file
      params: {
        slug: 'home',
      },
    }).then((resp) => {
      setDataHome(resp.data[0].acf.rows) // why not possible to subtract the above from this one?
      console.log('Home data controller after reqeust', dataHome)
      setLoading(false)
    })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDataHome()
  }, [])

  const viewProps = {
    data: dataHome,
    loading,
  }
  return (
    <HomeView {...viewProps} />
  )
}

export default HomeController
