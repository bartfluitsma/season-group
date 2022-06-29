import React from 'react'
import { CarouselCards, CardWithPicture } from '../../../../components'
import './blog-carousel-style.scss'

const BlogCarousel = () => {
  const fakeNews = [
    {
      name: 'Feugiat eu platea suscipit vitae auctor',
      slug: 'feugiat-eu-platea-suscipit-vitae-auctor',
      excerpt: 'Feugiat eu platea suscipit vitae auctor Feugiat eu platea suscipit vitae auctor',
      featured_image: '/news/stephen-leonardi-NH-vr7Eivu0-unsplash.jpg',
      created_at: '13 June 2022, 3:45AM',
    },
    {
      name: 'Habitasse finibus dictum himenaeos leo platea ligul',
      slug: 'habitasse-finibus-dictum-himenaeos-leo-platea-ligul',
      excerpt: 'Habitasse finibus dictum himenaeos leo platea ligul Habitasse finibus dictum himenaeos leo platea ligul',
      featured_image: '/news/stephen-leonardi-NH-vr7Eivu0-unsplash.jpg',
      created_at: '13 June 2022, 3:44AM',
    },
    {
      name: 'Habitasse finibus dictum himenaeos leo platea ligul',
      slug: 'habitasse-finibus-dictum-himenaeos-leo-platea-ligul',
      excerpt: 'Habitasse finibus dictum himenaeos leo platea ligul Habitasse finibus dictum himenaeos leo platea ligul',
      featured_image: '/news/stephen-leonardi-NH-vr7Eivu0-unsplash.jpg',
      created_at: '13 June 2022, 3:44AM',
    },
    {
      name: 'Feugiat eu platea suscipit vitae auctor',
      slug: 'feugiat-eu-platea-suscipit-vitae-auctor',
      excerpt: 'Feugiat eu platea suscipit vitae auctor Feugiat eu platea suscipit vitae auctor',
      featured_image: '/news/stephen-leonardi-NH-vr7Eivu0-unsplash.jpg',
      created_at: '13 June 2022, 3:45AM',
    },
    {
      name: 'Habitasse finibus dictum himenaeos leo platea ligul',
      slug: 'habitasse-finibus-dictum-himenaeos-leo-platea-ligul',
      excerpt: 'Habitasse finibus dictum himenaeos leo platea ligul Habitasse finibus dictum himenaeos leo platea ligul',
      featured_image: '/news/stephen-leonardi-NH-vr7Eivu0-unsplash.jpg',
      created_at: '13 June 2022, 3:44AM',
    },
    {
      name: 'Habitasse finibus dictum himenaeos leo platea ligul',
      slug: 'habitasse-finibus-dictum-himenaeos-leo-platea-ligul',
      excerpt: 'Habitasse finibus dictum himenaeos leo platea ligul Habitasse finibus dictum himenaeos leo platea ligul',
      featured_image: '/news/stephen-leonardi-NH-vr7Eivu0-unsplash.jpg',
      created_at: '13 June 2022, 3:44AM',
    },
  ]
  return (
    <div className="container-xxl experienceBlog__container">

      <CarouselCards
        data={fakeNews}
        tag="Featured blogs"
        parentLink="experience"
        inner={CardWithPicture}
      />
    </div>

  )
}

export default BlogCarousel
