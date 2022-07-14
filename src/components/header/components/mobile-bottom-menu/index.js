import React, { useState } from 'react'
import './mobile-bottom-menu-styles.scss'
import Button from '../../../button'
import { withTrans } from '../../../../i18n/withTrans'
import LanguageSelector from '../../../language-selector'
import LinkedIn from '../../../../assets/icons/seasongroup_icons_socmed_linkedin.svg'
import Facebook from '../../../../assets/icons/seasongroup_icons_socmed_facebook.svg'
import Youtube from '../../../../assets/icons/seasongroup_icons_socmed_youtube.svg'

// eslint-disable-next-line arrow-body-style
const MobileBottomMenu = ({ t, i18n }) => {
  return (
    <div className="MobileBottomMenu">
      <Button text={t('top-menu.work-with-us')}/>
      <div className="MobileBottomMenu__container">
        <div className="MobileBottomMenu__socialIconsContainer">
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
        </div>
        <LanguageSelector />
      </div>
    </div>
  )
}

export default withTrans(MobileBottomMenu)
