import { Link } from 'gatsby'
import _ from 'lodash'
import React from 'react'
import { useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import ButtonCircle from '../../../../components/button-circle'
import './subservices-styles.scss'

const SubServices = ({ title, text, link }) => {
  const { t, i18n } = useTranslation()
  const [onHover, setOnHover] = useState()

  const handleMouseOver = () => {
    setOnHover(true)
  }

  const handleMouseOut = () => {
    setOnHover(false)
  }

  return (
    <div className="subservices__container">
      <Link to={link}>
        <div className="subservices__subcontainer" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <h3 dangerouslySetInnerHTML={{ __html: title }} />
          <p>{text}</p>
          <div className='subservices__buttonContainer'>
            {onHover ? <ButtonCircle transparent /> : <ButtonCircle />}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SubServices
