import _ from 'lodash'
import React from 'react'
import { Link } from 'gatsby'
import './banner-CTA-styles.scss'
import { Trans } from 'react-i18next'
import Button from '../button'
import { withTrans } from '../../i18n/withTrans'

const BannerCTA = ({ t, i18n }) => (
  <div className='bannerCTA'>
    <div className='bannerCTA__container'>
      <h1>
        <Trans i18nKey='home.bannerCTA'>
                  Ready to <span className='bannerCTA__title-color'>{{ produce: 'produce' }}</span> an impact?
        </Trans>
      </h1>
      <Button text={t('top-menu.work-with-us')}/>
    </div>
  </div>
)

export default withTrans(BannerCTA)
