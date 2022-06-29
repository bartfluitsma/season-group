/* eslint-disable max-len */
import React from 'react'
import { VerticalBottomRightRound } from '../../../components/frames-images'
import src from '../../../assets/images/tmp/gettyimages-1014228976-2048x2048.jpeg'
import './about-us-components-style.scss'

const BlockHead = () => (
  <div className="container-xxl p-0">
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
    <div className="row blockHead__container down">
      <div className="col-sm-7 col-12 blockHead__image ">
        <VerticalBottomRightRound src={src} roundPictureHoz />
      </div>
      <div className="col-sm-5 col-12 blockHead__content">
        <h2 className="blockHead__title__h2">
          We are changers.
        </h2>
        <p>Our comprehensive range of health and travel products take care of your wellness holistically, so you can prepare and move further, fly higher. With our highly customisable products and intuitive services that are backed by Pacific Cross digital-driven solutions, it is easy to find the products that fit your needs. We commit to your change.</p>
      </div>
    </div> 

  </div>
)

export default BlockHead
