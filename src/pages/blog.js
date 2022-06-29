import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import BlogTemplate from '../screens/blog'

const BlogPage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/blog/' : `${_.get(props, 'pageContext.locale')}/blog/`
  return (
    <Router>
      {/* <BlogTemplate {...props} path={path} /> */}
      <BlogTemplate {...props} path={`${path}:slug`} />
      <BlogTemplate {...props} path={`${path}:id`} />
    </Router>
  )
}

export default BlogPage
