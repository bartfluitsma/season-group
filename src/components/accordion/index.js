/* eslint-disable no-confusing-arrow */
import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import DropdownArrow from '../../assets/icons/dropdwon-arrow.svg'
import './accordion-style.scss'

const sections = (accordionItems, click, t) => _.map(accordionItems, (i, idx) => {
  const arrowClass = classNames({
    accordion__arrow: true,
    accordion__arrow__active: i.isOpenByDefault ? true : i.open,
  })

  const blockContentClass = classNames({
    accordion__content: true,
    accordion__content__active: i.isOpenByDefault ? true : i.open,
  })

  const textContentClass = classNames({
    accordion__content__text: true,
    accordion__content__text__active: i.isOpenByDefault ? true : i.open,
  })

  const subTitleContentClass = classNames({
    accordion__content__subtitle: true,
    accordion__content__subtitle__active: i.isOpenByDefault ? true : i.open,
  })

  const Childrens = ({
    data, section, subgroup, index,
  }) => (
    _.map(data, (child, idx) => {
      const text = subgroup
        ? t(`footer.${section}.subgroup.${[index]}.children.${child.title}`)
        : t(`footer.${section}.children.${child.title}`)
      return (
        !_.isEmpty(child.src) ? (
          <Link to={child.src} key={idx}>
            <div className={textContentClass}>{text || t(child.title)}</div>
          </Link>

        ) : (
          <p className={subTitleContentClass} key={idx}>
            {text}
          </p>
        )
      )
    })
  )

  if (accordionItems.length === 0) return null
  return (
    <div className="accordion__container" key={i.title + idx}>
      <div className="accordion__section">
        <Link to={i.src}>
          <p className="accordion__section__title">
            {t(`footer.${i.title}.title`)}
          </p>
        </Link>
        {
          !i.isOpenByDefault && (
            <div className={arrowClass}
              onClick={() => click(accordionItems.indexOf(i))}
              isOpen={i.open}
            >
              <DropdownArrow width={30} />
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

const Accordion = ({
  data, extradata, t, i18n,
}) => {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  const [accordionItems, setAccordionItems] = useState([])
  useEffect(() => {
    const accordion = []
    data.forEach((i) => {
      accordion.push({
        title: i.title,
        input: !_.isObject(i) ? i.title : '',
        src: i.src,
        children: i.children,
        subgroup: i.subgroup,
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

  return <div className="accordion">{sections(accordionItems, click, t)}</div>
}

export default Accordion
