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
  idx,
}) => (
  <div className='waysHowCard__container'>
    <div className='waysHowCard__subcontainer'>
      <div className='waysHowCard__number'>
        <p >0{idx + 1}</p>
      </div>
      <h4>{title}</h4>
      <div className='rich-text' dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  </div>
)

export default WaysHowCard
