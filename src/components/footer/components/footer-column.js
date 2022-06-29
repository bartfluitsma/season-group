import _ from 'lodash'
import React from 'react'
import FooterBlock from './footer-block'

const FooterColumn = ({
  menu,

}) => (
  <div className="col">
    { _.map(menu, (item, idx) => <FooterBlock data={item} key={idx} />)}
  </div>
)

export default FooterColumn
