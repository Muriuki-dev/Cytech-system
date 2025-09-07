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
  shouldForwardProp,
  useColorMode,
  useColorModeValue,
  Textarea,
  Input,
} from '@chakra-ui/react'

import { keyframes } from '@emotion/react' // Changed import source
import { motion, isValidMotionProp, AnimatePresence } from 'framer-motion'
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
  FiSend,
  FiDroplet,
  FiCamera,
  FiTool,
  FiSettings,
  FiEye,
} from 'react-icons/fi'
import { FaWhatsapp, FiCar, FaRobot } from 'react-icons/fa'

import * as React from 'react'
import { useEffect, useState } from 'react'

// Create motion-enabled Chakra components
const MotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

const MotionVStack = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

const MotionHeading = chakra(motion.h2, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

const MotionText = chakra(motion.p, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

const MotionTag = chakra(motion.span, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

// Premium keyframe animations
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.3); }
  50% { box-shadow: 0 0 30px rgba(255, 0, 0, 0.6), 0 0 40px rgba(255, 0, 0, 0.4); }
`

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`

const brand = {
  red: 'red.600',
  dark: 'gray.900',
}

// Premium HD vehicle images
const vehicleImgs = {
  hero: 'https://images.unsplash.com/photo-1617195920950-1145bf9a9c72?auto=format&fit=crop&w=2400&q=90',
  gps: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1920&q=90',
  fleet: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920&q=90',
  citySUV: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1920&q=90',
  darkSUV: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1920&q=90',
  nav: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=1920&q=90',
  security: 'https://images.unsplash.com/photo-1484136540910-d66bb475348d?auto=format&fit=crop&w=1920&q=90',
  support: 'https://images.unsplash.com/photo-1562141961-744a7d5ae1d4?auto=format&fit=crop&w=1920&q=90',
  fuel: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1920&q=90',
  video: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=1920&q=90',
  surveillance: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1920&q=90',
  autocare: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=90',
  luxury: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=90',
  modern: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&w=1920&q=90',
}

const BackgroundGradient = ({ height = "100vh", zIndex = -1 }) => {
  return (
    <Box
      position="absolute"
      inset={0}
      height={height}
      bgGradient="linear(to-br, red.600, purple.600, blue.600)"
      zIndex={zIndex}
      _before={{
        content: '""',
        position: 'absolute',
        inset: 0,
        bgGradient: "radial(circle at 30% 20%, rgba(255,255,255,0.1), transparent 50%)",
      }}
      _after={{
        content: '""',
        position: 'absolute',
        inset: 0,
        bgGradient: "radial(circle at 70% 80%, rgba(255,255,255,0.05), transparent 50%)",
      }}
    />
  )
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
    <Box position="relative" overflow="hidden" minH="100vh">
      <BackgroundGradient height="100%" zIndex="-1" />

      {/* Animated background with multiple layers */}
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
          filter: 'brightness(0.4)',
          animation: `${pulse} 8s ease-in-out infinite`,
        }}
        _after={{
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(45deg, rgba(220,38,38,0.3) 0%, rgba(147,51,234,0.3) 50%, rgba(59,130,246,0.3) 100%)',
          backgroundSize: '400% 400%',
          animation: `${shimmer} 6s ease infinite`,
        }}
      />

      <Container maxW="container.xl" pt={{ base: 32, lg: 48 }} pb={24}>
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center" spacing={12}>
          <MotionVStack
            align={{ base: 'center', lg: 'start' }}
            spacing={8}
            zIndex={1}
            color={textColor}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" } as any}
          >
            <MotionHeading 
              fontSize={{ base: '4xl', lg: '7xl' }} 
              lineHeight="1.1"
              textAlign={{ base: 'center', lg: 'left' }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 } as any}
              bgGradient="linear(to-r, white, gray.200)"
              bgClip="text"
            >
              CY – TECH SYSTEMS
              <Br />
              <chakra.span 
                color={brand.red}
                animation={`${glow} 3s ease-in-out infinite`}
                display="inline-block"
              >
                Auto Security & Telematics
              </chakra.span>
            </MotionHeading>

            <MotionText 
              mt={6} 
              fontSize={{ base: 'lg', lg: 'xl' }} 
              maxW="2xl" 
              color={subTextColor}
              textAlign={{ base: 'center', lg: 'left' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 } as any}
            >
              Driven by Trust. Powered by Technology. We provide advanced tracking,
              video telematics, and immobilization for vehicles and fleets across
              Kenya and beyond.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 } as any}
            >
              <HStack spacing={6} mt={8} flexWrap="wrap" justify={{ base: 'center', lg: 'start' }}>
                <Button
                  colorScheme="red" 
                  size="lg" 
                  rightIcon={<Icon as={FiArrowRight} />}
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'xl' }}
                  transition="all 0.3s"
                  animation={`${float} 3s ease-in-out infinite`}
                >
                  Explore Services
                </Button>
                <Button 
                  as={Link} 
                  href="mailto:cytechsystems254@gmail.com" 
                  size="lg" 
                  variant="outline" 
                  colorScheme="whiteAlpha"
                  _hover={{ transform: 'translateY(-2px)', bg: 'whiteAlpha.200' }}
                  transition="all 0.3s"
                >
                  Request a Quote
                </Button>
              </HStack>
            </MotionBox>
          </MotionVStack>

          <MotionBox
            display={{ base: 'none', lg: 'block' }}
            zIndex={1}
            rounded="3xl"
            overflow="hidden"
            boxShadow="2xl"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5 } as any}
            whileHover={{ scale: 1.05, rotate: 2 }}
            _hover={{
              boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            }}
          >
            <Image
              src={vehicleImgs.luxury}
              width={700}
              height={430}
              alt="Premium vehicle dashboard"
              quality={95}
              priority
              style={{ objectFit: 'cover' }}
            />
          </MotionBox>
        </Stack>
      </Container>
    </Box>
  )
}

