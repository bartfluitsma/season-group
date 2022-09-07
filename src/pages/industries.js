import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import IndustriesTemplate from '../screens/industries'

const IndustriesPage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/industries/' : `${_.get(props, 'pageContext.locale')}/industries/`
  return (
    <Router>
      <IndustriesTemplate {...props} path={`${path}:slug`} />
      <IndustriesTemplate {...props} path={`${path}:id`} />
    </Router>
  )
}

export default IndustriesPage
