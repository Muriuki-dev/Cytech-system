'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
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
import * as React from 'react'
import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'

import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
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
     
      <EventsSection />
      <TestimonialsSection />
      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
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
                  href="/signup"
                  width={{ base: "full", md: "auto" }}
                >
                  Explore our services 
                </ButtonLink>
                <ButtonLink
                  size={{ base: "md", md: "lg" }}
                  href="/"
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
                >
                  Contact us
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
        </Stack>
      </Container>
    </Box>
  )
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
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
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
  return (
    <Features
      id="services"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Our Comprehensive
          <Br /> Service Offerings
        </Heading>
      }
      description={
        <>
          Stratile provides a wide range of services to meet your business and community development needs.
          <Br />
          Explore how we can help you achieve your goals.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Marketing Activations',
          icon: FiTrendingUp,
          description: 'Our trained sales force team delivers direct customer engagement and increased sales for your brand.',
          variant: 'inline',
        },
        {
          title: 'Creative Solutions',
          icon: FiGrid,
          description: 'Graphic design services that enhance your brand messaging with visually compelling assets.',
          variant: 'inline',
        },
        {
          title: 'Advertising Solutions',
          icon: FiShare2,
          description: 'Strategic campaigns across digital, print, and outdoor channels to maximize your reach.',
          variant: 'inline',
        },
        {
          title: 'Social Media Marketing',
          icon: FiUsers,
          description: 'Comprehensive strategy development, content creation, and performance tracking.',
          variant: 'inline',
        },
        {
          title: 'Merchandising Services',
          icon: FiShoppingBag,
          description: 'POS materials and display solutions that optimize product placement and brand visibility.',
          variant: 'inline',
        },
        {
          title: 'Project Management',
          icon: FiLayers,
          description: 'End-to-end project support from conceptualization to execution and stakeholder management.',
          variant: 'inline',
        },
      ]}
    />
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
          <Box flex="1" p="6" borderWidth="1px" borderRadius="lg">
            <Heading size="lg" mb="4">Trade Show 2025</Heading>
            <Text color="muted" mb="2"><strong>Date:</strong> June 15-17, 2025</Text>
            <Text color="muted" mb="2"><strong>Location:</strong> Nairobi Convention Center</Text>
            <Text mb="4">Join us for the premier industry event showcasing innovative products and services.</Text>
            <ButtonLink href="/events/trade-show-2025" rightIcon={<FiArrowRight />}>
              Learn More
            </ButtonLink>
          </Box>

          <Box flex="1" p="6" borderWidth="1px" borderRadius="lg">
            <Heading size="lg" mb="4">Community Development Initiative</Heading>
            <Text color="muted" mb="2"><strong>Launching:</strong> July 2025</Text>
            <Text color="muted" mb="2"><strong>Location:</strong> Multiple Counties</Text>
            <Text mb="4">Our new initiative to empower local communities through sustainable development projects.</Text>
            <ButtonLink href="/projects/community-development" rightIcon={<FiArrowRight />}>
              Explore Opportunities
            </ButtonLink>
          </Box>

          <Box flex="1" p="6" borderWidth="1px" borderRadius="lg">
            <Heading size="lg" mb="4">Brand Expo</Heading>
            <Text color="muted" mb="2"><strong>Date:</strong> August 5-7, 2025</Text>
            <Text color="muted" mb="2"><strong>Location:</strong> Sarit Center</Text>
            <Text mb="4">Showcase your brand to thousands of potential customers at this annual exhibition.</Text>
            <ButtonLink href="/events/brand-expo" rightIcon={<FiArrowRight />}>
              Reserve Your Spot
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
      title="What Our Partners Say"
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
