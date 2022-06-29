import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  Cta,
  FilterButtons,
  ButtonSlider,
  CardProduct,
  CardWithPicture,
  ButtonBar,
  TableProduct,
} from '../components'
import urlBackground from '../assets/images/tmp/pacificcross_products_01.jpeg'
import urlNewsFake from '../assets/images/tmp/gettyimages-1270904789-2048x2048.jpeg'

const ComponentTest = () => {
  const { t, i18n } = useTranslation()
  const fakeNews = {
    tag: 'Health',
    img: urlNewsFake,
    date: '17 january 2022',
    title: 'Triple feat: Pacific Cross receives Golden Arrow Award for 2020 Performance',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    url: '/',
  }
  const array = [
    {
      id: 1,
      name: 'Luzon',
      activeClass: 'filter-active',
      translateValue: '0',
    },
    {
      id: 2,
      name: 'Visayas',
      activeClass: '',
      translateValue: '100%',

    },
    {
      id: 3,
      name: 'Mindano',
      activeClass: '',
      translateValue: '200%',

    }]

  const arrayLinks = [
    {
      url: '/',
      name: 'test',
    },
    {
      url: '/',
      name: 'test',
    },
    {
      url: '/',
      name: 'test',
    },
  ]
  return (
    <div className="container-fluid p-0 p-md-4">
      <div className="container-xxl p-0">
        <Cta/>
        <div style={{ padding: '30px 0' }}>
          <ButtonBar
            link="/"
            title="Living life with peace of mind"
          />
        </div>
        <div>
          <TableProduct />
        </div>
        <div>
          <FilterButtons data={array} />
        </div>
        <div>
          <ButtonSlider />
          <ButtonSlider left/>

        </div>
        <div className="row">
          <div className="col col-sm-6 col-md-4">
            <CardProduct
              link="/"
              promotion="promotion"
              nameProduct="Blue Royale"
              category="Individual and families"
              conditions="Offers protection for the young age market aiming to have a well balanced lifestyle with coverage up to PHP 250,000."
              description="For people with only government insurance, basic health care and travellers"
              urlBackground={urlBackground}
            />
          </div>
          <div className="col col-sm-6 col-md-4">
            <CardProduct
              link="/"
              promotion="promotion"
              nameProduct="Blue Royale"
              category="Individual and families"
              conditions="Offers protection for the young age market aiming to have a well balanced lifestyle with coverage up to PHP 250,000."
              description="For people with only government insurance, basic health care and travellers"
              urlBackground={urlBackground}
            />
          </div>
          <div className="col col-sm-6 col-md-4">
            <CardProduct
              link="/"
              promotion="promotion"
              nameProduct="Blue Royale"
              category="Individual and families"
              conditions="Offers protection for the young age market aiming to have a well balanced lifestyle with coverage up to PHP 250,000."
              urlBackground={urlBackground}
              listLinks={arrayLinks}
            />
          </div>

        </div>
        <div className="row">
          <div className="col col-sm-6 col-md-4">
            <CardWithPicture data={fakeNews} i18n={i18n}/>
          </div>

        </div>
      </div>
    </div>

  )
}

export default ComponentTest
