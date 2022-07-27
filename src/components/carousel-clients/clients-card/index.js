import _ from 'lodash'
import React from 'react'
// import { Link } from 'gatsby'
// import classNames from 'classnames'
import './clients-card-styles.scss'
import Quotes from '../../../assets/icons/seasongroup_icons_quote.svg'

const ClientsCard = ({
  imageUrl,
  imageAlt,
  title,
  descr,
  companyName,
}) => (
  <div className='clientsCard__container'>
    <div className='clientsCard__subcontainer'>
      <div className='__descr'>
        <Quotes />
        <h4>{title}</h4>
        <div dangerouslySetInnerHTML={{ __html: descr }} />
        <p className='__companyNameText'>Fake company name and title</p>
        {/* <p className='__companyNameText'>{companyName}</p> */}
        {/* #TODO place real data */}
      </div>
      <div className='clientsCard__imageContainer'>
        <img src={imageUrl} alt={imageAlt} />
      </div>
    </div>
  </div>
)

export default ClientsCard
