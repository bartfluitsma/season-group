import _ from 'lodash'
import React from 'react'
import './menu-styles.scss'

const Menu = ({ menu }) => (
  <div className="menuProduct__container">
    <div className="menuProduct__box">
      {_.map(menu, (item) => <li key={item.id}>
        <a href={`#${item.id}`}>{item.name}</a>
      </li>)}
    </div>
  </div>
)

export default Menu
