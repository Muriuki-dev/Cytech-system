import {
  Box,
  BoxProps,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Icon,
} from '@chakra-ui/react'
import { Link, LinkProps } from '@saas-ui/react'
import { FaPhone, FaEnvelope } from 'react-icons/fa' // Importing icons
import siteConfig from '#data/config'

export interface FooterProps extends BoxProps {
  columns?: number
}

export const Footer: React.FC<FooterProps> = (props) => {
  const { columns = 2, ...rest } = props
  return (
    <Box bg="white" _dark={{ bg: 'gray.900' }} {...rest}>
      <Container maxW="container.2xl" px="8" py="8">
        <SimpleGrid columns={columns}>
          <Stack spacing="8">
            <Stack alignItems="flex-start">
              <Flex>
  <Box as={siteConfig.logo} w="full" h="80px" />
</Flex>

              <Text fontSize="md" color="muted">
                {siteConfig.seo.description}
              </Text>
              {/* Add contact information with icons */}
              <Stack spacing="3" mt="2">
                <HStack>
                  <Icon as={FaPhone} color="muted" boxSize="4" />
                  <Text fontSize="sm" color="muted">
                    070-000-000
                  </Text>
                </HStack>
                <HStack>
                  <Icon as={FaEnvelope} color="muted" boxSize="4" />
                  <Text fontSize="sm" color="muted">
                    contact@stratile.com
                  </Text>
                </HStack>
              </Stack>
            </Stack>
            <Copyright>{siteConfig.footer.copyright}</Copyright>
          </Stack>
          <HStack justify="flex-end" spacing="4" alignSelf="flex-end">
            {siteConfig.footer?.links?.map(({ href, label }) => (
              <FooterLink key={href} href={href}>
                {label}
              </FooterLink>
            ))}
          </HStack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export interface CopyrightProps {
  title?: React.ReactNode
  children: React.ReactNode
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

export const FooterLink: React.FC<LinkProps> = (props) => {
  const { children, ...rest } = props
  return (
    <Link
      color="muted"
      fontSize="sm"
      textDecoration="none"
      _hover={{
        color: 'white',
        transition: 'color .2s ease-in',
      }}
      {...rest}
    >
      {children}
    </Link>
  )
}
