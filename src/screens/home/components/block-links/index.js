import _ from 'lodash'
import React, { useState } from 'react'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import classNames from 'classnames'
import { ButtonBar } from '../../../../components'
import { VerticalBottomRightRound } from '../../../../components/frames-images'
import './block-link-styles.scss'

const BlockLinks = ({
  data,
  grayBg,
  roundPicture,
  titleDown,
}) => {
  const breakpoints = useBreakpoint()

  const containerClass = classNames({
    'container-fluid': true,
    blockLinks__container: true,
    blockLinks__bg: grayBg,
  })
  const imageClass = classNames({
    blockLinks__block__image: true,
    blockLinks__imageRound: roundPicture,
  })
  const [index, setIdx] = useState(0)
  return (
    <div className={containerClass}>
      <div className="container-xxl">
        <div className="row blockLinks__block">
          { !breakpoints.sm && !titleDown && (

            <div className="blockLinks__header col-12">
              <span className="blockLinks__tag">{data.tag}</span>
              <h2 className="blockLinks__title">{data.title}</h2>
            </div>
          )}
          <div className="col-12">
            <div className="row blockLinks__block__body">
              <div className={roundPicture ? 'col-12 col-sm-7' : 'col-12 col-sm-6'}>
                { _.map(data.list, (item, idx) => (
                  <div
                    key={item.title}
                    onMouseEnter={() => setIdx(idx)}
                    className="blockLinks__block__item">
                    <ButtonBar link={'/'} title={item.title}/>
                  </div>
                ))}
              </div>
              { breakpoints.sm && titleDown && (
                <div className="blockLinks__header col-12">
                  <span className="blockLinks__tag">{data.tag}</span>
                  <h2 className="blockLinks__title">{data.title}</h2>
                </div>
              )}
              <div className={roundPicture ? 'col-12 col-sm-5 blockLinks__block__blockImg' : 'col-12 col-sm-6 blockLinks__block___blockImg' }>
                <VerticalBottomRightRound src={data.list[index].urlImage} roundPicture={roundPicture} />
                <div className="blockLinks__block__text">
                  <p>{data.list[index].description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockLinks
