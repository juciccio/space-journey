import { DefaultSeoProps } from 'next-seo';

const seo:DefaultSeoProps = {
  title: 'Space Journey',
  description: 'A little experiment with ThreeJS into the galaxy.',
  canonical: 'https://spacejourney.vercel.app/',
  openGraph: {
    url: 'https://spacejourney.vercel.app/',
    title: 'Space Journey',
    description: 'A little experiment with ThreeJS into the galaxy.',
    type: 'website',
    site_name: 'SpaceJourney',
    images: [
      {
        url: '/images/share.png'
      }
    ]
  },
  twitter: {
    handle: '@juciccio',
    site: '@juciccio',
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [
    {
      property: 'mobile-web-app-capable',
      content: 'yes'
    },
    {
      property: 'apple-mobile-web-app-title',
      content: 'Chispa Lab'
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge; chrome=1'
    },
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/images/icon_96x96.png'
    },
    {
      rel: 'apple-touch-icon',
      href: '/images/icon_180x180.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    }
  ]
};

export default seo;
