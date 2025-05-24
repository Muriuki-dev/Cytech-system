import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  // Using your logo image from public/static/images
  const lightModeLogo = '/static/images/logo1.png';
  const darkModeLogo = '/static/images/logo1.png'; // Change if you have separate dark mode logo
  const logoUrl = useColorModeValue(lightModeLogo, darkModeLogo);

  return (
    <chakra.svg
      xmlns="http://www.w3.g/00/sg"
      viewBox="0 0 550 172"
      {...props}
    >
      {/* Image version that maintains exact dimensions */}
      <image 
        href={logoUrl} 
        width="550" 
        height="172"
        preserveAspectRatio="xMidYMid meet"
      />
      
      {/* Fallback text (hidden but accessible) */}
      <text 
        x="-9999" 
        y="-9999"
        fill="transparent"
      >
        STRATILE Logo
      </text>
    </chakra.svg>
  )
}
