import _ from 'lodash'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { sortAlphabetically } from '../../helpers/sort-by-letter'
import { FilterButtons } from '../../components'
import SearchIcon from '../../assets/icons/pacificcross_icons_search.svg'
import rawData from './fake-data'
import './key-terms-styles.scss'

const KeyTermsView = () => {
  const { t, i18n } = useTranslation()
  const array = [
    {
      id: 1,
      name: 'ALL',
      activeClass: 'filter-active',
      translateValue: '0',
    },
    {
      id: 2,
      name: 'Basics',
      activeClass: '',
      translateValue: '110%',

    },
    {
      id: 3,
      name: 'Claims',
      activeClass: '',
      translateValue: '220%',

    },
    {
      id: 4,
      name: 'Health',
      activeClass: '',
      translateValue: '330%',

    },
    {
      id: 5,
      name: 'Travel',
      activeClass: '',
      translateValue: '440%',

    },
    {
      id: 6,
      name: 'Financial',
      activeClass: '',
      translateValue: '550%',

    },
  ]
  const result = sortAlphabetically(rawData)
  const alpha = Array.from(Array(26)).map((e, i) => i + 65)
  const alphabet = alpha.map((x) => String.fromCharCode(x))

  return (
    <div className="container-fluid">
      <div className="container-xxl">
        <div className="keyTerms__container__title">
          <h1 className="title-page">{t('keyTerms.title')}</h1>
          <div className="keyTerms__search__box">
            <SearchIcon width="20" fill="#DEDEDE" />
            <input placeholder="Search"/>
          </div>
        </div>
        <div className="keyTerms__container__filters">
          <FilterButtons data={array} />
        </div>
      </div>
      <div className="keyTerms__alphabet">
        <div className="container-xxl keyTerms__row__letters">
          { _.map(alphabet, (alph, idx) => <p key={alph}>{alph}</p>)}

        </div>
      </div>
      <div className="container-xxl">
        { _.map(result, (item, idx) => (
          <div className="row" key={idx}>
            <div className="col-12 col-sm-3 keyTerms__column__key">
              <p>{item.group}</p>
            </div>
            <div className="col-12 col-sm-9">
              {_.map(item.children, (child, i) => (
                <div key={i} className="keyTerms__column__content">
                  <h3>{child.name}</h3>
                  <p>{child.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default KeyTermsView
