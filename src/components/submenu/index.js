import _ from 'lodash'
import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react'
import './submenu-style.scss'
import SubMenuChildren from './components/submenu-children'

const SubMenu = ({
  t,
  menuSelectedItem,
  handleMouseEnter,
  handleMouseLeave,
  menu,
}) => {
  const [menuSelected, setMenuSelected] = useState([])
  const [submenuSelected, setSubmenuSelected] = useState([])
  const [titleMenuSelected, setTitleMenuSelected] = useState(null)

  useEffect(() => {
    const selected = menu[menuSelectedItem]
    const firstchild = selected.children && _.get(selected, 'children[0]', null)
    setTitleMenuSelected(selected.title)
    setSubmenuSelected(firstchild)
    setMenuSelected(selected)
  }, [menuSelectedItem])

  const handleSelectSubmenu = (child) => {
    setSubmenuSelected(child)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="container-fluid submenu__container">
      <div className="container-xxl">
        <div className="row">
          <div className="col-3 submenu__list">
            {
              menuSelected.children && _.map(menuSelected.children, (child) => (
                <Link
                  onMouseEnter={() => handleSelectSubmenu(child)}
                  to={!_.isEmpty(child.slug) && `/${child.slug}/`}
                  className="submenu__list__button
                  " key={child.slug}>
                  <span>
                    { menuSelectedItem === 0
                      ? child.title
                      : t(`menu.${titleMenuSelected}.children.${child.title}.title`, { country: process.env.GATSBY_DEFAULT_COUNTRY })
                    }
                  </span>
                </Link>
              ))
            }
          </div>
          <SubMenuChildren
            titleMenuSelected={titleMenuSelected}
            submenuSelected={submenuSelected}
            menuSelectedItem={menuSelectedItem}
            t={t}
          />
        </div>
      </div>
    </div>

  )
}

export default SubMenu
