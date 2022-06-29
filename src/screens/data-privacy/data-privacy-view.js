import React from 'react'
import { useTranslation } from 'react-i18next'
import { PageMenuTemplate } from '../../components'

const DataPrivacyView = () => {
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
      title={t('dataPrivacy.title')}
      html="<h2>Data Privacy</h2><p>In an Emergency situation, call to Hotline 24 hours/7 days a week: (+84 28) 3821 6699</p>"
      menu={menu}
      i18n={i18n}
      t={t}
    />
  )
}

export default DataPrivacyView
