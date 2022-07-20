import _ from 'lodash'
import React from 'react'
// import { Link } from 'gatsby'
import './title-text-block-styles.scss'
import { useTranslation } from 'react-i18next'
import Tagline from '../tagline'
import Button from '../button'
import { withTrans } from '../../i18n/withTrans'

const TitleTextBlock = ({
  t, children, text, descr,
}) => (
  <div className='title-text-block__container'>
    <Tagline text={text} />
    <h2>{children}</h2>
    <div className='title-text-block__descr'>
      <div dangerouslySetInnerHTML={{ __html: descr }} />
      <Button className='title-text-block__button' text={t('buttons.learn-about-us')} />
    </div>
  </div>
)

export default withTrans(TitleTextBlock)
