import _ from 'lodash'
import { Link } from 'gatsby'
import React from 'react'
import noImg from '../../../assets/images/news/sesongroup_default_news.png'
import noImgPdf from '../../../assets/images/news/sesongroup_default_pdf.png'

import './card-list.scss'

const card = ({ data }) => {
  if (_.isEmpty(data)) {
    return <p>No results</p>
  }
  const noImageUrl = data.file ? noImgPdf : noImg

  return (
    <div className="cardNews__container row">
      <div className="col-12 col-md-9 cardNews__content">
        <div className="cardNews__tags">
          <span>{_.get(data, 'genre[0].name')}</span> | <span>{_.get(data, 'location[0].name')}</span>
        </div>
        <Link to={_.get(data, 'slug')}>
          <h4>{_.get(data, 'title')}</h4>
        </Link>
        <div>
          <span className="cardNews__date">{_.get(data, 'human_date')}</span>
        </div>

      </div>
      <div className="col-12 col-md-3 p-0">
        <div
          className="cardNews__image"
          style={{
            backgroundImage: `url(${_.get(data, 'thumbnail.url', noImageUrl)}`,
          }}
        >
        </div>
      </div>
    </div>
  )
}

export default card
