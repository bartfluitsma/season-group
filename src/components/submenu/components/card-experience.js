import _ from 'lodash'
import { Link } from 'gatsby'
import React from 'react'
import { withTrans } from '../../../i18n/withTrans'

const CardExperiences = () => {
  const array = _.range(6)
  return (
    <div className="container-fluid row submenu__group__card g-4">
      {
        _.map(array, (item, idx) => (
          <div className="col-4" key={idx}>
            <div className="submenu__group__card__card">
              <h5>Lessen the impact of serious illnesses</h5>
              <p>Healthiness can be easy by knowing these to reach your optimal health</p>
              <Link to={'/experience/leading-healthier-life/'}>
                <span>Learn More</span>
              </Link>
            </div>
          </div>

        ))
      }
    </div>
  )
}

export default withTrans(CardExperiences)
