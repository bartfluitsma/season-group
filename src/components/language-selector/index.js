import React, { useState, useEffect } from 'react'
import { Link } from '@reach/router'
import i18next from 'i18next'
import { withTrans } from '../../i18n/withTrans'
import './language-selector-styles.scss'

const LanguageSelector = ({i18n }) => (
  <select className='language-selector'
    value={i18next.language}
    onChange={(e) => i18n.changeLanguage(e.target.value)
    }
  >
    <option className='language-selector__option' value="en">EN</option>
    <option className='language-selector__option' value="ch">CH</option>
  </select>
)

export default withTrans(LanguageSelector)
