import _ from 'lodash'
import React, {
  useEffect, useState,
} from 'react'
import { makeRequest } from '../../helpers'
import BlogView from './blogs-view'

const BlogController = () => {
  const [blogs, setBlogs] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState({})
  const [restItemLeft, setRestItemLeft] = useState(0)

  const getBlogsByCategory = async (nextPage) => {
    setLoading(true)

    const headers = {
      'Content-Type': 'application/json',
    }
    makeRequest({
      headers,
      endPoint: 'blogs',
      params: {
        page: nextPage,
        category: category.value,
      },
    }).then((resp) => {
      setBlogs((prevState) => ([
        ...prevState,
        ...resp.data.blogs,
      ]))
      setLoading(false)
      setRestItemLeft(resp.data.rest_blogs_count)
    })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  const getBlogs = async (nextPage) => {
    setLoading(true)

    const headers = {
      'Content-Type': 'application/json',
    }
    makeRequest({
      headers,
      endPoint: 'blogs',
      params: {
        page: nextPage,
      },
    }).then((resp) => {
      setBlogs((prevState) => ([
        ...prevState,
        ...resp.data.blogs,
      ]))
      setCategories(resp.data.categories)
      setLoading(false)
      setRestItemLeft(resp.data.rest_blogs_count)
    })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  const onHandleReadMore = () => {
    if (!_.isEmpty(category)) {
      getBlogsByCategory(page + 1)
    } else {
      getBlogs(page + 1)
    }
    setPage((prevState) => (prevState + 1))
  }

  const onChangeCategories = (value) => {
    if (_.isEmpty(value)) {
      getBlogs(1)
      setPage(1)
      setBlogs([])
    } else {
      setCategory(value)
      setPage(1)
      setBlogs([])
    }
  }

  useEffect(() => {
    if (!_.isEmpty(category)) {
      getBlogsByCategory(1)
    }
  }, [category])

  useEffect(() => {
    getBlogs(1)
  }, [])

  const viewProps = {
    blogs,
    loading,
    categories,
    category,
    restItemLeft,
    onChangeCategories,
    onClickReadMore: onHandleReadMore,
  }

  return (
    <BlogView {...viewProps} />
  )
}

export default BlogController
