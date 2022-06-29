import _ from 'lodash'
import React from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import {
  AccordionChildTemplate,
} from '../../../components'
import './about-us-components-style.scss'

const YearRow = () => (
  <div className="col-12 yearRow__container">
    <p className="yearRow__year">1949</p>
    <p className="yearRow__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor.. </p>
  </div>
)

const OurMilestone = ({
  i18n,
  t,
  data,
}) => {
  const array = _.range(8)
  const breakpoints = useBreakpoint()
  return (
    <div className="container-xxl aboutUsOurMilestones__container">
      <div className="aboutUsOurMilestones__head">
        <span className="tag">Our milestones</span>
        <h2 className="page-title">The Pacific Cross Group was founded in the Philippines in 1949.</h2>
      </div>
      { breakpoints.xs ? (
        < AccordionChildTemplate t={t} i18n={i18n} data={data}/>
      ) : (
        <div className="row">
          {_.map(array, (item) => (
            <YearRow key={item}/>
          ))}
        </div>
      )}

    </div>
  )
}

export default OurMilestone
