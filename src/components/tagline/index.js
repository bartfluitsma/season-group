import _ from 'lodash'
import React from 'react'
import { Link } from 'gatsby'
import './tagline-styles.scss'
import { Trans } from 'react-i18next'
import { withTrans } from '../../i18n/withTrans'

const Tagline = ({ t, i18n, text }) => (
  <div className='tagline__container'>
    <p>{text}</p>
    <div className="tagline__line"></div>
  </div>
)

export default withTrans(Tagline)
