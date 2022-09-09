import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { HeaderLintingPages, Spinner, ListView, Paginator } from '../../components'
import { useContentFilters } from '../../hooks/use-content-filters'
import { getOptionsSelect } from '../../helpers'
import Card from './components/card'
import './news-styles.scss'

const NewsView = ({
  loading,
  data,
  onChangeAllTypes,
  onChangeLocations,
}) => {
  const { t } = useTranslation()
  const [options, setOptions] = useState([])
  const { genreFilter, locations } = useContentFilters()

  useEffect(() => {
    const selectOptions = [
      {
        options: getOptionsSelect(genreFilter),
        placeholder: 'All types',
        onChange: onChangeAllTypes,
      },
      {
        options: getOptionsSelect(locations),
        placeholder: 'Locations',
        onChange: onChangeLocations,
      },
    ]
    setOptions(selectOptions)
  }, [genreFilter, locations])

  return (
    <div className="container-fluid p-0">
      <HeaderLintingPages
        title="News"
        selectOptions={options}
      />
      {
        loading ? (
          <Spinner loading={loading} />
        ) : (
          <ListView
            t={t}
            data={data}
            card={Card}
            classN="col-12"
          />
        )
      }
      <div className="news__paginator">
        <Paginator itemsPerPage={4} />
      </div>
    </div>

  )
}

export default NewsView
