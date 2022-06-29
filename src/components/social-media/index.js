import _ from 'lodash'
import React from 'react'
import getIcon from '../../helpers/get-icon'
import './social-media-styles.scss'

const SocialMedia = ({ data }) => (
  <div className="socialMedia__container">
    {_.map(data, (sm) => <a
      className="socialMedia__link"
      key={sm.link}
      height={`${sm.size + 10}`}
      width={`${sm.size + 10}`}
      target="_blank"
      href={sm.link} rel="noreferrer">{
        getIcon({
          name: sm.name,
          color: sm.color,
          size: sm.size,
        })
      }</a>)}
  </div>
)

export default SocialMedia
