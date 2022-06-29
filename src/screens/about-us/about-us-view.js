import React from 'react'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import {
  Cta,
  CarouselCards,
} from '../../components'

import {
  BlockHead,
  CtaAboutUs,
  BlockMiddle,
  OurMilestones,
  OurValues,
} from './components'
import './about-us-styles.scss'

const fakeMilestones = [
  {
    title: '1948',
    content: 'dsasdsa',
  },
  {
    title: '1956',
    content: 'asdasdadas',
  },
]

const AboutUsView = () => {
  const { t, i18n } = useTranslation()
  const breakpoints = useBreakpoint()
  return (
    <div className="aboutUs__container container-fluid p-0">
      <BlockHead />
      <CtaAboutUs />
      {/* <BlockMiddle /> */}
      { breakpoints.xs ? (
        <CarouselCards
          tag="our Values"
          title="What we believe in"/>
      ) : (
        <OurValues />
      )}

      <OurMilestones t={t} i18n={i18n} data={fakeMilestones} />
      <div className="container-xxl p-0">
        <Cta t={t} />
      </div>
    </div>
  )
}

export default AboutUsView
