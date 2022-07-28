import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import { withTrans } from '../../i18n/withTrans'
import './header-styles.scss'
import Logo from '../../assets/icons/seasongroup_main-logo.svg'
import SearchIcon from '../../assets/icons/seasongroup_icons_search.svg'
import Button from '../button'
import LanguageSelector from '../language-selector'
import HamburgerMenu from './components/hamburger'
import MobileBottomMenu from './components/mobile-bottom-menu'

const Header = ({ t, i18n }) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <div className="header__container">
      <div className="header__sub-container">
        <div className='header__logo'>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className={!mobileMenu ? 'header__toggleClose' : 'header__menu'}>
          <ul>
            <li>
              <Link to="/services" >
                {t('top-menu.services')}
              </Link>
            </li>
            <li>
              <Link to="/industries" >
                {t('top-menu.industries')}
              </Link>
            </li>
            <li>
              <Link to="/about-us" >
                {t('top-menu.about-us')}
              </Link>
            </li>
            <li>
              <Link to="/news" >
                {t('top-menu.news')}
              </Link>
            </li>          <li>
              <Link to="/insights" >
                {t('top-menu.insights')}
              </Link>
            </li>
            <li className='header__mobile'>
              <MobileBottomMenu />
            </li>
          </ul>
        </div>
        <div className="header__sub-menu">
          <ul>
            <li>
              <div className="header__select header__desktop">
                <LanguageSelector />
              </div>
            </li>
            <li className='header__search'>
              <SearchIcon/>
            </li>
            <Button text={t('top-menu.work-with-us')}/>
            <li><HamburgerMenu toggle={toggleMenu} /></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default withTrans(Header)
