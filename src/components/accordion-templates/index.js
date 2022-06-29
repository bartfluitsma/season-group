import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import Accordion from '../accordion-child-template'
import MinusIcon from '../../assets/icons/pacificcross_icons_minus.svg'
import PlusIcon from '../../assets/icons/pacificcross_icons_plus.svg'
import './accordion-templates-styles.scss'

const sections = (accordionItems, click, t, i18n) => _.map(accordionItems, (i, idx) => {
  const arrowClass = classNames({
    accordion__templates__arrow: true,
    accordion__templates__arrow__active: i.isOpenByDefault ? true : i.open,
  })

  const blockContentClass = classNames({
    accordion__templates__content: true,
    accordion__templates__content__active: i.isOpenByDefault ? true : i.open,
  })

  const subTitleContentClass = classNames({
    accordion__templates__content__subtitle: true,
    accordion__templates__content__subtitle__active: i.isOpenByDefault ? true : i.open,
  })
  const sectionContentClass = classNames({
    accordion__templates__section: true,
    accordion__templates__section__first: idx === 0,
    accordion__templates__section__last: idx === accordionItems.length - 1,
  })

  const Childrens = ({
    data,
  }) => (
    _.map(data, (child, index) => {
      const text = child.title
      return (

        <p className={subTitleContentClass} key={index}>
          {text}
        </p>

      )
    })
  )

  if (accordionItems.length === 0) return null
  return (
    <div className="accordion__templates__container" key={i.title + idx}>
      <div className={sectionContentClass}>
        <Link to={i.src}>
          <p className="accordion__templates__section__title">
            {i.title}
          </p>
        </Link>
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
          i.children && i.open && (
            <Accordion
              t={t}
              i18n={i18n}
              data={i.children}
              section={i.title}
            />
          )
        }
      </div>
    </div>
  )
})

const AccordionTemplates = ({
  t,
  data,
  i18n,
}) => {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const [accordionItems, setAccordionItems] = useState([])
  useEffect(() => {
    const accordion = []
    data.forEach((i) => {
      accordion.push({
        title: i.title,
        children: i.children,
        isOpenByDefault: i.isOpenByDefault,
        open: i.open || false,
      })
    })
    setAccordionItems(accordion)
  }, [data, url, i18n.language])

  function click(i) {
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

  return (
    <div className="accordion-templates">{sections(accordionItems, click, t, i18n)}</div>
  )
}

export default AccordionTemplates
