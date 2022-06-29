import _ from 'lodash'
import React from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import './button-style.scss'

const Button = ({
  outline,
  text,
  link,
  onClick,
  fluid,
}) => {
  const OnlyText = () => <span>{text}</span>

  const WidthLink = () => (
    <Link to={link}>
      <span>{text}</span>
    </Link>
  )
  const btnClass = classNames({
    button__container: true,
    outline,
    fluid,
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
