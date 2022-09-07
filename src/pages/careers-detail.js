import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import CareersTemplate from '../screens/careers-detail'

const CareersPage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/careers-detail/' : `${_.get(props, 'pageContext.locale')}/careers-detail/`
  return (
    <Router>
      <CareersTemplate {...props} path={`${path}:slug`} />
    </Router>
  )
}

export default CareersPage
