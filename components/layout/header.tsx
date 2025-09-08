import {
  Box,
  BoxProps,
  Container,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { useScroll } from 'framer-motion'
import * as React from 'react'

import { Logo } from './logo'
import Navigation from './navigation'

export interface HeaderProps extends Omit<BoxProps, 'children'> {}

export const Header = (props: HeaderProps) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [y, setY] = React.useState(0)
  const { scrollY } = useScroll()

  const [heroHeight, setHeroHeight] = React.useState(0)

  React.useEffect(() => {
    const hero = document.getElementById('hero') // make sure hero has id="hero"
    if (hero) {
      setHeroHeight(hero.offsetHeight)
    }
    return scrollY.on('change', () => setY(scrollY.get()))
  }, [scrollY])

  // Slightly more solid, less transparent glass backgrounds
  const frostedBg = useColorModeValue(
    'rgba(255, 255, 255, 0.85)', // lighter white
    'rgba(26, 32, 44, 0.8)'      // darker but still see-through
  )

  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const shadow = useColorModeValue('md', 'dark-lg')

  const showSolid = y > heroHeight - 80

  return (
    <Box
      ref={ref}
      as="header"
      top="0"
      w="full"
      position="fixed"
      backdropFilter="blur(12px)" // strong blur for frosted look
      zIndex="sticky"
      transition="all 0.3s ease"
      bg={showSolid ? frostedBg : 'transparent'}
      boxShadow={showSolid ? shadow : 'none'}
      borderBottomWidth={showSolid ? '1px' : '0'}
      borderColor={showSolid ? borderColor : 'transparent'}
      {...props}
    >
      <Container maxW="container.2xl" px="8" py="4">
        <Flex width="full" align="center" justify="space-between">
          <Logo
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault()
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
            }}
          />
          <Navigation />
        </Flex>
      </Container>
    </Box>
  )
}
