'use client'

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Stack,
  Tag,
  Text,
  ListItem,
  Textarea,
  UnorderedList,
  useClipboard,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
  FiCalendar,
  FiLayers,
  FiUsers,
  FiTool,
  FiShare2,
  FiShoppingBag,
} from 'react-icons/fi'
import { useState, useEffect, useRef } from 'react'
import * as React from 'react'
import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import NextLink from 'next/link'

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'

import faq from '#data/faq'
import testimonials from '#data/testimonials'
import { FallInPlace } from '#components/motion/fall-in-place'

const Home = () => {
  return (
    <Box>
      <HeroSection />
       <ServicesSection />
      <HighlightsSection />
      <TestimonialsSection />
      <EventsSection />
     
      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const { colorMode } = useColorMode();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/static/images/slide1.jpeg',
    '/static/images/slide2.jpeg',
    '/static/images/slide3.jpeg',
    '/static/images/slide4.jpeg',
    '/static/images/slide5.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = () => {
    if (name && email && message) {
      alert(`Thank you, ${name}! We'll contact you soon at ${email}.`);
      onClose();
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <Box position="relative" overflow="hidden" minH="100vh">
      {/* Image Slideshow Background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-2}
        backgroundImage={`url(${images[currentImageIndex]})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        transition="background-image 1s ease-in-out"
      />
      
      {/* Dark overlay for better text visibility */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.600"
        zIndex={-1}
      />

      {/* Gradient overlay (kept from your original) */}
      <BackgroundGradient height="100%" zIndex="-1" />

      <Container maxW="container.xl" pt={{ base: 20, lg: 40 }} pb="20">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center" spacing={8}>
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                STRATILE LTD – PROJECTING SUCCESS,  
                <Br display={{ base: "none", md: "block" }} /> 
                <Box as="span" display={{ base: "block", md: "none" }}> </Box>
                BUILDING COMMUNITIES
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <Text as="span" fontSize={["sm", "md", "lg"]}>
                  <Em>Established in 2024, Stratile Ltd is a dynamic and forward-thinking Project Management 
                  Organization (PMO) dedicated to transforming visionary projects into thriving businesses and 
                  impactful community development initiatives. We serve as a catalyst for progress, providing 
                  expert guidance and comprehensive project management solutions that ensure successful 
                  execution and sustainable outcomes.</Em>
                </Text>
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup 
                spacing={4} 
                alignItems="center" 
                flexDirection="row"
                w="full"
                maxW={{ base: "100%", md: "auto" }}
              >
                <ButtonLink 
                  colorScheme="primary" 
                  size={{ base: "md", md: "lg" }} 
                  href="/"
                  width={{ base: "full", md: "auto" }}
                >
                  Explore our services 
                </ButtonLink>
                <Button
                  size={{ base: "md", md: "lg" }}
                  onClick={onOpen}
                  variant="outline"
                  width={{ base: "full", md: "auto" }}
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                  _light={{ bg: "white", color: "black" }}
                  _dark={{ bg: "white", color: "black" }}
                >
                  Contact us
                </Button>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
        </Stack>
      </Container>

      {/* Contact Form Modal */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            bg={colorMode === "dark" ? "gray.800" : "white"}
            color={colorMode === "dark" ? "white" : "gray.800"}
          >
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Contact Us
            </AlertDialogHeader>

            <AlertDialogBody>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message us with your requirements, and we'll send you a custom quotation tailored to your needs"
                    rows={4}
                  />
                </FormControl>
              </VStack>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="primary"
                onClick={handleSubmit}
                ml={3}
                isDisabled={!name || !email || !message}
              >
                Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}

const HighlightsSection = () => {
  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Our Vision">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            To be the leading project management organization that empowers individuals and communities to realize their full potential through strategically managed and successfully implemented projects.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Our Mission">
        <Text color="muted" fontSize="lg">
          To embody the values of partnership, coherent relationships, and unity in delivering exceptional 
project management services that foster functional businesses and drive meaningful social 
development. We are committed to organizing impactful community activities, establishing social 
development, and sharing valuable insights through our work and digital platforms.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
       
  name="Laban Mwangi"
  description="Co-director"
  avatar="/static/images/avatarr.jpg"
  gradient={['orange.600', 'red.500']}
 
>
        "Stratile serves as a catalyst for progress, providing expert guidance and comprehensive project management solutions that ensure successful execution and sustainable outcomes."
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Our Commitment"
      >
        <Text color="muted" fontSize="lg">
          We are committed to welcoming all who seek to engage and develop with us. We believe in the power of collaboration and are dedicated to building lasting partnerships.
        </Text>
        <Wrap mt="8">
          {[
            'Project Conceptualization',
            'Implementation',
            'Stakeholder Management',
            'Community Engagement',
            'Social Development',
            'Consultation',
            'Business Support',
            'Marketing Activations',
            'Creative Solutions',
            'Advertising',
            'Social Media',
            'Merchandising',
            'Events',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const ServicesSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBookingForm = () => {
    setIsBookingOpen(true);
  };

  const closeBookingForm = () => {
    setIsBookingOpen(false);
  };

  return (
   <Box 
  border="lg" 
  borderColor="blue.400"
  borderRadius="lg"
  p={[4, 6, 8]}
  position="relative"
  _hover={{
    borderColor: 'green.400', // Changes to green on hover
    boxShadow: 'lg',
  }}
  transition="all 0.3s ease-in-out"
  _dark={{
    borderColor: 'blue.300',
    _hover: {
      borderColor: 'green.300'
    }
  }}
>
       <BackgroundGradient height="100%" zIndex="-1" />
      <Features
        id="services"
        title={
         <Heading
  as="h2"
  fontSize={['3xl', '4xl', '5xl']}
  fontWeight="medium"
  textAlign="center"
  lineHeight="1.2"
  letterSpacing="tighter"
  color={useColorModeValue('gray.800', 'gray.100')}
  position="relative"
  _before={{
    content: '""',
    position: 'absolute',
    width: '50px',
    height: '4px',
    bottom: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    bg: useColorModeValue('green.500', 'green.400'),
    borderRadius: 'full',
  }}
  sx={{
    fontFeatureSettings: '"liga", "calt"',
    fontVariationSettings: '"opsz" 32',
  }}
>
  <Box 
    as="span" 
    display="block"
    position="relative"
    _after={{
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '2px',
      bottom: '-5px',
      left: 0,
      bg: useColorModeValue('green.100', 'green.900'),
      opacity: 0.7,
      transform: 'scaleX(0)',
      transformOrigin: 'right',
      transition: 'transform 0.6s cubic-bezier(0.86, 0, 0.07, 1)',
    }}
    _hover={{
      _after: {
        transform: 'scaleX(1)',
        transformOrigin: 'left',
      }
    }}
  >
    Our Comprehensive
  </Box>
  <Box 
    as="span" 
    display="block"
    fontWeight="semibold"
    bgGradient={useColorModeValue(
      'linear(to-r, green.500, teal.500)',
      'linear(to-r, green.300, teal.300)'
    )}
    bgClip="text"
    mt={2}
  >
    Service Offerings
  </Box>
</Heading>
        }
        description={
          <>
            Stratile provides a wide range of services to meet your business and community development needs.
            <Br />
            Explore how we can help you achieve your goals.
          </>
        }
        align="center"
        columns={[1, 2, 3]}
        iconSize={5}
        features={[
          {
            title: 'Marketing Activations',
            icon: FiTrendingUp,
            description: 'Our trained sales force team delivers direct customer engagement and increased sales for your brand.',
            variant: 'center',
          },
          {
            title: 'Creative Solutions',
            icon: FiGrid,
            description: 'Graphic design services that enhance your brand messaging with visually compelling assets.',
            variant: 'center',
          },
          {
            title: 'Advertising Solutions',
            icon: FiShare2,
            description: 'Strategic campaigns across digital, print, and outdoor channels to maximize your reach.',
            variant: 'center',
          },
          {
            title: 'Social Media Marketing',
            icon: FiUsers,
            description: 'Comprehensive strategy development, content creation, and performance tracking.',
            variant: 'center',
          },
          {
            title: 'Merchandising Services',
            icon: FiShoppingBag,
            description: 'POS materials and display solutions that optimize product placement and brand visibility.',
            variant: 'center',
          },
          {
            title: 'Project Management',
            icon: FiLayers,
            description: 'End-to-end project support from conceptualization to execution and stakeholder management.',
            variant: 'center',
          },
        ]}
      />
      
      <Box textAlign="center" mt={10}>
        <Button 
          onClick={openBookingForm}
          colorScheme="green"
          size="lg"
          px={8}
          _hover={{ bg: 'green.600' }}
          _dark={{ bg: 'green.500', _hover: { bg: 'green.600' } }}
        >
          Book Now
        </Button>
      </Box>

      {/* Booking Form Modal */}
      <Modal isOpen={isBookingOpen} onClose={closeBookingForm}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Our Services</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your name" />
            </FormControl>
            
          <FormControl mt={4}>
          <FormLabel>Business Name</FormLabel>
          <Input placeholder="Your company/organization name" />
          </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your email" />
            </FormControl>

            <FormControl mt={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input 
            type="tel" 
            placeholder="07XX XXX XXX" 
            pattern="[0-9]{10}"
            maxLength={10}
          />
        </FormControl>

             <FormControl mt={4}>
          <FormLabel>County</FormLabel>
          <Select placeholder="Select your county">
            <option>Nairobi</option>
            <option>Mombasa</option>
            <option>Kisumu</option>
            <option>Nakuru</option>
            <option>Eldoret</option>
            <option>Kiambu</option>
            <option>Machakos</option>
            <option>Other</option>
          </Select>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Specific Location</FormLabel>
          <Input placeholder="E.g. Westlands, Karen, Kilimani etc." />
        </FormControl>

            <FormControl mt={4}>
              <FormLabel>Service</FormLabel>
              <Select placeholder="Select service">
                <option>Marketing Activations</option>
                <option>Creative Solutions</option>
                <option>Advertising Solutions</option>
                <option>Social Media Marketing</option>
                <option>Merchandising Services</option>
                <option>Project Management</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Message us with your requirements, and we'll send you a custom quotation tailored to your needs" />
            </FormControl>
            
            <Checkbox mt={4} defaultChecked>
             I agree to receive communications via phone, email or SMS
            </Checkbox>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3}>
              Submit Booking
            </Button>
            <Button onClick={closeBookingForm}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
const EventsSection = () => {
  return (
    <Container maxW="container.xl" py="20">
      <Stack spacing="12">
        <Box textAlign="center">
          <Heading
            lineHeight="short"
            fontSize={['2xl', null, '4xl']}
            as="p"
          >
            Upcoming Events & Projects
          </Heading>
          <Text color="muted" fontSize="xl" mt="4">
            Discover opportunities to enhance your brand recognition
          </Text>
        </Box>

        <Stack direction={{ base: 'column', md: 'row' }} spacing="8">
          <Box 
            flex="1" 
            p="6" 
            borderWidth="1px" 
            borderRadius="lg"
            borderColor="blue.400"
            _hover={{
              borderColor: 'blue.500',
              transform: 'translateY(-2px)',
              boxShadow: 'lg'
            }}
            transition="all 0.2s"
          >
            <Heading size="lg" mb="4">Kanini Haraka Wholesalers and Distribution</Heading>
            <Text color="muted" mb="2"><strong>Date:</strong> May 30, 2025</Text>
            <Text color="muted" mb="2"><strong>Location:</strong> Naivasha Town, Dubai Plaza, Opposite Modern Market</Text>
            <Text mb="4">Join us for the premier industry event showcasing innovative products and services with special marketing packages available.</Text>
            <ButtonLink href="/order" rightIcon={<FiArrowRight />}>
              Learn More
            </ButtonLink>
          </Box>
        </Stack>
        
        <Box textAlign="center" pt="8">
          <ButtonLink colorScheme="primary" size="lg" href="/events">
            View All Events
          </ButtonLink>
        </Box>
      </Stack>
    </Container>
  )
}

const NaivashaMarketingPackage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: 'I want to register for the Naivasha Event Marketing Package'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '254741953190'; // Replace with your WhatsApp number (with country code, no + or 0)
    const message = `New Registration for Naivasha Event:\n\n*Name:* ${formData.name}\n*Company:* ${formData.company}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <Container id="naivasha-marketing-package" maxW="container.lg" py="20">
      <Stack spacing="8">
        <Box>
          <Heading size="2xl" mb="4">Marketing Package Promotion</Heading>
          <Text fontSize="xl" color="blue.500" fontWeight="bold">Naivasha Event – Friday 30th May 2025</Text>
        </Box>

        <Box bg="blue.50" p="6" borderRadius="lg" borderLeft="4px" borderColor="blue.500">
          <Heading size="lg" mb="4" color="blue.700">Package Highlights</Heading>
          <Text fontSize="xl" fontWeight="bold" mb="2">Price: Ksh 45,000</Text>
          
          <UnorderedList spacing="3" fontSize="lg">
            <ListItem>
              <strong>250+ expected client engagements</strong> - Get direct access to a large audience of potential customers
            </ListItem>
            <ListItem>
              <strong>VR Gaming Activation</strong> - Attract more visitors to your booth with immersive virtual reality experiences
            </ListItem>
            <ListItem>
              <strong>Dedicated Merchandising Table</strong> - Showcase your products prominently with a prime location
            </ListItem>
            <ListItem>
              <strong>Brand Visibility</strong> - Your logo featured in all event marketing materials
            </ListItem>
            <ListItem>
              <strong>Social Media Coverage</strong> - Inclusion in our event social media promotions
            </ListItem>
            <ListItem>
              <strong>Lead Generation</strong> - We'll help collect and provide you with attendee contact information
            </ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading size="lg" mb="4">Why This Event?</Heading>
          <Text mb="4">
            The Kanini Haraka Wholesalers and Distribution event is the premier gathering for industry professionals in Naivasha. 
            With over 500 expected attendees, this is a unique opportunity to connect with retailers, distributors, and suppliers 
            in a high-energy environment.
          </Text>
          <Text mb="4">
            Our marketing package is designed to maximize your brand's exposure and help you make valuable business connections. 
            The VR Gaming activation alone has been shown to increase booth traffic by up to 300% at similar events.
          </Text>
        </Box>

        <Box textAlign="center" py="8" bg="gray.50" borderRadius="lg">
          <Heading size="lg" mb="6">Ready to Boost Your Brand?</Heading>
          <Button 
            colorScheme="blue" 
            size="lg" 
            onClick={onOpen}
            rightIcon={<FiArrowRight />}
            px="8"
            py="6"
            fontSize="xl"
          >
            Register Now
          </Button>
          <Text mt="4" color="muted">Limited packages available - Book by May 28th to secure your spot</Text>
        </Box>

        {/* Registration Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Register for Naivasha Event Package</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Company Name</FormLabel>
                    <Input 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input 
                      type="email"
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input 
                      type="tel"
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your WhatsApp number"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Additional Message</FormLabel>
                    <Textarea
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any special requests or questions"
                    />
                  </FormControl>
                </Stack>
              </ModalBody>

              <ModalFooter>
                <Button variant="ghost" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button 
                  colorScheme="blue" 
                  type="submit"
                  rightIcon={<FiCheck />}
                >
                  Send via WhatsApp
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>

        <Box>
          <Heading size="lg" mb="4">Frequently Asked Questions</Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    What's included in the VR Gaming Activation?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Our VR setup includes 2 VR stations with popular immersive games, branded with your company logo. 
                We handle all setup, operation, and takedown. Attendees will associate the fun experience with your brand.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Can we customize the merchandising table?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes! The 6ft table is yours to decorate as you wish. We recommend bringing banners, product samples, 
                and promotional materials. Setup time begins at 8 AM on event day.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Stack>
    </Container>
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title="Active Projects"
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
