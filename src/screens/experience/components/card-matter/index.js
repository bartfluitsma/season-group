/* eslint-disable max-len */
import React from 'react'
import './card-matter-styles.scss'

const CardMatter = ({
  image,
  title,
  content,
}) => (
  <div
    className="cardMatter__container">
    <div
      style ={{ backgroundImage: `url(${image})` }}
      className="cardMatter__image">
      <h2 className="cardMatter__title">{title}</h2>
      <p>{content} </p>
    </div>

  </div>
)

export default CardMatter
