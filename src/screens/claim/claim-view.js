import _ from 'lodash'
import React from 'react'
import IconArrowRight from '../../assets/icons/pacificcross_icons_arrow-right-02.svg'
import IconDownload from '../../assets/icons/pacificcross_icons_download.svg'

const ClaimsView = () => {
  const range = _.range(7)
  return (
    <div className="container-fluid">
      <div className="container-xxl">
        <div className="claim__head">
            breadcrumbs
          <h1 className="page-title">Blue Royale</h1>

        </div>
        <div className="claim__body">
          <div className="claim__body__procedures">
            <h2>Claiming Procedures</h2>
            {_.map(range, (itme, idx) => (
              <div key={idx} className="claim__card">
                <div>
                  <p>Step 1:</p>
                  <p>Description</p>
                </div>
                <IconArrowRight width="20" />

              </div>
            ))}
          </div>
          <div className="claim__body__forms">
            <h3></h3>
            <div className="claim__body__forms__list">
              {
                _.map(range, (item, idx) => (
                  <div key={idx} className="claim__dowloands">

                    <a href="./directory/yourfile.pdf" download>
                      <IconDownload width="15"/> 
                      <p>Hospital & Surgical Claim</p>
                    </a>

                  </div>
                ))
              }
            </div>
          </div>
          <div className="claim__body__richText">
            <h3>Supporting Document(s) Checklist</h3>
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{
                __html: `<h4>Basic Documents<h4>
                <p>1. Original payment receipt(s), including deposit receipt(s)</p>
                <p>2. Copy of statement(s) with breakdown of hospital charges, including daily fees, meals and package charges </p>`,
              }} />

          </div>
          <div className="claim__body__richText">
            <h3>Claims Submissiont</h3>
            <div
              className="rich-text"
              dangerouslySetInnerHTML={{
                __html: `
                <p>1. Original payment receipt(s), including deposit receipt(s)</p>
              `,
              }} />

          </div>
        </div>
      </div>
    </div>

  )
}

export default ClaimsView
