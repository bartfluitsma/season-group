import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import ClaimTemplate from '../screens/claim'

const ClaimPage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/claim/' : `${_.get(props, 'pageContext.locale')}/claim/`
  return (
    <Router>
      <ClaimTemplate {...props} path={path} />
      <ClaimTemplate {...props} path={`${path}:slug`} />
      <ClaimTemplate {...props} path={`${path}:id`} />
    </Router>
  )
}

export default ClaimPage