const WhoWeAreSection = () => {
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const bgColor = useColorModeValue('white', 'gray.800')

  return (
    <Box py={{ base: 16, lg: 24 }} bg={bgColor} position="relative" overflow="hidden">
      {/* Animated background elements */}
      <Box
        position="absolute"
        top="10%"
        left="-10%"
        w="200px"
        h="200px"
        borderRadius="50%"
        bg="red.400"
        opacity={0.1}
        animation={`${float} 6s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        bottom="10%"
        right="-5%"
        w="150px"
        h="150px"
        borderRadius="50%"
        bg="purple.400"
        opacity={0.1}
        animation={`${float} 8s ease-in-out infinite reverse`}
      />

      <Container maxW="container.xl" position="relative">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12} alignItems="center">
          <MotionVStack
            align="start"
            spacing={6}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 } as any}
          >
            <MotionHeading
              size="2xl"
              color={headingColor}
              bgGradient="linear(to-r, red.500, purple.500, blue.500)"
              bgClip="text"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 } as any}
            >
              Who we are
            </MotionHeading>

            <MotionText
              fontSize="lg"
              color={textColor}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 } as any}
            >
              Cy-Tech Systems is a leading provider of advanced telematics and
              security solutions for residential, commercial, and automotive
              sectors. We leverage state-of-the-art technology and intelligent
              monitoring platforms to deliver real-time tracking and security
              systems that consistently meet and exceed market expectations.
            </MotionText>

            <Wrap>
              {['Precision', 'Cost-effective', 'Professional', 'Real-time', 'Reliable'].map(
                (v, i) => (
                  <MotionTag
                    key={v}
                    colorScheme="red"
                    variant="subtle"
                    rounded="full"
                    px={4}
                    py={2}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.15 } as any}
                    whileHover={{ scale: 1.1, y: -2 }}
                    cursor="pointer"
                  >
                    {v}
                  </MotionTag>
                ),
              )}
            </Wrap>
          </MotionVStack>

          <MotionBox
            rounded="3xl"
            overflow="hidden"
            boxShadow="2xl"
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 } as any}
            whileHover={{ scale: 1.05, rotateY: 5 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Image
              src={vehicleImgs.modern}
              alt="Modern vehicle technology"
              width={1200}
              height={800}
              quality={95}
              style={{ objectFit: 'cover' }}
            />
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

// Fallback component for better error handling
const FallInPlace: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay } as any}
    >
      {children}
    </MotionBox>
  )
}

// Enhanced ButtonLink component
const ButtonLink: React.FC<{
  children: React.ReactNode;
  href: string;
  colorScheme?: string;
  size?: string;
  rightIcon?: React.ReactElement;
  variant?: string;
}> = ({ children, href, colorScheme = "blue", size = "md", rightIcon, variant = "solid" }) => {
  return (
    <Button
      as="a"
      href={href}
      colorScheme={colorScheme}
      size={size}
      rightIcon={rightIcon}
      variant={variant}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
      transition="all 0.3s"
    >
      {children}
    </Button>
  )
}

// Updated services with document content
const services = [
  {
    key: 'tracking',
    title: 'Fleet & Vehicle Tracking Solutions',
    icon: FiSearch,
    img: vehicleImgs.nav,
    shortDesc: 'Monitor. Manage. Protect. Anywhere, Anytime.',
    details: `Our cutting-edge GPS Vehicle Tracking Solutions empower businesses and individuals to monitor, manage, and safeguard their vehicles and assets effortlessly. With advanced telematics and real-time data, you can enhance operational efficiency, improve safety, and cut down unnecessary costs.

Key Features:
• Real-Time Tracking – Live location updates with pinpoint accuracy
• Geofencing Alerts – Virtual zones with instant notifications for unauthorized movements
• Fleet Optimization – Reduce fuel costs and idle time through smarter route planning
• Driver Behavior Monitoring – Identify harsh braking, speeding, and risky driving patterns
• Detailed Reports – Mileage, trip history, and vehicle usage analytics on demand
• Remote Engine Immobilizer – Immobilize your vehicle via app or SMS to prevent theft
• Mobile Apps (iOS & Android) – Manage your fleet from anywhere
• Email & SMS Notifications – Stay instantly informed
• Cloud-Based & Scalable – From small fleets to enterprise-level operations
• 24/7 Support – Round-the-clock monitoring and expert technical assistance
• Fleet Maintenance & Service Expiry Reminders – Get automated alerts for scheduled maintenance

Who Benefits: Logistics & delivery companies, Corporate fleets & service vehicles, Public transportation operators, Private vehicle owners seeking advanced security`,
  },
  {
    key: 'fuel',
    title: 'Fuel Monitoring Solutions',
    icon: FiDroplet,
    img: vehicleImgs.fuel,
    shortDesc: 'Precise, reliable fuel consumption and storage monitoring.',
    details: `Cy-Tech Fuel Monitoring Solutions are engineered to deliver precise, reliable, and actionable data on fuel consumption and storage. Designed for businesses managing multiple assets or large fleets, our system integrates advanced fuel-level sensors, GPS tracking, and telematics analytics.

Technical Features:
• High-Precision Fuel Sensors – Capable of detecting even minimal fuel variations, with accuracy up to ±1%
• Real-Time Data Transmission – Continuous fuel-level reporting for local & cross border networks
• Multi-Tank Support – Designed to monitor single or dual-tank vehicles and stationary tanks simultaneously
• Advanced Theft Detection – Algorithm-based detection of sudden fuel drops, with instant SMS, email, or platform alerts
• Data Logging & Backup – Onboard memory ensures data retention during network downtime

Operational Benefits:
• Precise measurement for fuel consumption analytics and operational planning
• Reduction of fuel-related fraud and unauthorized drainage
• Enhanced fleet efficiency with accurate refueling and draining event logs
• Improved cost forecasting and fuel purchase planning

Applications: Heavy commercial fleets, Construction and mining equipment, Generator and stationary fuel tank management`,
  },
  {
    key: 'video',
    title: 'Video Telematics Solutions',
    icon: FiVideo,
    img: vehicleImgs.video,
    shortDesc: 'Smarter, Safer & More Accountable Fleet Management.',
    details: `Our Video Telematics Solutions combine intelligent video monitoring with GPS-based fleet management to deliver greater operational transparency, improved driver safety, and reliable incident documentation.

Key Features & Benefits:
• Live & on-demand video streaming – Access footage anytime, anywhere
• AI-Powered Driver Monitoring – Instantly detect fatigue, distractions, or unsafe driving habits
• Event-Based Recording – Automatic video capture during accidents, harsh braking, or unauthorized use
• HD Video/Picture quality – Road-facing and driver-facing views for full visibility
• Integrated GPS Tracking – Monitor speed, routes, and locations alongside video evidence
• Secure Cloud Storage – Reliable, compliant, and easily retrievable video archiving
• Video Playback – Review stored footage for incident analysis and dispute resolution
• Remote Access – Manage and view your fleet from any web or mobile device

Boost fleet efficiency and gain peace of mind with the best-in-class video telematics for fleets of all sizes.`,
  },
  {
    key: 'surveillance',
    title: 'Nanny, Spy & Farm Surveillance',
    icon: FiEye,
    img: vehicleImgs.surveillance,
    shortDesc: 'Discreet Monitoring for Enhanced Security and Peace of Mind.',
    details: `Our professional Nanny, Spy & Surveillance Camera solutions are designed for homeowners, businesses, and institutions seeking discreet monitoring systems that combine reliability, privacy, and high-performance security.

Key Features:
• Hidden & Covert Designs – Seamlessly integrated to ensure discreet monitoring
• High-Definition Video Recording – Crystal-clear footage, day and night
• Secure Remote Access – View live or recorded footage via encrypted mobile and desktop platforms
• Motion Detection & Instant Alerts – Receive real-time notifications only when activity is detected
• Optional Two-Way Audio – For instant communication when needed
• Customizable & Scalable Solutions – From single-room monitoring to full-property coverage

Applications:
• Nanny and Childcare Monitoring – Ensure the safety and well-being of your children
• Elderly and Patient Care Supervision – Monitor caregivers and improve accountability
• Office & Retail Surveillance – Minimize internal losses and enhance workplace security
• Covert Investigations – Collect discreet evidence in sensitive situations
• Farm & Agricultural property – designed to provide reliable 24/7 monitoring for farms, ranches, and agricultural facilities`,
  },
  {
    key: 'autocare',
    title: 'Auto Care & Security Services',
    icon: FiCar,
    img: vehicleImgs.autocare,
    shortDesc: 'Transform Your Ride – Style & Safety One Stop!',
    details: `Upgrade your car with our premium range of auto accessories and professional services designed to give you comfort, security, and a standout look.

Professional Car Care & Security Services:

Car Tinting Services – UV Protection & Privacy
Upgrade your car with our premium window tinting solutions. Reduce glare, block harmful UV rays, enhance privacy, and keep your vehicle cooler.

Car Alarms & Anti-Theft Security Systems
Protect your vehicle from theft with our advanced car alarm installations and smart security systems. Enjoy 24/7 protection with motion sensors, shock alerts, and remote monitoring options.

Vehicle Identity Marking (VIN Etching)
We provide computerized engraving of your car's registration and engine number on essential components such as windshields, side mirrors, windows, headlights, and taillights.

Car Riveting for Theft Prevention
Secure high-risk vehicle components including logos, side mirrors, license plates, chromes, and wipers with our professional riveting service.

Car Audio & Visual Installation Services
Upgrade your in-car entertainment with our professional installation of car stereos, subwoofers, speakers, and multimedia displays.

Car Air Conditioning Refill & Maintenance
Keep your car's AC performing at its best with our refill, gas recharge, and maintenance services.`,
  },
  {
    key: 'support',
    title: 'Installation & 24/7 Support',
    icon: FiZap,
    img: vehicleImgs.support,
    shortDesc: 'Professional support and installation services.',
    details: `Professional on-site installation, user training, free check-ups, and around-the-clock support with global-backed warranty. Our expert technicians ensure seamless integration and optimal performance of all systems.

Support Services:
• Professional Installation – Certified technicians for all devices
• User Training – Comprehensive training on system usage
• 24/7 Technical Support – Round-the-clock assistance
• Free Regular Check-ups – Preventive maintenance included
• Global Warranty – Comprehensive coverage for all devices
• Remote Diagnostics – Quick troubleshooting and resolution`,
  },
]

const ServicesSection = () => {
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  
  return (
    <Box id="services" py={{ base: 16, lg: 24 }} bg={bgColor} position="relative" overflow="hidden">
      {/* Animated background grid */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.05}
        backgroundImage="radial-gradient(circle, currentColor 1px, transparent 1px)"
        backgroundSize="50px 50px"
        animation={`${shimmer} 20s linear infinite`}
      />

      <Container maxW="container.xl" position="relative">
        <MotionVStack
          spacing={4}
          mb={12}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 } as any}
        >
          <MotionHeading 
            textAlign="center" 
            size="3xl" 
            color={headingColor}
            bgGradient="linear(to-r, red.500, purple.500)"
            bgClip="text"
          >
            Our Premium Services
          </MotionHeading>
          <Text color={textColor} fontSize="xl" textAlign="center" maxW="3xl">
            Smart, seamless and dependable solutions for individuals and fleets across Kenya and beyond.
          </Text>
        </MotionVStack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={8}>
          {services.map(({ key, ...rest }, index) => (
            <MotionBox
              key={key}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 } as any}
              whileHover={{ y: -8, rotateY: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <ServiceCard {...rest} />
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const ServiceCard = ({ title, icon, img, shortDesc, details }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cardBg = useColorModeValue('white', 'gray.800')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  
  return (
    <>
      <Box 
        rounded="3xl" 
        overflow="hidden" 
        borderWidth="1px" 
        borderColor={borderColor}
        bg={cardBg}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        _hover={{
          transform: 'translateY(-8px) scale(1.02)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
          borderColor: 'red.400',
        }}
        cursor="pointer"
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          bgGradient: 'linear(to-r, red.500, purple.500, blue.500)',
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
        _after={{
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
          animation: `${shimmer} 3s ease infinite`,
          opacity: 0,
          transition: 'opacity 0.3s',
        }}
        _groupHover={{
          _before: { opacity: 1 },
          _after: { opacity: 1 },
        }}
        role="group"
      >
        <Box position="relative" h={{ base: 56, md: 64 }} overflow="hidden">
          <Image 
            src={img} 
            alt={title} 
            fill 
            style={{ 
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
            }} 
          />
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-t, rgba(0,0,0,0.6), transparent 50%)"
            opacity={0}
            transition="opacity 0.3s"
            _groupHover={{ opacity: 1 }}
          />
          <Box
            position="absolute"
            top={4}
            right={4}
            p={3}
            bg="whiteAlpha.900"
            rounded="full"
            transform="scale(0)"
            transition="transform 0.3s"
            _groupHover={{ transform: 'scale(1)' }}
          >
            <Icon as={icon} fontSize="xl" color={brand.red} />
          </Box>
        </Box>
        
        <Stack p={6} spacing={4}>
          <HStack justify="space-between" align="start">
            <VStack align="start" spacing={2} flex={1}>
              <HStack>
                <Icon as={icon} fontSize="xl" color={brand.red} />
                <Heading size="md" color={useColorModeValue('gray.800', 'white')} noOfLines={2}>
                  {title}
                </Heading>
              </HStack>
              <Text fontSize="sm" color={textColor} fontWeight="medium" noOfLines={2}>
                {shortDesc}
              </Text>
            </VStack>
          </HStack>
          
          <HStack justify="space-between" align="center">
            <HStack>
              <Badge colorScheme="red" variant="subtle" fontSize="xs">Premium</Badge>
              <Badge variant="outline" fontSize="xs">HD Quality</Badge>
            </HStack>
            <Button 
              onClick={onOpen} 
              colorScheme="red" 
              variant="solid" 
              size="sm"
              rightIcon={<FiArrowRight />}
              _hover={{ 
                transform: 'translateX(4px)',
                boxShadow: 'lg',
              }}
              transition="all 0.3s"
            >
              Details
            </Button>
          </HStack>
        </Stack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="4xl" motionPreset="slideInBottom" scrollBehavior="inside">
        <ModalOverlay backdropFilter="blur(10px)" />
        <ModalContent
          bg={useColorModeValue('white', 'gray.800')}
          maxH="90vh"
        >
          <ModalHeader 
            color={useColorModeValue('gray.800', 'white')} 
            fontSize="2xl"
            borderBottomWidth="1px"
            borderColor={borderColor}
            pb={4}
          >
            <HStack>
              <Icon as={icon} color={brand.red} fontSize="2xl" />
              <Text>{title}</Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          
          <ModalBody py={6}>
            <VStack spacing={6} align="stretch">
              <Box rounded="xl" overflow="hidden" boxShadow="lg">
                <Image src={img} alt={`${title} service`} width={1200} height={600} style={{ objectFit: 'cover' }} />
              </Box>
              
              <Box>
                <Text mb={4} color={textColor} fontSize="lg" fontWeight="medium">{shortDesc}</Text>
                <Box 
                  p={6} 
                  bg={useColorModeValue('gray.50', 'gray.700')} 
                  rounded="xl"
                  borderLeftWidth="4px"
                  borderLeftColor="red.500"
                >
                  <Text 
                    color={useColorModeValue('gray.700', 'gray.300')} 
                    whiteSpace="pre-line"
                    lineHeight="tall"
                  >
                    {details}
                  </Text>
                </Box>
              </Box>
            </VStack>
          </ModalBody>
          
          <ModalFooter borderTopWidth="1px" borderColor={borderColor} pt={4}>
            <HStack spacing={3}>
              <Button
                as="a"
                href={`https://wa.me/254715643457?text=Hello%20CY-TECH,%20I'm%20interested%20in%20${encodeURIComponent(title)}%20service.%20Please%20provide%20more%20information.`}
                target="_blank"
                rel="noopener noreferrer"
                leftIcon={<FaWhatsapp />}
                colorScheme="whatsapp"
                size="lg"
              >
                WhatsApp Quote
              </Button>
              <Button 
                as="a" 
                href="mailto:cytechsystems254@gmail.com" 
                colorScheme="red"
                size="lg"
                leftIcon={<FiPhone />}
              >
                Email Quote
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
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
  const bulletBg = useColorModeValue('white', 'gray.700')
  const bulletBorder = useColorModeValue('gray.200', 'gray.600')
  const bgColor = useColorModeValue('white', 'gray.800')
  
  return (
    <Box bg={bgColor} py={{ base: 16, lg: 24 }} position="relative" overflow="hidden">
      {/* Animated background elements */}
      <Box
        position="absolute"
        top="20%"
        right="-5%"
        w="300px"
        h="300px"
        borderRadius="50%"
        bgGradient="radial(red.400, transparent 70%)"
        opacity={0.1}
        animation={`${pulse} 8s ease-in-out infinite`}
      />
      
      <Container maxW="container.xl" position="relative">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
          <MotionVStack
            align="start"
            spacing={8}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 } as any}
          >
            <MotionHeading 
              size="3xl" 
              color={headingColor}
              bgGradient="linear(to-r, red.500, purple.500)"
              bgClip="text"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 } as any}
            >
              Why Choose CY-TECH?
            </MotionHeading>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
              {bullets.map((b, index) => (
                <MotionBox
                  key={b.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 } as any}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <HStack 
                    p={4} 
                    borderWidth="1px" 
                    rounded="2xl" 
                    spacing={3} 
                    bg={bulletBg}
                    borderColor={bulletBorder}
                    boxShadow="sm"
                    _hover={{
                      boxShadow: 'lg',
                      borderColor: 'red.300',
                    }}
                    transition="all 0.3s"
                  >
                    <Box
                      p={2}
                      bg="red.50"
                      rounded="full"
                      _dark={{ bg: 'red.900' }}
                    >
                      <Icon as={b.icon} color={brand.red} fontSize="lg" />
                    </Box>
                    <Text 
                      color={useColorModeValue('gray.700', 'gray.200')}
                      fontWeight="medium"
                      fontSize="sm"
                    >
                      {b.label}
                    </Text>
                  </HStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionVStack>
          
          <MotionBox
            rounded="3xl"
            overflow="hidden"
            boxShadow="2xl"
            initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 } as any}
            whileHover={{ scale: 1.03, rotateY: -5 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Image src={vehicleImgs.fleet} width={1200} height={800} alt="Fleet management" style={{ objectFit: 'cover' }} />
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const CTASection = () => {
  const headingColor = useColorModeValue('gray.800', 'white')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  const bgGradient = useColorModeValue(
    'linear(to-br, red.50, purple.50, blue.50)',
    'linear(to-br, red.900, purple.900, blue.900)'
  )
  
  return (
    <Box py={24} bgGradient={bgGradient} position="relative" overflow="hidden">
      {/* Animated background elements */}
      <Box
        position="absolute"
        top="10%"
        left="10%"
        w="200px"
        h="200px"
        borderRadius="50%"
        bg="red.400"
        opacity={0.1}
        animation={`${float} 6s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        bottom="20%"
        right="15%"
        w="150px"
        h="150px"
        borderRadius="50%"
        bg="purple.400"
        opacity={0.1}
        animation={`${float} 8s ease-in-out infinite reverse`}
      />

      <Container maxW="container.xl" position="relative">
        <MotionVStack
          align="center" 
          spacing={8} 
          textAlign="center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 } as any}
        >
          <MotionHeading 
            size="3xl" 
            color={headingColor}
            bgGradient="linear(to-r, red.600, purple.600, blue.600)"
            bgClip="text"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 } as any}
          >
            Our Vision & Mission
          </MotionHeading>
          
          <VStack spacing={6} maxW="4xl">
            <MotionBox
              p={6}
              bg={useColorModeValue('white', 'gray.800')}
              rounded="2xl"
              boxShadow="xl"
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 } as any}
            >
              <Text fontSize="xl" fontWeight="bold" color={brand.red} mb={2}>Vision</Text>
              <Text fontSize="lg" color={textColor}>
                To be the leading provider of innovative telematics and auto security solutions across East Africa and beyond.
              </Text>
            </MotionBox>
            
            <MotionBox
              p={6}
              bg={useColorModeValue('white', 'gray.800')}
              rounded="2xl"
              boxShadow="xl"
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 } as any}
            >
              <Text fontSize="xl" fontWeight="bold" color={brand.red} mb={2}>Mission</Text>
              <Text fontSize="lg" color={textColor}>
                Delivering smart, seamless, and dependable solutions that empower businesses and individuals every day with cutting-edge technology and exceptional service.
              </Text>
            </MotionBox>
          </VStack>
          
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 } as any}
          >
            <ButtonGroup spacing={4} flexWrap="wrap" justifyContent="center">
              <Button 
                as="a"
                href="#services" 
                colorScheme="red"
                size="lg"
                rightIcon={<FiArrowRight />}
                _hover={{ 
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                }}
                transition="all 0.3s"
                animation={`${pulse} 4s ease-in-out infinite`}
              >
                Explore Services
              </Button>
              <Button 
                as="a"
                href="mailto:cytechsystems254@gmail.com" 
                variant="outline"
                colorScheme="red"
                size="lg"
                leftIcon={<FiPhone />}
                _hover={{ 
                  transform: 'translateY(-2px)',
                  bg: 'red.50',
                }}
                transition="all 0.3s"
              >
                Talk to Us
              </Button>
            </ButtonGroup>
          </MotionBox>
        </MotionVStack>
      </Container>
    </Box>
  )
}

const FaqSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('CY‑TECH SYSTEMS — Auto Security & Telematics')
  const faqs = [
    {
      q: 'How quickly can you install and activate tracking?',
      a: 'Most installs are completed within 24–48 hours in Nairobi and surrounding areas. Activation is instant once installed and tested by our certified technicians.',
    },
    {
      q: 'Do you offer immobilization and recovery support?',
      a: 'Yes. With proper authorization, we can trigger remote immobilization and coordinate with recovery teams 24/7. Our response time is under 5 minutes.',
    },
    {
      q: 'Will this work for my entire fleet?',
      a: 'Absolutely. Our platform scales from a single car to hundreds of assets with multi‑user roles, comprehensive reports, and intelligent alerts management.',
    },
    {
      q: 'What about warranty and after‑sales support?',
      a: 'All devices include a global‑backed warranty and free check‑ups. We provide comprehensive user training, dedicated support, and 99.9% uptime guarantee.',
    },
  ]

  const headingColor = useColorModeValue('gray.800', 'white')
  const bgColor = useColorModeValue('gray.50', 'gray.900')
  const cardBg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const textColor = useColorModeValue('gray.600', 'gray.300')
  
  return (
    <Box py={{ base: 16, lg: 24 }} bg={bgColor} position="relative" overflow="hidden">
      {/* Animated background pattern */}
      <Box
        position="absolute"
        inset={0}
        opacity={0.03}
        backgroundImage={`url(${vehicleImgs.fleet})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundAttachment="fixed"
      />

      <Container maxW="container.xl" position="relative">
        <MotionHeading 
          size="3xl" 
          mb={12} 
          color={headingColor}
          textAlign="center"
          bgGradient="linear(to-r, red.500, purple.500)"
          bgClip="text"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 } as any}
        >
          Frequently Asked Questions
        </MotionHeading>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {faqs.map((f, index) => (
            <MotionBox
              key={f.q}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 } as any}
              whileHover={{ y: -4, rotateX: 5 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <Box
                p={6}
                rounded="2xl"
                borderWidth="1px"
                borderColor={borderColor}
                boxShadow="lg"
                bg={cardBg}
                _hover={{
                  boxShadow: '2xl',
                  borderColor: 'red.300',
                }}
                transition="all 0.3s"
                position="relative"
                _before={{
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  w: '40px',
                  h: '4px',
                  bg: 'red.500',
                  roundedTop: 'xl',
                }}
              >
                <HStack justify="space-between" align="start" mb={4}>
                  <Heading size="md" color={headingColor} flex={1}>{f.q}</Heading>
                  <IconButton
                    aria-label="Copy"
                    size="sm"
                    variant="ghost"
                    onClick={onCopy}
                    icon={hasCopied ? <FiCheck /> : <FiCopy />}
                    _hover={{ bg: 'red.50' }}
                  />
                </HStack>
                
                <Text color={textColor} mb={4} lineHeight="tall">{f.a}</Text>
                
                <Divider my={4} />
                
                <HStack spacing={2} flexWrap="wrap">
                  <Tag colorScheme="red" variant="subtle" size="sm">Auto Security</Tag>
                  <Tag variant="outline" size="sm">Telematics</Tag>
                  <Tag colorScheme="purple" variant="subtle" size="sm">Premium</Tag>
                </HStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}

const ContactBar = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, gray.900, black)',
    'linear(to-r, gray.950, black)'
  )
  
  return (
    <Box py={10} bgGradient={bgGradient} color="white" position="relative" overflow="hidden">
      {/* Animated background elements */}
      <Box
        position="absolute"
        top="50%"
        left="20%"
        w="100px"
        h="100px"
        borderRadius="50%"
        bg="red.500"
        opacity={0.1}
        animation={`${pulse} 4s ease-in-out infinite`}
        transform="translateY(-50%)"
      />

      <Container maxW="container.xl" position="relative">
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 } as any}
          >
            <HStack spacing={4}>
              <Box p={3} bg="red.600" rounded="full">
                <Icon as={FiPhone} fontSize="xl" />
              </Box>
              <VStack align="start" spacing={1}>
                <Text fontSize="sm" opacity={0.8}>Mobile / WhatsApp</Text>
                <Text fontWeight="bold">(+254) 715 643457</Text>
              </VStack>
            </HStack>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 } as any}
          >
            <HStack spacing={4}>
              <Box p={3} bg="purple.600" rounded="full">
                <Icon as={FiSmartphone} fontSize="xl" />
              </Box>
              <VStack align="start" spacing={1}>
                <Text fontSize="sm" opacity={0.8}>Email Address</Text>
                <Text fontWeight="bold">cytechsystems254@gmail.com</Text>
              </VStack>
            </HStack>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 } as any}
          >
            <HStack spacing={4}>
              <Box p={3} bg="blue.600" rounded="full">
                <Icon as={FiMapPin} fontSize="xl" />
              </Box>
              <VStack align="start" spacing={1}>
                <Text fontSize="sm" opacity={0.8}>Location</Text>
                <Text fontWeight="bold">Westlands, Nairobi, Kenya</Text>
              </VStack>
            </HStack>
          </MotionBox>
        </SimpleGrid>
        
        <Divider my={6} borderColor="whiteAlpha.300" />
        
        <HStack justify="space-between" flexWrap="wrap">
          <Text fontSize="sm" opacity={0.8}>Anthony Kalu — Operations Manager</Text>
          <Text fontSize="sm" opacity={0.8}>© 2024 CY-TECH Systems. All rights reserved.</Text>
        </HStack>
      </Container>
    </Box>
  )
}

