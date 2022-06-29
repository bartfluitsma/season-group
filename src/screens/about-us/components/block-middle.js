/* eslint-disable max-len */
import _ from 'lodash'
import React from 'react'
import './about-us-components-style.scss'
import src from '../../../assets/images/tmp/gettyimages-1014228976-2048x2048.jpeg'
import { VerticalBottomRightRound } from '../../../components/frames-images'
import global from '../../../assets/images/about-us/pacificcross_aboutgroup_global.jpg'
import indonesia from '../../../assets/images/about-us/pacificcross_aboutgroup_indonesia.jpeg'
import thai from '../../../assets/images/about-us/pacificcross_aboutgroup_thailand.jpeg'
import vietnam from '../../../assets/images/about-us/pacificcross_aboutgroup_vietnam.jpeg'

const fakeContries = [
  {
    label: 'vietnam',
    url: 'http://google.es',
    src: vietnam,
  },
  {
    label: 'Thailand',
    url: 'http://google.es',
    src: thai,
  },
  {
    label: 'Indonesia',
    url: 'http://google.es',
    src: indonesia,
  },
  {
    label: 'Internacional',
    url: 'http://google.es',
    src: global,
  },

]

const CardCountry = ({ item }) => (
  <div
    style={{
      backgroundImage: `url(${item.src})`,
    }}
    className="cardCountry__container">
    <a href={item.url} rel="noreferrer">
      <span>{item.label}</span>
    </a>
  </div>
)

const BlockMiddle = () => (
  <div className="container-xxl blockMiddle__container">
    <div className="row blockMiddle__content">
      <div className="col-sm-7 col-12">
        <VerticalBottomRightRound src={src} roundPictureHoz />
      </div>
      <div className="col-sm-5 col-12">
        <span className="tag">Our vision</span>
        <h2 className="page-title">To empower changes that lead to innovation and fulfillment.</h2>
      </div>
    </div>
    <div className="row blockMiddle__content">
      <div className="col-sm-7 col-12 justify-content-start">
        <span className="tag">Our locations</span>
        <h2 className="page-title">Our presence in ASEAN</h2>
      </div>
      <div className="col-sm-5 col-12 justify-content-start py-5">
        <p>Pacific Cross is a market specialist in Medical, Travel, HMO and Personal Accident Insurance. Based in the Philippines and with sister companies in Thailand, Indonesia, and Vietnam, Pacific Cross is part of a wider group of health insurance businesses operating across Asia, with a particular focus on the ASEAN region. The aim of the group is to be recognized as a market leader and an Asian specialist of medical and travel insurance. </p>
        <p>Please visit our entities’ websites to learn more:</p>
      </div>
      <div className="col-12 ">
        <div className="row blockMiddle__block__image">
          {_.map(fakeContries, (location, idx) => (
            <div className="col-sm-3 col-6">
              <CardCountry key={idx} item={location} />
            </div>
          ))}

        </div>
      </div>
    </div>

  </div>
)

export default BlockMiddle
