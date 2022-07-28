import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import _ from 'lodash'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import ButtonCircle from '../button-circle'
import Tagline from '../tagline'
// import { Link } from 'gatsby'
// import classNames from 'classnames'
import './clients-carousel-styles.scss'
import ClientsCard from './clients-card'
// import ShowcaseCard from './clients-card'


const ClientsCarousel = ({
  // tag,
  // title,
  // parentLink,
  // children
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
        className="clientsCarousel__arrow clientsCarousel__rightArrow"
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
        className="clientsCarousel__arrow clientsCarousel__leftArrow"
        style={{ ...style }}
        onClick={onClick}
      >
        <ButtonCircle leftArrow />
      </div>
    )
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 2,
          dots: false,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          dots: false,
          swipeToSlide: true,
          arrows: true,
        },
      },
    ],
  }
  return (
    <div className="clientsCarousel__container">
      <div className="clientsCarousel__tagline">
        <Tagline text={t('tagline.our-clients')} />
      </div>
      <div className='clientsCarousel__box'>
        <div className="clientsCarousel__loadingLine">
          <div className='clientsCarousel__lineBackground'></div>
          <div className='clientsCarousel__line'></div>
        </div>
        <div>
          <div>
            <Slider
              {...settings}>
              {data.map((work, i) => <div key={i}>
                <ClientsCard
                  imageUrl={work.image.url}
                  imageAlt={work.image.alt}
                  title={work.title}
                  descr={work.copy}
                />
              </div>)}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientsCarousel
