import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
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
        Built by <Link href="/">Kelvin</Link>
      </>
    ),
    links: [
      {
        href: '/',
        label: 'Contact',
      },
      {
        href: '/',
        label: <FaTwitter size="14" />,
      },
     
    ],
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
