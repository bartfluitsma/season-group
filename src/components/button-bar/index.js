import React from 'react'
import { Link } from 'gatsby'
import './button-bar.scss'
import ArrowIconRight from '../../assets/icons/pacificcross_icons_arrow-right.svg'

const ButtonBar = ({
  title,
  link,
}) => (
  <Link to={link} className="buttonBar__container">
    <p>{title}</p> <ArrowIconRight width="20" />
  </Link>
)

export default ButtonBar
