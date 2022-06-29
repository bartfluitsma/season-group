import _ from 'lodash'
import React, { useState } from 'react'
import Slider from 'react-slick'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import LeftArrow from '../../assets/icons/pacificcross_icons_arrow-left.svg'
import RightArrow from '../../assets/icons/pacificcross_icons_arrow-right.svg'
import './carousel-cards-style.scss'

const CarouselCards = ({
  tag,
  title,
  inner,
  arrows,
  parentLink,
  data,
}) => {
  const Component = inner
  const array = _.range(9)
  const breakpoints = useBreakpoint()
  const [imageIndex, setImageIndex] = useState(0)
  function NextArrow({ style, onClick }) {
    return (
      <div
        className="carouselCard__arrow carouselCard__rightArrow"
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
        className="carouselCard__arrow carouselCard__leftArrow"
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
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          // centerPadding: '60px',
          // centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <div className="container-fluid carouselCard__container">
      <div className="container-xxl carouselCard__box">
        <div className="carouselCard__title">
          <span className="tag">{tag}</span>
          {title && <h2 className="page-title">{title}</h2>}
        </div>
        <div>
          <Slider
            {...settings}>
            {_.map(data, (props, idx) => (
              <div key={idx}>
                <div style={{ margin: '0 10px' }}>
                  <Component
                    parentLink={parentLink}
                    {...props}
                  />
                </div>
              </div>
            ))}
          </Slider>

        </div>
        {
          breakpoints.sm && <p className="carouselCard__count">
            {imageIndex + 1} / {array.length}
          </p>
        }
      </div>
    </div>
  )
}

export default CarouselCards
