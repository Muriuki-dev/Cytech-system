import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  useBreakpointValue,
  Flex,
  Image
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'

interface HeroProps {
  title?: React.ReactNode
  description?: React.ReactNode
  parallaxValue?: number
}

export const Hero = ({ title, description, parallaxValue = 0 }: HeroProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <Box as="section" position="relative" py={{ base: 32, md: 48 }} px={4} overflow="hidden">
      {/* Background gradient overlay */}
      <Box
        position="absolute"
        inset={0}
        zIndex={0}
        opacity={0.2}
        bgGradient="linear(to-r, purple.400, pink.400)"
      />

      <Box className="container" mx="auto" position="relative" zIndex={10}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          align="center"
          gap={8}
        >
          {/* Text content */}
          <Box w={{ base: '100%', md: '50%' }}>
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '5xl' }}
              fontWeight="bold"
              lineHeight="tight"
              mb={6}
              animation="fadeIn"
            >
              <Box color="purple.900">STRATILE LTD –</Box>
              <Box color="gray.800">PROJECTING SUCCESS,</Box>
              <Box color="gray.800">BUILDING COMMUNITIES</Box>
            </Heading>

            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              mb={8}
              lineHeight="relaxed"
              fontStyle="italic"
              animation="fadeIn"
            >
              Established in 2024, Stratile Ltd is a dynamic and forward-thinking Project Management Organization (PMO) dedicated to transforming visionary projects into thriving businesses and impactful community development initiatives. We serve as a catalyst for progress, providing expert guidance and comprehensive project management solutions that ensure successful execution and sustainable outcomes.
            </Text>

            <Stack direction="row" flexWrap="wrap" spacing={4} animation="fadeIn">
              <Button
                as="a"
                href="/signup"
                colorScheme="purple"
                size="lg"
                borderRadius="full"
                _hover={{ transform: 'scale(1.05)', shadow: 'lg' }}
              >
                Explore our services
              </Button>
              <Button
                as="a"
                href="/contact"
                variant="outline"
                colorScheme="purple"
                size="lg"
                borderRadius="full"
                rightIcon={<FaArrowRight />}
                _hover={{ bg: 'purple.50' }}
              >
                Contact us
              </Button>
            </Stack>
          </Box>

          {/* Image content (for desktop only) */}
          {!isMobile && (
            <Box w="50%" transform={`translateY(${parallaxValue}px)`}>
              <Box
                position="relative"
                w="full"
                h="600px"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="2xl"
              >
                <Image
                  src="/static/images/stratile-team.jpg"
                  alt="Stratile team working together"
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-t, blackAlpha.600, transparent)"
                />
              </Box>
            </Box>
          )}
        </Flex>
      </Box>
    </Box>
  )
}