// Enhanced WhatsApp Floating Button
const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionBox
          position="fixed"
          bottom="6"
          left="6"
          zIndex="1000"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 } as any}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Box position="relative">
            {/* Pulsing ring effect */}
            <Box
              position="absolute"
              inset="-4px"
              rounded="full"
              bg="whatsapp.500"
              opacity={0.3}
              animation={`${pulse} 2s ease-in-out infinite`}
            />
            <Box
              position="absolute"
              inset="-2px"
              rounded="full"
              bg="whatsapp.500"
              opacity={0.5}
              animation={`${pulse} 2s ease-in-out infinite 0.5s`}
            />
            
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
              boxShadow="2xl"
              _hover={{
                boxShadow: '0 0 30px rgba(37, 211, 102, 0.5)',
              }}
              transition="all 0.3s"
              bg="whatsapp.500"
              position="relative"
            />
            
            {/* Message bubble */}
            <Box
              position="absolute"
              bottom="full"
              left="50%"
              transform="translateX(-50%)"
              mb={2}
              py={2}
              px={3}
              bg="white"
              color="gray.800"
              rounded="lg"
              fontSize="sm"
              fontWeight="medium"
              whiteSpace="nowrap"
              boxShadow="lg"
              _after={{
                content: '""',
                position: 'absolute',
                top: 'full',
                left: '50%',
                transform: 'translateX(-50%)',
                borderTop: '6px solid white',
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
              }}
              opacity={0}
              animation={`${float} 3s ease-in-out infinite 2s`}
              _hover={{ opacity: 1 }}
              transition="opacity 0.3s"
            >
              Chat with us!
            </Box>
          </Box>
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

