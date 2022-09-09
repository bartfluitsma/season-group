import _ from 'lodash'
import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import NewsView from './news-view'

const NewsCotroller = ({ slug }) => {
  const [loading, setLoading] = useState(false)
  const [dataNews, setDataNews] = useState([])
  const [type, setType] = useState(null)
  const fields = 'id,title,slug,acf,human_date,thumbnail,related,location,genre,featured_media'
  const [filters, setFilters] = useState({
    location_slug: null,
    genre_slug: null,
    page: 1,
    fields,
  })

  // catch with useEffect so the data will be contained
  const getDataNews = async () => {
    setLoading(true)
    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'posts',
      params: {
        ...filters,
        slug,
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
  // useEffect(() => {
  //   getDataNews()
  // }, [])

  useEffect(() => {
    getDataNews()
  }, [filters])

  const onChangeAllTypes = (typeOption) => {
    setDataNews([])
    setType(typeOption.value)
    let updatedValue = {}
    updatedValue = {
      genre_slug: _.toLower(typeOption.value),
      page: 1,
    }
    setFilters((oldState) => ({
      ...oldState,
      ...updatedValue,
    }))
  }
  const onChangeLocations = (location) => {
    setDataNews([])
    setType(location.value)
    let updatedValue = {}
    updatedValue = {
      location_slug: _.toLower(location.value),
      page: 1,
    }
    setFilters((oldState) => ({
      ...oldState,
      ...updatedValue,
    }))
  }

  console.log('Home data controller after reqeust', dataNews)
  const viewProps = {
    data: dataNews,
    loading,
    type,
    onChangeAllTypes,
    onChangeLocations,
  }
  return (
    <NewsView {...viewProps}/>
  )
}

export default NewsCotroller
