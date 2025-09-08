'use client'

import {
  Box,
  CloseButton,
  Flex,
  HStack,
  Stack,
  useBreakpointValue,
  useColorModeValue,
  useUpdateEffect,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import useRouteChanged from 'hooks/use-route-changed'
import { usePathname } from 'next/navigation'
import { RemoveScroll } from 'react-remove-scroll'
import * as React from 'react'

import { Logo } from '#components/layout/logo'
import siteConfig from '#data/config'

const MotionMenuList = motion(MenuList)

interface MobileNavContentProps {
  isOpen?: boolean
  onClose?: () => void
}

export function MobileNavContent(props: MobileNavContentProps) {
  const { isOpen, onClose = () => {} } = props
  const closeBtnRef = React.useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  const bgColor = useColorModeValue('whiteAlpha.900', 'blackAlpha.900')
  const activeColor = useColorModeValue('purple.600', 'purple.300')
  const linkColor = useColorModeValue('gray.700', 'gray.200')
  const menuBg = useColorModeValue('white', 'gray.800')

  useRouteChanged(onClose)

  const showOnBreakpoint = useBreakpointValue({ base: true, lg: false })
  React.useEffect(() => {
    if (showOnBreakpoint == false) {
      onClose()
    }
  }, [showOnBreakpoint, onClose])

  useUpdateEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        closeBtnRef.current?.focus()
      })
    }
  }, [isOpen])

  return (
    <>
      {isOpen && (
        <RemoveScroll forwardProps>
          <Flex
            direction="column"
            w="100%"
            bg={bgColor}
            h="100vh"
            overflow="auto"
            pos="absolute"
            inset="0"
            zIndex="modal"
            pb="8"
            backdropFilter="blur(6px)"
          >
            {/* Header */}
            <Flex justify="space-between" px="8" pt="4" pb="4">
              <Logo />
              <HStack spacing="5">
                <CloseButton ref={closeBtnRef} onClick={onClose} />
              </HStack>
            </Flex>

            {/* Nav links */}
            <Stack alignItems="stretch" spacing="2" px="4">
              {siteConfig.header.links.map((link, i) => {
                const isActive = link.href
                  ? !!pathname?.match(new RegExp(link.href))
                  : false

                if (link.children) {
                  return (
                    <Menu key={i} isLazy>
                      {({ isOpen }) => (
                        <>
                          <MenuButton
                            as={Button}
                            variant="ghost"
                            w="100%"
                            justifyContent="space-between"
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
                                mt="2"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                w="100%"
                              >
                                {link.children.map((child, idx) => (
                                  <MenuItem
                                    key={idx}
                                    as={Link}
                                    href={child.href}
                                    onClick={onClose}
                                  >
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
                  <Button
                    key={i}
                    as={Link}
                    href={link.href || '#'}
                    onClick={onClose}
                    variant="ghost"
                    justifyContent="flex-start"
                    fontWeight={isActive ? 'bold' : 'medium'}
                    color={isActive ? activeColor : linkColor}
                  >
                    {link.label}
                  </Button>
                )
              })}
            </Stack>
          </Flex>
        </RemoveScroll>
      )}
    </>
  )
}
