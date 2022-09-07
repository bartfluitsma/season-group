import _ from 'lodash'
import React from 'react'
import { Router } from '@reach/router'
import CrsDetailPage from '../screens/crs-detail'

const IndustriesPage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/crs-detail/' : `${_.get(props, 'pageContext.locale')}/crs-detail/`
  return (
    <Router>
      <CrsDetailPage {...props} path={`${path}:slug`} />
    </Router>
  )
}

export default IndustriesPage
