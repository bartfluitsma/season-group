import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import NewsView from './news-view'

const NewsCotroller = ({ slug }) => {
  const [loading, setLoading] = useState(false)
  const [dataNews, setDataNews] = useState([])

  // catch with useEffect so the data will be contained
  const getDataNews = async () => {
    setLoading(true)
    const fields = 'id,title,slug,acf,human_date,thumbnail,related,location,genre,featured_media'
    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'posts',
      params: {
        slug,
        fields,
      },
    }).then((resp) => {
      setDataNews(resp.data)
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDataNews()
  }, [])

  console.log('Home data controller after reqeust', dataNews)
  const viewProps = {
    data: dataNews,
    loading,
  }
  return (
    <NewsView {...viewProps}/>
  )
}

export default NewsCotroller
