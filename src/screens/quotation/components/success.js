import React from 'react'
import { Button } from '../../../components'
import '../quotation.scss'

const Success = ({ t }) => (
  <div className="container-xxl quotation__success">
    <div className="quotation__success__appendix"></div>
    <h1 className="page-title">{t('quotation.success.title')}</h1>
    <p className="quotation__success__message">{t('quotation.success.message')}</p>
    <Button text={t('quotation.success.button')} />
  </div>
)

export default Success
