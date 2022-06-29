import _ from 'lodash'
import React from 'react'
import { Spinner } from '../../components'
import './page-views-styles.scss'

const Text = ({ className, text }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: text }}></div>
)

const PageView = ({
  data,
  loading,
}) => {
  if (loading) {
    return <Spinner loading={loading} />
  }

  return (
    <>
      <div className="terms-and-conditions__container">
        <h1 className='page-title'>{_.get(data, 'title.rendered')}</h1>
        <Text text={_.get(data, 'content.rendered')} className="rich-text" />
      </div>
    </>
  )
}

export default PageView
