import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import NewsDetailView from './news-view'

const NewsDetailCotroller = ({ slug }) => {
  const [loading, setLoading] = useState(false)
  const [dataNewsDetail, setDataNewsDetail] = useState([])

  // catch with useEffect so the data will be contained
  const getDataNewsDetail = async () => {
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
      setDataNewsDetail(resp.data[0])
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDataNewsDetail()
  }, [])

  console.log('Home data controller after reqeust', dataNewsDetail)
  const viewProps = {
    data: dataNewsDetail,
    loading,
  }
  return (
    <NewsDetailView {...viewProps}/>
  )
}

export default NewsDetailCotroller
