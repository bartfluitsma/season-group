/* eslint-disable max-len */
import _ from 'lodash'
import React from 'react'
import Slider from 'react-slick'
import LeftArrow from '../../../../assets/icons/pacificcross_icons_arrow-left.svg'
import RightArrow from '../../../../assets/icons/pacificcross_icons_arrow-right.svg'
import Quote from '../../../../assets/icons/pacificcross_icons_testimonial.svg'
import testimonialUrl from '../../../../assets/images/home/pacificcross_homepage_testimonial_01.jpg'
import './testimonials-styles.scss'

const Testimonials = () => {
  const array = _.range(3)
  function NextArrow({ style, onClick }) {
    return (
      <div
        className="testimonials__arrow testimonials__rightArrow"
        style={{ ...style }}
        onClick={onClick}
      >
        <RightArrow width="20" />
      </div>
    )
  }

  function PrevArrow({ style, onClick }) {
    return (
      <div
        className="testimonials__arrow testimonials__leftArrow"
        style={{ ...style }}
        onClick={onClick}
      >
        <LeftArrow width="20"/>
      </div>
    )
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          // centerPadding: '60px',
          // centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          swipeToSlide: true,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="container-fluid testimonials__container">
      <div className="container-xxl testimonials__box">
        <div className="testimonials__quote">
          <Quote width="73"/>
        </div>
        <Slider
          {...settings}>
          {_.map(array, (event) => (
            <div key={event}>
              <div className="testimonials__card">
                <div className="testimonials__card__image">
                  <img src={testimonialUrl}/>
                </div>
                <div className="testimonials__card__content">
                  <p>As a cautious solo traveler, I never expected to be hospitalized in Europe due to food allergies. Thanks to Pacific Cross for being the best travelling companion and insurance in times of medical emergencies. Pacific Cross’ affordable travel insurance plans, smooth claim process and outstanding customer service have definitely given me a 5-star experience.</p>
                  <span>Juan De La Cruz, 3 Years Insuree</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>

      </div>
    </div>
  )
}

export default Testimonials
