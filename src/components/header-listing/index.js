import React from 'react'
import './header-listing.scss'
import _ from 'lodash'
import Select from '../select'

const HeaderLintingPages = ({
  title,
  selectOptions,
}) => {
  console.log('dad')
  return (
    <div className="headerListing__container">
      <div className="headerListing__title">
        <h1>{title}</h1>
      </div>
      <div className="headerListing__filters">
        {
          _.map(selectOptions, (option, idx) => (
            <div key={idx} className="headerListing__filters__box">
              <Select {...option} />
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default HeaderLintingPages
