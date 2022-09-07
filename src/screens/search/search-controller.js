import React, { useEffect, useState } from 'react'
import makeRequest from '../../helpers/make-request'
import SearchView from './search-view'

const SearchCotroller = () => {
  const [loading, setLoading] = useState(false)
  const [dataSearch, setDataSearch] = useState([])

  // catch with useEffect so the data will be contained
  const getDataSearch = async () => {
    setLoading(true)

    const headers = {
      'Content-Type': 'application/json',
    }

    // fetch the data with makerequest
    makeRequest({
      headers,
      endPoint: 'search',
      params: {
        recent: 1,
        search: 'lorem', // need to do logical
      },
    }).then((resp) => {
      setDataSearch(resp.data.posts)
      setLoading(false)
    })
      .catch((error) => {
        console.error(error)
        setLoading(false)
      })
  }
  useEffect(() => {
    getDataSearch()
  }, [])

  console.log('Home data controller after reqeust', dataSearch)
  const viewProps = {
    data: dataSearch,
    loading,
  }
  return (
    <SearchView {...viewProps}/>
  )
}

export default SearchCotroller
