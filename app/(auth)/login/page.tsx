'use client'

import { Center, useToast, useColorMode, Box, Heading, Input, Button, Link, Text } from '@chakra-ui/react'
import { BackgroundGradient } from 'components/gradients/background-gradient'
import { PageTransition } from 'components/motion/page-transition'
import { Section } from 'components/section'
import { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const Login: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const toast = useToast()
  const { colorMode } = useColorMode()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok) {
        localStorage.setItem('authToken', data.token)
        router.push('/dashboard')
      } else {
        toast({
          title: 'Login Failed',
          description: data.message || 'Invalid credentials',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
          variant: 'subtle',
        })
      }
    } catch (err) {
      toast({
        title: 'Error',
        description: 'An error occurred during login',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
        variant: 'subtle',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Section height="calc(100vh - 200px)" innerWidth="container.sm">
      <BackgroundGradient zIndex="-1" />

      <Center height="100%" pt="20">
        <PageTransition width="100%">
          <Box
            w="100%"
            maxW="450px"
            p={8}
            borderRadius="xl"
            boxShadow="xl"
            bg={colorMode === 'light' ? 'white' : 'gray.800'}
            borderWidth="1px"
            borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
          >
            <Heading 
              as="h1" 
              size="xl" 
              textAlign="center" 
              mb={8}
              color={colorMode === 'light' ? 'blue.600' : 'blue.400'}
            >
              Admin Login Only
            </Heading>
            
            <form onSubmit={handleLogin}>
              <Box mb={6}>
                <Text 
                  as="label" 
                  htmlFor="email" 
                  display="block" 
                  mb={2}
                  fontWeight="medium"
                >
                  Email
                </Text>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  size="lg"
                  focusBorderColor="blue.500"
                  bg={colorMode === 'light' ? 'white' : 'gray.700'}
                />
              </Box>

              <Box mb={8}>
                <Text 
                  as="label" 
                  htmlFor="password" 
                  display="block" 
                  mb={2}
                  fontWeight="medium"
                >
                  Password
                </Text>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  size="lg"
                  focusBorderColor="blue.500"
                  bg={colorMode === 'light' ? 'white' : 'gray.700'}
                />
              </Box>

              <Button
                type="submit"
                colorScheme="blue"
                size="lg"
                width="full"
                isLoading={isLoading}
                loadingText="Authenticating..."
                mb={6}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                transition="all 0.2s"
              >
                Login
              </Button>

              <Text textAlign="center">
                <Link 
                  href="/contact-admin" 
                  color={colorMode === 'light' ? 'blue.500' : 'blue.400'}
                  _hover={{ textDecoration: 'underline' }}
                >
                  Contact Admin
                </Link>
              </Text>
            </form>
          </Box>
        </PageTransition>
      </Center>
    </Section>
  )
}

export default Login
