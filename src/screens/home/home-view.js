import _ from 'lodash'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { Seo, Spinner } from '../../components'
import './home-styles.scss'
import BannerCTA from '../../components/banner-CTA'
import NumbersWhy from './components/numbers-why'
import HeroHomePage from './components/hero'
import TitleTextBlock from '../../components/title-text-block'
import WhyPartner from './components/why-partner'
import WhatWeOffer from './components/what-we-offer'
import IndustriesHome from './components/industries'
import Tagline from '../../components/tagline'
import Carousel from '../../components/carousel'
import ClientsCarousel from '../../components/carousel-clients'

const HomeView = ({ data, loading }) => {
  const breakpoints = useBreakpoint()
  const { t, i18n } = useTranslation()

  if (loading) {
    return <Spinner loading={loading} />
  }

  console.log('Data from view, data:', data)
  // data.map((layout) => layout.acf_fc_layout)

  return (
    <div className="home__container">
      <Seo title="Season Group: Home" />

      {/* Hero component */}
      <HeroHomePage />

      {/* block; tagline, title, text */}

      <div>
        {_.map(data, (layouts, idx) => {
          let layout
          switch (true) {
            // Our mission
            case layouts.acf_fc_layout === 'two_column_text':
              layout = <div key={idx}>
                <TitleTextBlock text={t('tagline.our-mission')} descr={layouts.description}>
                  <Trans i18nKey='home.our-mission-title'>
                    Improve world&apos;s living standard through <span className='title-color'>{{ innovative: 'innovative' }}</span> product development.
                  </Trans>
                </TitleTextBlock></div>
              break

            // numbers why
            case layouts.acf_fc_layout === 'numbers':
              layout = <div className='home__numbers'>
                {layouts.list.map((number, i) => <NumbersWhy key={i} number={number.number} descr={number.description} />)}
              </div>
              break

            // why partner with us
            case layouts.acf_fc_layout === 'image_numbered_blocks':
              layout = <div className='home__why-partner'>
                <WhyPartner key={idx} data={layouts.list} />
              </div>
              break

            // our services; multiple components switching layout right/left
            case layouts.acf_fc_layout === 'info_blocks_list':
              layout = <div className='home__whatWeOfferContainer'><div className='home__whatWeOfferDots'></div><WhatWeOffer data={layouts} /></div>
              break

            // industries list; do we take it in like this or via industries page?
            case layouts.acf_fc_layout === 'industries_list':
              layout = <div className='home__industriesContainer'>
                <div className='home__whatWeOfferContainer'><div className='home__industriesDots'></div>
                  <Tagline text={t('tagline.industries')} />
                  <div className="largeTitle">
                    <Trans i18nKey='home.who-we-serve'>
                    Who we <span className='title-color'>{{ serve: 'serve' }}</span>
                    </Trans>
                  </div>
                  <div className="home__industriesSubcontainer">
                    {layouts.list.map((industries, i) => <IndustriesHome key={i} title={industries.title} />)}
                  </div>
                </div>
              </div>
              break

            // our work
            case layouts.acf_fc_layout === 'case_studies_list':
              layout = <Carousel data={layouts.list} />
              break

            // clients
            case layouts.acf_fc_layout === 'clients':
              layout = <ClientsCarousel data={layouts.list} />
              break

            default:
              break
          }
          return layout
        })}
      </div>

      <BannerCTA />
    </div>
  )
}

export default HomeView
