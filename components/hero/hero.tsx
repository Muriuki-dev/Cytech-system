import { Container, Flex, FlexProps, Text, VStack, Box, Icon } from '@chakra-ui/react'
import { FiArrowRight } from 'react-icons/fi'

interface HeroProps extends Omit<FlexProps, 'title'> {
  title: string | React.ReactNode
  description?: string | React.ReactNode
}

export const Hero = ({ title, description, children, ...rest }: HeroProps) => {
  return (
    <Flex 
      py={{ base: 12, md: 20 }} 
      alignItems="center" 
      {...rest}
    >
      <Container>
        <VStack spacing={[4, null, 8]} alignItems="flex-start">
          <Text 
            as="h1" 
            textStyle="h1" 
            textAlign="left"
            fontSize={{ base: "3xl", md: "5xl" }}
            lineHeight="shorter"
          >
            {title}
          </Text>
          <Text
            as="div"
            textStyle="subtitle"
            align="left"
            color="black"
            _dark={{ color: 'whiteAlpha.800' }}
            fontSize={{ base: "md", md: "xl" }}
            fontWeight="medium"
          >
            {description}
          </Text>
        </VStack>
        <Box mt={8}>
          {React.Children.map(children, child => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                // Add orange color to contact buttons
                ...(child.props.href === "/contact" ? { 
                  colorScheme: "orange",
                  variant: "solid"
                } : {})
              } as any)
            }
            return child
          })}
        </Box>
      </Container>
    </Flex>
  )
}
