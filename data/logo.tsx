import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
 
  const lightModeLogo = '/assets/img/logo-light.svg';
  const darkModeLogo = '/assets/img/logo-dark.svg';
  const logoUrl = useColorModeValue(lightModeLogo, darkModeLogo);

  return (
    <chakra.img
      src={logoUrl}
      alt="Company Logo"
      // Original dimensions from SVG (550x172)
      w={{ base: "275px", md: "400px", lg: "550px" }}
      h="auto" // Maintain aspect ratio
      maxW="550px" // Never exceed original width
      maxH="172px" // Never exceed original height
      {...props}
    />
  )
}
