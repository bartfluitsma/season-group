import _ from 'lodash'
import React from 'react'

import { CardOutline } from '../../../components'
import './about-us-components-style.scss'

const Ourvalues = () => {

  const array = _.range(8)
  return (
    <div className="container-xxl aboutUsOurValues__container p-4">
      <div className="aboutUsOurValues__head">
        <span className="tag">Our values</span>
        <h2 className="page-title">What we believe in</h2>
      </div>
      <div className="row">
        {_.map(array, (item) => (
          <div className="col-sm-3 my-3" key={item}>
            <CardOutline title="Experience">
              <p className="cardOutline-text">
                    Provide professional services by focusing only on the health
                    and travel insurance sectors with deep understandings.
              </p>
            </CardOutline>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Ourvalues
