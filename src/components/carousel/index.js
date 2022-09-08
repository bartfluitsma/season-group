import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import ButtonCircle from '../button-circle'
import Tagline from '../tagline'
// import { Link } from 'gatsby'
// import classNames from 'classnames'
import './carousel-styles.scss'
import ShowcaseCard from './showcase-card'

const Carousel = ({
  tag,
  title,
  inner,
  arrows,
  parentLink,
  data,
  extraProps,
  sToShow,
  sToScroll,
  goToItem,
  children,
}) => {
  const { t, i18n } = useTranslation()
  const Component = inner
  const [barWidth, setbarWidth] = useState(0)
  const breakpoints = useBreakpoint()
  const [imageIndex, setImageIndex] = useState(0)
  function NextArrow({ style, onClick }) {
    return (
      <div
        className="carousel__arrow carousel__rightArrow"
        style={{ ...style }}
      >
        <ButtonCircle onClick={onClick}/>
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
        <ButtonCircle leftArrow light darkArrow onClick={onClick}/>
      </div>
    )
  }
  useEffect(() => {
    let width
    switch (true) {
      case breakpoints.xs:
        width = 100 / Math.ceil(data.length / 1)
        break
      case breakpoints.sm:
        console.log('middles')
        width = 100 / Math.ceil(data.length / 2)
        break
      case breakpoints.md:
        console.log('middles higth')
        width = 100 / Math.ceil(data.length / 3)
        break

      default:
        console.log('hight')
        width = 100 / Math.ceil(data.length / 4)
        break
    }

    setbarWidth(width)
  }, [])
  console.log(imageIndex)

  const settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: sToShow || 4,
    slidesToScroll: sToScroll || 4,
    arrows,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next, props) => {
      setImageIndex(next)
    },
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          arrows: true,
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
          arrows,
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
          <div className='carousel__lineBackground'>
            <div
              style={{
                width: `${barWidth}%`,
                left: `${barWidth * imageIndex}%`,
              }}
              className='carousel__line'
            ></div>
          </div>
        </div>
        <div>
          <div>
            <Slider
              {...settings}>
              {
                children || _.map(data, (props, idx) => (
                  <div key={idx}>
                    <div style={{ margin: '0 10px' }}>
                      <Component
                        parentLink={parentLink}
                        {...props}
                        {...extraProps}
                      />
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
