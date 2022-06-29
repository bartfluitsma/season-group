import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { makeRequest } from '../../helpers'
import ProductsView from './products-view'

const ProductsController = (props) => {
  const { slug } = props
  const [category, setCategory] = useState(null)
  const [listProducts, setListProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [productsByCategory, setProductsByCategory] = useState({})

  const getListProductsByCategory = async () => {
    setLoading(true)

    const headers = {
      'Content-Type': 'application/json',
    }
    makeRequest({
      headers,
      endPoint: 'productCategory',
      params: {
        slug,
      },
    }).then(({ data }) => {
      console.log('🚀 ~ file: products-controller.js ~ line 26 ~ getListProductsByCategory ~ resp', data)

      setProductsByCategory(data)
      setCategory(data.subcategory[0].title)
      setListProducts(data.subcategory[0].products)
      setLoading(false)
    })
      .catch((error) => {
        console.log(error)
        setLoading(false)
      })
  }
  const onHandleFilter = (name) => {
    setCategory(name)
  }

  useEffect(() => {
    if (productsByCategory.subcategory) {
      const item = _.head(_.filter(productsByCategory.subcategory, { title: category }))
      setListProducts(item.products)
    }
  }, [category])

  useEffect(() => {
    getListProductsByCategory()
  }, [])

  const viewProps = {
    data: productsByCategory,
    loading,
    listProducts,
    category,
    onHandleFilter,
  }

  return (
    <ProductsView {...viewProps} />
  )
}

export default ProductsController
