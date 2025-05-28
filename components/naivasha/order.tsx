const NaivashaMarketingPackage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: 'I want to register for the Naivasha Event Marketing Package'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '254741953190'; // Replace with your WhatsApp number (with country code, no + or 0)
    const message = `New Registration for Naivasha Event:\n\n*Name:* ${formData.name}\n*Company:* ${formData.company}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Message:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <Container id="naivasha-marketing-package" maxW="container.lg" py="20">
      <Stack spacing="8">
        <Box>
          <Heading size="2xl" mb="4">Marketing Package Promotion</Heading>
          <Text fontSize="xl" color="blue.500" fontWeight="bold">Naivasha Event – Friday 30th May 2025</Text>
        </Box>

        <Box bg="blue.50" p="6" borderRadius="lg" borderLeft="4px" borderColor="blue.500">
          <Heading size="lg" mb="4" color="blue.700">Package Highlights</Heading>
          <Text fontSize="xl" fontWeight="bold" mb="2">Price: Ksh 45,000</Text>
          
          <UnorderedList spacing="3" fontSize="lg">
            <ListItem>
              <strong>250+ expected client engagements</strong> - Get direct access to a large audience of potential customers
            </ListItem>
            <ListItem>
              <strong>VR Gaming Activation</strong> - Attract more visitors to your booth with immersive virtual reality experiences
            </ListItem>
            <ListItem>
              <strong>Dedicated Merchandising Table</strong> - Showcase your products prominently with a prime location
            </ListItem>
            <ListItem>
              <strong>Brand Visibility</strong> - Your logo featured in all event marketing materials
            </ListItem>
            <ListItem>
              <strong>Social Media Coverage</strong> - Inclusion in our event social media promotions
            </ListItem>
            <ListItem>
              <strong>Lead Generation</strong> - We'll help collect and provide you with attendee contact information
            </ListItem>
          </UnorderedList>
        </Box>

        <Box>
          <Heading size="lg" mb="4">Why This Event?</Heading>
          <Text mb="4">
            The Kanini Haraka Wholesalers and Distribution event is the premier gathering for industry professionals in Naivasha. 
            With over 500 expected attendees, this is a unique opportunity to connect with retailers, distributors, and suppliers 
            in a high-energy environment.
          </Text>
          <Text mb="4">
            Our marketing package is designed to maximize your brand's exposure and help you make valuable business connections. 
            The VR Gaming activation alone has been shown to increase booth traffic by up to 300% at similar events.
          </Text>
        </Box>

        <Box textAlign="center" py="8" bg="gray.50" borderRadius="lg">
          <Heading size="lg" mb="6">Ready to Boost Your Brand?</Heading>
          <Button 
            colorScheme="blue" 
            size="lg" 
            onClick={onOpen}
            rightIcon={<FiArrowRight />}
            px="8"
            py="6"
            fontSize="xl"
          >
            Register Now
          </Button>
          <Text mt="4" color="muted">Limited packages available - Book by May 28th to secure your spot</Text>
        </Box>

        {/* Registration Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Register for Naivasha Event Package</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit}>
              <ModalBody>
                <Stack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Company Name</FormLabel>
                    <Input 
                      name="company" 
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input 
                      type="email"
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input 
                      type="tel"
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your WhatsApp number"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Additional Message</FormLabel>
                    <Textarea
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any special requests or questions"
                    />
                  </FormControl>
                </Stack>
              </ModalBody>

              <ModalFooter>
                <Button variant="ghost" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button 
                  colorScheme="blue" 
                  type="submit"
                  rightIcon={<FiCheck />}
                >
                  Send via WhatsApp
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>

        <Box>
          <Heading size="lg" mb="4">Frequently Asked Questions</Heading>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    What's included in the VR Gaming Activation?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Our VR setup includes 2 VR stations with popular immersive games, branded with your company logo. 
                We handle all setup, operation, and takedown. Attendees will associate the fun experience with your brand.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    Can we customize the merchandising table?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Yes! The 6ft table is yours to decorate as you wish. We recommend bringing banners, product samples, 
                and promotional materials. Setup time begins at 8 AM on event day.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Stack>
    </Container>
  )
}
