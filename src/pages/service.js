import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import ServiceTemplate from '../screens/service'

const ServicePage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/service/' : `${_.get(props, 'pageContext.locale')}/service/`
  return (
    <Router>
      <ServiceTemplate {...props} path={`${path}:slug`} />
      <ServiceTemplate {...props} path={`${path}:id`} />
    </Router>
  )
}

export default ServicePage
