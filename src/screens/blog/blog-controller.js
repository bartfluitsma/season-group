import React, {
  useEffect, useState,
} from 'react'
import { makeRequest } from '../../helpers'
import BlogView from './blog-view'

const BlogController = ({ slug }) => {
  const [loading, setLoading] = useState(false)
  const [blog, setBlog] = useState([])

  const getBlog = async () => {
    setLoading(true)

    const headers = {
      'Content-Type': 'application/json',
    }
    makeRequest({
      headers,
      endPoint: `blogs/${slug}`,
    }).then((resp) => {
      setBlog(resp.data)
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
    data: blog,
    loading,
  }
  return (
    <BlogView {...viewProps}/>
  )
}

export default BlogController
