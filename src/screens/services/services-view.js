import _ from 'lodash'
import React from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { Seo, Spinner } from '../../components'
import './services-styles.scss'
import BannerCTA from '../../components/banner-CTA'
import Tagline from '../../components/tagline'
import SubServices from './components/sub-services'
import Carousel from '../../components/carousel'
import ShowcaseCard from '../../components/carousel/showcase-card'
import WaysHowCard from '../../components/carousel/ways-how-card'

const ServicesView = ({ data, loading }) => {
  const breakpoints = useBreakpoint()
  const { t, i18n } = useTranslation()

  if (loading) {
    return <Spinner loading={loading} />
  }

  return (
    <div className="services__container">
      <Seo title="Season Group: Services" />
      <div>
        {_.map(_.get(data, 'acf.rows'), (layouts, idx) => {
          let layout
          switch (true) {
            // Services
            case layouts.acf_fc_layout === 'hero_two_images_copy':
              layout = <div key={idx} className='services__servicesContainer'>
                <div className='services__servicesSubcontainer'>
                  <Tagline text={t('tagline.services')} />
                  <div className="largeTitle">
                    <h1 className="page-title">{t('services.design-and-engineering')}</h1>
                  </div>
                  <p className='servicesDescription'>{layouts.copy}</p>
                  <img className='firstImage' src={layouts.image_second.url} alt={layouts.image_second.alt} />
                </div>
                <img className='secondImage' src={layouts.image.url} alt={layouts.image.alt} />
              </div>
              break

            // sub services
            case layouts.acf_fc_layout === 'sub_services':
              layout = <div key={idx} className='services__subservicesContainer'>{layouts.list.map((subservice, i) => <SubServices key={i} title={subservice.title} text={subservice.content} link={subservice.slug} />)}
              </div>
              break

            // how we do it
            case layouts.acf_fc_layout === 'how_to_list':
              layout = <div key={idx} className='services__howToContainer'>
                <div className="carousel__tagline">
                  <h2>{t('services.how-we-do')}</h2>
                </div>
                <Carousel
                  arrows={true}
                  data={layouts.list}
                >
                  {layouts.list.map((work, i) => <div key={i}>
                    <WaysHowCard
                      title={work.title}
                      text={work.copy}
                      idx={i}
                      imgNumber='https://seasongr-1935.demosrv.dev/wp-content/uploads/2022/07/4.png'
                    />
                  </div>)}
                </Carousel>
              </div>
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

export default ServicesView
