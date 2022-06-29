/* eslint-disable max-len */
import _ from 'lodash'
import React from 'react'
import { Link } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { CardOutline } from '../../components'
import { menuData } from '../../data'
import './how-to-claim-styles.scss'

const HowToClaimView = () => {
  const { t } = useTranslation()

  const menuClaims = _.find(menuData, { title: 'claims' })

  return (
    <div className="container-fluid">
      <div className="container-xxl">
        <div className="howToClaim__head">
          <h1 className="page-title">{t('howToClaim.title')}</h1>
          <p className="howToClaim__head__description">
            Select your current medical plan and proceed to select that type of claim you would like to have. Nullam metus lectus quis lectus ac wisi, et platea dictum quis ante, ducimus eget, nunc cum nisl non convallis vestibulum, fringilla penatibus.
          </p>
        </div>
        <div className="howToClaim__cards row">
          {_.map(menuClaims.children, (item) => (
            <div className="col-sm-3 col-12 howToClaim__card">
              <CardOutline title={t(`menu.${item.title}.title`)}>
                <div>
                  <span>for individuals & families</span>
                  <ul>
                    <li><Link to={`/claim/${'blue-royal'}`}>Blue Royale</Link></li>
                    <li>Blue Royale Premier</li>
                    <li>Critical Cover Extra</li>
                    <li>Select</li>
                    <li>Premier</li>
                    <li>LifeStyle</li>
                    <li>FlexiShield</li>
                  </ul>
                </div>
                <div>
                  <span>for individuals & families</span>
                  <ul>
                    <li>Blue Royale</li>
                    <li>Blue Royale Premier</li>
                    <li>Critical Cover Extra</li>
                  </ul>
                </div>
              </CardOutline>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowToClaimView
