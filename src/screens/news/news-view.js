import _ from 'lodash'
import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  CardWithPicture,
  Spinner,
} from '../../components'
import { getUrlMedia } from '../../helpers'
import './news-style.scss'

const NewsView = ({
  data,
  loading,
}) => {
  const { t, i18n } = useTranslation()

  if (loading) {
    return <Spinner loading={loading} />
  }
  return (
    <div className="container__fluid news__container">
      <div className="container-xxl gx-4">
        <div className="row news__box">
          <div className="col-0 col-sm-2"></div>
          <div className="col-12 col-sm-8">
            <div className="news__head">
              <span className="page-tag">{_.get(data, 'categories.name')}</span>
              <h1 className="page-title">{data.name}</h1>
              <span className="page-date">{t('blog.date', { date: _.get(data, 'created_at') })}</span>
            </div>
            <div className="news__image">
              <img src={getUrlMedia(_.get(data, 'featured_image'))} alt="" />
            </div>
            <div className="news__content" >
              <div
                className="rich-text"
                dangerouslySetInnerHTML={{ __html: _.get(data, 'content') }} />
            </div>

          </div>
          <div className="col-0 col-sm-2"></div>
        </div>
        <div className="row">
          <div className="col">
            <div className="news__related">
              <h2 className="page-title">{t('news.related')}</h2>
              <div className="row">
                {
                  data.related && _.map(data.related, (value, idx) => (
                    <div className="col col-sm-4 py-4" key={idx}>
                      <CardWithPicture
                        parentLink="blog"
                        value={value}
                        data={value}
                        i18n={i18n}
                      />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default NewsView
