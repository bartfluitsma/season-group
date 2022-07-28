import _ from 'lodash'
import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
// import { Link } from 'gatsby'
// import classNames from 'classnames'
import './ways-how-card-styles.scss'

const WaysHowCard = ({
  imgNumber,
  title,
  text,
}) => (
  <div className='waysHowCard__container'>
    <div className='waysHowCard__subcontainer'>
      <div className='waysHowCard__imageContainer'>
        <img src={imgNumber} alt=" " />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  </div>
)

export default WaysHowCard
