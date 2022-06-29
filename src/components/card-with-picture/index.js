/* eslint-disable camelcase */
import _ from 'lodash'
import React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'
import LinesEllipsis from 'react-lines-ellipsis'
import classNames from 'classnames'
import { getRoute, getUrlMedia } from '../../helpers'
import ArrowIconRight from '../../assets/icons/pacificcross_icons_arrow-right.svg'
import './card-with-picture.scss'

const CardWithPicture = ({
  name,
  slug,
  excerpt,
  featured_image,
  created_at,
  parentLink,
  pictureDisplace,
  data,
}) => {
  const { i18n } = useTranslation()
  const pictureBoxClass = classNames({
    cardWithPicture__box__image: true,
    displace: pictureDisplace,
  })

  const contentBoxClass = classNames({
    cardWithPicture__box__content: true,
    displace: pictureDisplace,
  })
  console.log('adasdasdasdasdadsas', data)
  return (
    <div className="cardWithPicture__container">
      <div className="cardWithPicture__box">
        <div
          className={pictureBoxClass}
          style={{
            backgroundImage: `url(${getUrlMedia(_.get(data, 'featured_image', featured_image))})`,
          }}
        >
          {!_.isEmpty(_.get(data, 'categories')) && <div className="cardWithPicture__box__tag">
            <span>{_.get(data, 'categories.name')}</span>
          </div>}
        </div>
        <div className={contentBoxClass}>
          <div>
            <p className="cardWithPicture__box__date">{_.get(data, 'date', created_at)}</p>
            <div className="cardWithPicture__box__cont">
              <h4 className="cardWithPicture__box__title">{_.get(data, 'name', name)}</h4>
              <LinesEllipsis
                className="cardWithPicture__box__description"
                text={_.get(data, 'excerpt', excerpt)}
                maxLine='2'
                ellipsis='...'
                trimRight
                basedOn='words'
              />
            </div>
            <Link
              to={getRoute(`/${parentLink}/${_.get(data, 'slug', slug)}`, i18n.language)}
              state={{ slug: _.get(data, 'slug', slug) }}
              className="cardWithPicture__box__link">
              <p><span>Learn more</span><ArrowIconRight width="20" /></p>
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CardWithPicture