// Enhanced ChatBot Component
const ChatBot = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm CY-TECH Assistant. How can I help you with our vehicle tracking and security services today?", sender: 'bot' },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  
  const bgColor = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')
  
  const quickReplies = [
    'GPS Tracking Info',
    'Fleet Management',
    'Pricing',
    'Installation Time',
    'Support Hours'
  ]

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    }

    setMessages(prev => [...prev, newMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot'
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase()
    
    if (input.includes('gps') || input.includes('tracking')) {
      return "Our GPS tracking provides real-time location, geofencing alerts, and detailed trip reports. Installation takes 24-48 hours with 99.9% reliability. Would you like a quote?"
    }
    
    if (input.includes('fleet')) {
      return "Our fleet management includes driver behavior monitoring, fuel tracking, maintenance alerts, and comprehensive analytics. Perfect for businesses of all sizes!"
    }
    
    if (input.includes('price') || input.includes('cost')) {
      return "Pricing varies based on your specific needs. Contact us at (+254) 715 643457 or cytechsystems254@gmail.com for a customized quote!"
    }
    
    if (input.includes('install')) {
      return "Installation typically takes 24-48 hours in Nairobi. Our certified technicians handle everything with minimal disruption to your schedule."
    }
    
    if (input.includes('support')) {
      return "We provide 24/7 technical support, free check-ups, and comprehensive user training. Our response time is under 5 minutes!"
    }
    
    return "Thank you for your question! For detailed information, please contact us at (+254) 715 643457 or email cytechsystems254@gmail.com. Our team is ready to help!"
  }

  const handleQuickReply = (reply: string) => {
    setInputValue(reply)
    handleSendMessage()
  }

  return (
    <Box
      position="fixed"
      bottom="6"
      right="6"
      zIndex="1000"
    >
      <AnimatePresence>
        {!isOpen ? (
          <MotionBox
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 } as any}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton
              aria-label="Open chat"
              icon={<FaRobot />}
              colorScheme="red"
              size="lg"
              isRound
              boxShadow="2xl"
              onClick={onToggle}
              _hover={{
                boxShadow: '0 0 30px rgba(239, 68, 68, 0.5)',
              }}
              transition="all 0.3s"
            />
          </MotionBox>
        ) : (
          <MotionBox
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 } as any}
          >
            <Box
              w="sm"
              h="md"
              bg={bgColor}
              rounded="2xl"
              boxShadow="2xl"
              borderWidth="1px"
              borderColor={borderColor}
              overflow="hidden"
              display="flex"
              flexDirection="column"
            >
              {/* Chat Header */}
              <Box
                p={4}
                bg="red.600"
                color="white"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <HStack>
                  <Icon as={FaRobot} />
                  <Text fontWeight="bold">CY-TECH Assistant</Text>
                </HStack>
                <IconButton
                  aria-label="Close chat"
                  icon={<FiX />}
                  variant="ghost"
                  colorScheme="whiteAlpha"
                  size="sm"
                  onClick={onClose}
                />
              </Box>

              {/* Chat Messages */}
              <Box flex={1} p={4} overflowY="auto">
                <VStack align="stretch" spacing={4}>
                  {messages.map((message) => (
                    <Box
                      key={message.id}
                      alignSelf={message.sender === 'user' ? 'flex-end' : 'flex-start'}
                      maxW="80%"
                    >
                      <Box
                        p={3}
                        bg={message.sender === 'user' ? 'red.500' : 'gray.100'}
                        color={message.sender === 'user' ? 'white' : 'gray.800'}
                        rounded="xl"
                        borderBottomRightRadius={message.sender === 'user' ? 'sm' : 'xl'}
                        borderBottomLeftRadius={message.sender === 'user' ? 'xl' : 'sm'}
                      >
                        <Text fontSize="sm">{message.text}</Text>
                      </Box>
                    </Box>
                  ))}
                  
                  {isTyping && (
                    <Box alignSelf="flex-start">
                      <Box
                        p={3}
                        bg="gray.100"
                        color="gray.800"
                        rounded="xl"
                        borderBottomLeftRadius="sm"
                      >
                        <HStack spacing={1}>
                          <Box w={2} h={2} bg="gray.400" rounded="full" animation={`${pulse} 1s ease-in-out infinite`} />
                          <Box w={2} h={2} bg="gray.400" rounded="full" animation={`${pulse} 1s ease-in-out infinite 0.2s`} />
                          <Box w={2} h={2} bg="gray.400" rounded="full" animation={`${pulse} 1s ease-in-out infinite 0.4s`} />
                        </HStack>
                      </Box>
                    </Box>
                  )}
                </VStack>
              </Box>

              {/* Quick Replies */}
              <Box p={2} borderTopWidth="1px" borderColor={borderColor}>
                <Wrap spacing={2} justify="center">
                  {quickReplies.map((reply) => (
                    <Button
                      key={reply}
                      size="xs"
                      variant="outline"
                      colorScheme="red"
                      onClick={() => handleQuickReply(reply)}
                    >
                      {reply}
                    </Button>
                  ))}
                </Wrap>
              </Box>

              {/* Input Area */}
              <HStack p={3} borderTopWidth="1px" borderColor={borderColor}>
                <Input
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  size="sm"
                  rounded="full"
                />
                <IconButton
                  aria-label="Send message"
                  icon={<FiSend />}
                  colorScheme="red"
                  size="sm"
                  isRound
                  onClick={handleSendMessage}
                  isDisabled={!inputValue.trim()}
                />
              </HStack>
            </Box>
          </MotionBox>
        )
      }
      </AnimatePresence>
    </Box>
  )
}

export default Home
