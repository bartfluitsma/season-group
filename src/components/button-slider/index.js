import React from 'react'
import './button-slider-styles.scss'
import ArrowLeft from '../../assets/icons/pacificcross_icons_arrow-left.svg'
import ArrowRight from '../../assets/icons/pacificcross_icons_arrow-right.svg'

const ButtonSlider = ({
  left,
  onClick,
}) => (
  <div onClick={onClick} className="buttonSlider__container">
    {left ? (<ArrowLeft width="20"/>) : (<ArrowRight width="20"/>)}
  </div>

)

export default ButtonSlider
