'use client'

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Divider,
  Badge,
  chakra,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiCheck,
  FiCopy,
  FiGrid,
  FiLock,
  FiMapPin,
  FiPhone,
  FiSearch,
  FiShield,
  FiSliders,
  FiSmartphone,
  FiToggleLeft,
  FiTruck,
  FiVideo,
  FiZap,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { FallInPlace } from '#components/motion/fall-in-place'

/**
 * THEME NOTES
 * Using brand colors from the logo:
 *  - Primary red: use Chakra colorScheme="red" where appropriate
 *  - Dark navy/charcoal: leverage _dark and gray.900 backgrounds
 * The page respects both light & dark modes by using Chakra tokens and _dark overrides.
 */

const brand = {
  red: 'red.600', // primary accent similar to the logo
  dark: 'gray.900',
}

const vehicleImgs = {
  hero:
    'https://images.unsplash.com/photo-Dl3zfNV8x_8?auto=format&fit=crop&w=2400&q=80', // black SUV at night
  gps:
    'https://images.unsplash.com/photo-6QGwah013Lo?auto=format&fit=crop&w=1920&q=80', // car dashboard w/ GPS
  fleet:
    'https://images.unsplash.com/photo-CUjioboIKUk?auto=format&fit=crop&w=1920&q=80', // cars on road at night
  citySUV:
    'https://images.unsplash.com/photo-gUwv_7vJ9rE?auto=format&fit=crop&w=1920&q=80',
  darkSUV:
    'https://images.unsplash.com/photo-EmTviaxPNdU?auto=format&fit=crop&w=1920&q=80',
  nav:
    'https://images.unsplash.com/photo-9aaD5DWs2_g?auto=format&fit=crop&w=1920&q=80',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />
      <WhoWeAreSection />
      <ServicesSection />
      <USPsSection />
      <CTASection />
      <FaqSection />
      <ContactBar />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />

      {/* HERO BACKDROP WITH 4K VEHICLE IMAGE */}
      <Box
        position="absolute"
        inset={0}
        _before={{
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${vehicleImgs.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.55)',
        }}
        _dark={{
          _before: {
            filter: 'brightness(0.4)',
          },
        }}
      />

      <Container maxW="container.xl" pt={{ base: 32, lg: 48 }} pb={24}>
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Box zIndex={1} color="white">
            <Heading fontSize={{ base: '4xl', lg: '6xl' }} lineHeight="1.1">
              CY – TECH SYSTEMS
              <Br />
              <chakra.span color={brand.red}>Auto Security & Telematics</chakra.span>
            </Heading>
            <Text mt={6} fontSize={{ base: 'lg', lg: 'xl' }} maxW="2xl" opacity={0.95}>
              Driven by Trust. Powered by Technology. We provide advanced tracking,
              video telematics, and immobilization for vehicles and fleets across
              Kenya and beyond.
            </Text>

            <HStack spacing={6} mt={8} flexWrap="wrap">
              <ButtonLink colorScheme="red" size="lg" href="#services" rightIcon={<Icon as={FiArrowRight} />}>Explore Services</ButtonLink>
              <Button as={Link} href="mailto:cytechsystems254@gmail.com" size="lg" variant="outline" colorScheme="whiteAlpha">Request a Quote</Button>
            </HStack>
          </Box>

          {/* SIDE IMAGE STRIP */}
          <Box
            display={{ base: 'none', lg: 'block' }}
            ms={{ lg: 10 }}
            zIndex={1}
            rounded="2xl"
            overflow="hidden"
            boxShadow="2xl"
          >
            <Image
              src={vehicleImgs.gps}
              width={700}
              height={430}
              alt="Premium GPS dashboard"
              quality={90}
              priority
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

const WhoWeAreSection = () => {
  return (
    <Container maxW="container.xl" py={{ base: 16, lg: 24 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
        <VStack align="start" spacing={6}>
          <Heading size="2xl">Who we are</Heading>
          <Text fontSize="lg" color="muted">
            Cy‑Tech Systems is a leading provider of advanced telematics and security
            solutions for residential, commercial, and automotive sectors. We leverage
            state‑of‑the‑art technology and intelligent monitoring platforms to deliver
            real‑time tracking and security systems that consistently meet and exceed market expectations.
          </Text>
          <Wrap>
            {['Precision', 'Cost‑effective', 'Professional', 'Real‑time', 'Reliable'].map((v) => (
              <Tag key={v} colorScheme="red" variant="subtle" rounded="full" px={3}>{v}</Tag>
            ))}
          </Wrap>
        </VStack>

        <Box rounded="2xl" overflow="hidden" boxShadow="xl">
          <Image
            src={vehicleImgs.citySUV}
            alt="SUV in city at night"
            width={1200}
            height={800}
            quality={90}
          />
        </Box>
      </SimpleGrid>
    </Container>
  )
}

/** SERVICES WITH MODALS **/
const services = [
  {
    key: 'tracking',
    title: 'GPS Vehicle Tracking',
    icon: FiSearch,
    img: vehicleImgs.nav,
    details:
      'Live location, trip history, geofencing, and instant alerts. Visualize routes, stops, and utilization in real‑time on any device.',
  },
  {
    key: 'fleet',
    title: 'Fleet Management',
    icon: FiTruck,
    img: vehicleImgs.fleet,
    details:
      'Optimize operations with maintenance reminders, driver behavior analytics, fuel insights, and automated reports for your entire fleet.',
  },
  {
    key: 'immobilizer',
    title: 'Remote Immobilization & Anti‑Theft',
    icon: FiShield,
    img: vehicleImgs.darkSUV,
    details:
      'Secure your assets with remote engine cut‑off, tamper detection, and 24/7 monitoring backed by reliable hardware (99.9% uptime).',
  },
  {
    key: 'video',
    title: 'Dashcams & Video Telematics',
    icon: FiVideo,
    img: vehicleImgs.gps,
    details:
      'High‑definition road and in‑cab video with AI events. Protect drivers, exonerate claims, and improve safety culture.',
  },
  {
    key: 'alerts',
    title: 'Geofencing & Smart Alerts',
    icon: FiMapPin,
    img: vehicleImgs.citySUV,
    details:
      'Create zones and receive instant notifications for entries, exits, idling, speeding, and unauthorized usage.',
  },
  {
    key: 'support',
    title: 'Installation & 24/7 Support',
    icon: FiZap,
    img: vehicleImgs.hero,
    details:
      'Professional on‑site installation, user training, free check‑ups, and around‑the‑clock support with global‑backed warranty.',
  },
]

const ServicesSection = () => {
  return (
    <Box id="services" py={{ base: 16, lg: 24 }} bg="white" _dark={{ bg: 'gray.800' }}>
      <Container maxW="container.xl">
        <Heading textAlign="left" size="2xl" mb={3}>Services</Heading>
        <Text color="muted" mb={10} fontSize="lg">
          Smart, seamless and dependable solutions for individuals and fleets.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={8}>
          {services.map((s) => (
            <ServiceCard key={s.key} {...s} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const ServiceCard = ({ title, icon, img, details }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box rounded="2xl" overflow="hidden" borderWidth="1px" _dark={{ borderColor: 'gray.700' }}>
      <Box position="relative" h={{ base: 48, md: 56 }}>
        <Image src={img} alt={title} fill style={{ objectFit: 'cover' }} />
      </Box>
      <Stack p={6} spacing={4}>
        <HStack>
          <Icon as={icon} fontSize="xl" color={brand.red} />
          <Heading size="md">{title}</Heading>
        </HStack>
        <Text noOfLines={3} color="muted">{details}</Text>
        <HStack>
          <Badge colorScheme="red" variant="subtle">Premium</Badge>
          <Badge variant="outline">HD/4K Imagery</Badge>
        </HStack>
        <Button onClick={onOpen} colorScheme="red" variant="solid" alignSelf="start">
          More details
        </Button>
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose} size="xl" motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4}>{details}</Text>
            <Box rounded="xl" overflow="hidden">
              <Image src={img} alt={`${title} image`} width={1200} height={700} />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button as={Link} href="mailto:cytechsystems254@gmail.com" colorScheme="red">
              Get a quote
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

const USPsSection = () => {
  const bullets = [
    { label: '99.9% hardware reliability', icon: FiCheck },
    { label: 'Smart, easy‑to‑use software', icon: FiSmartphone },
    { label: 'Expert workmanship', icon: FiLock },
    { label: 'Free check‑ups & 24/7 support', icon: FiGrid },
    { label: 'Guaranteed value & satisfaction', icon: FiSliders },
    { label: 'Global‑backed warranty', icon: FiShield },
  ]
  return (
    <Container maxW="container.xl" py={{ base: 16, lg: 24 }}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
        <VStack align="start" spacing={6}>
          <Heading size="2xl">Why choose us</Heading>
          <Wrap>
            {bullets.map((b) => (
              <HStack key={b.label} p={3} borderWidth="1px" rounded="full" spacing={2} _dark={{ borderColor: 'gray.700' }}>
                <Icon as={b.icon} />
                <Text>{b.label}</Text>
              </HStack>
            ))}
          </Wrap>
        </VStack>
        <Box rounded="2xl" overflow="hidden" boxShadow="xl">
          <Image src={vehicleImgs.fleet} width={1200} height={800} alt="Fleet on the move" />
        </Box>
      </SimpleGrid>
    </Container>
  )
}

const CTASection = () => {
  return (
    <Box py={20} bg="gray.50" _dark={{ bg: 'gray.900' }}>
      <Container maxW="container.xl">
        <Stack align="center" spacing={6} textAlign="center">
          <Heading>Vision & Mission</Heading>
          <Text maxW="3xl" color="muted">
            Vision: To be the leading provider of innovative telematics and auto security solutions.
          </Text>
          <Text maxW="3xl" color="muted">
            Mission: Delivering smart, seamless, and dependable solutions that empower businesses every day.
          </Text>
          <ButtonGroup>
            <Button as={Link} href="#services" colorScheme="red">Explore services</Button>
            <Button as={Link} href="mailto:cytechsystems254@gmail.com" variant="outline">Talk to us</Button>
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  )
}

const FaqSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('CY‑TECH SYSTEMS — Auto Security & Telematics')
  const faqs = [
    {
      q: 'How quickly can you install and activate tracking?',
      a: 'Most installs are completed within 24–48 hours in Nairobi. Activation is instant once installed and tested.',
    },
    {
      q: 'Do you offer immobilization and recovery support?',
      a: 'Yes. With proper authorization, we can trigger remote immobilization and coordinate with recovery teams 24/7.',
    },
    {
      q: 'Will this work for my entire fleet?',
      a: 'Absolutely. Our platform scales from a single car to hundreds of assets with multi‑user roles, reports and alerts.',
    },
    {
      q: 'What about warranty and after‑sales?',
      a: 'All devices include a global‑backed warranty and free check‑ups. We provide user training and dedicated support.',
    },
  ]

  return (
    <Box py={{ base: 16, lg: 24 }} position="relative" overflow="hidden">
      {/* subtle background image */}
      <Box position="absolute" inset={0} opacity={0.08} backgroundImage={`url(${vehicleImgs.fleet})`} backgroundSize="cover" backgroundPosition="center" />

      <Container maxW="container.xl" position="relative">
        <Heading size="2xl" mb={8}>Frequently asked questions</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {faqs.map((f) => (
            <Box key={f.q} p={6} rounded="2xl" borderWidth="1px" _dark={{ borderColor: 'gray.700' }} boxShadow="sm" bg="white" _dark_bg="gray.800">
              <HStack justify="space-between" align="start">
                <Heading size="md">{f.q}</Heading>
                <IconButton
                  aria-label="Copy"
                  size="sm"
                  variant="ghost"
                  onClick={onCopy}
                  icon={hasCopied ? <FiCheck /> : <FiCopy />}
                />
              </HStack>
              <Text mt={3} color="muted">{f.a}</Text>
              <Divider my={4} />
              <HStack spacing={3}>
                <Tag colorScheme="red" variant="subtle">Auto</Tag>
                <Tag variant="outline">Security</Tag>
                <Tag variant="outline">Telematics</Tag>
              </HStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const ContactBar = () => (
  <Box py={10} bg="black" _dark={{ bg: 'gray.950' }} color="white">
    <Container maxW="container.xl">
      <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'start', md: 'center' }} justify="space-between" gap={4}>
        <HStack spacing={4}>
          <Icon as={FiPhone} />
          <Text>Mobile / WhatsApp: (+254) 715 643457</Text>
        </HStack>
        <HStack spacing={4}>
          <Icon as={FiSmartphone} />
          <Text>Email: cytechsystems254@gmail.com</Text>
        </HStack>
        <HStack spacing={4}>
          <Icon as={FiMapPin} />
          <Text>CyTech Systems, Westlands, Nairobi, Kenya</Text>
        </HStack>
      </Flex>
      <Text mt={3} fontSize="sm" opacity={0.8}>Anthony Kalu — Operations Manager</Text>
    </Container>
  </Box>
)

export default Home
