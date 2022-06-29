/* eslint-disable max-len */
import _ from 'lodash'
import React from 'react'
import './products-styles.scss'
import {
  CardProduct,
  FilterButtons,
  Cta,
  Spinner,
} from '../../components'
import { getUrlMedia } from '../../helpers'
import urlBackground from '../../assets/images/tmp/pacificcross_products_01.jpeg'

const ProductsView = ({
  data,
  loading,
  onHandleFilter,
  listProducts,
  category,
}) => {
  console.log('🚀 ~ file: products-view.js ~ line 20 ~ listProducts', listProducts)
  const objFilter = _.map(data.subcategory, (subcategory, idx) => {
    if (idx === 0) {
      return {
        id: idx,
        name: subcategory.title,
        activeClass: 'filter-active',
        translateValue: '0',
      }
    }
    return {
      id: idx,
      name: subcategory.title,
      activeClass: '',
      translateValue: `${195 * idx}px`,
    }
  })
  if (loading) {
    return <Spinner loading={loading} />
  }

  return (
    <div className="products__container container-xxl">
      <div className="products__header row">
        <h1 className="page-title col-12">{_.get(data, 'title')}</h1>
        <p className="col-12 col-sm-8">{_.get(data, 'description')}</p>
      </div>
      <div className="products__box">
        <div className="products__filter">
          <FilterButtons
            data={objFilter}
            onHandleFilter={onHandleFilter}
          />
        </div>
        <div className="products__cards row">
          { listProducts && _.map(listProducts, (item) => (
            <div className="col-12 col-sm-4 g-5">
              <CardProduct
                key={item}
                link={`/${item.slug}`}
                promotion="promotion"
                nameProduct={_.get(item, 'title')}
                category={category}
                conditions={_.get(item, 'highlights')}
                description={_.get(item, 'brief')}
                urlBackground={getUrlMedia(_.get(item, 'featured_image'))}
                outline
              />
            </div>
          ))}
        </div>

      </div>
      <div className="products__cta">
        <Cta />
      </div>
    </div>
  )
}

export default ProductsView
