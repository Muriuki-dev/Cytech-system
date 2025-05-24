import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const lightModeLogo = '/static/images/logo1.png';
  const darkModeLogo = '/static/images/logo1.png'; // Change if you have a dark mode logo
  const logoUrl = useColorModeValue(lightModeLogo, darkModeLogo);

  return (
    <chakra.img
      src={logoUrl}
      alt="STRATILE Logo"
      width="100px"
      maxWidth="auto"
      ml="-10px"
      {...props}
    />
  )
}
