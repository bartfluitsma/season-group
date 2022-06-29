import React from 'react'
import './footer-styles.scss'
import FooterLogoColumn from './components/footer-logo-column'
import { menuMobileFooter } from '../../data'
import Accordion from '../accordion'

const FooterMobile = ({
  t,
  i18n,
  socialmedia,
}) => (
  <div className="container-fluid footer-mobile__container">
    <div className="row px-3">
      <FooterLogoColumn t={t} socialmedia={socialmedia}/>
      <Accordion data={menuMobileFooter} t={t} i18n={i18n} />
    </div>
  </div>
)

export default FooterMobile
