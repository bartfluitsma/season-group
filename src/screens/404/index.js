import * as React from 'react'
import Button from '../../components/button'
import { withTrans } from '../../i18n/withTrans'
import Shape from '../../assets/icons/pacificcross_pageconstruction_shape.svg'
import './404.scss'

import { Seo } from '../../components'

const NotFoundPage = ({ t }) => (
  <>
    <Seo title="404: Page Not found" />
    <div className="container-fluid not-found-page__container">
      <div className="container-xxl">
        <div className="row">

          <h1 className="page-title">{t('not-found.title')}</h1>
          <p className="page-desc">{t('not-found.description')}</p>
        </div>

        <Button text={t('not-found.button')} link="/" />

        <Shape className="shape" />
      </div>
    </div>
  </>
)

export default withTrans(NotFoundPage)
