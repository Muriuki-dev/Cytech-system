import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'svg'>> = (props) => {
  const lightModeLogo = '/static/images/logo1.png';
  const darkModeLogo = '/static/images/logo1.png'; // Change if you have a dark mode logo
  const logoUrl = useColorModeValue(lightModeLogo, darkModeLogo);

  return (
    <chakra.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 550 172"
      width="100%"  // Makes the SVG container responsive
      maxWidth="400px" // Limits max size (adjust as needed)
      ml="-10px"   // Moves the logo closer to the left
      {...props}
    >
      {/* Scaled-up image */}
      <image 
        href={logoUrl} 
        width="800"  // Increased width (original was 550)
        height="auto" // Maintains aspect ratio
       
        preserveAspectRatio="xMinYMid meet" // Aligns left
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
