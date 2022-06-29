import React from 'react'
import { Router } from '@reach/router'
import _ from 'lodash'
import ProductTemplate from '../screens/product'

const ProductPage = (props) => {
  const path = _.get(props, 'pageContext.locale') === 'en' ? '/product/' : `${_.get(props, 'pageContext.locale')}/product/`
  return (
    <Router>
      <ProductTemplate {...props} path={`${path}:slug`} />
      <ProductTemplate {...props} path={`${path}:id`} />
    </Router>
  )
}

export default ProductPage