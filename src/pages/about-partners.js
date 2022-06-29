import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import AboutPartnersTemplate from '../screens/about-partners'

const AboutPartners = (props) => {
  console.log('estoy aqui', props)
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/about-partners/' : `/${_.get(props, 'pageContext.locale')}/about-partners/`
  return (
    <Router>
      <AboutPartnersTemplate {...props} path={`${path}:slug`} />
      <AboutPartnersTemplate {...props} path={`${path}:id`} />
    </Router>
  )
}

export default AboutPartners
