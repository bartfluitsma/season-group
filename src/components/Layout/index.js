import React, { useState } from 'react'
import { withTrans } from '../../i18n/withTrans'
import Header from '../header'
import Footer from '../footer'

import './layout-styles.scss'

const Layout = ({
  children,
  t,
  i18n,
}) => (
  <div className="global-wrapper layout__container">
    <Header />
    {children}
    <Footer t={t} i18n={i18n}/>

  </div>
)

export default withTrans(Layout)
