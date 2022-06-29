import _ from 'lodash'
import React from 'react'
import './notes-styles.scss'

const Notes = ({ t, id, data }) => {
  const fakeList = [
    {
      name: 'Self-inflicted injuries or attempted.',
      number: '1',
    },
    {
      name: 'Self-inflicted injuries or attempted.',
      number: '2',
    }, {
      name: 'Self-inflicted injuries or attempted.',
      number: '3',
    }, {
      name: 'At volutpat diam ut venenatis tellus in metus. Iaculis nunc sed augue lacus viverra vitae congue eu consequat.',
      number: '4',
    },
  ]
  return (
    <div className="notes__container" id={id}>
      <div className="container-xxl p-0">
        <div>
          <h3 className="notes__title">{t('product.notes.title')}</h3>
          <p className="notes__description">{t('product.notes.description')}</p>
        </div>
        <div className="notes__list row">
          {_.map(data, (item, idx) => (
            <div key={idx} className="col-12 col-sm-6 notes__item">
              <div className="notes__number"><span>{idx + 1}</span></div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notes
