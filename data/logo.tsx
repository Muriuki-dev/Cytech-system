import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
  const lightModeLogo = '/static/images/logo1.png';
  const darkModeLogo = '/static/images/logo1.png'; // Change if you have a dark mode logo
  const logoUrl = useColorModeValue(lightModeLogo, darkModeLogo);

  return (
    <chakra.img
      src={logoUrl}
      alt="STRATILE Logo"
      height="40px" // Set either height or width (not both) to maintain aspect ratio
      width="auto" // Let it scale proportionally
      maxWidth="200px" // Optional: prevent it from getting too large
      ml="-10px"
      {...props}
    />
  )
}
