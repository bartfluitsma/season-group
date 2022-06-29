/* eslint-disable max-len */
import _ from 'lodash'
import { Link } from 'gatsby'
import React from 'react'
import Slider from 'react-slick'
import CardMatter from '../card-matter'
import image from '../../../../assets/images/tmp/pacificcross_youmatter_header.jpg'

import LeftArrow from '../../../../assets/icons/pacificcross_icons_arrow-left.svg'
import RightArrow from '../../../../assets/icons/pacificcross_icons_arrow-right.svg'
import './head-experiences-styles.scss'

const HeadExperiences = () => {
  const array = _.range(4)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false,
          swipeToSlide: true,
          arrows: false,
        },
      },
    ],
  }

  return (
    <div className="experienceHead__container">
      <div className="experienceHead__navigation">
        <Link to="/" className="experienceHead__boxArrows">
          <div className="experienceHead__arrow">
            <LeftArrow width="20"/>
          </div>
          <p>Worry-free Travel</p>
        </Link>
        <div className="experienceHead__navigation--active">
          <p>Leading a Healthier Life</p>
        </div>
        <Link to="/" className="experienceHead__boxArrows">
          <p>Preparing for others</p>
          <div className="experienceHead__arrow">
            <RightArrow width="20" />
          </div>
        </Link>

      </div>
      <Slider
        {...settings}>
        {_.map(array, (event, idx) => (
          <div key={idx}>

            <CardMatter
              image={image}
              title={'The vitality age of the people is 5.7 years older than their current age. '}
              content="Porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Massa id neque aliquam vestibulum morbi blandit. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Nunc sed blandit libero volutpat. Nibh ipsum consequat nisl vel. "
            />

          </div>
        ))}
      </Slider>

    </div>
  )
}

export default HeadExperiences
