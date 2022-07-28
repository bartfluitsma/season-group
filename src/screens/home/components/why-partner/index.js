import _ from 'lodash'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import './whypartner-styles.scss'
import Tagline from '../../../../components/tagline'
import NumberOne from '../../../../assets/icons/seasongroup_general_01.svg'
import NumberTwo from '../../../../assets/icons/seasongroup_general_02.svg'
import NumberThree from '../../../../assets/icons/seasongroup_general_03.svg'

const WhyPartner = ({ data }) => {
  const { t, i18n } = useTranslation()

  return (
    <div className="whypartner__container">
      <Tagline text={t('tagline.our-strengths')} />
      <div className="largeTitle">
        <Trans i18nKey='home.partner-with-us'>
          Why <span className='title-color'>{{ partner: 'partner' }}</span> with us.
        </Trans>
      </div>
      <div className="whypartner__subcontainer">
        <div className='whypartner__main-image'></div>

        <div className="whypartner__reasons-container">
          <div className='whypartner__reasons'>
            <div className='whypartner__icon'>
              <NumberOne />
            </div>
            <div className='whypartner__title-text-container'>
              <h3>{data[0].title}</h3>
              <div dangerouslySetInnerHTML={{ __html: data[0].copy }} />
            </div>
          </div>
          <div className='whypartner__reasons'>
            <div className='whypartner__icon'>
              <NumberTwo />
            </div>
            <div className='whypartner__title-text-container'>
              <h3>{data[1].title}</h3>
              <div dangerouslySetInnerHTML={{ __html: data[1].copy }} />
            </div>
          </div>
          <div className='whypartner__reasons'>
            <div className='whypartner__icon'>
              <NumberThree />
            </div>
            <div className='whypartner__title-text-container'>
              <h3>{data[2].title}</h3>
              <div dangerouslySetInnerHTML={{ __html: data[2].copy }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyPartner
