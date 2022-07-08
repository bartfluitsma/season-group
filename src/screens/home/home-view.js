import _ from 'lodash'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { Seo } from '../../components'
import './home-styles.scss'


const HomeView = () => {
  const breakpoints = useBreakpoint()
  const { t, i18n } = useTranslation()
  return (
    <div className="cointainer-fluid home__container">
      <Seo title="Season Group: Home" />
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>
    </div>
  )
}

export default HomeView
