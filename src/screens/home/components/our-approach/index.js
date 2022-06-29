import _ from 'lodash'
import React from 'react'
import Slider from 'react-slick'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { CardOutline } from '../../../../components'
import './our-approach-styles.scss'

const OurApproach = ({ t }) => {
  const array = _.range(8)
  const breakpoints = useBreakpoint()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  }

  return (
    <div className="container-xxl py-5 ourApproach__container">
      <span className="ourApproach__tag">{t('home.approach.tag')}</span>
      <h2 className="ourApproach__title">{t('home.approach.title')}</h2>
      {breakpoints.sm ? (
        <Slider {...settings}>
          {_.map(array, (item, idx) => (
            <div className="col-3" key={idx} style={{ width: 300 }}>
              <div style={{ padding: '0 10px' }}>
                <CardOutline title="Focused">
                  <p className="cardOutline-text">
                    Provide professional services by focusing only on the health
                    and travel insurance sectors with deep understandings.
                  </p>
                </CardOutline>

              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="row g-4">
          {_.map(array, (item, idx) => (
            <div className="col-3" key={idx}>
              <CardOutline title="Focused">
                <p className="cardOutline-text">
                  Provide professional services by focusing only on the health
                  and travel insurance sectors with deep understandings.
                </p>
              </CardOutline>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default OurApproach
