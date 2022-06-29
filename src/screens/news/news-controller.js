import React, {
  useEffect, useState,
} from 'react'
import { makeRequest } from '../../helpers'
import NewsView from './news-view'

const BlogController = ({ slug }) => {
  const [loading, setLoading] = useState(false)
  const [news, setNews] = useState([])

  const getBlog = async () => {
    setLoading(true)

    const headers = {
      'Content-Type': 'application/json',
    }
    makeRequest({
      headers,
      endPoint: 'newsDetail',
      params: {
        slug,
      },
    }).then((resp) => {
      setNews(resp.data)
      setLoading(false)
    })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  useEffect(() => {
    getBlog()
  }, [])

  const viewProps = {
    data: news,
    loading,
  }
  return (
    <NewsView {...viewProps}/>
  )
}

export default BlogController
