/* eslint-disable no-restricted-syntax */
import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Spinner,
  Cta,
} from '../../components'
import {
  Benefits,
  BenefitsTable,
  Downloads,
  Header,
  Menu,
  Notes,
  Premium,
  Summary,
} from './components'

const ProductView = ({
  loading,
  data,
}) => {
  const [menu, setMenu] = useState([])
  console.log('🚀 ~ file: product-view.js ~ line 25 ~ menu', menu, data)

  const { t, i18n } = useTranslation()
  const getMenu = () => {
    const menuKeys = ['benefits', 'downloads', 'premium_overview', 'notes_exclusions', 'summary']
    const my = _.reduce(data, (result, value, key) => {
      console.log('🚀 ~ file: product-view.js ~ line 30 ~ my ~ value', !_.isEmpty(value))
      if (_.includes(menuKeys, key) && !_.isEmpty(value)) {
        result.push({
          id: key,
          name: t(`product.menu.${key}`),
        })
        return result
      }
      return result
    }, [])
    setMenu(my)
  }

  useEffect(() => {
    getMenu()
  }, [data])

  if (loading) {
    return <Spinner loading={loading} />
  }

  return (
    <div className="container-fluid p-0">

      <Header
        name={_.get(data, 'name')}
        brief={_.get(data, 'brief')}
        highlight={_.get(data, 'highlight')}
        t={t} />
      <Menu
        t={t} menu={menu}/>
      <Summary
        id="summary"
        data={_.get(data, 'summary')}
        coverage={_.get(data, 'coverage')}
        t={t} />
      <Benefits
        id="benefits"
        data={_.get(data, 'benefits')}
        t={t} />
      <BenefitsTable
        data={_.get(data, 'benefit_highlights')}
        t={t} />
      <Premium
        data={_.get(data, 'premium_overview')}
        id={'premium_overview'}
        t={t} />
      <Notes
        data={_.get(data, 'notes_exclusions')}
        id={'notes_exclusions'} t={t}
      />
      <Downloads
        data={_.get(data, 'downloads')}
        id={'downloads'} t={t}
      />
      <div className="container-xxl">
        <Cta />
      </div>
    </div>

  )
}

export default ProductView
