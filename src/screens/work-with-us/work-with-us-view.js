import _ from 'lodash'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Seo, Spinner } from '../../components'
import './work-with-us-styles.scss'
import GradientBanner from '../../components/gradient-banner'
import { contactForm } from '../../data'

// #TODO main information
// #TODO create form
// #TODO styling

const WorkWithUsView = ({
  data,
  loading,
}) => {
  const { t, i18n } = useTranslation()

  if (loading) {
    return <Spinner loading={loading} />
  }

  return (
    <>
      <div className="workWithUs__container">
        <Seo title="Season Group: Work with us" />
        {/* <h1>{_.get(contactForm, { title: 'Let\'s be partners' })}</h1> */}
        <h1>Let's be partners</h1>
        <p>Test</p>
      </div>
      <GradientBanner />
    </>
  )
}

export default WorkWithUsView
