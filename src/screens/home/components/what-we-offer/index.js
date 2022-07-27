import _ from 'lodash'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import './what-we-offer-styles.scss'
import Tagline from '../../../../components/tagline'
import ServicesCard from './services-card'

const WhatWeOffer = ({ data }) => {
  const { t, i18n } = useTranslation()

  return (
    <div className="whatWeOffer__container">
      <Tagline text={t('tagline.our-services')} />
      <div className="largeTitle">
        <Trans i18nKey='home.what-we-offer'>
          What we <span className='title-color'>{{ offer: 'offer' }}</span>
        </Trans>
      </div>

      {data.list.map((industrie, idx) => (
        idx % 2 === 0 ? <ServicesCard
          key={idx}
          imageUrl={industrie.image.url}
          imageAlt={industrie.image.alt}
          title={industrie.title}
          text={industrie.copy}
          imageSecondUrl={industrie.image_second.url}
          imageSecondAlt={industrie.image_second.alt}
        /> : <ServicesCard
          key={idx}
          imageUrl={industrie.image.url}
          imageAlt={industrie.image.alt}
          title={industrie.title}
          text={industrie.copy}
          imageSecondUrl={industrie.image_second.url}
          imageSecondAlt={industrie.image_second.alt}
          oppositeCard />
      ))
      }

    </div>
  )
}

export default WhatWeOffer
