// hero.tsx
import { Container, Flex, FlexProps, Text, VStack } from '@chakra-ui/react'

interface HeroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
}

export const Hero = ({ title, description, children, ...rest }: HeroProps) => {
  return (
    <Flex py={["12", "16", "20"]} alignItems="center" {...rest}>
      <Container maxW="container.lg" px={[4, 6, 8]}>
        <VStack spacing={[3, null, 6]} alignItems="flex-start">
          <Text 
            as="h1" 
            textStyle="h1" 
            textAlign="left"
            fontSize={["2xl", "3xl", "4xl"]}
            lineHeight="shorter"
          >
            {title}
          </Text>
          <Text
            as="div"
            textStyle="subtitle"
            align="left"
            color="dark"
            fontSize={["md", "lg", "xl"]}
            _dark={{ color: 'gray.400' }}
          >
            {description}
          </Text>
        </VStack>
        {children && (
          <VStack spacing={4} mt={[4, 6, 8]} alignItems="flex-start">
            {children}
          </VStack>
        )}
      </Container>
    </Flex>
  )
}
