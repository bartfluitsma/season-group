import _ from 'lodash'
import React from 'react'
import './benefits-styles.scss'

const Benefits = ({ t, id, data }) => (
  <div className="container-xxl p-0" id="benefits">
    <div className="benefits__container">
      <h2 className="page-subtitle">{t('product.benefits.title')}</h2>

      <div className="row">
        {data && _.map(data, (item) => <div key={item.text} className="benefits__list col-6 col-sm-3">
          <span>{item.value}</span>
          <p>{item.text}</p>
        </div>)}
        <div className="col-sm-3"></div>
      </div>
    </div>
  </div>
)

export default Benefits
