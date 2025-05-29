import {
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Heading,
  Stack,
  Text,
  Box,
  UnorderedList,
  ListItem,
  usePrefersReducedMotion,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const prefersReducedMotion = usePrefersReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <>
      <Card 
        position="relative" 
        ref={cardRef}
        transform={isVisible ? "none" : "translateY(20px)"}
        opacity={isVisible ? 1 : 0}
        transition="transform 0.3s ease-out, opacity 0.3s ease-out"
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        bg="white"
        _hover={{
          boxShadow: "xl",
          transform: "translateY(-5px)"
        }}
        {...rest}
      >
        <CardHeader pb="0">
          <Stack spacing="1">
            <Heading size="md" color="blue.600">{name}</Heading>
            <Text color="gray.600" fontWeight="semibold">
              {description}
            </Text>
          </Stack>
        </CardHeader>
        <CardBody pt="4">
          <Box fontSize="sm" color="gray.700">
            {typeof children === 'string' ? (
              <Text>{children}</Text>
            ) : children}
          </Box>

          {details && (
            <Box
              as="button"
              onClick={onOpen}
              position="absolute" 
              top="4" 
              right="4"
              color="blue.500"
              fontWeight="medium"
              _hover={{ textDecoration: 'underline' }}
            >
              Learn more →
            </Box>
          )}
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">{name}</Heading>
            <Text fontSize="md" color="gray.600">{description}</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {details}
            <Box mt={6} p={4} bg="blue.50" borderRadius="md">
              <Text fontWeight="bold" mb={2}>Contact us:</Text>
              <Text>Email: info@stratilesolutions.com</Text>
              <Text>Phone: +254 700 123 456</Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
