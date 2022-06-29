import React from 'react'
import './related-plans-styles.scss'
import { CarouselCards, CardProduct } from '../../../../components'
import { dataCarProduct } from '../../../../data'

const RelatedPlans = () => (
  <div className="container-xxl experienceRelated__container">
    <CarouselCards
      data={dataCarProduct}
      inner={CardProduct}
      tag="Related Plans" />
  </div>
)

export default RelatedPlans
