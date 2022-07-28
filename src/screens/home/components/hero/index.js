import _ from 'lodash'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import './hero-styles.scss'

const HeroHomePage = () => {
  const { t, i18n } = useTranslation()

  return (
    <div className="hero__container">
      <div className="hero__subcontainer">
        <div className='hero__main-image'></div>
        <div>
          <h1>
            <Trans i18nKey='home.heroTitle'>
                  Global <span className='hero__title-color'>{{ vertical: 'Vertical' }}</span> Together
            </Trans>
          </h1>
          <div className="hero__secondImage"></div>
        </div>
        <div className="hero__scroll-container">
          <div className='scroll'>
            <div className="line"></div>
            <p>scroll</p>
          </div>
        </div>
      </div>
      <div className='hero__button-image'></div>
      <div className="hero__dots"></div>
    </div>
  )
}

export default HeroHomePage
