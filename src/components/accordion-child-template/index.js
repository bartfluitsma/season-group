/* eslint-disable no-confusing-arrow */
import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import MinusIcon from '../../assets/icons/pacificcross_icons_minus.svg'
import PlusIcon from '../../assets/icons/pacificcross_icons_plus.svg'
import '../accordion/accordion-style.scss'

const sections = (accordionItems, click, t) => _.map(accordionItems, (i, idx) => {
  const arrowClass = classNames({
    accordion__templates__child__arrow: true,
    accordion__templates__child__arrow__active: i.isOpenByDefault ? true : i.open,
  })

  const blockContentClass = classNames({
    accordion__templates__child__content: true,
    accordion__templates__child__content__active: i.isOpenByDefault ? true : i.open,
  })

  const textContentClass = classNames({
    accordion__templates__child__content__text: true,
    accordion__templates__child__content__text__active: i.isOpenByDefault ? true : i.open,
  })

  const subTitleContentClass = classNames({
    accordion__templates__child__content__subtitle: true,
    accordion__templates__child__content__subtitle__active: i.isOpenByDefault ? true : i.open,
  })

  const Childrens = ({
    data,
  }) => (
    _.map(data, (child, index) => {
      const text = child
      return (
        <p className={subTitleContentClass} key={index}>
          {text}
        </p>
      )
    })
  )

  if (accordionItems.length === 0) return null
  return (
    <div className="accordion__templates__child__container" key={i.title + idx}>
      <div className="accordion__templates__child__section">
        <p className="accordion__templates__child__section__title">
          {i.title}
        </p>
        {
          !i.isOpenByDefault && (
            <div className={arrowClass}
              onClick={() => click(accordionItems.indexOf(i))}
              isOpen={i.open}
            >
              {i.open ? <MinusIcon width={15} /> : <PlusIcon width={15} />}
            </div>

          )
        }
      </div>
      <div className={blockContentClass}>
        {
          i.subgroup && _.map(i.subgroup, (child, index) => (
            <React.Fragment key={index}>
              <p className={subTitleContentClass}>
                {t(child.title)}
              </p>
              <div className={textContentClass}>
                <Childrens data={child.children} section={i.title} subgroup index={index}/>
              </div>
            </React.Fragment>
          ))
        }
        {
          i.children && <Childrens data={i.children} section={i.title} />
        }
      </div>
    </div>
  )
})

const AccordionChildTemplate = ({
  data, extradata, t, i18n,
}) => {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const [accordionItems, setAccordionItems] = useState([])
  useEffect(() => {
    const accordion = []
    data.forEach((i) => {
      accordion.push({
        title: i.title,
        children: [i.content],
        isOpenByDefault: i.isOpenByDefault,
        open: false,
      })
    })
    setAccordionItems(accordion)
  }, [data, url, i18n.language])

  function click(i) {
    // const newAccordion = accordionItems.slice()
    if (accordionItems[i].open) {
      const newAccordion = accordionItems.map((accordionItem) => ({
        ...accordionItem,
        open: false,
      }))
      setAccordionItems(newAccordion)
    } else {
      const newAccordion = accordionItems.map((accordionItem) => ({
        ...accordionItem,
        open: !!accordionItem[i],
      }))
      newAccordion[i].open = !newAccordion[i].open
      setAccordionItems(newAccordion)
    }
  }

  return <div className="accordion-templates-child">{sections(accordionItems, click, t)}</div>
}

export default AccordionChildTemplate
