import { FaTwitter, FaFacebook, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Cytech Systems',
    description: 'Empowering businesses with technology solutions',
  },
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      { label: 'Home', href: '/' },
      {
        label: 'About',
        children: [
          { label: 'Company Overview', href: '/about#overview' },
          { label: 'Our Team', href: '/about#team' },
          { label: 'Careers', href: '/about#careers' },
        ],
      },
      {
        label: 'Services',
        children: [
          { label: 'IT Consulting', href: '/services/consulting' },
          { label: 'Cloud Solutions', href: '/services/cloud' },
          { label: 'Cybersecurity', href: '/services/cybersecurity' },
          { label: 'Software Development', href: '/services/software' },
        ],
      },
      { label: 'Products', href: '/products' },
      { label: 'Client Login', href: '/login' },
    ],
  },
  footer: {
    copyright: (
      <>
        &copy; {new Date().getFullYear()} Cytech Systems. All rights reserved.
      </>
    ),
    links: [
      { href: '/', label: <FaTwitter size="14" /> },
      { href: '/', label: <FaFacebook size="14" /> },
      { href: '/', label: <FaWhatsapp size="14" /> },
      { href: '/', label: <FaYoutube size="14" /> },
      { href: '/', label: <FaInstagram size="14" /> },
    ],
  },
  signup: {
    title: 'Work with Cytech Systems',
    features: [
      {
        icon: FiCheck,
        title: 'Innovative',
        description: 'Delivering modern IT solutions tailored to your needs.',
      },
      {
        icon: FiCheck,
        title: 'Secure',
        description: 'Best practices in cybersecurity and data protection.',
      },
      {
        icon: FiCheck,
        title: 'Reliable',
        description: 'Trusted by enterprises for mission-critical systems.',
      },
      {
        icon: FiCheck,
        title: 'Scalable',
        description: 'Grow without limits with scalable cloud solutions.',
      },
    ],
  },
}

export default siteConfig
