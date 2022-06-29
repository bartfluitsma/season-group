import _ from 'lodash'
import React, { useRef, useEffect } from 'react'
import './filter-buttons-style.scss'

const FilterButtons = ({
  data,
  onHandleFilter,
}) => {
  const filterTabs = useRef(null)
  const itemsRef = useRef([])

  useEffect(() => {
    if (!_.isEmpty(filterTabs.current)) {
      /**
       * Ramon 01/04/2022
       * description
       * @class { active } is not need it ATM, left in case future is need it
       */

      const handleActiveTab = (tabs, event, className) => {
        tabs.forEach((tab) => {
          tab.classList.remove(className)
        })
        if (!event.target.classList.contains(className)) {
          event.target.classList.add(className)
        }
      }

      filterTabs.current.addEventListener('click', (event) => {
        const root = document.documentElement
        const targetTranslateValue = event.target.dataset.translateValue
        if (event.target.classList.contains('filter-button')) {
          root.style.setProperty('--translate-filters-slider', targetTranslateValue)
          handleActiveTab(itemsRef.current, event, 'filter-active')
        }
      })
    }
  }, [])

  return (
    <nav className="amazing-tabs">
      <div className="filters-container">
        <div className="filters-wrapper">
          <ul className="filter-tabs" ref={filterTabs}>
            {
              _.map(data, (item, idx) => (
                <li
                  style={{
                    flex: `1 0 ${100 / data.length}%`,
                  }}
                  key={item.id}>
                  <button
                    onClick={() => onHandleFilter(item.name)}
                    ref={itemsRef.current[idx]}
                    className={`filter-button ${item.activeClass}`}
                    data-translate-value={item.translateValue}>
                    {item.name}
                  </button>
                </li>

              ))
            }
          </ul>
          <div
            style={{
              width: `${100 / data.length}%`,
            }}
            className="filter-slider"
            aria-hidden="true">
            <div className="filter-slider-rect">&nbsp;</div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default FilterButtons
