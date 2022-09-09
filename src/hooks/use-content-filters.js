/* eslint-disable no-empty */
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react'
import { useTranslation } from 'react-i18next'
import { makeRequest } from '../helpers'

const ContentFiltersContext = createContext('')

const ContentFiltersProvider = ({ children }) => {
  const { i18n } = useTranslation()
  const [genreFilter, setGenreFilter] = useState([])
  const [locations, setLocations] = useState([])

  const getAllTypes = async () => {
    const headers = {
      'Content-Type': 'application/json',
    }
    const result = makeRequest({
      headers,
      endPoint: 'genre',
      // params: {
      //   lang: i18n.language,
      // },
    })

    return result
  }

  const getLocations = async () => {
    const headers = {
      'Content-Type': 'application/json',
    }
    const result = makeRequest({
      headers,
      endPoint: 'location',
      // params: {
      //   lang: i18n.language,
      // },
    })

    return result
  }

  const getContentFilters = async () => {
    try {
      const [allTypesResult, locationsResults] = await Promise.all([getAllTypes(), getLocations()])
      console.log('🚀 ~ file: use-content-filters.js ~ line 48 ~ makeMenu ~ allTypesResult', allTypesResult, locationsResults)
      setGenreFilter(allTypesResult.data)
      setLocations(locationsResults.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getContentFilters()
  }, [])

  const values = {
    genreFilter,
    locations,

  }

  return (
    <ContentFiltersContext.Provider value={values}>
      {children}
    </ContentFiltersContext.Provider>
  )
}

const useContentFilters = () => {
  const context = useContext(ContentFiltersContext)

  if (!context) { throw new Error('useLocale must be used within an ContentFiltersProvider') }

  return context
}

export { ContentFiltersProvider, useContentFilters }
