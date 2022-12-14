import _ from 'lodash'
import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import './button-style.scss'
import ArrowRight from '../../assets/seasongroup_icons_arrow-right.svg'

const Button = ({
  text,
  link,
  onClick,
  light,
}) => {
  const OnlyText = () => <span>{text}<ArrowRight width="17"/></span>

  const WidthLink = () => (
    <Link to={link}>
      <span>{text}<ArrowRight width="17"/></span>
    </Link>
  )
  const btnClass = classNames({
    button__container: true,
    light,
  })

  const handleOnClick = () => {
    if (onClick) {
      onClick()
    }
  }

  return (
    <div onClick={handleOnClick} className={btnClass}>
      {!_.isEmpty(link) ? <WidthLink /> : <OnlyText />}
    </div>
  )
}

export default Button
