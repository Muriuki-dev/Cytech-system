'use client'

import { Flex, HStack, useColorModeValue } from '@chakra-ui/react'
import { useDisclosure, useUpdateEffect } from '@chakra-ui/react'
import { useScrollSpy } from 'hooks/use-scrollspy'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { MobileNavButton } from '#components/mobile-nav'
import { MobileNavContent } from '#components/mobile-nav'
import { NavLink } from '#components/nav-link'
import siteConfig from '#data/config'
import ThemeToggle from './theme-toggle'

const Navigation: React.FC = () => {
  const mobileNav = useDisclosure()
  const path = usePathname()

  const activeId = useScrollSpy(
    siteConfig.header.links
      .filter(({ id }) => id)
      .map(({ id }) => `[id="${id}"]`),
    { threshold: 0.75 },
  )

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>(null)

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  // Light/Dark adaptive link colors
  const activeColor = useColorModeValue('purple.600', 'purple.300')
  const linkColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Flex w="100%" align="center">
      {/* Centered nav on lg+; hidden on mobile */}
      <HStack
        spacing="6"
        display={{ base: 'none', lg: 'flex' }}
        flex="1"
        justify="center"
      >
        {siteConfig.header.links.map(({ href, id, ...props }, i) => {
          const isActive =
            (id && activeId === id) ||
            (href && !!path?.match(new RegExp(href)))

          return (
            <NavLink
              key={i}
              href={href || `/#${id}`}
              color={isActive ? activeColor : linkColor}
              fontWeight={isActive ? 'bold' : 'medium'}
              {...props}
            >
              {props.label}
            </NavLink>
          )
        })}
      </HStack>

      {/* Right side: Theme toggle + Hamburger (hamburger only on mobile) */}
      <HStack spacing="4" ml="auto">
        <ThemeToggle />

        <MobileNavButton
          ref={mobileNavBtnRef}
          aria-label="Open Menu"
          onClick={mobileNav.onOpen}
          display={{ base: 'flex', lg: 'none' }} // right-aligned on mobile
        />
      </HStack>

      {/* Mobile drawer */}
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </Flex>
  )
}

export default Navigation
