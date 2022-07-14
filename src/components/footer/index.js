import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import { withTrans } from '../../i18n/withTrans'
import './footer-styles.scss'
import Logo from '../../assets/icons/seasongroup_main-logo.svg'
import LinkedIn from '../../assets/icons/seasongroup_icons_socmed_linkedin.svg'
import Facebook from '../../assets/icons/seasongroup_icons_socmed_facebook.svg'
import Youtube from '../../assets/icons/seasongroup_icons_socmed_youtube.svg'

const Footer = ({ t, i18n }) => (
  <div className="footer">
    <div className='footer__container'>
      <div>
        <Link to="/">
          <Logo />
        </Link>
        <p>{t('footer-menu.desc')}</p>
        <div className="footer__email">
          <a href="mailto:inquiry@seasongroup.com.hk">inquiry@seasongroup.com.hk</a>
        </div>
        <div className="footer__socialIconsContainer">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <div className="icon-circle">
              <LinkedIn className="icons-linkedin" />
            </div>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <div className="icon-circle">
              <Facebook className="icons-facebook" />
            </div>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <div className="icon-circle">
              <Youtube className="icons-youtube" />
            </div>
          </a>
        </div></div>
      <div className="footer__menu-container">
        <div className="footer__menu"> {/* #TODO create a dropwdown of the list in mobile view */}
          <div>
            <Link to="/" >
              {t('footer-menu.services')}
            </Link>
            <div className='footer__listItems'>
              <Link to='/'>{t('footer-menu.manufacturing')}</Link>
              <Link to='/'>{t('footer-menu.design-and-engineering')}</Link>
              <Link to='/'>{t('footer-menu.supply-chain-management')}</Link>
              <Link to='/'>{t('footer-menu.after-market')}</Link>
            </div>
          </div>
          <div>
            <Link to="/" >
              {t('footer-menu.industries')}
            </Link>
            <div className='footer__listItems'>
              <Link to='/'>{t('footer-menu.smart-living')}</Link>
              <Link to='/'>{t('footer-menu.power-and-utility')}</Link>
              <Link to='/'>{t('footer-menu.healthcare')}</Link>
              <Link to='/'>{t('footer-menu.security')}</Link>
            </div>
          </div>
          <div>
            <Link to="/" >
              {t('footer-menu.about-us')}
            </Link>
            <div className='footer__listItems'>
              <Link to='/'>{t('footer-menu.our-story')}</Link>
              <Link to='/'>{t('footer-menu.our-locations')}</Link>
              <Link to='/'>{t('footer-menu.leadership')}</Link>
              <Link to='/'>{t('footer-menu.CSR')}</Link>
              <Link to='/'>{t('footer-menu.SG-wireless')}</Link>
            </div>
          </div>
          <div>
            <Link to="/" >
              {t('footer-menu.season-group')}
            </Link>
            <div className='footer__listItems'>
              <Link to='/'>{t('footer-menu.news')}</Link>
              <Link to='/'>{t('footer-menu.insights')}</Link>
              <Link to='/'>{t('footer-menu.contact-us')}</Link>
              <Link to='/'>{t('footer-menu.careers')}</Link>
              <Link to='/'>{t('footer-menu.supplier-resources')}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__copyRight">
      <p>{t('footer-menu.copyright')}</p>
      <p><span><Link to="/">{t('footer-menu.privacy-policy')}</Link></span> | <span><Link to="/">{t('footer-menu.terms-and-conditions')}</Link></span></p>
    </div>
  </div>
)

export default withTrans(Footer)
