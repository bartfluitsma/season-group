import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import AboutUsView from './about-us-view'

const AboutUsCotroller = () => {
  const [loading, setLoading] = useState(false)
  const [dataAboutUs, setDataAboutUs] = useState([])

  // catch with useEffect so the data will be contained
  const getDataAboutUs = async () => {
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
        slug: 'about',
        fields,
      },
    }).then((resp) => {
      setDataAboutUs(resp.data[0])
      setLoading(false)
    })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDataAboutUs()
  }, [])

  console.log('Home data controller after reqeust', dataAboutUs)
  const viewProps = {
    data: dataAboutUs,
    loading,
  }
  return (
    <AboutUsView {...viewProps}/>
  )
}

export default AboutUsCotroller
