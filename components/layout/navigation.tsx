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
  Box,
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
const MotionBox = motion(Box)

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

  // Light/Dark adaptive colors
  const activeColor = useColorModeValue('purple.600', 'purple.300')
  const linkColor = useColorModeValue('gray.700', 'gray.200')
  const menuBg = useColorModeValue('white', 'gray.800')
  const hoverBg = useColorModeValue('purple.50', 'purple.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.3)')

  return (
    <Box 
      position="sticky" 
      top="0" 
      zIndex="sticky" 
      bg={useColorModeValue('rgba(255, 255, 255, 0.95)', 'rgba(26, 32, 44, 0.95)')}
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor={borderColor}
      py={2}
    >
      <Flex w="100%" align="center" maxW="1200px" mx="auto" px={4}>
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
                    <Box position="relative">
                      <MenuButton
                        as={Button}
                        variant="ghost"
                        fontWeight={isActive ? 'bold' : 'medium'}
                        color={isActive ? activeColor : linkColor}
                        rightIcon={
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <FiChevronDown />
                          </motion.div>
                        }
                        _hover={{ 
                          bg: hoverBg,
                          transform: 'translateY(-2px)',
                          boxShadow: 'md'
                        }}
                        _active={{ bg: hoverBg }}
                        transition="all 0.2s"
                      >
                        {link.label}
                      </MenuButton>
                      <AnimatePresence>
                        {isOpen && (
                          <MotionMenuList
                            bg={menuBg}
                            borderRadius="lg"
                            boxShadow={`0 10px 30px ${shadowColor}`}
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            position="absolute"
                            zIndex="dropdown"
                            overflow="hidden"
                            py={2}
                            minW="200px"
                          >
                            {link.children.map((child, idx) => (
                              <MotionBox
                                key={idx}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                              >
                                <MenuItem 
                                  as="a" 
                                  href={child.href}
                                  _hover={{ bg: hoverBg }}
                                  py={3}
                                  px={5}
                                  transition="all 0.2s"
                                >
                                  {child.label}
                                </MenuItem>
                              </MotionBox>
                            ))}
                          </MotionMenuList>
                        )}
                      </AnimatePresence>
                    </Box>
                  )}
                </Menu>
              )
            }

            return (
              <MotionBox
                key={i}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <NavLink
                  href={link.href || '#'}
                  color={isActive ? activeColor : linkColor}
                  fontWeight={isActive ? 'bold' : 'medium'}
                  position="relative"
                  _hover={{ textDecoration: 'none' }}
                  _after={{
                    content: '""',
                    position: 'absolute',
                    width: isActive ? '100%' : '0%',
                    height: '2px',
                    bottom: '-4px',
                    left: 0,
                    bg: activeColor,
                    transition: 'width 0.3s ease',
                  }}
                  _hover={{
                    _after: {
                      width: '100%'
                    }
                  }}
                >
                  {link.label}
                </NavLink>
              </MotionBox>
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
    </Box>
  )
}

export default Navigation
