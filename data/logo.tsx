import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
  // Paths to your logo files in public/assets/img
  const lightModeLogo = '/assets/img/logo-light.png'; // or .svg
  const darkModeLogo = '/assets/img/logo-dark.png';  // or .svg
  const logoUrl = useColorModeValue(lightModeLogo, darkModeLogo);
  
  return (
    <chakra.img
      src={logoUrl}
      alt="STRATILE"
      width="550px"
      height="172px"
      {...props}
    />
  )
}
