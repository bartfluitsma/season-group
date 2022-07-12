import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import { withTrans } from '../../i18n/withTrans'
import './header-styles.scss'
import Logo from '../../assets/icons/seasongroup_main-logo.svg'
import SearchIcon from '../../assets/icons/seasongroup_icons_search.svg'
import Button from '../button'

const Header = ({ t, i18n }) => (
  <div className="header__container">
    <div className="header__sub-container">
      <div className='header__logo'>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header__menu">
        <ul>
          <li>
            <Link to="/" >
              {t('top-menu.services')}
            </Link>
          </li>
          <li>
            <Link to="/" >
              {t('top-menu.industries')}
            </Link>
          </li>
          <li>
            <Link to="/" >
              {t('top-menu.about-us')}
            </Link>
          </li>
          <li>
            <Link to="/" >
              {t('top-menu.news')}
            </Link>
          </li>          <li>
            <Link to="/" >
              {t('top-menu.insights')}
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__sub-menu">
        <ul>
          <li>
            <div className="header__select">
              <select
                value={i18n.language}
                onChange={(e) =>
                  i18n.changeLanguage(e.target.value)
                }
              >
                <option value="en">EN</option>
                <option value="ch">CH</option>
              </select>
            </div>
          </li>
          <li>
            <SearchIcon/>
          </li>
          <Button text={t('top-menu.work-with-us')}/> {/* #TODO create button component */}
        </ul>
      </div>
    </div>
  </div>
)

export default withTrans(Header)
