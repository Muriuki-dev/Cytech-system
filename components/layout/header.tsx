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

  // Height of hero section (adjust selector to your actual hero element)
  const [heroHeight, setHeroHeight] = React.useState(0)

  React.useEffect(() => {
    const hero = document.getElementById('hero') // <-- give your hero section id="hero"
    if (hero) {
      setHeroHeight(hero.offsetHeight)
    }

    return scrollY.on('change', () => setY(scrollY.get()))
  }, [scrollY])

  // Colors that adapt to light/dark mode
  const bgColor = useColorModeValue('white', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const shadow = useColorModeValue('md', 'dark-lg')

  const showSolid = y > heroHeight - 80 // start solid when passing hero section (minus some offset for smoothness)

  return (
    <Box
      ref={ref}
      as="header"
      top="0"
      w="full"
      position="fixed"
      backdropFilter="blur(8px)"
      zIndex="sticky"
      transition="all 0.3s ease"
      bg={showSolid ? bgColor : 'transparent'}
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
