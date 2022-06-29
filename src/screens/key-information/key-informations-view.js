import React from 'react'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { PageMenuTemplate, AccordionTemplates } from '../../components'
import { faqData, fakeFAQMobile } from '../../data'
import './key-information-styles.scss'

const KkeyInformationView = () => {
  const breakpoints = useBreakpoint()
  const { t, i18n } = useTranslation()
  const menu = [
    'Claims',
    'Policy Services',
    'Premium Payments',
    'Dictum Sit Amet Justo',
    'Iaculis Nunc',
  ]

  if (breakpoints.sm) {
    return (
      <div className="KeyInformation__container">
        <div className="page-title">{t('keyInfo.title')}</div>
        <AccordionTemplates t={t} i18n={i18n} data={fakeFAQMobile} />
      </div>
    )
  }

  return (
    <PageMenuTemplate
      title={t('keyInfo.title')}
      data={faqData }
      menu={menu}
      i18n={i18n}
      t={t}
    />
  )
}

export default KkeyInformationView
