import React from 'react'
import classNames from 'classnames'
import './frames-images.scss'

const VerticalBottomRightRound = ({
  roundPicture,
  roundPictureHoz,
  src,
}) => {
  const imageClass = classNames({
    verticalBottomRightRound__block__image: true,
    verticalBottomRightRound__imageRound: roundPicture,
    verticalBottomRightRound__imageRoundHoz: roundPictureHoz,

  })

  return (
    <div className={imageClass}>
      <img src={src} />
    </div>
  )
}

export default VerticalBottomRightRound
