import _ from 'lodash'
import React from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
// import { Link } from 'gatsby'
// import classNames from 'classnames'
import './showcase-card-styles.scss'

const ShowcaseCard = ({
  imageUrl,
  imageAlt,
  title,
  descr,
}) => (
  <div className='showcaseCard__container'>
    <div className='showcaseCard__subcontainer'>
      <div className='showcaseCard__imageContainer'>
        <img src={imageUrl} alt={imageAlt} />
      </div>
      <h4>{title}
        {/* <LinesEllipsis
        text={title}
        maxLine='2'
        ellipsis='...'
        trimRight
        basedOn='letters'
      /> */}
      </h4>
      <p>
        <LinesEllipsis
          text={descr}
          maxLine='7'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
      </p>
    </div>
  </div>
)

export default ShowcaseCard
