import _ from 'lodash'
import React from 'react'
import './menu-styles.scss'

const Menu = ({
  t,
  handleMouseEnter,
  handleMouseLeave,
  selectMenu,
  menu,
}) => (
  <div
    className="menu__container"
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
    <div className="row">
      {
        _.map(menu, (item, idx) => {
          const { title } = item
          return (
            <div className="col menu__item" key={item.title} onMouseEnter={() => selectMenu(idx)}>
              <div>
                <span>{t(`menu.${title}.title`)}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  </div>

)

export default Menu
