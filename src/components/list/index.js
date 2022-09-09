import _ from 'lodash'
import React from 'react'
import './list-styles.scss'

const ListView = ({
  data,
  card,
  classN,
  t
}) => {
  const Card = card

  return (
    <div className="list__container">
      {
        !_.isEmpty(data) ? _.map(data, (item) => (
          <div className={classN} key={item.id}>
            <Card data={item} />
          </div>
        ))
          : (
            <div className="noResults">
              <p>{t('news.no-results')}</p>
            </div>
          )
      }
    </div>
  )
}

export default ListView
