import _ from 'lodash'
import { Link } from 'gatsby'
import React, { useState, useEffect } from 'react'
import { withTrans } from '../../../i18n/withTrans'
import '../footer-styles.scss'

const FooterBlock = ({
  data,
  i18n,
  t,
}) => {
  const [group, setGroup] = useState(null)
  const titleGroup = _.get(data, 'title')

  const getGroups = () => {
    if (Object.prototype.hasOwnProperty.call(data, 'subgroup')) {
      const subgroup = _.get(data, 'subgroup')
      const item = (
        <div className="footer__block__subgroup">
          {
            _.map(subgroup, (it, idx) => (
              <div key={idx}>
                <h6>{t(`footer.${titleGroup}.subgroup.${[idx]}.title`, { country: process.env.GATSBY_DEFAULT_COUNTRY })}</h6>
                <div>
                  {
                    _.map(it.children, (child, i) => (
                      <Link key={i} to={child.slug}>
                        <p key={i}>{t(`footer.${titleGroup}.subgroup.${[idx]}.children.${child.title}`)}</p>
                      </Link>
                    ))
                  }

                </div>
              </div>
            ))
          }
        </div>
      )
      setGroup(item)
    } else {
      const children = _.get(data, 'children')
      const item = (
        <div className="footer__block__children">
          {
            _.map(children, (child, i) => (
              <Link key={i} to={child.slug}>
                <p key={i}>{t(`footer.${titleGroup}.children.${child.title}`)}</p>
              </Link>
            ))
          }

        </div>
      )
      setGroup(item)
    }
  }

  useEffect(() => {
    getGroups()
  }, [])

  return (
    <div className="footer__block">
      <h5>{t(`footer.${titleGroup}.title`)}</h5>
      {group}
    </div>
  )
}

export default withTrans(FooterBlock)
