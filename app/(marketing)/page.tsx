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
import { Features } from '#components/features'
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
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <HighlightsSection />
      <ServicesSection />
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
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              
                Transforming Visions
                <Br /> Into Reality
             
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Stratile Ltd is a <Em>Project Management Organization</Em>
                <Br /> dedicated to building thriving businesses and
                <Br /> impactful community development initiatives.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <Text fontSize="lg" fontWeight="medium">
                  Partnership | Coherent Relationships | Unity
                </Text>
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/services">
                  Explore Services
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/contact"
                  variant="outline"
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
                  Contact Us
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/images/stratile-team.jpg"
                  width={1200}
                  height={762}
                  alt="Stratile team working together"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 3]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Project Management',
            icon: FiLayers,
            description: 'From conceptualization to execution, we guide your project to success.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Community Development',
            icon: FiUsers,
            description: 'We organize impactful activities that foster social development.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Strategic Partnerships',
            icon: FiTool,
            description: 'Building collaborative relationships for shared success.',
            iconPosition: 'left',
            delay: 1,
          },
        ]}
        reveal={FallInPlace}
      />
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
          To embody the values of partnership, coherent relationships, and unity in delivering exceptional project management services that foster functional businesses and drive meaningful social development.
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
