import React from 'react'
import { useTranslation } from 'react-i18next'
import { SelectComponent } from '../../components'
import IconDownload from '../../assets/icons/pacificcross_icons_download.svg'
import SearchIcon from '../../assets/icons/pacificcross_icons_search.svg'
import './find-hospital-styles.scss'
import { fakeHospital } from '../../data'

const FindHospitalView = () => {
  const { t, i18n } = useTranslation()
  const column = Object.keys(fakeHospital[0])
  // get table heading data
  const ThData = () => column.map((data) => (
    <th className="findHospital__table__head" key={data}>
      {t(`findHospital.table.${data}`)}
    </th>
  ))
  // get table row data
  const tdData = () => fakeHospital.map((data, idx) => (
    <tr key={idx}>
      {column.map((v) => (
        <td key={data[v]}>{data[v]}</td>
      ))}
    </tr>
  ))

  const optionsCity = [
    { value: 'bauleleng', label: 'Bauleleng' },
    { value: 'badung', label: 'Badung' },
    { value: 'depensar', label: 'Depensar' },
  ]
  return (
    <div className="container-fluid">
      <div className="container-xxl">
        <div className="findHospital__head">
          <h1 className="page-title">{t('findHospital.title')}</h1>
        </div>
        <div className="findHospital__filters ">
          <div className="row">
            <div className="col-12 col-sm-3 findHospital__search">
              <SelectComponent
                label={t('findHospital.filter.city')}
                placeholder={t('findHospital.cityPlaceholder')}
                options={optionsCity}
              />
            </div>
            <div className="col-12 col-sm-3 findHospital__search">
              <SelectComponent
                label={t('findHospital.filter.provaiderType')}
                placeholder={t('findHospital.provaiderTypePlaceholder')}
                options={optionsCity}
              />
            </div>
            <div className="col-12 col-sm-3 findHospital__download">
              <p className="findHospital__download__text">
                <IconDownload width="20" />
                {t('findHospital.download')}
              </p>
            </div>
            <div className="col-12 col-sm-3 findHospital__search">
              <div className="findHospital__inputSearch">
                <SearchIcon width="20" fill="#DEDEDE" />
                <input placeholder="Search"/>
              </div>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table findHospital__table">
            <thead>
              <tr>{ThData()}</tr>
            </thead>
            <tbody>{tdData()}</tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default FindHospitalView
