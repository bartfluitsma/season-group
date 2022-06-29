import React from 'react'
import { Link } from 'gatsby'
import './card-partners-styles.scss'
import logo from '../../../../assets/images/home/pacificcross_homepage_partners_01.png'
import ArrowIconRight from '../../../../assets/icons/pacificcross_icons_arrow-right.svg'

const CardPartners = () => (
  <div className="cardPartners__container">
    <div className="cardPartners__logo">
      <img src={logo} alt="Logo" />
    </div>
    <div className="cardPartners__content">
      <p>Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Nunc aliquet bibendum enim facilisis gravida neque. </p>
      <Link to="/" className="cardProduct__list">
        <p><span>Learn more</span><ArrowIconRight /></p>
      </Link>
    </div>

  </div>
)

export default CardPartners
