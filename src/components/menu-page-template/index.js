import _ from 'lodash'
import React, { useState } from 'react'
import './menu-page-template-styles.scss'

const MenuPageTemplate = ({ menu }) => {
  const [selected, setSelected] = useState(0)

  return (

    <ul className="menuPageTemplate__container">
      { _.map(menu, (item, idx) => (
        <li
          key={item}
          className={
            idx === selected ? 'selected' : ''
          }>
          <span>{item}</span>
        </li>
      ))}

    </ul>
  )
}

export default MenuPageTemplate
