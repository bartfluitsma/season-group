import _ from 'lodash'
import { Link } from 'gatsby'
import React from 'react'
import { withTrans } from '../../../i18n/withTrans'
import './sub-menu-styles.scss'

const ListWithoutSubgroup = ({
  m,
  t,
  titleMenuSelected,
  submenutitle,
  menuSelectedItem,
}) => (
  <div className="row submenu__children">
    <div className="col">
      <div className="row">
        { _.map(m.children, (child, idx) => (
          <Link to={`/${child.slug}/`} key={idx}>
            <span key={child.title}>{
              menuSelectedItem === 0
                ? child.title
                : t(`menu.${titleMenuSelected}.children.${submenutitle}.children.${child.title}`)
            }</span>
          </Link>
        ))}
      </div>
    </div>
  </div>

)

export default withTrans(ListWithoutSubgroup)
