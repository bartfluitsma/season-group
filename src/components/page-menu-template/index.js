import React from 'react'
import Accordion from '../accordion'
import './page-menu-template-styles.scss'
import MenuPageTemplate from '../menu-page-template'

const PageMenuTemplate = ({
  data,
  title,
  menu,
  t,
  i18n,
  html,
}) => (
  <div className="container-fluid">
    <div className="container-xxl">
      <div className="pageMenuTemplate__head">
        <h1 className="page-title">{title}</h1>
      </div>
      <div className="row">
        <div className="col-3">
          <MenuPageTemplate menu={menu}/>
        </div>
        <div className="col-9">
          {data
            ? <div className="pageMenuTemplate__content">
              <h2 className="pageMenuTemplate__title">Claims</h2>
              <Accordion
                t={t}
                i18n={i18n}
                data={data}/>

            </div>
            : <div
              className="rich-text"
              dangerouslySetInnerHTML={{
                __html: html,
              }} />

          }
        </div>
      </div>
    </div>
  </div>
)

export default PageMenuTemplate
