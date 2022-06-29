import _ from 'lodash'
import { Link } from 'gatsby'
import React from 'react'
import { withTrans } from '../../../i18n/withTrans'
import './sub-menu-styles.scss'

const ListWithSubgroup = ({
  m,
  t,
  titleMenuSelected,
  submenutitle,
  menuSelectedItem,
}) => {
  const menu = t(`menu.${titleMenuSelected}.children.${submenutitle}`)
  return (
    <div className="row submenu__subgroup">
      { _.map(m.subgroup, (item, idx) => (
        <div className="col" key={idx}>
          <h5>{
            menuSelectedItem === 0
              ? item.title
              : t(`menu.${titleMenuSelected}.children.${submenutitle}.subgroup.${[idx]}.title`, { country: process.env.GATSBY_DEFAULT_COUNTRY })
          }</h5>
          <div className="row">
            { _.map(item.children, (child, index) => (
              <Link to={`/${child.slug}/`} key={index}>
                <span key={child.title}>{
                  menuSelectedItem === 0
                    ? child.title
                    : t(`menu.${titleMenuSelected}.children.${submenutitle}.subgroup.${[idx]}.children.${child.title}`)
                }</span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default withTrans(ListWithSubgroup)
