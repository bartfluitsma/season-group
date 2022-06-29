import React, { useState } from 'react'
import Slider from 'react-slick'
import './slider-mobile-styles.scss'

const SliderMobile = ({
  tag,
  title,
  children,
  totalItems,
}) => {
  const [current, setCurrent] = useState(1)
  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    centerMode: true,
    centerPadding: '20px 0px 0px',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrent(index),

  }
  return (
    <div className="sliderMobile__container">
      <div className="sliderMobile__header">
        <span className="sliderMobile__tag">{tag} </span>
        <h4 className="sliderMobile__title">{title}</h4>
      </div>
      <div className="sliderMobile__content">
        <Slider
          {...settings}>
          {children}
        </Slider>
      </div>
      <div className="sliderMobile__footer">
        <span>{current}/{totalItems}</span>
      </div>
    </div>
  )
}

export default SliderMobile
