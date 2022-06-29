import _ from 'lodash'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import './home-styles.scss'
import {
  Cta,
  CarouselCards,
  SliderMobile,
  CardWithPicture,
  CardProduct,
} from '../../components'
import {
  OurApproach,
  Testimonials,
  BlockLinks,
  OurPartners,
  AboutUs,
  HeroImage,
} from './components'
import {
  homeMatterData,
  homeProductData,
  dataCarProduct,
} from '../../data'

const HomeView = () => {
  const breakpoints = useBreakpoint()
  const { t, i18n } = useTranslation()
  return (
    <div className="cointainer-fluid home__container">
      <HeroImage t={t} />
      {!breakpoints.sm && <BlockLinks
        data={homeProductData }
        grayBg={true}
      />}
      {breakpoints.sm && (
        <SliderMobile
          tag={homeProductData.tag}
          title={homeProductData.title}
          totalItems={homeProductData.list.length}
        >
          { _.map(homeProductData.list, (item, idx) => (
            <div
              key={item.title}
              className="home__sliderOurMatter">
              <CardWithPicture
                // pictureDisplace
                data={item}
                i18n={i18n}
              />
            </div>
          ))}

        </SliderMobile>
      )}
      <CarouselCards
        data={dataCarProduct}
        inner={CardProduct}
        tag="FEATURED PRODUCTS & PROMOTIONS" />
      <BlockLinks
        data={homeMatterData}
        roundPicture
        titleDown
      />
      <Testimonials />
      <OurApproach t={t} />
      <OurPartners t={t}/>
      <AboutUs t={t}/>

      <div className="container-xxl p-0">
        <Cta />
      </div>
    </div>
  )
}

export default HomeView
