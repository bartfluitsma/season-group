import _ from 'lodash'
import React from 'react'
import { useTranslation } from 'react-i18next'
import './blogs-styles.scss'
import {
  CardWithPicture,
  SelectComponent,
  Spinner,
  Button,
} from '../../components'
import { withTrans } from '../../i18n/withTrans'

const BlogView = ({
  loading,
  blogs,
  onClickReadMore,
  categories,
  onChangeCategories,
  restItemLeft,
}) => {
  const { t, i18n } = useTranslation()
  const optionsCategories = _.map(categories, (cat) => ({
    value: cat.slug,
    label: cat.name,
  }))

  return (
    <div className="container-fluid blogList__container">
      <div className="container-xxl">
        <div className="blogList__head">
          <div>
            <h1 className="page-title">{t('blogs.title')}</h1>
          </div>
          <div className="blogList__select">
            <SelectComponent
              label={t('blogs.filter.label')}
              options={optionsCategories}
              onChange={onChangeCategories}
              // value={category}
              placeholder={t('blogs.filter.placeholder', { number: optionsCategories.length })}
            />
          </div>
        </div>
        {loading
          ? <Spinner loading={loading} />
          : (
            <>
              <div className="row">
                {blogs
                  && _.map(blogs, (value, index) => (
                    <div className="col-12 col-sm-6 col-md-4 py-4" key={index}>
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
              {restItemLeft > 0 && (
                <div className="row">
                  <div className="col-11">
                    <Button text={t('blogs.button', { post: restItemLeft })} outline onClick={() => onClickReadMore()} />
                  </div>
                </div>
              )}
            </>
          )}
      </div>
    </div>
  )
}

export default withTrans(BlogView)
