import React from 'react'
import {
  TableProduct,
  Button,
} from '../../../../components'
import './benefits-table-styles.scss'

const BenefitsTable = ({ t, data }) => (
  <div className="container-xxl p-0">
    <div className="benefitstable__container">
      <div>
        <h3>{t('product.benefitsTable.title')}</h3>
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

export default BenefitsTable
