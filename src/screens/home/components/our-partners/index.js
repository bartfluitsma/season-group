import _ from 'lodash'
import React from 'react'
import './our-partners-style.scss'
import CardPartner from '../card-partners'

const Ourpartners = ({
  t,
}) => {
  const array = _.range(3)
  return (
    <div className="container-xxl py-5  px-4 ourPartners__container">
      <span className="ourPartners__tag">{t('home.partners.tag')}</span>
      <h2 className="ourPartners__title">{t('home.partners.title')}</h2>
      <div className="row g-4">
        { _.map(array, (item, idx) => (
          <div className="col-sm-4 col-12" key={ idx }>

            <CardPartner />
          </div>
        ))}

      </div>
    </div>
  )
}

export default Ourpartners
