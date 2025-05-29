import {   
  Box,     
  Card,
  CardProps,
  Grid,
  GridItem,
  GridItemProps,
  Heading,
  useTheme,
} from '@chakra-ui/react'
import { transparentize } from '@chakra-ui/theme-tools'

import { Section, SectionProps } from '#components/section'
import { Testimonial, TestimonialProps } from '#components/testimonials'

export interface HighlightBoxProps
  extends GridItemProps,
    Omit<CardProps, 'title'> {}

export const HighlightsItem: React.FC<HighlightBoxProps> = (props) => {
  const { children, title, ...rest } = props
  return (
    <GridItem
      as={Card}
      borderRadius="md"
      p="8"
      flex="1 0"
      alignItems="flex-start"
      spacing="8"
      overflow="hidden"
      position="relative"
      borderWidth="1px"
      borderColor="blue.400" // Added blue border
      bg="white"
      _dark={{ 
        bg: 'gray.800',
        borderColor: 'blue.300' // Lighter blue in dark mode
      }}
      _hover={{
        borderColor: 'blue.500', // Darker blue on hover
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
      }}
      transition="all 0.2s"
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
  HighlightBoxProps & Partial<TestimonialProps> & { gradient?: [string, string] }
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

  return (
    <HighlightsItem
      justifyContent="center"
      borderColor="blue.400"
      _dark={{
        borderColor: 'blue.300',
        _hover: {
          borderColor: 'blue.400',
        },
      }}
      _hover={{
        borderColor: 'blue.500',
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
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
      {name && description && avatar ? (
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
      ) : (
        children
      )}
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
