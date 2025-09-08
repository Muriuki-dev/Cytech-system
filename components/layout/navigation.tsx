'use client'

import {
  Flex,
  HStack,
  useColorModeValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { useDisclosure, useUpdateEffect } from '@chakra-ui/react'
import { useScrollSpy } from 'hooks/use-scrollspy'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { MobileNavButton } from '#components/mobile-nav'
import { MobileNavContent } from '#components/mobile-nav'
import { NavLink } from '#components/nav-link'
import siteConfig from '#data/config'
import ThemeToggle from './theme-toggle'

const MotionMenuList = motion(MenuList)

const Navigation: React.FC = () => {
  const mobileNav = useDisclosure()
  const path = usePathname()

  // ✅ Fix: filter out empty selectors so querySelector never fails
  const activeId = useScrollSpy(
    siteConfig.header.links
      .map(({ href }) => (href ? `[href="${href}"]` : null))
      .filter(Boolean) as string[],
    { threshold: 0.75 },
  )

  const mobileNavBtnRef = React.useRef<HTMLButtonElement>(null)

  useUpdateEffect(() => {
    mobileNavBtnRef.current?.focus()
  }, [mobileNav.isOpen])

  // Light/Dark adaptive link colors
  const activeColor = useColorModeValue('purple.600', 'purple.300')
  const linkColor = useColorModeValue('gray.700', 'gray.200')
  const menuBg = useColorModeValue('white', 'gray.800')

  return (
    <Flex w="100%" align="center">
      {/* Desktop Nav */}
      <HStack
        spacing="6"
        display={{ base: 'none', lg: 'flex' }}
        flex="1"
        justify="center"
      >
        {siteConfig.header.links.map((link, i) => {
          const isActive = link.href
            ? !!path?.match(new RegExp(link.href))
            : false

          if (link.children) {
            return (
              <Menu key={i} isLazy>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      as={Button}
                      variant="ghost"
                      fontWeight={isActive ? 'bold' : 'medium'}
                      color={isActive ? activeColor : linkColor}
                      rightIcon={<FiChevronDown />}
                    >
                      {link.label}
                    </MenuButton>
                    <AnimatePresence>
                      {isOpen && (
                        <MotionMenuList
                          bg={menuBg}
                          borderRadius="lg"
                          boxShadow="xl"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link.children.map((child, idx) => (
                            <MenuItem key={idx} as="a" href={child.href}>
                              {child.label}
                            </MenuItem>
                          ))}
                        </MotionMenuList>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Menu>
            )
          }

          return (
            <NavLink
              key={i}
              href={link.href || '#'}
              color={isActive ? activeColor : linkColor}
              fontWeight={isActive ? 'bold' : 'medium'}
            >
              {link.label}
            </NavLink>
          )
        })}
      </HStack>

      {/* Right side: Theme toggle + Hamburger (mobile only) */}
      <HStack spacing="4" ml="auto">
        <ThemeToggle />

        <MobileNavButton
          ref={mobileNavBtnRef}
          aria-label="Open Menu"
          onClick={mobileNav.onOpen}
          display={{ base: 'flex', lg: 'none' }}
        />
      </HStack>

      {/* Mobile Drawer */}
      <MobileNavContent isOpen={mobileNav.isOpen} onClose={mobileNav.onClose} />
    </Flex>
  )
}

export default Navigation
