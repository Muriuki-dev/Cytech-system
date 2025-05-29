'use client'

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  SimpleGrid,
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
  Center,
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
  FiHeart,
  FiCheckCircle,
  FiUserCheck,
  FiGlobe,
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
  FiMessageSquare,
  FiX,
} from 'react-icons/fi'
import { useState, useEffect, useRef } from 'react'
import * as React from 'react'
import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'


import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem
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
      <LiveSupportChat />
    </Box>
  )
}

const LiveSupportChat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'support', text: 'Hello! Welcome to Stratile Ltd. How can we help you today?', time: new Date() }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [awaitingHuman, setAwaitingHuman] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = { id: Date.now(), sender: 'user', text: message, time: new Date() };
    setChatMessages(prev => [...prev, userMessage]);
    setMessage('');

    // Process the message
    setTimeout(() => {
      const response = generateResponse(message);
      setChatMessages(prev => [...prev, response]);
    }, 1000);
  };

  const generateResponse = (userMessage: string): { id: number, sender: string, text: string, time: Date } => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check if user wants human support
    if (lowerMessage.includes('human') || lowerMessage.includes('agent') || lowerMessage.includes('representative')) {
      setAwaitingHuman(true);
      return {
        id: Date.now(),
        sender: 'support',
        text: 'I\'ve requested a human support representative to join this chat. In the meantime, is there anything else I can help you with?',
        time: new Date()
      };
    }

    // Check for greetings
    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
      return {
        id: Date.now(),
        sender: 'support',
        text: 'Hello! Thank you for contacting Stratile Ltd. How can I assist you today?',
        time: new Date()
      };
    }

    // Check for services
    if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('do you provide')) {
      return {
        id: Date.now(),
        sender: 'support',
        text: 'Stratile Ltd offers comprehensive services including:\n\n- Marketing Activations\n- Creative Solutions\n- Advertising Solutions\n- Social Media Marketing\n- Community & Sports Engagement Events\n- Project Management\n\nWhich service are you interested in?',
        time: new Date()
      };
    }

    // Check for vision/mission
    if (lowerMessage.includes('vision') || lowerMessage.includes('mission') || lowerMessage.includes('purpose')) {
      return {
        id: Date.now(),
        sender: 'support',
        text: 'Our Vision: To be the leading project management organization that empowers individuals and communities.\n\nOur Mission: To deliver exceptional project management services that foster functional businesses and drive meaningful social development.',
        time: new Date()
      };
    }

    // Check for events
    if (lowerMessage.includes('event') || lowerMessage.includes('upcoming') || lowerMessage.includes('kanini')) {
      return {
        id: Date.now(),
        sender: 'support',
        text: 'Our upcoming event: Kanini Haraka Wholesalers and Distribution Marketing Package Promotion on May 30, 2025 in Naivasha. Would you like more details or to book a package?',
        time: new Date()
      };
    }

    // Check for contact
    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('phone')) {
      return {
        id: Date.now(),
        sender: 'support',
        text: 'You can reach us at:\n\nPhone: 0741953190\nEmail: labanmwangi444@gmail.com\n\nWould you like me to connect you with a human representative?',
        time: new Date()
      };
    }

    // Check for project management
    if (lowerMessage.includes('project') || lowerMessage.includes('management') || lowerMessage.includes('pmo')) {
      return {
        id: Date.now(),
        sender: 'support',
        text: 'We provide end-to-end project management from conceptualization to execution. Our services include stakeholder management, community engagement, and ensuring sustainable outcomes. Would you like to discuss a specific project?',
        time: new Date()
      };
    }

    // Default response
    return {
      id: Date.now(),
      sender: 'support',
      text: 'Thank you for your message. I can help with information about our services, upcoming events, or connect you with human support if needed. Could you please specify your question?',
      time: new Date()
    };
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  return (
    <>
      <Box position="fixed" bottom="6" right="6" zIndex="999">
        {!isOpen ? (
         <IconButton
  aria-label="Open live chat"
  icon={
    <Box position="relative" width="24px" height="24px">
      {/* Robot head */}
      <Box 
        position="absolute"
        width="20px"
        height="16px"
        bg="gray.300"
        borderRadius="4px"
        top="4px"
        left="2px"
      />
      
      {/* Robot eyes */}
      <Box 
        position="absolute"
        width="4px"
        height="4px"
        bg="green.500"
        borderRadius="full"
        top="6px"
        left="6px"
      />
      <Box 
        position="absolute"
        width="4px"
        height="4px"
        bg="green.500"
        borderRadius="full"
        top="6px"
        left="14px"
      />
      
      {/* Robot mouth */}
      <Box 
        position="absolute"
        width="12px"
        height="2px"
        bg="gray.500"
        borderRadius="full"
        top="12px"
        left="6px"
      />
      
      {/* Headphones */}
      <Box 
        position="absolute"
        width="24px"
        height="8px"
        border="2px solid"
        borderColor="gray.500"
        borderRadius="12px"
        top="0px"
        left="0px"
      />
      <Box 
        position="absolute"
        width="6px"
        height="6px"
        border="2px solid"
        borderColor="gray.500"
        borderRadius="full"
        top="1px"
        left="-3px"
      />
      <Box 
        position="absolute"
        width="6px"
        height="6px"
        border="2px solid"
        borderColor="gray.500"
        borderRadius="full"
        top="1px"
        right="-3px"
      />
    </Box>
  }
  onClick={onOpen}
  colorScheme="green"
  size="lg"
  isRound
  boxShadow="lg"
  bg="gray.100"
  _hover={{ bg: "gray.200" }}
/>
        ) : (
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            rounded="lg"
            boxShadow="xl"
            width={{ base: '90vw', md: '400px' }}
            maxH="70vh"
            display="flex"
            flexDirection="column"
          >
            <Box
              bg="green.500"
              color="white"
              p={3}
              borderTopRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontWeight="bold">
                {awaitingHuman ? 'Connecting to support...' : 'Stratile Support'}
              </Text>
              <IconButton
                aria-label="Close chat"
                icon={<Icon as={FiX} />}
                onClick={() => {
                  onClose();
                  setAwaitingHuman(false);
                }}
                variant="ghost"
                color="white"
                size="sm"
              />
            </Box>

            <Box
              flex="1"
              p={4}
              overflowY="auto"
              bg={useColorModeValue('gray.50', 'gray.700')}
            >
              {chatMessages.map((msg) => (
                <Box
                  key={msg.id}
                  mb={4}
                  alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
                  maxW="80%"
                >
                  <Box
                    bg={msg.sender === 'user' ? 'green.500' : useColorModeValue('white', 'gray.600')}
                    color={msg.sender === 'user' ? 'white' : useColorModeValue('gray.800', 'white')}
                    px={4}
                    py={2}
                    rounded="lg"
                    boxShadow="sm"
                    whiteSpace="pre-line"
                  >
                    <Text>{msg.text}</Text>
                    <Text
                      fontSize="xs"
                      color={msg.sender === 'user' ? 'green.100' : useColorModeValue('gray.500', 'gray.300')}
                      textAlign="right"
                      mt={1}
                    >
                      {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Text>
                  </Box>
                </Box>
              ))}
              <div ref={messagesEndRef} />
            </Box>

            <Box p={3} borderTopWidth="1px">
              <HStack>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={handleKeyPress}
                  resize="none"
                  rows={1}
                />
                <Button
                  colorScheme="green"
                  onClick={handleSendMessage}
                  isDisabled={!message.trim()}
                >
                  Send
                </Button>
              </HStack>
              {!awaitingHuman && (
                <Text mt={2} fontSize="sm" textAlign="center" color="gray.500">
                  Type "human" to connect with a support representative
                </Text>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </>
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
    }, 10000); // Change image every 5 seconds

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
  const images = [
    "/static/images/inner1.jpg",
    "/static/images/inner2.jpg",
    "/static/images/inner3.jpg",
    "/static/images/inner4.jpg",
    "/static/images/inner5.jpg",
    "/static/images/inner6.jpg"
  ];
  
 const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

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

      {/* Our Values Section */}
      <HighlightsItem title="Our Values">
        <VStack alignItems="flex-start" spacing="4">
          <Box>
            <Text fontWeight="bold" fontSize="lg">● Partnership:</Text>
            <Text color="muted" fontSize="md" pl="4">
              We believe in fostering strong, collaborative relationships with our clients,
              stakeholders, and the communities we serve. Working together is key to achieving shared
              success.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">● Coherent Relationships:</Text>
            <Text color="muted" fontSize="md" pl="4">
              We prioritize clear communication, mutual respect, and
              transparent engagement to build trust and ensure seamless project execution.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">● Unity:</Text>
            <Text color="muted" fontSize="md" pl="4">
              We champion a unified approach, bringing together diverse talents and
              perspectives to achieve common goals and create a stronger collective impact.
            </Text>
          </Box>
        </VStack>
      </HighlightsItem>

    
   <HighlightsTestimonialItem colSpan={[1, null, 2]} title="">
  <Box
    position="relative"
    overflow="hidden"
    height="400px"       // Set explicit height
    width="100%"         // Ensure full width
    border="none"        // ✅ Remove any default border if applied
    p="0"                // ✅ Remove any default padding
    m="0"                // ✅ Remove any default margin
  >
    {images.map((image, index) => (
      <Box
        key={index}
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        opacity={index === currentIndex ? 1 : 0}
        transition="opacity 1s ease-in-out"
      >
        <Image
          src={image}
          alt={`Slide ${index + 1}`}
          fill
          style={{
            objectFit: 'cover',     // ✅ Image fills container proportionally
            objectPosition: 'center',
          }}
        />
      </Box>
    ))}
  </Box>
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
      as="section"
      maxW="8xl"
      mx="auto"
      px={[4, 6, 8, 10]}
      py={[12, 16, 20]}
      position="relative"
      overflow="hidden"
      
    >
      {/* Decorative elements */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        w="400px"
        h="400px"
        bgGradient="radial(green.400, transparent 70%)"
        opacity={0.1}
        borderRadius="full"
        zIndex="-1"
      />
      <Box
        position="absolute"
        bottom="-150px"
        left="-150px"
        w="500px"
        h="500px"
        bgGradient="radial(blue.400, transparent 70%)"
        opacity={0.1}
        borderRadius="full"
        zIndex="-1"
      />
      
      {/* Header Section */}
      <Box 
        textAlign="center" 
        mb={[10, 12, 16]}
        maxW="4xl"
        mx="auto"
      >
        <Text
          fontSize={['sm', 'md']}
          fontWeight="semibold"
          color={useColorModeValue('green.500', 'green.400')}
          letterSpacing="wide"
          textTransform="uppercase"
          mb={3}
        >
          Stratile Services
        </Text>
        
        <Heading
          as="h2"
          fontSize={['3xl', '4xl', '5xl', '6xl']}
          fontWeight="bold"
          lineHeight="1.1"
          letterSpacing="tight"
          mb={6}
          position="relative"
          _after={{
            content: '""',
            position: 'absolute',
            width: ['60px', '80px'],
            height: '4px',
            bottom: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            bg: useColorModeValue('green.500', 'green.400'),
            borderRadius: 'full',
          }}
        >
          <Box 
            as="span" 
            display="block"
            bgGradient={useColorModeValue(
              'linear(to-r, gray.800, gray.700)',
              'linear(to-r, gray.100, gray.200)'
            )}
            bgClip="text"
          >
            Comprehensive Solutions
          </Box>
          <Box 
            as="span" 
            display="block"
            bgGradient={useColorModeValue(
              'linear(to-r, green.500, teal.500)',
              'linear(to-r, green.300, teal.300)'
            )}
            bgClip="text"
          >
            Tailored for Your Success
          </Box>
        </Heading>
        
        <Text
          fontSize={['lg', 'xl']}
          color={useColorModeValue('gray.600', 'gray.300')}
          maxW="2xl"
          mx="auto"
          lineHeight="1.6"
        >
          Stratile Ltd offers a comprehensive suite of project management services designed to meet the unique needs of our clients and the communities we support.
        </Text>
      </Box>
      
      {/* Features Section */}
      <SimpleGrid
        columns={[1, 2, 3]}
        spacing={[8, 10, 12]}
        mb={[12, 16, 20]}
      >
        {[
          {
            title: 'Marketing Activations',
            icon: FiTrendingUp,
            description: 'Our trained sales force team delivers direct customer engagement and increased sales for your brand.',
          },
          {
            title: 'Creative Solutions',
            icon: FiGrid,
            description: 'Graphic design services that enhance your brand messaging with visually compelling assets.',
          },
          {
            title: 'Advertising Solutions',
            icon: FiShare2,
            description: 'Strategic campaigns across digital, print, and outdoor channels to maximize your reach.',
          },
          {
            title: 'Social Media Marketing',
            icon: FiUsers,
            description: 'Comprehensive strategy development, content creation, and performance tracking.',
          },
          {
            title: 'Community & Sports Engagement',
            icon: FiShoppingBag,
            description: 'Interactive events designed to build strong community ties and boost brand presence.',
          },
          {
            title: 'Project Conceptualization',
            icon: FiLayers,
            description: 'We work closely with stakeholders to define project objectives, scope, and deliverables.',
          },
        ].map((feature, index) => (
          <Box
            key={index}
            bg={useColorModeValue('white', 'gray.800')}
            p={[6, 8]}
            borderRadius="xl"
            boxShadow={useColorModeValue('0 4px 24px rgba(0, 0, 0, 0.08)', '0 4px 24px rgba(0, 0, 0, 0.2)')}
            border="1px solid"
            borderColor={useColorModeValue('gray.100', 'gray.700')}
            transition="all 0.3s ease"
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: useColorModeValue('0 8px 32px rgba(0, 0, 0, 0.12)', '0 8px 32px rgba(0, 0, 0, 0.3)'),
              borderColor: useColorModeValue('green.300', 'green.400'),
            }}
            textAlign="center"
          >
            <Center
              w="16"
              h="16"
              mx="auto"
              mb={6}
              bg={useColorModeValue('green.50', 'green.900')}
              color={useColorModeValue('green.500', 'green.300')}
              borderRadius="xl"
            >
              <Icon as={feature.icon} boxSize={6} />
            </Center>
            <Heading
              as="h3"
              fontSize={['xl', '2xl']}
              fontWeight="semibold"
              mb={4}
              color={useColorModeValue('gray.800', 'white')}
            >
              {feature.title}
            </Heading>
            <Text
              fontSize={['md', 'lg']}
              color={useColorModeValue('gray.600', 'gray.300')}
              lineHeight="1.6"
            >
              {feature.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      
      {/* CTA Section */}
      <Box textAlign="center">
        <Button 
          onClick={openBookingForm}
          colorScheme="green"
          size="lg"
          px={10}
          py={7}
          fontSize="lg"
          fontWeight="semibold"
          borderRadius="xl"
          boxShadow="0 4px 16px rgba(72, 187, 120, 0.3)"
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(72, 187, 120, 0.4)',
          }}
          transition="all 0.3s ease"
        >
          Book Our Services
        </Button>
        <Text
          mt={4}
          color={useColorModeValue('gray.500', 'gray.400')}
          fontSize="sm"
        >
          Get a custom quote tailored to your specific needs
        </Text>
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
  const { 
    isOpen: isInfoOpen, 
    onOpen: onInfoOpen, 
    onClose: onInfoClose 
  } = useDisclosure();
  
  const { 
    isOpen: isBookingOpen, 
    onOpen: onBookingOpen, 
    onClose: onBookingClose 
  } = useDisclosure();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    package: 'premium', // default to premium
    message: 'I want to register for the Naivasha Event Marketing Package'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '254741953190';
    const packageDetails = formData.package === 'premium' 
      ? 'Premium Package (Ksh 45,000)' 
      : 'Basic Package (Ksh 20,000)';
    const message = `New Registration for Naivasha Event:\n\n*Name:* ${formData.name}\n*Company:* ${formData.company}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Package:* ${packageDetails}\n*Message:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    onBookingClose();
  };

  const handleProceedToBook = (packageType) => {
    setFormData(prev => ({ ...prev, package: packageType }));
    onInfoClose();
    onBookingOpen();
  };

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
            <Heading size="lg" mb="4">Kanini Opening Activations</Heading>
            <Text color="muted" mb="2"><strong>Date:</strong> May 30, 2025</Text>
            <Text color="muted" mb="2"><strong>Location:</strong> Naivasha Town, Dubai Plaza, Opposite Modern Market, Next to Ketias Supermarket</Text>
            <Text mb="4">Join us as we bring the energy to the new Kanini opening,
We will offer VR gaming to help engage consumers
If you want custom data report on your brand review (how customers felt about your product ).</Text>
            <Button 
              onClick={onInfoOpen}
              colorScheme="green" 
              rightIcon={<FiArrowRight />}
            >
              Book Now
            </Button>
          </Box>
        </Stack>
        
        <Box textAlign="center" pt="8">
          <ButtonLink colorScheme="primary" size="lg" href="/events">
            View All Events
          </ButtonLink>
        </Box>
      </Stack>

      {/* Information Modal */}
      <Modal isOpen={isInfoOpen} onClose={onInfoClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p="0">
            <Container maxW="container.lg" py="10">
              <Stack spacing="8">
                <Box>
                  <Heading size="2xl" mb="4">Marketing Package Promotion</Heading>
                  <Text fontSize="xl" color="blue.500" fontWeight="bold">Naivasha Event – Friday 30th May 2025</Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
                  {/* Premium Package */}
                  <Box bg="blue.50" p="6" borderRadius="lg" borderLeft="4px" borderColor="blue.500">
                    <Heading size="lg" mb="4" color="blue.700">Premium Package</Heading>
                    <Text fontSize="xl" fontWeight="bold" mb="2">Price: Ksh 45,000</Text>
                    
                    <UnorderedList spacing="3" fontSize="lg">
                      <ListItem>
                        <strong>250+ expected client engagements</strong> - Get direct access to a large audience
                      </ListItem>
                      <ListItem>
                        <strong>VR Gaming Activation</strong> - Attract more visitors with VR experiences
                      </ListItem>
                      <ListItem>
                        <strong>Dedicated Merchandising Table</strong> - Prime location for your products
                      </ListItem>
                      <ListItem>
                        <strong>Brand Visibility</strong> - Logo in all event marketing materials
                      </ListItem>
                      <ListItem>
                        <strong>Social Media Coverage</strong> - Included in our promotions
                      </ListItem>
                      <ListItem>
                        <strong>Lead Generation</strong> - Attendee contact information provided
                      </ListItem>
                    </UnorderedList>
                  </Box>

                  {/* Basic Package */}
                  <Box bg="gray.50" p="6" borderRadius="lg" borderLeft="4px" borderColor="gray.400">
                    <Heading size="lg" mb="4" color="gray.700">Basic Package</Heading>
                    <Text fontSize="xl" fontWeight="bold" mb="2">Price: Ksh 20,000</Text>
                    
                    <UnorderedList spacing="3" fontSize="lg">
                      <ListItem>
                        <strong>100 expected client engagements</strong> - Smaller audience access
                      </ListItem>
                      <ListItem>
                        <strong>Shared Merchandising Space</strong> - Display area with other brands
                      </ListItem>
                      <ListItem>
                        <strong>Basic Brand Visibility</strong> - Logo on select marketing materials
                      </ListItem>
                      <ListItem>
                        <strong>Limited Social Media Mention</strong> - Secondary inclusion
                      </ListItem>
                      <ListItem>
                        <strong>Self-Managed Lead Collection</strong> - Bring your own collection system
                      </ListItem>
                      <ListItem>
                        <strong>No VR Activation</strong> - Standard booth setup only
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </SimpleGrid>

                <Box>
                  <Heading size="lg" mb="4">Why This Event?</Heading>
                  <Text mb="4">
                    The Kanini Haraka Wholesalers and Distribution event is the premier gathering for industry professionals in Naivasha. 
                    With over 500 expected attendees, this is a unique opportunity to connect with retailers, distributors, and suppliers 
                    in a high-energy environment.
                  </Text>
                  <Text mb="4">
                    Our marketing packages are designed to fit different budgets while maximizing your brand's exposure. 
                    The Premium package with VR Gaming activation increases booth traffic by up to 300% at similar events.
                  </Text>
                </Box>

                <Box>
                  <Heading size="lg" mb="4">Frequently Asked Questions</Heading>
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex='1' textAlign='left'>
                            What's the difference between the packages?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        The Premium package offers more visibility, exclusive benefits like VR activation, 
                        dedicated space, and full lead generation services. The Basic package provides 
                        essential exposure at a lower cost with shared space and self-managed lead collection.
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex='1' textAlign='left'>
                            Can we upgrade from Basic to Premium later?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Yes, upgrades are possible based on availability. However, early booking guarantees 
                        better placement and inclusion in all marketing materials.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6" textAlign="center" py="4">
                  <Box>
                    <Button 
                      colorScheme="green" 
                      size="lg" 
                      onClick={() => handleProceedToBook('premium')}
                      rightIcon={<FiArrowRight />}
                      px="8"
                      py="6"
                      fontSize="xl"
                    >
                      Book Premium (45K)
                    </Button>
                  </Box>
                  <Box>
                    <Button 
                      colorScheme="blue" 
                      size="lg" 
                      onClick={() => handleProceedToBook('basic')}
                      rightIcon={<FiArrowRight />}
                      px="8"
                      py="6"
                      fontSize="xl"
                    >
                      Book Basic (20K)
                    </Button>
                  </Box>
                </SimpleGrid>
              </Stack>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Booking Form Modal */}
      <Modal isOpen={isBookingOpen} onClose={onBookingClose} size="lg">
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

                <FormControl isRequired>
                  <FormLabel>Package Selection</FormLabel>
                  <Select 
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                  >
                    <option value="premium">Premium Package (Ksh 45,000)</option>
                    <option value="basic">Basic Package (Ksh 20,000)</option>
                  </Select>
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
              <Button variant="ghost" mr={3} onClick={onBookingClose}>
                Cancel
              </Button>
              <Button 
                colorScheme="green" 
                type="submit"
                rightIcon={<FiCheck />}
              >
                Send via WhatsApp
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
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
