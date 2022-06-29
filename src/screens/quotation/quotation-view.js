import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Seo } from '../../components'
import Success from './components/success'
import FormQuotation from './components/form/form-quotation'
import './quotation.scss'

const QuotationView = () => {
  const [success, setSuccess] = useState(false)
  const { t, i18n } = useTranslation()

  return (
    <>
      <Seo title="Pacific Cross: Quotation" />
      <div className="container-fluid">
        {
          success
            ? <Success t={t} />
            : <div className="quoation__container">
              <div className="row">
                <div className="col-12 col-sm-6 quotation__content">
                  <div className="quotation__header">
                    <span className="page-tag">{t('quotation.content.tag')}</span>
                    <h1 className="page-title">{t('quotation.content.title')}</h1>
                    <div className="rich-text"
                      dangerouslySetInnerHTML={{ __html: t('quotation.content.description') }} />
                  </div>
                </div>
                <div className="col-12 col-sm-6 quotation__form">
                  <FormQuotation t={t} />
                </div>
              </div>
            </div>
        }
      </div>

    </>
  )
}

export default QuotationView
