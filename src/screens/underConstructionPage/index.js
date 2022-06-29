import * as React from 'react'
import Button from '../../components/button'
import { withTrans } from '../../i18n/withTrans'
import Shape from '../../assets/icons/pacificcross_pageconstruction_shape.svg'
import './underConstructionPage.scss'

import { Seo } from '../../components'

const UnderConstructionPage = ({ t }) => (
  <>
    <Seo title="404: Page Under Construction" />
    <div className="container-fluid under-construction-page__container">
      <div className="container-xxl">
        <div className="row">

          <h1 className="page-title">{t('under-construction.title')}</h1>
          <p className="page-desc">{t('under-construction.description')}</p>
        </div>

        <Button text={t('under-construction.button')} link="/" />

        <Shape className="shape" />
      </div>
    </div>
  </>
)

export default withTrans(UnderConstructionPage)
