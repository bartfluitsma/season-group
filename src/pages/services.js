import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import ServicesTemplate from '../screens/services'

const ServicesPage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/services/' : `${_.get(props, 'pageContext.locale')}/services/`
  return (
    <Router>
      <ServicesTemplate {...props} path={`${path}:slug`} />
      <ServicesTemplate {...props} path={`${path}:id`} />
    </Router>
  )
}

export default ServicesPage
