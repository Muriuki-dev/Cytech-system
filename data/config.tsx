import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { FaTwitter, FaFacebook, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Stratile',
    description: 'Projecting success, building communities',
  },
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Our Services',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/login',
      },
     
    ],
  },
  footer: {
    copyright: (
      <>
       &copy; ACME 2022 
      </>
    ),
    links: [
 
  {
    href: '/', // Replace with your Twitter URL
    label: <FaTwitter size="14" />,
  },
  {
    href: '/', // Replace with your Facebook URL
    label: <FaFacebook size="14" />,
  },
  {
    href: '/', // Replace with your WhatsApp number
    label: <FaWhatsapp size="14" />,
  },
  {
    href: '/', // Replace with your YouTube URL
    label: <FaYoutube size="14" />,
  },
  {
    href: '/', // Replace with your Instagram URL
    label: <FaInstagram size="14" />,
  }
]
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
