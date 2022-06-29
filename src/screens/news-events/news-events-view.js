import _ from 'lodash'
import React from 'react'
import { useTranslation } from 'react-i18next'
import './news-style.scss'
import {
  CardWithPicture,
  Spinner,
  Button,
  FilterButtons,
} from '../../components'
import { withTrans } from '../../i18n/withTrans'

const NewsBlog = ({
  loading,
  news,
  onClickReadMore,
  restItemLeft,
  years,
  onHandleFilter,
}) => {
  const { t, i18n } = useTranslation()

  const yearsObj = _.map(years, (year, idx) => {
    if (idx === 0) {
      return {
        id: idx,
        name: year,
        activeClass: 'filter-active',
        translateValue: '0',
      }
    }
    return {
      id: idx,
      name: year,
      activeClass: '',
      translateValue: `${113 * idx}px`,
    }
  })

  return (
    <div className="container-fluid news__container">
      <div className="container-xxl">
        <div className="news__head">
          <div>
            <h1 className="page-title">{t('news.title')}</h1>
          </div>
        </div>
        <div className="row news__filters">
          <FilterButtons data={yearsObj} onHandleFilter={onHandleFilter} />
        </div>
        {loading
          ? <Spinner loading={loading} />
          : (
            <>
              <div className="row">
                {news
                  && _.map(news, (value, index) => (
                    <div className="col-12 col-sm-6 col-md-4 py-4" key={index}>
                      <CardWithPicture
                        parentLink="news"
                        value={value}
                        data={value}
                        i18n={i18n}
                      />
                    </div>
                  ))
                }
              </div>
              {restItemLeft > 0 && (
                <div className="row">
                  <div className="col-11">
                    <Button text={t('news.button', { news: restItemLeft })} outline onClick={() => onClickReadMore()} />
                  </div>
                </div>
              )}
            </>
          )}
      </div>
    </div>
  )
}

export default withTrans(NewsBlog)
