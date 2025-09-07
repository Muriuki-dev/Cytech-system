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
  useColorMode,
  useColorModeValue,
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
  FiMessageCircle,
  FiX,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { FallInPlace } from '#components/motion/fall-in-place'
import confetti from 'canvas-confetti'

/**
 * THEME NOTES
 * Using brand colors from the logo:
 *  - Primary red: use Chakra colorScheme="red" where appropriate
 *  - Dark navy/charcoal: leverage _dark and gray.900 backgrounds
 * The page respects both light & dark modes by using Chakra tokens and _dark overrides.
 */
const MotionBox = motion(Box)
const MotionVStack = motion(VStack)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionTag = motion(Tag)

const brand = {
  red: 'red.600', // primary accent similar to the logo
  dark: 'gray.900',
}

// Updated with professional HD/4K vehicle images
const vehicleImgs = {
  hero:
    'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=2400&q=80', // Premium black SUV
  gps:
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80', // Luxury car dashboard
  fleet:
    'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1920&q=80', // Modern fleet vehicles
  citySUV:
    'https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1920&q=80',
  darkSUV:
    'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1920&q=80',
  nav:
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80',
  security:
    'https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&w=1920&q=80',
  support:
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1920&q=80',
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
      <WhatsAppButton />
      <ChatBot />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  const textColor = useColorModeValue('white', 'white')
  const subTextColor = useColorModeValue('gray.100', 'gray.200')
  
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
          filter: 'brightness(0.6)',
          transition: 'filter 0.3s ease-in-out',
        }}
        _dark={{
          _before: {
            filter: 'brightness(0.4)',
          },
        }}
      />

      <Container maxW="container.xl" pt={{ base: 32, lg: 48 }} pb={24}>
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Box zIndex={1} color={textColor}>
            <Heading fontSize={{ base: '4xl', lg: '6xl' }} lineHeight="1.1">
              CY – TECH SYSTEMS
              <Br />
              <chakra.span color={brand.red}>Auto Security & Telematics</chakra.span>
            </Heading>
            <Text mt={6} fontSize={{ base: 'lg', lg: 'xl' }} maxW="2xl" color={subTextColor}>
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
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')

  // 🎉 Confetti burst when component mounts
  useEffect(() => {
    const duration = 2 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <Container maxW="container.xl" py={{ base: 16, lg: 24 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
        <MotionVStack
          align="start"
          spacing={6}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <MotionHeading
            size="2xl"
            color={headingColor}
            bgGradient="linear(to-r, purple.400, pink.400)"
            bgClip="text"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Who we are
          </MotionHeading>

          <MotionText
            fontSize="lg"
            color={textColor}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cy-Tech Systems is a leading provider of advanced telematics and
            security solutions for residential, commercial, and automotive
            sectors. We leverage state-of-the-art technology and intelligent
            monitoring platforms to deliver real-time tracking and security
            systems that consistently meet and exceed market expectations.
          </MotionText>

          <Wrap>
            {['Precision', 'Cost-effective', 'Professional', 'Real-time', 'Reliable'].map((v, i) => (
              <MotionTag
                key={v}
                colorScheme="purple"
                variant="subtle"
                rounded="full"
                px={3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
              >
                {v}
              </MotionTag>
            ))}
          </Wrap>
        </MotionVStack>

        <MotionBox
          rounded="2xl"
          overflow="hidden"
          boxShadow="2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <Image
            src={vehicleImgs.citySUV}
            alt="SUV in city at night"
            width={1200}
            height={800}
            quality={90}
            style={{ objectFit: 'cover' }}
          />
        </MotionBox>
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
    img: vehicleImgs.security,
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
    img: vehicleImgs.support,
    details:
      'Professional on‑site installation, user training, free check‑ups, and around‑the‑clock support with global‑backed warranty.',
  },
]

const ServicesSection = () => {
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  
  return (
    <Box id="services" py={{ base: 16, lg: 24 }} bg={useColorModeValue('white', 'gray.800')}>
      <Container maxW="container.xl">
        <Heading textAlign="left" size="2xl" mb={3} color={headingColor}>Services</Heading>
        <Text color={textColor} mb={10} fontSize="lg">
          Smart, seamless and dependable solutions for individuals and fleets.
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={8}>
          {services.map(({ key, ...rest }) => (
            <ServiceCard key={key} {...rest} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const ServiceCard = ({ title, icon, img, details }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  
  return (
    <Box 
      rounded="2xl" 
      overflow="hidden" 
      borderWidth="1px" 
      borderColor={borderColor}
      bg={cardBg}
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
      }}
    >
      <Box position="relative" h={{ base: 48, md: 56 }}>
        <Image src={img} alt={title} fill style={{ objectFit: 'cover' }} />
      </Box>
      <Stack p={6} spacing={4}>
        <HStack>
          <Icon as={icon} fontSize="xl" color={brand.red} />
          <Heading size="md" color={useColorModeValue('gray.800', 'white')}>{title}</Heading>
        </HStack>
        <Text noOfLines={3} color={textColor}>{details}</Text>
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
        <ModalContent bg={useColorModeValue('white', 'gray.800')}>
          <ModalHeader color={useColorModeValue('gray.800', 'white')}>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={4} color={useColorModeValue('gray.600', 'gray.300')}>{details}</Text>
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
  
  const headingColor = useColorModeValue('gray.800', 'white')
  const bulletBg = useColorModeValue('gray.50', 'gray.700')
  const bulletBorder = useColorModeValue('gray.200', 'gray.600')
  
  return (
    <Container maxW="container.xl" py={{ base: 16, lg: 24 }}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
        <VStack align="start" spacing={6}>
          <Heading size="2xl" color={headingColor}>Why choose us</Heading>
          <Wrap>
            {bullets.map((b) => (
              <HStack 
                key={b.label} 
                p={3} 
                borderWidth="1px" 
                rounded="full" 
                spacing={2} 
                bg={bulletBg}
                borderColor={bulletBorder}
              >
                <Icon as={b.icon} color={brand.red} />
                <Text color={useColorModeValue('gray.700', 'gray.200')}>{b.label}</Text>
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
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  
  return (
    <Box py={20} bg={bgColor}>
      <Container maxW="container.xl">
        <Stack align="center" spacing={6} textAlign="center">
          <Heading color={headingColor}>Vision & Mission</Heading>
          <Text maxW="3xl" color={textColor}>
            Vision: To be the leading provider of innovative telematics and auto security solutions.
          </Text>
          <Text maxW="3xl" color={textColor}>
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

  const headingColor = useColorModeValue('gray.800', 'white')
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  
  return (
    <Box py={{ base: 16, lg: 24 }} position="relative" overflow="hidden">
      {/* subtle background image */}
      <Box position="absolute" inset={0} opacity={0.08} backgroundImage={`url(${vehicleImgs.fleet})`} backgroundSize="cover" backgroundPosition="center" />

      <Container maxW="container.xl" position="relative">
        <Heading size="2xl" mb={8} color={headingColor}>Frequently asked questions</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {faqs.map((f) => (
            <Box
              key={f.q}
              p={6}
              rounded="2xl"
              borderWidth="1px"
              borderColor={borderColor}
              boxShadow="sm"
              bg={bgColor}
            >
              <HStack justify="space-between" align="start">
                <Heading size="md" color={headingColor}>{f.q}</Heading>
                <IconButton
                  aria-label="Copy"
                  size="sm"
                  variant="ghost"
                  onClick={onCopy}
                  icon={hasCopied ? <FiCheck /> : <FiCopy />}
                />
              </HStack>
              <Text mt={3} color={textColor}>{f.a}</Text>
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

const ContactBar = () => {
  const bgColor = useColorModeValue('black', 'gray.950')
  
  return (
    <Box py={10} bg={bgColor} color="white">
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
}

// WhatsApp Floating Button Component
const WhatsAppButton = () => {
  return (
    <Box
      position="fixed"
      bottom="6"
      left="6"
      zIndex="1000"
    >
      <IconButton
        as="a"
        href="https://wa.me/254715643457?text=Hello%20CY-TECH%20SYSTEMS,%20I%20would%20like%20more%20information%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        icon={<FaWhatsapp />}
        colorScheme="whatsapp"
        size="lg"
        isRound
        boxShadow="lg"
        _hover={{
          transform: 'scale(1.1)',
          boxShadow: 'xl',
        }}
        transition="all 0.2s"
      />
    </Box>
  )
}

// Simple ChatBot Component
const ChatBot = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  
  return (
    <Box
      position="fixed"
      bottom="6"
      right="6"
      zIndex="1000"
    >
      {!isOpen ? (
        <IconButton
          aria-label="Open chat"
          icon={<FiMessageCircle />}
          colorScheme="blue"
          size="lg"
          isRound
          onClick={onToggle}
          boxShadow="lg"
          _hover={{
            transform: 'scale(1.1)',
            boxShadow: 'xl',
          }}
          transition="all 0.2s"
        />
      ) : (
        <Box
          w="300px"
          h="400px"
          bg={bgColor}
          borderWidth="1px"
          borderColor={borderColor}
          rounded="xl"
          overflow="hidden"
          boxShadow="xl"
          display="flex"
          flexDirection="column"
        >
          <Box
            bg="blue.500"
            color="white"
            p={3}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontWeight="bold">CY-TECH Assistant</Text>
            <IconButton
              aria-label="Close chat"
              icon={<FiX />}
              size="sm"
              variant="ghost"
              color="white"
              onClick={onClose}
            />
          </Box>
          
          <Box flex="1" p={4} overflowY="auto">
            <VStack align="start" spacing={4}>
              <Box
                bg="gray.100"
                color="gray.800"
                p={3}
                rounded="lg"
                maxW="80%"
                _dark={{ bg: 'gray.700', color: 'white' }}
              >
                <Text>Hello! How can I help you today?</Text>
              </Box>
              
              <Box
                bg="blue.100"
                color="gray.800"
                p={3}
                rounded="lg"
                maxW="80%"
                alignSelf="flex-end"
                _dark={{ bg: 'blue.700', color: 'white' }}
              >
                <Text>I need information about GPS tracking</Text>
              </Box>
              
              <Box
                bg="gray.100"
                color="gray.800"
                p={3}
                rounded="lg"
                maxW="80%"
                _dark={{ bg: 'gray.700', color: 'white' }}
              >
                <Text>We offer premium GPS tracking with real-time location, geofencing, and alerts. Would you like to know more?</Text>
              </Box>
            </VStack>
          </Box>
          
          <Box p={3} borderTopWidth="1px" borderColor={borderColor}>
            <HStack>
              <input 
                placeholder="Type your message..." 
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  fontSize: '14px',
                  backgroundColor: useColorModeValue('white', 'gray.700'),
                  color: useColorModeValue('gray.800', 'white')
                }}
              />
              <Button colorScheme="blue" size="sm">Send</Button>
            </HStack>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default Home
