import _ from 'lodash'
import Helmet from 'react-helmet'
import React, { useState } from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { withTrans } from '../../i18n/withTrans'
import Header from '../header'
import Footer from '../footer'
import FooterMobile from '../footer/footer-mobile'
import './layout-styles.scss'

const Layout = ({
  children,
  t,
  i18n,
}) => {
  const breakpoints = useBreakpoint()
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const socialmediafake = {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    youtube: 'https://www.youtube.com/',
  }

  const socialMediaObject = _.reduce(socialmediafake, (result, value, key) => {
    (result).push({
      name: key,
      link: value,
      size: 22,
      color: '#1C75BC',
    })

    return result
  }, [])

  return (
    <div className="global-wrapper layout__container">
      <Helmet>
        <body className={isOpenMenu ? 'is-open-menu' : ''} />
      </Helmet>
      <Header />
      {children}
      { !breakpoints.sm && <Footer t={t} i18n={i18n} socialmedia={socialMediaObject}/> }
      { breakpoints.sm && <FooterMobile t={t} i18n={i18n} socialmedia={socialMediaObject}/> }
    </div>
  )
}

export default withTrans(Layout)
