import React, { useState } from 'react'
import './hamburger-styles.scss'

const HamburgerMenu = ( {toggle} ) => {
  const [style, setStyle] = useState(true)

  const changeStyle = () => {
    setStyle(!style)
    toggle()
  }

  return (
    <div className="hamburger" onClick={changeStyle} onKeyDown={changeStyle}>
      <div className={style ? 'hamburger__line' : 'hamburger__line1'}></div>
      <div className={style ? 'hamburger__line' : 'hamburger__line2'}></div>
      <div className={style ? 'hamburger__line' : 'hamburger__line3'}></div>
    </div>
  )
}

export default HamburgerMenu