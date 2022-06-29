import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import ProductTemplate from '../screens/products'

const ProductsPage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/products/' : `${_.get(props, 'pageContext.locale')}/products/`
  return (
    <Router>
      <ProductTemplate {...props} path={`${path}:slug`} />
      <ProductTemplate {...props} path={`${path}:id`} />
    </Router>
  )
}

export default ProductsPage
