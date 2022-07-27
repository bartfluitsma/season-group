import _ from 'lodash'
import React from 'react'
import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import ButtonCircle from '../../../../components/button-circle'
import './industries-styles.scss'

const IndustriesHome = ({ title }) => {
  const { t, i18n } = useTranslation()
  const [onHover, setOnHover] = useState()

  const handleMouseOver = () => {
    setOnHover(true)
  }

  const handleMouseOut = () => {
    setOnHover(false)
  }

  return (
    <div className="industries__container">
      <div className="industries__subcontainer" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
        {onHover ? <ButtonCircle transparent /> : <ButtonCircle />}
      </div>
    </div>
  )
}

export default IndustriesHome
