import { Box, Heading, Text, Stack } from '@chakra-ui/react'

interface HeroProps {
  title: string | React.ReactNode
  description?: string | React.ReactNode
  children?: React.ReactNode
}

export const Hero = ({ title, description, children }: HeroProps) => {
  return (
    <Box as="section" py={{ base: 10, md: 20 }} px={{ base: 4, md: 8 }}>
      <Stack spacing={6}>
        <Heading as="h1" size="2xl">
          {title}
        </Heading>
        {description && (
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
            {description}
          </Text>
        )}
        {children}
      </Stack>
    </Box>
  )
}
