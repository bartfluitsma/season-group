import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import InsightsDetailTemplate from '../screens/insights-detail'
import InsightsTemplate from '../screens/insights'

const InsightsPage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/insights/' : `${_.get(props, 'pageContext.locale')}/insights/`
  return (
    <Router>
      <InsightsDetailTemplate {...props} path={`${path}:slug`} />
      <InsightsTemplate {...props} path={`${path}`} />
    </Router>
  )
}

export default InsightsPage
