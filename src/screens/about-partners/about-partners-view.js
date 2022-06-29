/* eslint-disable max-len */
import React from 'react'
import './about-partners-style.scss'
import { CarouselCards, CardProduct } from '../../components'
import { VerticalBottomRightRound } from '../../components/frames-images'
import src from '../../assets/images/tmp/gettyimages-1014228976-2048x2048.jpeg'
import urlBackground from '../../assets/images/tmp/pacificcross_products_01.jpeg'

const fakeArray = [{
  link: '/',
  promotion: 'promotion',
  nameProduct: 'Blue Royale',
  category: 'Individual and families',
  conditions: 'Offers protection for the young age market aiming to have a well balanced lifestyle with coverage up to PHP 250,000.',
  description: 'For people with only government insurance, basic health care and travellers',
  urlBackground: { urlBackground },
  outline: true,
  border: true,
},
{
  link: '/',
  promotion: 'promotion',
  nameProduct: 'Blue Royale',
  category: 'Individual and families',
  conditions: 'Offers protection for the young age market aiming to have a well balanced lifestyle with coverage up to PHP 250,000.',
  description: 'For people with only government insurance, basic health care and travellers',
  urlBackground: { urlBackground },
  outline: true,
  border: true,
}, {
  link: '/',
  promotion: 'promotion',
  nameProduct: 'Blue Royale',
  category: 'Individual and families',
  conditions: 'Offers protection for the young age market aiming to have a well balanced lifestyle with coverage up to PHP 250,000.',
  description: 'For people with only government insurance, basic health care and travellers',
  urlBackground: { urlBackground },
  outline: true,
  border: true,
},

]

const AboutPartnersView = () => (
  <div className="container-fluid aboutPartners__container">
    <div className="container-xxl">
      <div className="aboutPartners__head row">
        <div className="row blockHead__container">
          <div className="col-sm-7 col-12 blockHead__content">
            <h1 className="blockHead__title">
            Simple Act. Big Moves.
            </h1>
            <p>Our comprehensive range of health and travel products take care of your wellness holistically, so you can prepare and move further, fly higher. With our highly customisable products and intuitive services that are backed by Pacific Cross digital-driven solutions, it is easy to find the products that fit your needs. We commit to your change.</p>
          </div>
          <div className="col-sm-5 col-12 blockHead__image">
            <VerticalBottomRightRound src={src} roundPicture />
          </div>
        </div>
      </div>
    </div>
    <div className="container-xxl aboutPartners__body">
      <div className="">
        <h2>Plans</h2>
      </div>
      <div className="row">
        <CarouselCards
          data={fakeArray}
          arrows={false}
          Component={CardProduct}
          title="USD Individual Health Care Plan"/>
      </div>
      {/* <div className="row">
        <CarouselCards
          arrows={false}
          title="USD Individual Health Care Plan"/>
      </div>
      <div className="row">
        <CarouselCards
          arrows={false}
          title="USD Individual Health Care Plan"/>
      </div> */}

    </div>
    <div className="aboutPartners__footer">

    </div>

  </div>
)

export default AboutPartnersView
