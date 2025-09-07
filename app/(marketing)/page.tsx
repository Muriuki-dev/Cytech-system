'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  Card,
  CardBody,
  HStack,
  Tag,
  useColorModeValue,
  Image,
  Link
} from '@chakra-ui/react'
import { useState } from 'react'
import {
  FiArrowRight,
  FiCheck,
  FiShield,
  FiMap,
  FiLock,
  FiSettings,
  FiEye,
  FiTool,
  FiClock,
  FiGlobe,
  FiStar
} from 'react-icons/fi'

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </Box>
  )
}

const HeroSection = () => {
  return (
    <Box 
      position="relative" 
      height="100vh" 
      overflow="hidden"
      bgImage="url('https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      bgSize="cover"
      bgPosition="center"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-r, blackAlpha.800, blueAlpha.800)"
        zIndex="1"
      />
      
      <Container position="relative" zIndex="2" maxW="container.xl" height="full">
        <Flex alignItems="center" height="full">
          <Stack spacing={6} maxW="2xl">
            <Heading as="h1" size="2xl" color="white" fontWeight="bold">
              Advanced Telematics & Security Solutions
            </Heading>
            <Text fontSize="xl" color="gray.100">
              Cy-Tech Systems delivers state-of-the-art technology and intelligent monitoring platforms for residential, commercial, and automotive sectors.
            </Text>
            <HStack spacing={4}>
              <Button colorScheme="blue" size="lg" rightIcon={<FiArrowRight />}>
                Get Started
              </Button>
              <Button variant="outline" size="lg" color="white" _hover={{ bg: 'whiteAlpha.200' }}>
                View Demo
              </Button>
            </HStack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}

const ServicesSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 1,
      title: "Automotive Security",
      description: "Advanced vehicle security systems with real-time tracking and anti-theft protection.",
      icon: FiShield,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      details: "Our automotive security systems provide comprehensive protection for your vehicle with features like GPS tracking, remote immobilization, and real-time alerts. Our systems are designed to deter thieves and recover your vehicle quickly if stolen."
    },
    {
      id: 2,
      title: "Fleet Management",
      description: "Optimize your fleet operations with our advanced telematics solutions.",
      icon: FiMap,
      image: "https://images.unsplash.com/photo-1569686961384-10d956f4b6f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      details: "Our fleet management solutions help businesses optimize routes, monitor driver behavior, reduce fuel consumption, and improve overall operational efficiency. Real-time data and analytics provide insights to make informed decisions."
    },
    {
      id: 3,
      title: "Residential Security",
      description: "Protect your home with our intelligent monitoring and security systems.",
      icon: FiLock,
      image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      details: "Our residential security systems offer comprehensive protection for your home with features like remote monitoring, intrusion detection, and emergency response integration. Keep your family safe with our reliable technology."
    },
    {
      id: 4,
      title: "Commercial Solutions",
      description: "Tailored security solutions for businesses of all sizes.",
      icon: FiSettings,
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      details: "We provide customized security solutions for commercial properties, including access control, surveillance systems, and integrated monitoring platforms. Protect your assets and ensure business continuity with our professional-grade systems."
    }
  ]

  const handleServiceClick = (service) => {
    setSelectedService(service)
    onOpen()
  }

  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <VStack textAlign="center" spacing={4}>
            <Heading as="h2" size="xl">Our Services</Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              We provide cutting-edge telematics and security solutions for residential, commercial, and automotive applications.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {services.map((service) => (
              <Card 
                key={service.id} 
                overflow="hidden" 
                variant="outline" 
                cursor="pointer"
                transition="all 0.3s"
                _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
                onClick={() => handleServiceClick(service)}
              >
                <Box height="200px" overflow="hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    transition="all 0.3s"
                    _hover={{ transform: 'scale(1.05)' }}
                  />
                </Box>
                <CardBody>
                  <HStack spacing={3} mb={3}>
                    <Icon as={service.icon} boxSize={6} color="blue.500" />
                    <Heading as="h3" size="md">{service.title}</Heading>
                  </HStack>
                  <Text color="gray.600">{service.description}</Text>
                  <Button variant="link" colorScheme="blue" rightIcon={<FiArrowRight />} mt={4}>
                    Learn more
                  </Button>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>

          <Modal isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{selectedService?.title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                {selectedService && (
                  <>
                    <Image
                      src={selectedService.image}
                      alt={selectedService.title}
                      borderRadius="md"
                      mb={4}
                    />
                    <Text>{selectedService.details}</Text>
                    <Button colorScheme="blue" mt={6}>
                      Request a Quote
                    </Button>
                  </>
                )}
              </ModalBody>
            </ModalContent>
          </Modal>
        </VStack>
      </Container>
    </Box>
  )
}

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: FiTool,
      title: "99.9% Hardware Reliability",
      description: "Built to perform, built to last."
    },
    {
      icon: FiSettings,
      title: "Smart, Easy to Use Software",
      description: "Seamless, secure, and intuitive."
    },
    {
      icon: FiStar,
      title: "Expert Workmanship",
      description: "Professional installation, every time."
    },
    {
      icon: FiClock,
      title: "Free Check-Ups & 24/7 Support",
      description: "We're with you, always."
    },
    {
      icon: FiCheck,
      title: "Guaranteed Value & Satisfaction",
      description: "Your success is our promise."
    },
    {
      icon: FiGlobe,
      title: "Global-Backed Warranty",
      description: "Trusted partnerships, reliable after-sales service."
    }
  ]

  return (
    <Box 
      py={20} 
      bgImage="url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
      bgSize="cover"
      bgPosition="center"
      position="relative"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-r, blue.900, blueAlpha.800)"
        opacity="0.9"
      />
      
      <Container position="relative" zIndex="1" maxW="container.xl">
        <VStack spacing={16} color="white">
          <VStack textAlign="center" spacing={4}>
            <Heading as="h2" size="xl">Why Choose Us?</Heading>
            <Text fontSize="lg" maxW="2xl">
              Our commitment is anchored in precision, cost-effectiveness, and professionalism.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {features.map((feature, index) => (
              <HStack key={index} align="start" spacing={6}>
                <Flex
                  justify="center"
                  align="center"
                  borderRadius="lg"
                  bg="blue.500"
                  color="white"
                  boxSize={12}
                  flexShrink={0}
                >
                  <Icon as={feature.icon} boxSize={6} />
                </Flex>
                <Box>
                  <Text fontWeight="bold" fontSize="lg" mb={2}>{feature.title}</Text>
                  <Text color="blue.100">{feature.description}</Text>
                </Box>
              </HStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Anderson",
      company: "TransGlobal Logistics",
      content: "Cy-Tech's fleet management system has reduced our fuel costs by 18% and improved our delivery times significantly. Their support team is always available when we need them.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "Premium Auto Group",
      content: "The automotive security systems from Cy-Tech have dramatically reduced theft incidents across our dealership network. The peace of mind is invaluable.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
    },
    {
      id: 3,
      name: "Michael Roberts",
      company: "Secure Properties Ltd",
      content: "We've integrated Cy-Tech's residential security solutions across all our properties. The systems are reliable, and their professional installation team is exceptional.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=996&q=80"
    }
  ]

  return (
    <Box py={20}>
      <Container maxW="container.xl">
        <VStack spacing={16}>
          <VStack textAlign="center" spacing={4}>
            <Heading as="h2" size="xl">What Our Clients Say</Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Don't just take our word for it - hear from some of our satisfied clients.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} variant="outline">
                <CardBody>
                  <HStack spacing={4} mb={4}>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      boxSize={12}
                      borderRadius="full"
                      objectFit="cover"
                    />
                    <Box>
                      <Text fontWeight="bold">{testimonial.name}</Text>
                      <Text fontSize="sm" color="gray.600">{testimonial.company}</Text>
                    </Box>
                  </HStack>
                  <Text color="gray.700">{testimonial.content}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

const FaqSection = () => {
  const faqItems = [
    {
      question: "What industries do you serve?",
      answer: "We provide solutions for residential, commercial, and automotive sectors. Our clients range from individual homeowners to large fleet operators and commercial property managers."
    },
    {
      question: "How does your tracking technology work?",
      answer: "Our systems use GPS technology combined with cellular networks to provide real-time location data. This information is accessible through our secure online platform or mobile app."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 technical support, regular system check-ups, and remote troubleshooting. Our team is always available to assist with any issues or questions."
    },
    {
      question: "Are your systems compatible with existing security infrastructure?",
      answer: "Yes, our systems are designed to integrate with most existing security infrastructure. Our team will assess your current setup and provide a customized integration plan."
    },
    {
      question: "How long does installation typically take?",
      answer: "Installation time varies based on the system complexity, but most residential installations are completed within a few hours. Commercial and fleet installations may take longer depending on the scope."
    },
    {
      question: "What warranty do you provide on your equipment?",
      answer: "We offer a comprehensive global-backed warranty on all our hardware. Specific terms vary by product, but typically include 2-3 years of coverage with optional extensions available."
    }
  ]

  return (
    <Box py={20} bg="gray.50">
      <Container maxW="container.lg">
        <VStack spacing={16}>
          <VStack textAlign="center" spacing={4}>
            <Heading as="h2" size="xl">Frequently Asked Questions</Heading>
            <Text fontSize="lg" color="gray.600" maxW="2xl">
              Find answers to common questions about our products and services.
            </Text>
          </VStack>

          <Accordion allowToggle width="100%">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} border="none" mb={4} bg="white" borderRadius="lg" overflow="hidden">
                <AccordionButton py={4} px={6} _expanded={{ bg: "blue.50", color: "blue.600" }}>
                  <Box as="span" flex='1' textAlign='left' fontWeight="semibold">
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4} px={6}>
                  {item.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Container>
    </Box>
  )
}

const Footer = () => {
  return (
    <Box bg="gray.900" color="white" py={12}>
      <Container maxW="container.xl">
        <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={8}>
          <Box>
            <Heading as="h3" size="md" mb={4}>CY-TECH SYSTEMS</Heading>
            <Text color="gray.400">Advanced telematics and security solutions for residential, commercial, and automotive sectors.</Text>
          </Box>
          
          <Box>
            <Heading as="h4" size="sm" mb={4}>Services</Heading>
            <Stack spacing={2}>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>Automotive Security</Link>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>Fleet Management</Link>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>Residential Security</Link>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>Commercial Solutions</Link>
            </Stack>
          </Box>
          
          <Box>
            <Heading as="h4" size="sm" mb={4}>Company</Heading>
            <Stack spacing={2}>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>About Us</Link>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>Careers</Link>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>Contact</Link>
              <Link href="#" color="gray.400" _hover={{ color: "white" }}>Support</Link>
            </Stack>
          </Box>
          
          <Box>
            <Heading as="h4" size="sm" mb={4}>Contact</Heading>
            <Stack spacing={2} color="gray.400">
              <Text>1234 Tech Drive</Text>
              <Text>Innovation City, IC 12345</Text>
              <Text>Phone: (123) 456-7890</Text>
              <Text>Email: info@cytech.com</Text>
            </Stack>
          </Box>
        </Grid>
        
        <Box borderTopWidth={1} borderColor="gray.700" mt={8} pt={8} textAlign="center" color="gray.500">
          <Text>&copy; {new Date().getFullYear()} Cy-Tech Systems. All rights reserved.</Text>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
