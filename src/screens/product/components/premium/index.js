import React from 'react'
import './premium-styles.scss'
import {
  TableProduct,
  Button,
} from '../../../../components'

const Premium = ({ t, id, data }) => (
  <div className="container-xxl p-0" id={id}>
    <div className="premium__container">
      <div>
        <h2 className="page-subtitle">{t('product.premium.title')}</h2>
      </div>
      <div className="table-responsive">
        <TableProduct data={data} />
      </div>
      <div className="benefitstable__button">
        <Button text="View Full Brochure"/>
      </div>
    </div>
  </div>
)

export default Premium
