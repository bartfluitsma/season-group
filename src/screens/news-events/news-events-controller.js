import _ from 'lodash'
import React, {
  useEffect, useState,
} from 'react'
import { makeRequest } from '../../helpers'
import NewsView from './news-events-view'

const BlogController = () => {
  const [news, setNews] = useState([])
  const [page, setPage] = useState(1)
  const [years, setYears] = useState([])
  const [loading, setLoading] = useState(false)
  const [restItemLeft, setRestItemLeft] = useState(0)
  const [yearSelected, setYearSelected] = useState(null)

  const getNews = async (nextPage, newSearch = false) => {
    setLoading(true)

    const headers = {
      'Content-Type': 'application/json',
    }
    makeRequest({
      headers,
      endPoint: 'news',
      params: {
        page: nextPage,
        year: yearSelected,
      },
    }).then((resp) => {
      if (newSearch) {
        setNews(resp.data.news)
      } else {
        setNews((prevState) => ([
          ...prevState,
          ...resp.data.news,
        ]))
      }
      setLoading(false)
      setRestItemLeft(resp.data.rest_news_count)
      setYears(resp.data.years)
    })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  const onHandleReadMore = () => {
    getNews(page + 1, false)

    setPage((prevState) => (prevState + 1))
  }
  const onHandleFilter = (year) => {
    setYearSelected(year)
  }

  useEffect(() => {
    if (!_.isEmpty(yearSelected)) {
      getNews(1, true)
    }
  }, [yearSelected])

  useEffect(() => {
    getNews(1, true)
  }, [])

  const viewProps = {
    news,
    loading,
    years,
    restItemLeft,
    onHandleFilter,
    onClickReadMore: onHandleReadMore,
  }

  return (
    <NewsView {...viewProps} />
  )
}

export default BlogController
