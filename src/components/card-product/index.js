import _ from 'lodash'
import { Link } from 'gatsby'
import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import classNames from 'classnames'
import Button from '../button'
import ArrowIconRight from '../../assets/icons/pacificcross_icons_arrow-right.svg'
import './card-product-styles.scss'

const WrappedProductCard = styled.div`
    position: relative;
    border-radius: 6px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-image: none;
    cursor: pointer;
    min-height: 420px;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    &:hover {
      background-image: url(${(props) => props.urlBackground});
      &:before {
        background-color: rgba(28,117,188,0.9);
        z-index: 0;
      }
    }
    @media (max-width: 768px) {
      min-height: 420px;
    }
`

const ItemLink = ({
  itemLink,
}) => (
  <Link to={itemLink.url} className="cardProduct__list">
    <p><span>{itemLink.name}</span><ArrowIconRight /></p>
  </Link>

)
const CardProduct = ({
  link,
  category,
  name,
  promotion,
  highlight,
  brief,
  urlBackground,
  listLinks,
  outline,
  border,
}) => {
  const { t } = useTranslation()
  const cardProductClass = classNames({
    cardProduct__box: true,
    cardProduct__box__border: border,
  })

  return (
    <WrappedProductCard
      urlBackground={urlBackground}
    >
      <div className={cardProductClass}>
        <div>
          <div className="cardProduct__header">
            <span>{promotion && `${t('product.promotion')} /`} {category}</span>
            <h4>{name}</h4>
          </div>
          <div className="cardProduct__body">
            {
              _.isArray(highlight)
                ? (_.map(highlight, (item) => <p>{_.get(item, 'highlight_text')}</p>))
                : (<p>{highlight}</p>)
            }

          </div>
          <div className="cardProduct__description">
            {!_.isEmpty(listLinks) && _.map(listLinks, (itemLink, idx) => <ItemLink key={idx} itemLink={itemLink} />)}
            <p>{brief}</p>
          </div>
        </div>
        <div className="cardProduct__footer">
          <Button
            outline={outline}
            text="Learn More"
            link={link} />
        </div>
      </div>
    </WrappedProductCard>

  )
}

export default CardProduct
