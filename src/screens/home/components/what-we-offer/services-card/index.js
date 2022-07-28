import classNames from 'classnames'
import _ from 'lodash'
import React from 'react'
import ButtonCircle from '../../../../../components/button-circle'
import './servicesCard-styles.scss'

const ServicesCard = ({ imageUrl, imageAlt, title, text, imageSecondUrl, imageSecondAlt, oppositeCard }) => {
  const serviceClasses = classNames({
    servicesCard__container: true,
    oppositeCard,
  })

  return (
    <div className={serviceClasses}>
      <img className='servicesCard__firstImage' src={imageUrl} alt={imageAlt} />
      <div className='servicesCard__information'>
        <div className="servicesCard__text-container">
          <h3>{title}</h3>
          <div dangerouslySetInnerHTML={{ __html: text }} />
          <ButtonCircle />
        </div>
        <div className='servicesCard__secondImage'>
          <img src={imageSecondUrl} alt={imageSecondAlt} />
        </div>
      </div>
    </div>
  )
}

export default ServicesCard
