import { HStack, Flex, useColorModeValue } from '@chakra-ui/react'
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
      flex="1"
      justify={{ base: 'flex-start', lg: 'center' }} // 👈 Center nav on lg+
      align="center"
    >
      <HStack spacing="6" flexShrink={0}>
        {siteConfig.header.links.map(({ href, id, ...props }, i) => {
          const isActive =
            (id && activeId === id) ||
            (href && !!path?.match(new RegExp(href)))

          return (
            <NavLink
              display={['none', null, 'block']}
              href={href || `/#${id}`}
              key={i}
              color={isActive ? activeColor : linkColor} // 👈 dynamic color
              fontWeight={isActive ? 'bold' : 'medium'}
              {...props}
            >
              {props.label}
            </NavLink>
          )
        })}

        {/* Theme toggle adapts automatically */}
        <ThemeToggle />

        {/* Mobile nav only visible on small screens */}
        <MobileNavButton
          ref={mobileNavBtnRef}
          aria-label="Open Menu"
          onClick={mobileNav.onOpen}
        />

        <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
      </HStack>
    </Flex>
  )
}

export default Navigation
