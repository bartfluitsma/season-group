import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageMenuTemplate } from '../../components'
import { faqData } from '../../data'

const FaqView = () => {
  const { t, i18n } = useTranslation()
  const menu = [
    'Claims',
    'Policy Services',
    'Premium Payments',
    'Dictum Sit Amet Justo',
    'Iaculis Nunc',
  ]
  return (
    <PageMenuTemplate
      title={t('faq.title')}
      data={faqData }
      menu={menu}
      i18n={i18n}
      t={t}
    />
  )
}

export default FaqView
