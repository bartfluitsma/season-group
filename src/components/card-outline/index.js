import React from 'react'
import './card-outline-styles.scss'

const CardOutline = ({
  children,
  tag,
  title,
}) => (
  <div className="cardOutline__container">
    {tag && <span className="cardOutline__tag">{tag}</span>}
    <h4 className="cardOutline-title">{title}</h4>
    {children}
  </div>
)

export default CardOutline
