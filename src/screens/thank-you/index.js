import * as React from 'react'
import Button from '../../components/button'
import { withTrans } from '../../i18n/withTrans'
import './thank-you-page.scss'

import { Seo } from '../../components'

const ThankYouPage = ({ t }) => (
  <>
    <Seo title="Thank you page" />
    <div className="container-fluid not-found-page__container">
      <div className="container-xxl">
        <div className="row">

          <h1 className="page-title">{t('thank-you.title')}</h1>
          <p className="page-desc">{t('thank-you.description')}</p>
        </div>

        <Button text={t('thank-you.button')} link="/" />

      </div>
    </div>
  </>
)

export default withTrans(ThankYouPage)
