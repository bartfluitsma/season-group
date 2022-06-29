import _ from 'lodash'
import React from 'react'
import './summary-styles.scss'
import { getIconProduct } from '../../../../helpers/get-icon'

const Summary = ({
  t, id, data, coverage,
}) => (
  <div className="container-xxl p-0" id={id}>
    <div className="summary__container">
      <h2 className="page-subtitle">{t('product.summary.title')}</h2>

      <div
        className="rich-text py-4 summary__content"
        dangerouslySetInnerHTML={{ __html: data }} />
      <div className="row">
        {!_.isEmpty(coverage) && _.map(coverage, (item, idx) => <p key={idx} className="summary__list col-12 col-sm-4"><img src={getIconProduct(item)} alt={item}/><span>{t(`product.summary.list.${item}`)}</span></p>)}
      </div>

    </div>

  </div>
)

export default Summary
