import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import CaseStudyTemplate from '../screens/case-studies'

const CaseStudyPage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/case-studies/' : `${_.get(props, 'pageContext.locale')}/case-studies/`
  return (
    <Router>
      <CaseStudyTemplate {...props} path={`${path}:slug`} />
    </Router>
  )
}

export default CaseStudyPage
