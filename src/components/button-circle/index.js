import _ from 'lodash'
import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import './button-circle-style.scss'
import ArrowRight from '../../assets/seasongroup_icons_arrow-right.svg'
import ArrowLeft from '../../assets/seasongroup_icons_arrow-left.svg'

const ButtonCircle = ({
  link,
  onClick,
  light,
  leftArrow,
  darkArrow,
  transparent,
  white,
}) => {
  const OnlyText = () => <span>{!leftArrow ? <ArrowRight width="17"/> : <ArrowLeft width="17"/>}</span>

  const WidthLink = () => (
    <Link to={link}>
      <span>{!leftArrow ? <ArrowRight width="17"/> : <ArrowLeft width="17"/>}</span>
    </Link>
  )
  const btnClass = classNames({
    buttonCircle__container: true,
    light,
    darkArrow,
    transparent,
    white,
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

export default ButtonCircle
