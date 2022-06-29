import React from 'react'
import { withTrans } from '../../i18n/withTrans'
import Button from '../button'
import './cat-styles.scss'

const Cta = ({
  t,
}) => (
  <div className="cta__container">
    <div className="cta__box">
      <h2>{t('cta.title')}</h2>
      <Button text={t('cta.btnText')}/>
    </div>
  </div>
)

export default withTrans(Cta)
