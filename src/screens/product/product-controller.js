import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { makeRequest } from '../../helpers'
import ProductView from './product-view'

const ProductController = (props) => {
  const { slug } = props
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState({})
  const getListProductsByCategory = async () => {
    setLoading(true)

    const headers = {
      'Content-Type': 'application/json',
    }
    makeRequest({
      headers,
      endPoint: 'product',
      params: {
        slug,
      },
    }).then(({ data }) => {
      setProduct(_.head(data))
      setLoading(false)
    })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }

  useEffect(() => {
    getListProductsByCategory()
  }, [])

  const viewProps = {
    data: product,
    loading,

  }
  return (
    <ProductView {...viewProps} />
  )
}

export default ProductController
