import { FaTwitter, FaFacebook, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Cytech Systems | Fleet Tracking, Fuel Monitoring & Security Solutions',
    description:
      'Cytech Systems delivers advanced GPS fleet tracking, fuel monitoring, video telematics, surveillance cameras, and auto care security services. Helping businesses and individuals monitor, manage, and protect their assets with innovative technology.',
    keywords: [
      'Fleet Tracking',
      'Vehicle GPS',
      'Fuel Monitoring',
      'Video Telematics',
      'Nanny Camera',
      'Spy Camera',
      'Farm Surveillance',
      'Auto Care Services',
      'Car Security Systems'
    ],
    author: 'Cytech Systems',
    openGraph: {
      title: 'Cytech Systems – Fleet, Fuel, Telematics & Security Solutions',
      description:
        'Empowering logistics, transport, and individuals with vehicle tracking, fuel monitoring, telematics, surveillance, and auto security services.',
      url: 'https://www.cytechsystems.com',
      type: 'website',
      images: [
        {
          url: 'https://www.cytechsystems.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Cytech Systems Solutions'
        }
      ]
    }
  },
  termsUrl: '/terms',
  privacyUrl: '/privacy',
  header: {
    links: [
      { label: 'Home', href: '/' },
      {
        label: 'About',
        children: [
          { label: 'Company Overview', href: '/about#overview' },
          { label: 'Our Team', href: '/about#team' },
          { label: 'Careers', href: '/about#careers' }
        ]
      },
      {
        label: 'Services',
        children: [
          { label: 'Fleet & Vehicle Tracking', href: '/services/fleet-tracking' },
          { label: 'Fuel Monitoring', href: '/services/fuel-monitoring' },
          { label: 'Video Telematics', href: '/services/video-telematics' },
          { label: 'Nanny, Spy & Farm Surveillance', href: '/services/surveillance' },
          { label: 'Auto Care & Security', href: '/services/auto-care' }
        ]
      },
      { label: 'Products', href: '/products' },
      { label: 'Client Login', href: '/login' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  footer: {
    copyright: (
      <>
        &copy; {new Date().getFullYear()} Cytech Systems. All rights reserved.
      </>
    ),
    links: [
      { href: 'https://twitter.com/cytech', label: <FaTwitter size="14" /> },
      { href: 'https://facebook.com/cytech', label: <FaFacebook size="14" /> },
      { href: 'https://wa.me/1234567890', label: <FaWhatsapp size="14" /> },
      { href: 'https://youtube.com/cytech', label: <FaYoutube size="14" /> },
      { href: 'https://instagram.com/cytech', label: <FaInstagram size="14" /> }
    ]
  },
  signup: {
    title: 'Work with Cytech Systems',
    features: [
      {
        icon: FiCheck,
        title: 'Innovative',
        description: 'Delivering advanced fleet tracking, telematics, and security technology.'
      },
      {
        icon: FiCheck,
        title: 'Secure',
        description: 'Industry-leading surveillance and theft-prevention solutions.'
      },
      {
        icon: FiCheck,
        title: 'Reliable',
        description: 'Trusted by logistics, corporates, and individuals for asset protection.'
      },
      {
        icon: FiCheck,
        title: 'Scalable',
        description: 'From small fleets to enterprise-level operations, we scale with you.'
      }
    ]
  }
}

export default siteConfig
