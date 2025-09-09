import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
  const lightModeLogo = '/static/images/logo.png';
  const darkModeLogo = '/static/images/image-removebg-preview.png'; // Change if you have a dark mode logo
  const logoUrl = useColorModeValue(lightModeLogo, darkModeLogo);

  return (
    <chakra.img
      src={logoUrl}
      alt="STRATILE Logo"
      height="100px" // Set either height or width (not both) to maintain aspect ratio
      width="auto" // Let it scale proportionally
      maxWidth="500px" // Optional: prevent it from getting too large
      ml="-10px"
      {...props}
    />
  )
}
