import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import NewsTemplate from '../screens/news'

const NewsPage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/news/' : `${_.get(props, 'pageContext.locale')}/news/`
  return (
    <Router>
      <NewsTemplate {...props} path={`${path}:slug`} />
      <NewsTemplate {...props} path={`${path}:id`} />
    </Router>
  )
}

export default NewsPage
