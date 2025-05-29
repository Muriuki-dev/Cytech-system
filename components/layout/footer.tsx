import {
  Box,
  BoxProps,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { Link, LinkProps } from '@saas-ui/react'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'
import { FiClock } from 'react-icons/fi'
import siteConfig from '#data/config'

export interface FooterProps extends BoxProps {
  columns?: number
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 4, ...rest } = props
  
  // Color mode values
  const bgColor = useColorModeValue('white', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const headingColor = useColorModeValue('gray.800', 'white')
  const hoverColor = useColorModeValue('purple.500', 'purple.300')
  
  // Theme colors
  const themeColors = {
    purple: useColorModeValue('purple.600', 'purple.300'),
    blue: useColorModeValue('blue.600', 'blue.300'),
    orange: useColorModeValue('orange.600', 'orange.300'),
    green: useColorModeValue('green.600', 'green.300'),
  }

  return (
    <Box 
      bg={bgColor}
      borderTopWidth="1px"
      borderTopColor={borderColor}
      position="relative"
      bottom="0"
      width="100%"
      {...rest}
    >
      <Container maxW="container.2xl" px={{ base: 4, md: 8 }} py={12}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: `repeat(${columns}, 1fr)`,
          }}
          gap={8}
          mb={12}
        >
          {/* Company Info Column */}
          <GridItem>
            <VStack align="flex-start" spacing={6}>
              <Flex>
                <Box as={siteConfig.logo} w="full" h="80px" />
              </Flex>
              <Text fontSize="md" color="muted">
                {siteConfig.seo.description}
              </Text>
              <Stack spacing={3}>
                <HStack>
                  <Icon as={FaMapMarkerAlt} color={themeColors.purple} boxSize="4" />
                  <Text fontSize="sm" color="muted">
                    Nairobi, Kenya
                  </Text>
                </HStack>
                <HStack>
                  <Icon as={FaPhone} color={themeColors.blue} boxSize="4" />
                  <Text fontSize="sm" color="muted">
                    0741953190
                  </Text>
                </HStack>
                <HStack>
                  <Icon as={FaEnvelope} color={themeColors.orange} boxSize="4" />
                  <Text fontSize="sm" color="muted">
                    labanmwangi444@gmail.com
                  </Text>
                </HStack>
                <HStack>
                  <Icon as={FiClock} color={themeColors.green} boxSize="4" />
                  <Text fontSize="sm" color="muted">
                    Mon-Fri: 9am-5pm
                  </Text>
                </HStack>
              </Stack>
            </VStack>
          </GridItem>

          {/* Quick Links Column */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                Quick Links
              </Text>
              <VStack align="flex-start" spacing={3}>
                <FooterLink href="/" color="muted" _hover={{ color: hoverColor }}>
                  About Us
                </FooterLink>
               
               
                <FooterLink href="/" color="muted" _hover={{ color: hoverColor }}>
                   Stratile Blog
                </FooterLink>
                <FooterLink href="/contact" color="muted" _hover={{ color: hoverColor }}>
                  Contact Us
                </FooterLink>
              </VStack>
            </VStack>
          </GridItem>

          {/* Services Column */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                Stratile Services
              </Text>
              <VStack align="flex-start" spacing={3}>
                <FooterLink href="/" color="muted" _hover={{ color: hoverColor }}>
                  Marketing Activations
                </FooterLink>
                <FooterLink href="/" color="muted" _hover={{ color: hoverColor }}>
                 Creative Solutions
                </FooterLink>
                <FooterLink href="/" color="muted" _hover={{ color: hoverColor }}>
                  Advertising Solutions
                </FooterLink>
                <FooterLink href="/" color="muted" _hover={{ color: hoverColor }}>
                 Social Media Marketing
                </FooterLink>
                <FooterLink href="/" color="muted" _hover={{ color: hoverColor }}>
                  Community & Sports Engagement
                </FooterLink>
                <FooterLink href="/" color="muted" _hover={{ color: hoverColor }}>
                  Project Conceptualization
                </FooterLink>
              </VStack>
            </VStack>
          </GridItem>

          {/* Newsletter Column */}
          <GridItem>
            <VStack align="flex-start" spacing={4}>
              <Text fontWeight="bold" fontSize="lg" color={headingColor}>
                Stratile Newsletter
              </Text>
              <Text fontSize="sm" color="muted">
                Subscribe to our newsletter for the latest updates.
              </Text>
              <Box as="form" w="full">
                <Flex direction={{ base: 'column', sm: 'row' }} gap={2}>
                  <Box
                    as="input"
                    type="email"
                    placeholder="Your email"
                    px={4}
                    py={2}
                    borderWidth="1px"
                    borderColor={borderColor}
                    rounded="md"
                    flex="1"
                    bg={useColorModeValue('white', 'gray.800')}
                    _focus={{
                      outline: 'none',
                      borderColor: themeColors.purple,
                    }}
                  />
                  <Box
                    as="button"
                    type="submit"
                    px={4}
                    py={2}
                    bg={themeColors.purple}
                    color="white"
                    rounded="md"
                    fontWeight="medium"
                    _hover={{
                      bg: useColorModeValue('purple.700', 'purple.400'),
                    }}
                  >
                    Subscribe
                  </Box>
                </Flex>
              </Box>
              
             
             
            </VStack>
          </GridItem>
        </Grid>

        {/* Bottom Footer */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          pt={8}
          borderTopWidth="1px"
          borderTopColor={borderColor}
        >
          <Copyright>{siteConfig.footer.copyright}</Copyright>
          
          <HStack spacing={6} mt={{ base: 4, md: 0 }}>
            {siteConfig.footer?.links?.map(({ href, label }) => (
              <FooterLink key={href} href={href} _hover={{ color: hoverColor }}>
                {label}
              </FooterLink>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export interface CopyrightProps {
  title?: React.ReactNode
  children: React.ReactNode
}

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Link
      fontSize="sm"
      textDecoration="none"
      _hover={{
        textDecoration: 'none',
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}

export const Copyright: React.FC<CopyrightProps> = ({
  title,
  children,
}: CopyrightProps) => {
  let content
  if (title && !children) {
    content = `&copy; ${new Date().getFullYear()} - ${title}`
  }
  return (
    <Text color="muted" fontSize="sm">
      {content || children}
    </Text>
  )
}

