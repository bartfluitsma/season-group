import React from 'react'
import './header-styles.scss'
import _ from 'lodash'
import imgBg from '../../../../assets/images/products/pacificcross_products_01.jpeg'
import { Button } from '../../../../components'

const Header = ({
  t,
  name,
  brief,
  highlight,
}) => (
  <div className="container-xxl p-0">
    <div
      style={{
        backgroundImage: `url(${imgBg})`,
      }}
      className="headerProduct__container">
      <div className="headerProduct__content">
        <p className="headerProduct__categories">
          <span>promotion</span>/<span>Individual and families</span>
        </p>
        <h1 className="page-title">{name}</h1>
        <p className="headerProduct__description">{brief}</p>
        <div className="headerProduct__separator"></div>
        <ul className="headerProduct__list">
          {
            _.map(highlight, (item) => (<li key={item.highlight_text}>{item.highlight_text}</li>))
          }

        </ul>
        <Button text={t('product.header.buttonText')}/>

      </div>
    </div>

  </div>
)

export default Header
