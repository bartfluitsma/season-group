import _ from 'lodash'
import React from 'react'
import { useTranslation } from 'react-i18next'
import './numberswhy-styles.scss'

const NumbersWhy = ({ number, descr }) => {
  const { t, i18n } = useTranslation()

  return (
    <div className="numberswhy__container">
      <p className='numberswhy__number'>{number}</p> {/* #TODO a plus sign with svg instead of data */}
      {/* <div className='numberswhy__descr' dangerouslySetInnerHTML={{ __html: descr }} /> */}
      <div className='numberswhy__descr'><p>Description goes here</p></div> {/* #TODO unlock data via line above */}
    </div>
  )
}

export default NumbersWhy
