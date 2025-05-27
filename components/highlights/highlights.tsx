import {   
  Box,     
  Card,
  CardProps,
  Grid,
  GridItem,
  GridItemProps,
  Heading,
  useTheme,
  usePrefersReducedMotion,
} from '@chakra-ui/react'
import { transparentize } from '@chakra-ui/theme-tools'
import { useState, useEffect, useRef } from 'react'

import { Section, SectionProps } from '#components/section'
import { Testimonial, TestimonialProps } from '#components/testimonials'

export interface HighlightBoxProps
  extends GridItemProps,
    Omit<CardProps, 'title'> {}

export const HighlightsItem: React.FC<HighlightBoxProps> = (props) => {
  const { children, title, ...rest } = props
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [prefersReducedMotion])

  return (
    <GridItem
      ref={ref}
      as={Card}
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="flex-start"
      spacing="8"
      overflow="hidden"
      position="relative"
      borderWidth="1px"
      borderColor="blue.400"
      bg="white"
      transform={isVisible ? 'none' : 'translateX(-50px)'}
      opacity={isVisible ? 1 : 0}
      transition="all 0.6s ease-out, transform 0.6s ease-out, opacity 0.6s ease-out"
      _dark={{ 
        bg: 'gray.800',
        borderColor: 'blue.300'
      }}
      _hover={{
        borderColor: 'blue.500',
        transform: isVisible ? 'translateY(-2px)' : 'translateX(-50px) translateY(-2px)',
        boxShadow: 'lg',
      }}
      {...rest}
    >
      {title && (
        <Heading fontSize="3xl" mb="8">
          {title}
        </Heading>
      )}
      {children}
    </GridItem>
  )
}

export const HighlightsTestimonialItem: React.FC<
  HighlightBoxProps & TestimonialProps & { gradient: [string, string] }
> = (props) => {
  const {
    name,
    description,
    avatar,
    children,
    gradient = ['primary.500', 'secondary.500'],
    ...rest
  } = props
  const theme = useTheme()
  const prefersReducedMotion = usePrefersReducedMotion()
  const [isVisible, setIsVisible] = useState(prefersReducedMotion)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [prefersReducedMotion])

  return (
    <HighlightsItem
      ref={ref}
      justifyContent="center"
      borderColor="blue.400"
      transform={isVisible ? 'none' : 'translateX(-50px)'}
      opacity={isVisible ? 1 : 0}
      transition="all 0.6s ease-out, transform 0.6s ease-out, opacity 0.6s ease-out"
      _dark={{ 
        borderColor: 'blue.300',
        _hover: {
          borderColor: 'blue.400'
        }
      }}
      _hover={{
        borderColor: 'blue.500',
        transform: isVisible ? 'translateY(-2px)' : 'translateX(-50px) translateY(-2px)',
        boxShadow: 'lg'
      }}
      p="4"
      {...rest}
    >
      <Box
        bgGradient={`linear(to-br, ${transparentize(
          gradient[0],
          0.8,
        )(theme)}, ${transparentize(gradient[1], 0.8)(theme)})`}
        opacity="1"
        position="absolute"
        inset="0px"
        pointerEvents="none"
        zIndex="0"
        _dark={{ opacity: 0.5, filter: 'blur(50px)' }}
      />
      <Testimonial
        name={name}
        description={
          <Box as="span" color="whiteAlpha.700">
            {description}
          </Box>
        }
        avatar={avatar}
        border="0"
        bg="transparent"
        boxShadow="none"
        color="white"
        position="relative"
      >
        {children}
      </Testimonial>
    </HighlightsItem>
  )
}

export const Highlights: React.FC<SectionProps> = (props) => {
  const { children, ...rest } = props

  return (
    <Section
      innerWidth="container.xl"
      position="relative"
      overflow="hidden"
      {...rest}
    >
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
        gap={8}
        position="relative"
      >
        {children}
      </Grid>
    </Section>
  )
}
