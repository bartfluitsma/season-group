import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import ExperienceTemplate from '../screens/experience'

const ExperiencePage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/experience/' : `${_.get(props, 'pageContext.locale')}/experience/`
  return (
    <Router>
      <ExperienceTemplate {...props} path={path} />
      <ExperienceTemplate {...props} path={`${path}:slug`} />
      <ExperienceTemplate {...props} path={`${path}:id`} />
    </Router>
  )
}

export default ExperiencePage
