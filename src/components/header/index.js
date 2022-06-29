import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { withTrans } from '../../i18n/withTrans'
import Menu from '../menu'
import SubMenu from '../submenu'
import { menuData } from '../../data'
import { useMenu } from '../../hooks/use-menu'
import Logo from '../../assets/icons/pacificcross_logo_main.svg'
import './header-styles.scss'
import BurgerIcon from '../../assets/icons/pacificcross-icon-burgermenu.svg'
import LanguageIcon from '../../assets/icons/pacificcross_icons_language.svg'

const Header = ({ t, i18n }) => {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false)
  const [menuSelectedItem, setMenuSelectedItem] = useState(0)
  const { menu } = useMenu()

  const handleMouseLeave = () => {
    setIsOpenSubMenu(false)
  }
  const handleMouseEnter = () => {
    setIsOpenSubMenu(true)
  }

  const handleSelectMenu = (idx) => {
    setMenuSelectedItem(idx)
  }
  useEffect(() => {
    i18n.changeLanguage('en')
  }, [])

  return (
    <div className="container-fluid header__container">
      <div className="container-xxl">
        <div className="row pt-4-sm pt-1 justify-content-between">
          <div className="col-5 col-sm-4 header__logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="col-4 col-sm-8 flex-column justify-content-between header__menu">
            <div className="header__menu__top">
              <ul>
                <div >
                </div>
                <li >
                  <div>
                    <span>{t('top-menu.our-partners')}</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>{t('top-menu.buy-medical')}</span>
                  </div>
                </li>
                <li>
                  <div>
                    <span>{t('top-menu.buy-travel')}</span>
                  </div>
                </li>
                <li className="col-1">
                  <div className="header__language">
                    <LanguageIcon width="20"/>
                  </div>
                </li>
              </ul>
            </div>
            <Menu
              handleMouseLeave={handleMouseLeave}
              handleMouseEnter={handleMouseEnter}
              selectMenu={handleSelectMenu}
              menu={menu}
              t={t}/>
          </div>
          <div className="header__burger">
            <BurgerIcon />
          </div>
        </div>
      </div>
      {
        isOpenSubMenu && <SubMenu
          t={t}
          menuSelectedItem={menuSelectedItem}
          handleMouseLeave={handleMouseLeave}
          handleMouseEnter={handleMouseEnter}
          menu={menu}
        />
      }

    </div>
  )
}

export default withTrans(Header)
