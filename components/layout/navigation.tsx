import { HStack, Flex, useColorModeValue, Box } from '@chakra-ui/react'
import { useDisclosure, useUpdateEffect } from '@chakra-ui/react'
import { useScrollSpy } from 'hooks/use-scrollspy'
import { usePathname, useRouter } from 'next/navigation'

import * as React from 'react'

import { MobileNavButton } from '#components/mobile-nav'
import { MobileNavContent } from '#components/mobile-nav'
import { NavLink } from '#components/nav-link'
import siteConfig from '#data/config'

import ThemeToggle from './theme-toggle'

const Navigation: React.FC = () => {
  const mobileNav = useDisclosure()
  const router = useRouter()
  const path = usePathname()
  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    {
      threshold: 0.75,
    },
  )

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>()

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  // Dynamic colors for dark/light mode
  const activeColor = useColorModeValue('purple.600', 'purple.300')
  const linkColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
    >
      {/* Left: Logo */}
      <Box>
        <Box as={siteConfig.logo} h="40px" />
      </Box>

      {/* Center: Nav links (only visible on lg and up, centered) */}
      <HStack
        spacing="6"
        display={{ base: 'none', lg: 'flex' }}
        justify="center"
        flex="1"
      >
        {siteConfig.header.links.map(({ href, id, ...props }, i) => {
          const isActive =
            (id && activeId === id) ||
            (href && !!path?.match(new RegExp(href)))

          return (
            <NavLink
              href={href || `/#${id}`}
              key={i}
              color={isActive ? activeColor : linkColor}
              fontWeight={isActive ? 'bold' : 'medium'}
              {...props}
            >
              {props.label}
            </NavLink>
          )
        })}
      </HStack>

      {/* Right: Theme toggle + mobile menu */}
      <HStack spacing="4">
        <ThemeToggle />

        {/* Mobile nav only visible on small screens */}
        <MobileNavButton
          ref={mobileNavBtnRef}
          aria-label="Open Menu"
          onClick={mobileNav.onOpen}
          display={{ base: 'flex', lg: 'none' }} // hide on lg+
        />
      </HStack>

      {/* Mobile nav drawer */}
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </Flex>
  )
}

export default Navigation
