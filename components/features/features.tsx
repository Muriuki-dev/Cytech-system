// ====================== IMPORTS ======================
import * as React from 'react';
import {
  Box,
  Stack,
  VStack,
  SimpleGrid,
  Heading,
  Text,
  Icon,
  Circle,
  ResponsiveValue,
  useMultiStyleConfig,
  ThemingProps,
  SystemProps,
  useToken,
  keyframes,
  usePrefersReducedMotion,
} from '@chakra-ui/react';
import { Section, SectionTitle, SectionTitleProps } from 'components/section';

// ====================== ANIMATIONS ======================
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// ====================== REVEALER COMPONENT ======================
const Revealer = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const animation = prefersReducedMotion
    ? undefined
    : `${fadeIn} 0.6s ease-out forwards`;
    
  return (
    <Box
      opacity={prefersReducedMotion ? 1 : 0}
      animation={animation}
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      {children}
    </Box>
  );
};

// ====================== INTERFACES ======================
interface FeatureProps {
  title: React.ReactNode;
  description: React.ReactNode;
  icon?: any;
  iconPosition?: 'left' | 'top';
  iconSize?: SystemProps['boxSize'];
  variant?: 'elevated' | 'minimal' | 'highlight';
  delay?: number;
}

interface FeaturesProps extends ThemingProps<'Features'> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  features: FeatureProps[];
  columns?: ResponsiveValue<number>;
  spacing?: SystemProps['margin'];
  aside?: React.ReactNode;
  reveal?: boolean;
  iconSize?: SystemProps['boxSize'];
}

// ====================== FEATURE COMPONENT ======================
const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  icon,
  iconPosition = 'top',
  iconSize = 12,
  variant = 'elevated',
  delay = 0,
}) => {
  const [primary500, primary100] = useToken('colors', ['primary.500', 'primary.100']);
  const prefersReducedMotion = usePrefersReducedMotion();
  const floatAnimation = `${float} 4s ease-in-out infinite`;
  
  const baseStyles = {
    container: {
      p: 6,
      borderRadius: 'xl',
      height: '100%',
      transition: 'all 0.3s ease',
      _hover: {
        transform: 'translateY(-4px)',
      },
    },
    iconWrapper: {
      mb: iconPosition === 'top' ? 4 : 0,
      mr: iconPosition === 'left' ? 4 : 0,
    },
    icon: {
      p: 3,
      bg: 'white',
      boxShadow: 'md',
    },
    title: {
      fontSize: 'xl',
      fontWeight: 'semibold',
      mb: 2,
    },
    description: {
      color: 'gray.600',
      lineHeight: 'tall',
    },
  };

  const variantStyles = {
    elevated: {
      container: {
        bg: 'white',
        boxShadow: 'xl',
        border: '1px solid',
        borderColor: 'gray.100',
      },
      icon: {
        bg: primary100,
        color: primary500,
      },
    },
    minimal: {
      container: {
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'gray.200',
      },
      icon: {
        bg: 'transparent',
        color: primary500,
        border: '2px solid',
        borderColor: primary500,
      },
    },
    highlight: {
      container: {
        bg: 'white',
        boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.08)',
        position: 'relative',
        overflow: 'hidden',
        _before: {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          bg: primary500,
        },
      },
      icon: {
        bg: primary100,
        color: primary500,
        animation: prefersReducedMotion ? undefined : floatAnimation,
      },
    },
  };

  return (
    <Box
      {...baseStyles.container}
      {...variantStyles[variant].container}
    >
      <Stack
        direction={iconPosition === 'left' ? 'row' : 'column'}
        align={iconPosition === 'top' ? 'center' : 'flex-start'}
        textAlign={iconPosition === 'top' ? 'center' : 'left'}
      >
        {icon && (
          <Circle
            size={iconSize}
            {...baseStyles.icon}
            {...variantStyles[variant].icon}
            {...baseStyles.iconWrapper}
          >
            <Icon as={icon} boxSize="60%" />
          </Circle>
        )}
        <Box>
          <Heading as="h3" {...baseStyles.title}>
            {title}
          </Heading>
          <Text {...baseStyles.description}>{description}</Text>
        </Box>
      </Stack>
    </Box>
  );
};

// ====================== FEATURES COMPONENT ======================
export const Features: React.FC<FeaturesProps> = ({
  title = "Premium Services",
  subtitle,
  features,
  columns = { base: 1, md: 2, lg: 3 },
  spacing = 8,
  aside,
  reveal = true,
  iconSize = 12,
  variant = 'elevated',
  ...rest
}) => {
  const Wrap = reveal ? Revealer : React.Fragment;
  
  return (
    <Section
      py={20}
      bg="gray.50"
      position="relative"
      overflow="hidden"
      {...rest}
    >
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        <Stack
          direction={{ base: 'column', lg: aside ? 'row' : 'column' }}
          spacing={12}
        >
          <VStack
            spacing={8}
            align="stretch"
            flex={1}
          >
            {(title || subtitle) && (
              <Wrap>
                <Box textAlign="center" maxW="2xl" mx="auto">
                  <Heading as="h2" size="2xl" mb={4} fontWeight="bold">
                    {title}
                  </Heading>
                  {subtitle && (
                    <Text fontSize="xl" color="gray.600" maxW="xl" mx="auto">
                      {subtitle}
                    </Text>
                  )}
                </Box>
              </Wrap>
            )}
            
            <SimpleGrid
              columns={columns}
              spacing={spacing}
            >
              {features.map((feature, index) => (
                <Wrap key={`feature-${index}`} delay={index * 0.1}>
                  <Feature
                    {...feature}
                    iconSize={iconSize}
                    variant={variant}
                    delay={index * 0.1}
                  />
                </Wrap>
              ))}
            </SimpleGrid>
          </VStack>

          {aside && (
            <Box
              flex={1}
              p={8}
              bg="white"
              borderRadius="2xl"
              boxShadow="lg"
              alignSelf="flex-start"
            >
              {aside}
            </Box>
          )}
        </Stack>
      </Box>
    </Section>
  );
};
