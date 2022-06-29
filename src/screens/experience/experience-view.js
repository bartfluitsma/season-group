import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Cta,
} from '../../components'
import {
  BlogCarousel,
  HeadExperiences,
  RelatedPlans,
} from './components'
import './experience-style.scss'

const ExperienceView = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className="experience__container container-fluid px-0">
      <HeadExperiences t={t} />
      <BlogCarousel t={t} i18n={i18n}/>
      <div className="container-xxl experience__content">
        <h1 className="experience__title">We believe that optimal health is not far from achieving. We can bridge the gap.</h1>
      </div>
      <RelatedPlans t={t} />
      <div className="container-xxl px-0">
        <Cta />
      </div>
    </div>

  )
}

export default ExperienceView
