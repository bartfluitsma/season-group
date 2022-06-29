import _ from 'lodash'
import React from 'react'
import './hero-image-styles.scss'
import { Button } from '../../../../components'
import imageHeaderUrl from '../../../../assets/images/home/pacificcross_homepage_header.jpeg'

const HeroImage = ({ t }) => {
  const array = ['Health during Covid-19', 'Travelling during Covid-19', 'Claim Accident Plan']
  return (
    <div className="container-xxl heroImage__container">
      <div className="row heroImage__block__up">
        <div className="col-12 col-sm-5 heroImage__content">
          <h1 className="heroImage__title">{t('home.heroImage.title')}</h1>
          <Button text={t('home.heroImage.buttonText')}/>
        </div>
        <div className="col-12 col-sm-7">
          <div className="appendix">
            <div className="heroImage__image">
              <img src={imageHeaderUrl} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 heroImage__highlights">
          <h5>{t('home.highlights')}</h5>
          {_.map(array, (item, idx) => (<p key={idx}>{item}</p>))}

        </div>

      </div>
    </div>

  )
}

export default HeroImage
