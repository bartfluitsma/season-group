import React from 'react'
import '../footer-styles.scss'
import Logo from '../../../assets/icons/pacificcross_logo_main.svg'
import Button from '../../button'
import SocialMedia from '../../social-media'
import Applestore from '../../../assets/icons/pacificcross_icons_app_apple.svg'
import GooglePlay from '../../../assets/icons/pacificcross_icons_app_googleplay.svg'

const FooterLogoColumn = ({
  t,
  socialmedia,
}) => (
  <div className="col">
    <div className="footer__logo">
      <Logo />
    </div>
    <div className="footer__address">
      <h5>{t('footer.contact.title')}</h5>
      <h6>{t('footer.contact.headquarters')}</h6>
      <div>
        <p>
          Pacific Cross Center, <br />
          8000 Makati Ave, <br />
          Makati, 1200 Metro Manila, <br />
          Philippines
        </p>
      </div>

    </div>
    <div className="footer__inquire">
      <Button outline text={t('footer.contact.button')}/>
    </div>
    <div className="footer__socialMedia">
      <SocialMedia data={socialmedia } />
    </div>
    <div className="footer__apps">
      <h5>{t('footer.apps-title.title')}</h5>
      <div className="footer__apps__list">
        <Applestore />
        <GooglePlay />
      </div>
    </div>
  </div>
)

export default FooterLogoColumn
