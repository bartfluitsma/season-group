import image1 from '../assets/images/tmp/gettyimages-1031430214-2048x2048.jpeg'
import image2 from '../assets/images/tmp/gettyimages-1014228976-2048x2048.jpeg'
import image3 from '../assets/images/tmp/gettyimages-102284192-2048x2048.jpeg'
import image4 from '../assets/images/tmp/gettyimages-141655160-2048x2048.jpeg'
import image5 from '../assets/images/tmp/gettyimages-521981107-2048x2048.jpeg'
import image6 from '../assets/images/tmp/gettyimages-800945042-2048x2048.jpeg'

export const menuData = [
  {
    title: 'our-products',
    slug: 'our-products',
    id: 'our-products',
    children: [],
  },
  {
    title: 'matter',
    slug: 'you-matter',
    id: 'you-matter',
    children: [
      {
        title: 'experience',
        slug: '',
        id: 'experience',
        children: [{}],
      },
      {
        title: 'knowledge',
        slug: 'knowledge',
        id: 'knowledge',
        subgroup: [{
          title: 'learning-resources',
          children: [
            {
              title: 'key',
              slug: 'key-terms',
            },
            {
              title: 'insurance',
              slug: 'insurance-basics',
            },
          ],
        }],
      }],
  },
  {
    title: 'claims',
    slug: 'claims-support',
    id: 'claims-support',
    children: [
      {
        title: 'how-claim',
        slug: 'how-to-claim',
        id: 'how-to-claim',
        subgroup: [{
          title: 'categories',
          children: [
            {
              title: 'medical-plans',
              slug: 'medical-plans',
            },
            {
              title: 'travel-plans',
              slug: 'insurance-basics',
            },
            {
              title: 'personal-accident',
              slug: 'personal-accident',
            },
            {
              title: 'tpa-other-services',
              slug: 'tpa-other-services',
            },
          ],
        }],
      },
      {
        title: 'how-to-avail',
        slug: 'how-to-avail',
        id: 'how-to-avail',
        children: [],
      },
      {
        title: 'support-services',
        slug: 'support-services',
        id: 'support-services',
        children: [
          {
            title: 'download-centre',
            slug: 'download-centre',
          },
          {
            title: 'find-hospitals',
            slug: 'find-hospitals',
          },
          {
            title: 'faq',
            slug: 'faq',
          },
          {
            title: 'key-information',
            slug: 'key-information',
          },
          {
            title: 'emergency-assistance',
            slug: 'emergency-assistance',
          },
          {
            title: 'teleheath',
            slug: 'teleheath',
          },
        ],
      },
      {
        title: 'portal-apps',
        slug: 'portal-apps',
        id: 'portal-apps',
        subgroup: [
          {
            title: 'portals',
            children: [
              {
                title: 'sassi',
                slug: 'sassi',
                url: 'https://www.google.com/',
              },
              {
                title: 'client-portal',
                slug: 'client-portal',
                url: 'https://www.google.com/',
              },
              {
                title: 'medical-provider',
                slug: 'medical-provider',
                url: 'https://www.google.com/',
              },
              {
                title: 'personal-health-record',
                slug: 'personal-health-record',
                url: 'https://www.google.com/',
              },
            ],
          },
          {
            title: 'apps',
            children: [
              {
                title: 'heath-insurace-app-title',
                url: [
                  {
                    ios: 'https://www.google.com/',
                  },
                  {
                    andoir: 'https://www.google.com/',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'about-us',
    slug: 'about-us',
    id: 'about-us',
    children: [
      {
        title: 'pacific-cross-country',
        slug: 'pacific-cross-country',
        id: 'pacific-cross-country',
        subgroup: [{
          title: 'about-pacific-cross-country',
          children: [
            {
              title: 'about-us',
              slug: 'about-us',
            },
            {
              title: 'customer-loyalty-program',
              slug: 'customer-loyalty-program',
            },
            {
              title: 'blogs',
              slug: 'blogs',
            },
            {
              title: 'news-events',
              slug: 'news-events',
            },
            {
              title: 'careers',
              slug: 'careers',
            },
            {
              title: 'corporate-governace',
              slug: 'corporate-governace',
            },
            {
              title: 'data-privacy',
              slug: 'data-privacy',
            },
          ],
        }],
      },
      {
        title: 'pacific-cross',
        slug: 'pacific-cross',
        id: 'pacific-cross',
        subgroup: [{
          title: 'about-pacific-cross',
          children: [
            {
              title: 'about-us',
              slug: 'about-us',
            },
          ],
        }],
      },
    ],
  },
  {
    title: 'contact',
    slug: 'contact',
    id: 'contact',
    children: [
      {
        title: 'contact-with-us',
        slug: '',
        id: 'contact-with-us',
        children: [
          {
            title: 'contact-form',
            slug: 'contact-form',
          },
          {
            title: 'get-quote',
            slug: 'get-quote',
          },
          {
            title: 'our-offices',
            slug: 'our-offices',
          },
        ],
      },
    ],
  },

]

export const menuFooter = [
  [
    {
      title: 'tpa',
      slug: 'tpa',
      children: [
        {
          title: 'healthline',
          slug: 'healthline',
        },
      ],
    },
    {
      title: 'other-products',
      slug: 'other-products',
      subgroup: [{
        title: 'prepaid-insurance-plans',
        children: [
          {
            title: 'select-er',
            slug: 'select-er',
          },
          {
            title: 'select-medsecure',
            slug: 'select-medsecure',
          },
          {
            title: 'select-dengueguard',
            slug: 'select-dengueguard',
          },
        ],
      }],
    },
    {
      title: 'how-claim',
      slug: 'how-to-claim',
      subgroup: [{
        title: 'categories',
        children: [
          {
            title: 'medical-plans',
            slug: 'medical-plans',
          },
          {
            title: 'travel-plans',
            slug: 'insurance-basics',
          },
          {
            title: 'personal-accident',
            slug: 'personal-accident',
          },
          {
            title: 'tpa-other-services',
            slug: 'tpa-other-services',
          },
        ],
      }],
    }],
  [
    {
      title: 'tpa',
      slug: 'tpa',
      children: [
        {
          title: 'healthline',
          slug: 'healthline',
        },
      ],
    },
    {
      title: 'other-products',
      slug: 'other-products',
      subgroup: [{
        title: 'prepaid-insurance-plans',
        children: [
          {
            title: 'select-er',
            slug: 'select-er',
          },
          {
            title: 'select-medsecure',
            slug: 'select-medsecure',
          },
          {
            title: 'select-dengueguard',
            slug: 'select-dengueguard',
          },
        ],
      }],
    },
    {
      title: 'how-claim',
      slug: 'how-to-claim',
      subgroup: [{
        title: 'categories',
        children: [
          {
            title: 'medical-plans',
            slug: 'medical-plans',
          },
          {
            title: 'travel-plans',
            slug: 'insurance-basics',
          },
          {
            title: 'personal-accident',
            slug: 'personal-accident',
          },
          {
            title: 'tpa-other-services',
            slug: 'tpa-other-services',
          },
        ],
      }],
    }],
  [
    {
      title: 'support-services',
      slug: 'support-services',
      children: [
        {
          title: 'download-centre',
          slug: 'download-centre',
        },
        {
          title: 'find-hospitals',
          slug: 'find-hospitals',
        },
        {
          title: 'faq',
          slug: 'faq',
        },
        {
          title: 'key-information',
          slug: 'key-information',
        },
        {
          title: 'emergency-assistance',
          slug: 'emergency-assistance',
        },
        {
          title: 'teleheath',
          slug: 'teleheath',
        },
      ],
    },
    {
      title: 'portals',
      children: [
        {
          title: 'sassi',
          slug: 'sassi',
          url: 'https://www.google.com/',
        },
        {
          title: 'client-portal',
          slug: 'client-portal',
          url: 'https://www.google.com/',
        },
        {
          title: 'medical-provider',
          slug: 'medical-provider',
          url: 'https://www.google.com/',
        },
        {
          title: 'personal-health-record',
          slug: 'personal-health-record',
          url: 'https://www.google.com/',
        },
      ],
    },
    {
      title: 'about-us',
      slug: 'about-us',
      subgroup: [{
        title: 'pacific-cross-country',
        children: [
          {
            title: 'about-us',
            slug: 'about-us',
          },
          {
            title: 'customer-loyalty-program',
            slug: 'customer-loyalty-program',
          },
          {
            title: 'blogs',
            slug: 'blogs',
          },
          {
            title: 'news-events',
            slug: 'news-events',
          },
          {
            title: 'careers',
            slug: 'careers',
          },
          {
            title: 'corporate-governace',
            slug: 'corporate-governace',
          },
          {
            title: 'data-privacy',
            slug: 'data-privacy',
          },
        ],
      },
      {
        title: 'pacific-cross',
        children: [
          {
            title: 'about-us',
            slug: 'about-us',
          },
        ],
      }],
    },

  ],
]

export const menuMobileFooter = [

  {
    title: 'tpa',
    slug: 'tpa',
    children: [
      {
        title: 'healthline',
        slug: 'healthline',
      },
    ],
  },
  {
    title: 'other-products',
    slug: 'other-products',
    subgroup: [{
      title: 'prepaid-insurance-plans',
      children: [
        {
          title: 'select-er',
          slug: 'select-er',
        },
        {
          title: 'select-medsecure',
          slug: 'select-medsecure',
        },
        {
          title: 'select-dengueguard',
          slug: 'select-dengueguard',
        },
      ],
    }],
  },
  {
    title: 'how-claim',
    slug: 'how-to-claim',
    subgroup: [{
      title: 'categories',
      children: [
        {
          title: 'medical-plans',
          slug: 'medical-plans',
        },
        {
          title: 'travel-plans',
          slug: 'insurance-basics',
        },
        {
          title: 'personal-accident',
          slug: 'personal-accident',
        },
        {
          title: 'tpa-other-services',
          slug: 'tpa-other-services',
        },
      ],
    }],
  },
  {
    title: 'tpa',
    slug: 'tpa',
    children: [
      {
        title: 'healthline',
        slug: 'healthline',
      },
    ],
  },
  {
    title: 'other-products',
    slug: 'other-products',
    subgroup: [{
      title: 'prepaid-insurance-plans',
      children: [
        {
          title: 'select-er',
          slug: 'select-er',
        },
        {
          title: 'select-medsecure',
          slug: 'select-medsecure',
        },
        {
          title: 'select-dengueguard',
          slug: 'select-dengueguard',
        },
      ],
    }],
  },
  {
    title: 'how-claim',
    slug: 'how-to-claim',
    subgroup: [{
      title: 'categories',
      children: [
        {
          title: 'medical-plans',
          slug: 'medical-plans',
        },
        {
          title: 'travel-plans',
          slug: 'insurance-basics',
        },
        {
          title: 'personal-accident',
          slug: 'personal-accident',
        },
        {
          title: 'tpa-other-services',
          slug: 'tpa-other-services',
        },
      ],
    }],
  },
  {
    title: 'support-services',
    slug: 'support-services',
    children: [
      {
        title: 'download-centre',
        slug: 'download-centre',
      },
      {
        title: 'find-hospitals',
        slug: 'find-hospitals',
      },
      {
        title: 'faq',
        slug: 'faq',
      },
      {
        title: 'key-information',
        slug: 'key-information',
      },
      {
        title: 'emergency-assistance',
        slug: 'emergency-assistance',
      },
      {
        title: 'teleheath',
        slug: 'teleheath',
      },
    ],
  },
  {
    title: 'portals',
    children: [
      {
        title: 'sassi',
        slug: 'sassi',
        url: 'https://www.google.com/',
      },
      {
        title: 'client-portal',
        slug: 'client-portal',
        url: 'https://www.google.com/',
      },
      {
        title: 'medical-provider',
        slug: 'medical-provider',
        url: 'https://www.google.com/',
      },
      {
        title: 'personal-health-record',
        slug: 'personal-health-record',
        url: 'https://www.google.com/',
      },
    ],
  },
  {
    title: 'about-us',
    slug: 'about-us',
    subgroup: [{
      title: 'pacific-cross-country',
      children: [
        {
          title: 'about-us',
          slug: 'about-us',
        },
        {
          title: 'customer-loyalty-program',
          slug: 'customer-loyalty-program',
        },
        {
          title: 'blogs',
          slug: 'blogs',
        },
        {
          title: 'news-events',
          slug: 'news-events',
        },
        {
          title: 'careers',
          slug: 'careers',
        },
        {
          title: 'corporate-governace',
          slug: 'corporate-governace',
        },
        {
          title: 'data-privacy',
          slug: 'data-privacy',
        },
      ],
    },
    {
      title: 'pacific-cross',
      children: [
        {
          title: 'about-us',
          slug: 'about-us',
        },
      ],
    }],
  },

]

export const homeMatterData = {
  tag: 'you matter',
  title: 'Your next move towards a better future.',
  list: [
    {
      title: 'Leading a healthier life',
      urlImage: image1,
    },
    {
      title: 'Preparing for medical expenses',
      urlImage: image2,

    },
    {
      title: 'Living life with peace of mind',
      urlImage: image3,

    },
    {
      title: 'Lessen the impact of serious illnesses',
      urlImage: image4,

    },
    {
      title: 'Protect what is most precious',
      urlImage: image5,

    }, {
      title: 'Worry-free travels',
      urlImage: image6,
    },

  ],
}

export const homeProductData = {
  tag: 'our products',
  title: 'We take care of your wellness with every small step.',
  list: [
    {
      title: 'Medical Plans',
      urlImage: image1,
      description: 'Many people have the notion that a healthy life is equivalent to luck, balanced diet and exercise. We believe that everyone can achieve this.',
    },
    {
      title: 'Travel Plans',
      urlImage: image2,
      description: 'Many people have the notion that a healthy life is equivalent to luck, balanced diet and exercise. We believe that everyone can achieve this.',
    },
    {
      title: 'Personal accident',
      urlImage: image3,
      description: 'Many people have the notion that a healthy life is equivalent to luck, balanced diet and exercise. We believe that everyone can achieve this.',
    },
    {
      title: 'TPA and Other Services',
      urlImage: image4,
      description: 'Many people have the notion that a healthy life is equivalent to luck, balanced diet and exercise. We believe that everyone can achieve this.',
    },
    {
      title: 'Other Products',
      urlImage: image5,
      description: 'Many people have the notion that a healthy life is equivalent to luck, balanced diet and exercise. We believe that everyone can achieve this.',
    },
  ],
}

export const faqData = [
  {
    title: 'tpa',
    slug: 'tpa',
    children: [
      {
        title: 'healthline',
        slug: 'healthline',
      },
    ],
  },
  {
    title: 'tpa',
    slug: 'tpa',
    children: [
      {
        title: 'healthline',
        slug: 'healthline',
      },
    ],
  },
  {
    title: 'tpa',
    slug: 'tpa',
    children: [
      {
        title: 'healthline',
        slug: 'healthline',
      },
    ],
  },
]

export const fakeFAQMobile = [
  {
    title: 'Claims',
    open: false,
    children: [{
      title: 'Cursus suspendisse curabitur',
      content: 'Nullam metus lectus quis lectus ac wisi, et platea dictum quis ante, ducimus eget, nunc cum nisl non convallis vestibulum, fringilla penatibus. Tellus pede massa, nulla vehicula amet egestas nec, dolor scelerisque. ',
    },
    {
      title: 'Amet ipsum vestibulum dolor urna etiam mauris ac diam?',
      content: 'Nullam metus lectus quis lectus ac wisi, et platea dictum quis ante, ducimus eget, nunc cum nisl non convallis vestibulum, fringilla penatibus. Tellus pede massa, nulla vehicula amet egestas nec, dolor scelerisque. ',
    }],
  },
  {
    title: 'Policy Services',
    isOpenByDefault: false,
    children: [{
      title: 'Cursus suspendisse curabitur',
      content: 'Nullam metus lectus quis lectus ac wisi, et platea dictum quis ante, ducimus eget, nunc cum nisl non convallis vestibulum, fringilla penatibus. Tellus pede massa, nulla vehicula amet egestas nec, dolor scelerisque. ',
    },
    {
      title: 'Amet ipsum vestibulum dolor urna etiam mauris ac diam?',
      content: 'Nullam metus lectus quis lectus ac wisi, et platea dictum quis ante, ducimus eget, nunc cum nisl non convallis vestibulum, fringilla penatibus. Tellus pede massa, nulla vehicula amet egestas nec, dolor scelerisque. ',
    }],
  },
  {
    title: 'Premium Payments',
    isOpenByDefault: false,
    children: [{
      title: 'Cursus suspendisse curabitur',
      content: 'Nullam metus lectus quis lectus ac wisi, et platea dictum quis ante, ducimus eget, nunc cum nisl non convallis vestibulum, fringilla penatibus. Tellus pede massa, nulla vehicula amet egestas nec, dolor scelerisque. ',
    },
    {
      title: 'Amet ipsum vestibulum dolor urna etiam mauris ac diam?',
      content: 'Nullam metus lectus quis lectus ac wisi, et platea dictum quis ante, ducimus eget, nunc cum nisl non convallis vestibulum, fringilla penatibus. Tellus pede massa, nulla vehicula amet egestas nec, dolor scelerisque. ',
    }],
  },

]

export const fakeHospital = [{
  city: 'New York',
  provaiderType: 'Laboratory',
  provaiderName: 'Prodiga sinara',
  address: 'Jl. Pulau Kawe No.9b',
  phone: '123-456-2344',
  inPatient: 'yes',
  outPatient: 'no',
},
{
  city: 'New York',
  provaiderType: 'Laboratory',
  provaiderName: 'Prodiga sinara',
  address: 'Jl. Pulau Kawe No.9b',
  phone: '123-456-2344',
  inPatient: 'yes',
  outPatient: 'no',
},
{
  city: 'New York',
  provaiderType: 'Laboratory',
  provaiderName: 'Prodiga sinara',
  address: 'Jl. Pulau Kawe No.9b',
  phone: '123-456-2344',
  inPatient: 'yes',
  outPatient: 'no',
},
{
  city: 'New York',
  provaiderType: 'Laboratory',
  provaiderName: 'Prodiga sinara',
  address: 'Jl. Pulau Kawe No.9b',
  phone: '123-456-2344',
  inPatient: 'yes',
  outPatient: 'no',
},
{
  city: 'New York',
  provaiderType: 'Laboratory',
  provaiderName: 'Prodiga sinara',
  address: 'Jl. Pulau Kawe No.9b',
  phone: '123-456-2344',
  inPatient: 'yes',
  outPatient: 'no',
},
{
  city: 'New York',
  provaiderType: 'Laboratory',
  provaiderName: 'Prodiga sinara',
  address: 'Jl. Pulau Kawe No.9b',
  phone: '123-456-2344',
  inPatient: 'yes',
  outPatient: 'no',
},
{
  city: 'New York',
  provaiderType: 'Laboratory',
  provaiderName: 'Prodiga sinara',
  address: 'Jl. Pulau Kawe No.9b',
  phone: '123-456-2344',
  inPatient: 'yes',
  outPatient: 'no',
},
]

export const dataCarProduct = [{
  id: 2,
  promotion: true,
  category: 'medical',
  name: 'Blue Royale (Dollar Plan)',
  slug: 'blue-royale-dollar-plan',
  brief: 'Offers protection for everyone wherever you are in the world with coverage up to USD 2,000,000.Tincidunt tortor aliquam nulla facilisi cras.',
  highlight: [{ highlight_text: 'All-inclusive core benefits with coverage for both your medical and travel insurance needs' }, { highlight_text: 'Worldwide care' }, { highlight_text: 'Maximum coverage of up to USD 2,000,000' }],
  banner_image: image6,
}, {
  id: 1,
  category: 'medical',
  name: 'Blue Royale Luxe',
  slug: 'blue-royale-dollar-plan',
  brief: 'Offers protection for everyone wherever you are in the world with coverage up to USD 2,000,000.Tincidunt tortor aliquam nulla facilisi cras.',
  highlight: [{ highlight_text: 'All-inclusive core benefits with coverage for both your medical and travel insurance needs' }, { highlight_text: 'Worldwide care' }, { highlight_text: 'Maximum coverage of up to USD 2,000,000' }],
  banner_image: image6,
},
{
  id: 3,
  category: 'medical',
  name: 'Blue Royale Minimun',
  slug: 'blue-royale-dollar-plan',
  brief: 'Offers protection for everyone wherever you are in the world with coverage up to USD 2,000,000.Tincidunt tortor aliquam nulla facilisi cras.',
  highlight: [{ highlight_text: 'All-inclusive core benefits with coverage for both your medical and travel insurance needs' }, { highlight_text: 'Worldwide care' }, { highlight_text: 'Maximum coverage of up to USD 2,000,000' }],
  banner_image: image6,
}, {
  id: 4,
  promotion: true,
  category: 'medical',
  name: 'Blue Royale (Dollar Plan)',
  slug: 'blue-royale-dollar-plan',
  brief: 'Offers protection for everyone wherever you are in the world with coverage up to USD 2,000,000.Tincidunt tortor aliquam nulla facilisi cras.',
  highlight: [{ highlight_text: 'All-inclusive core benefits with coverage for both your medical and travel insurance needs' }, { highlight_text: 'Worldwide care' }, { highlight_text: 'Maximum coverage of up to USD 2,000,000' }],
  banner_image: image6,
}, {
  id: 5,
  category: 'medical',
  name: 'Blue Royale Luxe',
  slug: 'blue-royale-dollar-plan',
  brief: 'Offers protection for everyone wherever you are in the world with coverage up to USD 2,000,000.Tincidunt tortor aliquam nulla facilisi cras.',
  highlight: [{ highlight_text: 'All-inclusive core benefits with coverage for both your medical and travel insurance needs' }, { highlight_text: 'Worldwide care' }, { highlight_text: 'Maximum coverage of up to USD 2,000,000' }],
  banner_image: image6,
},
{
  id: 6,
  category: 'medical',
  name: 'Blue Royale Minimun',
  slug: 'blue-royale-dollar-plan',
  brief: 'Offers protection for everyone wherever you are in the world with coverage up to USD 2,000,000.Tincidunt tortor aliquam nulla facilisi cras.',
  highlight: [{ highlight_text: 'All-inclusive core benefits with coverage for both your medical and travel insurance needs' }, { highlight_text: 'Worldwide care' }, { highlight_text: 'Maximum coverage of up to USD 2,000,000' }],
  banner_image: image6,
},
]
