import _ from 'lodash'
import React from 'react'
import { Spinner } from '../../components'
import './page-views-styles.scss'

// const Text = ({ className, text }) => (
//   <div className={className} dangerouslySetInnerHTML={{ __html: text }}></div>
// )

const FakeTitle = 'Terms and conditions'
const FakeSubTitle = 'Omnis minus laborum temporibus'
const FakeText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolorem quam eius cum accusantium error fugiat, ipsum repudiandae reprehenderit omnis minus laborum temporibus rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, iste. Laborum temporibus voluptates tempora culpa, suscipit veritatis odit, facilis ipsa consequatur vero assumenda vitae fuga, adipisci nulla animi sequi? Cum quam quis reprehenderit consectetur iste iusto aliquam neque sed porro.'

const PageView = ({
  // data,
  loading,
}) => {
  if (loading) {
    return <Spinner loading={loading} />
  }

  return (
    <>
      <div className="pages__container">
        <h1 className='page-title'>{FakeTitle}</h1>
        <h4 className="rich-text">{FakeSubTitle}</h4>
        <p className="rich-text">{FakeText}</p>
        <h4 className="rich-text">{FakeSubTitle}</h4>
        <p className="rich-text">{FakeText}</p>
        {/* <Text text={_.get(data, 'content.rendered')} className="rich-text" /> */}
      </div>
    </>
  )
}

export default PageView
