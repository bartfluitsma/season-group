import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import _ from 'lodash'
import React, { Children, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import ButtonCircle from '../button-circle'
import Tagline from '../tagline'
// import { Link } from 'gatsby'
// import classNames from 'classnames'
import './carousel-styles.scss'
import ShowcaseCard from './showcase-card'


const Carousel = ({
  // tag,
  // title,
  // parentLink,
  children,
  inner,
  arrows,
  data,
}) => {
  const { t, i18n } = useTranslation()
  const Component = inner
  const array = _.range(9)
  const breakpoints = useBreakpoint()
  const [imageIndex, setImageIndex] = useState(0)
  function NextArrow({ style, onClick }) {
    return (
      <div
        className="carousel__arrow carousel__rightArrow"
        style={{ ...style }}
        onClick={onClick}
      >
        <ButtonCircle />
      </div>
    )
  }

  function PrevArrow({ style, onClick }) {
    return (
      <div
        className="carousel__arrow carousel__leftArrow"
        style={{ ...style }}
        onClick={onClick}
      >
        <ButtonCircle leftArrow light darkArrow />
      </div>
    )
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: arrows || true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setImageIndex(next)
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
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
          arrows: true,
          centerMode: true,
          centerPadding: '29px 0px 0px',
        },
      },
    ],
  }
  return (
    <div className="carousel__container">
      <div className='carousel__box'>
        <div className="carousel__loadingLine">
          <div className='carousel__lineBackground'></div>
          <div className='carousel__line'></div>
        </div>
        <div>
          <div>
            <Slider
              {...settings}>
              {children}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
