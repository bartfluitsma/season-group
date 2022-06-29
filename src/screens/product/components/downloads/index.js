import _ from 'lodash'
import React from 'react'
import './downloads.scss'
import { getUrlMedia } from '../../../../helpers'
import IconDownload from '../../../../assets/icons/pacificcross_icons_download.svg'

const Downloads = ({ t, id, data }) => {
  const fakeDownloads = [
    {
      name: 'Blue Royale',
      url: 'http://www.africau.edu/images/default/sample.pdf',
    },
    {
      name: 'Blue Royale Fact',
      url: 'http://www.africau.edu/images/default/sample.pdf',
    },
    {
      name: 'Malesuada pellentesque elit ',
      url: 'http://www.africau.edu/images/default/sample.pdf',
    },
  ]
  return (
    <div className="container-xxl p-0" id={id}>
      <div className="downloads__container">
        <div>
          <h2 className="page-subtitle">{t('product.downloads.title')}</h2>
        </div>
        <div className="downloads__list row">
          { _.map(fakeDownloads, (item) => (
            <a
              key={item.name}
              target="_blank"
              className="col-12 col-sm-4 downloads__item"
              href={item.file_path && getUrlMedia(item.file_path)} rel="noreferrer">
              <IconDownload width="20" />
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Downloads
