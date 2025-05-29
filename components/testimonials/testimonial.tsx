import {
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
  Stack,
  Text,
  Box,
  usePrefersReducedMotion,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  useBreakpointValue,
  Divider,
  Icon,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FiArrowRight, FiCalendar, FiUser, FiMail, FiPhone } from "react-icons/fi";

export interface TestimonialProps extends CardProps {
  name: string;
  description: React.ReactNode;
  details?: React.ReactNode;
  children?: React.ReactNode;
}

export const Testimonial = ({
  name,
  description,
  details,
  children,
  ...rest
}: TestimonialProps) => {
  const { 
    isOpen: isDetailsOpen, 
    onOpen: onDetailsOpen, 
    onClose: onDetailsClose 
  } = useDisclosure();
  
  const { 
    isOpen: isBookingOpen, 
    onOpen: onBookingOpen, 
    onClose: onBookingClose 
  } = useDisclosure();
  
  const prefersReducedMotion = usePrefersReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  // Color mode values
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("blue.700", "blue.400");
  const descriptionColor = useColorModeValue("gray.600", "gray.400");
  const dividerColor = useColorModeValue("gray.200", "gray.700");
  const modalHeaderBg = useColorModeValue("blue.50", "blue.900");
  const modalContentBg = useColorModeValue("white", "gray.800");
  const buttonHoverBg = useColorModeValue("blue.50", "blue.700");
  const buttonActiveBg = useColorModeValue("blue.100", "blue.600");

  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });
  const cardPadding = useBreakpointValue({ base: 4, md: 6 });
  const headingSize = useBreakpointValue({ base: "md", md: "lg" });

  useEffect(() => {
    if (prefersReducedMotion || !cardRef.current) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [prefersReducedMotion]);

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission here
    console.log("Booking submitted:", bookingData);
    onBookingClose();
    // You might want to add a toast notification here
  };

  return (
    <>
      <Card 
        position="relative" 
        ref={cardRef}
        transform={isVisible ? "none" : "translateY(20px)"}
        opacity={isVisible ? 1 : 0}
        transition="transform 0.3s ease-out, opacity 0.3s ease-out"
        borderWidth="1px"
        borderColor={cardBorderColor}
        borderRadius="lg"
        boxShadow="md"
        bg={cardBg}
        p={cardPadding}
        _hover={{
          boxShadow: "xl",
          transform: "translateY(-5px)"
        }}
        {...rest}
      >
        <CardHeader pb="2" px="0">
          <Stack spacing="2">
            <Heading 
              size={headingSize} 
              color={headingColor}
              fontWeight="600"
              letterSpacing="-0.5px"
            >
              {name}
            </Heading>
            <Text 
              color={descriptionColor} 
              fontWeight="medium"
              fontSize={{ base: "sm", md: "md" }}
            >
              {description}
            </Text>
          </Stack>
        </CardHeader>
        
        <Divider borderColor={dividerColor} />

        <CardBody pt="4" px="0" pb="0">
          <Box 
            fontSize={{ base: "sm", md: "md" }} 
            color={textColor}
            lineHeight="1.6"
            mb={details ? 10 : 0}
          >
            {typeof children === 'string' ? (
              <Text>{children}</Text>
            ) : (
              <Box sx={{
                "p:not(:last-child)": {
                  mb: 3
                },
                "ul": {
                  mt: 2,
                  mb: 3,
                  pl: 5
                },
                "li": {
                  mb: 1
                }
              }}>
                {children}
              </Box>
            )}
          </Box>

          {details && (
            <Button
              onClick={onDetailsOpen}
              position="absolute"
              bottom="4"
              left="0"
              right="0"
              mx="auto"
              width="calc(100% - 32px)"
              size={buttonSize}
              colorScheme="blue"
              variant="outline"
              borderRadius="md"
              rightIcon={<FiArrowRight />}
              _hover={{
                bg: buttonHoverBg,
                transform: "translateY(-2px)",
                boxShadow: "sm"
              }}
              _active={{
                bg: buttonActiveBg
              }}
            >
              Learn more
            </Button>
          )}
        </CardBody>
      </Card>

      {/* Details Modal */}
      <Modal isOpen={isDetailsOpen} onClose={onDetailsClose} size="xl" isCentered>
        <ModalOverlay bg="blackAlpha.600" />
        <ModalContent borderRadius="xl" overflow="hidden" bg={modalContentBg}>
          <ModalHeader 
            bg={modalHeaderBg} 
            borderBottom="1px solid" 
            borderColor={dividerColor}
          >
            <Stack spacing="2">
              <Heading size="lg" color={headingColor}>
                {name}
              </Heading>
              <Text fontSize="md" color={descriptionColor} fontWeight="medium">
                {description}
              </Text>
            </Stack>
          </ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody py={6}>
            <Box 
              color={textColor}
              sx={{
                "p:not(:last-child)": {
                  mb: 4
                },
                "ul": {
                  mt: 2,
                  mb: 4,
                  pl: 5
                },
                "li": {
                  mb: 2,
                  position: "relative",
                  _before: {
                    content: '"•"',
                    position: "absolute",
                    left: "-1rem",
                    color: headingColor
                  }
                },
                "h3": {
                  fontSize: "xl",
                  fontWeight: "600",
                  color: headingColor,
                  mt: 6,
                  mb: 3
                }
              }}
            >
              {details}
            </Box>
            
            <Button
              onClick={onBookingOpen}
              colorScheme="blue"
              size="lg"
              width="full"
              mt={6}
              leftIcon={<FiCalendar />}
            >
              Book Now
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Booking Modal */}
      <Modal isOpen={isBookingOpen} onClose={onBookingClose} size="xl" isCentered>
        <ModalOverlay bg="blackAlpha.600" />
        <ModalContent borderRadius="xl" overflow="hidden" bg={modalContentBg}>
          <ModalHeader 
            bg={modalHeaderBg} 
            borderBottom="1px solid" 
            borderColor={dividerColor}
          >
            <Stack spacing="2">
              <Heading size="lg" color={headingColor}>
                Book {name}
              </Heading>
              <Text fontSize="md" color={descriptionColor} fontWeight="medium">
                Please fill out the form below to book this service
              </Text>
            </Stack>
          </ModalHeader>
          <ModalCloseButton size="lg" />
          <ModalBody py={6}>
            <form onSubmit={handleBookingSubmit}>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input 
                    name="name"
                    value={bookingData.name}
                    onChange={handleBookingChange}
                    placeholder="Your full name"
                    leftIcon={<FiUser />}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email Address</FormLabel>
                  <Input 
                    name="email"
                    type="email"
                    value={bookingData.email}
                    onChange={handleBookingChange}
                    placeholder="Your email address"
                    leftIcon={<FiMail />}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input 
                    name="phone"
                    type="tel"
                    value={bookingData.phone}
                    onChange={handleBookingChange}
                    placeholder="Your phone number"
                    leftIcon={<FiPhone />}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Preferred Date</FormLabel>
                  <Input 
                    name="date"
                    type="date"
                    value={bookingData.date}
                    onChange={handleBookingChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Additional Notes</FormLabel>
                  <Textarea 
                    name="message"
                    value={bookingData.message}
                    onChange={handleBookingChange}
                    placeholder="Any special requirements or notes"
                    rows={4}
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  width="full"
                  mt={4}
                >
                  Confirm Booking
                </Button>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
