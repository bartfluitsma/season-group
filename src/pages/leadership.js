import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import LeadershipDetailPage from '../screens/leadership-detail'
import LeadershipPage from '../screens/leadership'

const IndustriesPage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/leadership/' : `${_.get(props, 'pageContext.locale')}/leadership/`
  return (
    <Router>
      <LeadershipDetailPage {...props} path={`${path}:slug`} />
      <LeadershipPage {...props} path={`${path}`} />
    </Router>
  )
}

export default IndustriesPage
