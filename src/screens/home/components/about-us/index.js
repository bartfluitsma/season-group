import React from 'react'
import './about-us-styles.scss'
import { Button } from '../../../../components'
import aboutImageUrl from '../../../../assets/images/home/pacificcross_homepage_aboutus.jpeg'

const AboutUS = ({
  t,
}) => {
  console.log('AboutUS')
  return (
    <div className="container-xxl aboutUsHome__container">
      <div className="row">
        <div className="col-sm-1 col-12"></div>
        <div className="col-sm-5 col-12">
          <div className="appendix">
            <div className="aboutUsHome__image">
              <img src={aboutImageUrl} alt="" />
            </div>
          </div>

        </div>
        <div className="col-sm-1 col-12"></div>
        <div className="col-sm-5 col-12 aboutUsHome__content">
          <span className="aboutUsHome__tag">{t('home.about.tag')}</span>
          <h4>{t('home.about.title')}</h4>
          <p>{t('home.about.description')}</p>
          <Button
            text={t('home.about.buttonText')}
            link="/about-us/"
          />
        </div>
      </div>

    </div>
  )
}

export default AboutUS
