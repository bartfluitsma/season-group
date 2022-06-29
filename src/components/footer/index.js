import _ from 'lodash'
import React from 'react'
import { Link } from 'gatsby'
import { getRoute } from '../../helpers'
import { menuFooter } from '../../data'
import FooterColumn from './components/footer-column'
import FooterLogoColumn from './components/footer-logo-column'
import './footer-styles.scss'

const Footer = ({
  t,
  i18n,
  socialmedia,
}) => (
  <div className="container-fluid footer__container">
    <div className="container-xxl">
      <div className="row">
        <FooterLogoColumn t={t} socialmedia={socialmedia}/>
        {
          _.map(menuFooter, (menu, idx) => (
            <FooterColumn
              menu={menu}
              key={idx}/>
          ))
        }

      </div>
      <div className="d-flex flex-row footer__bottom justify-content-between">
        <div>
          <span> {t('footer.bottom-menu.rights', { year: new Date().getFullYear() })}</span>
        </div>
        <div>
          <ul className="d-flex flex-row">
            <li>
              <Link to={getRoute('/employee', i18n.language)}>
                <span>{t('footer.bottom-menu.employee')}</span>{' |'}
              </Link>
            </li>
            <li>
              <Link to={getRoute('/sitemap', i18n.language)}>
                <span>{t('footer.bottom-menu.sitemap')}</span>{' |'}
              </Link>
            </li>
            <li>
              <Link to={getRoute('/privacy', i18n.language)}>
                <span>{t('footer.bottom-menu.privacy')}</span>{' |'}
              </Link>
            </li>
            <li>
              <Link to={getRoute('/terms-conditions', i18n.language)}>
                <span>{t('footer.bottom-menu.terms-conditions')}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
