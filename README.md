upcoming events
////////////////////////
<Box 
    flex="1" 
    p="6" 
    borderWidth="1px" 
    borderRadius="lg"
    borderColor="blue.400"
    _hover={{
      borderColor: 'blue.500',
      transform: 'translateY(-2px)',
      boxShadow: 'lg'
    }}
    transition="all 0.2s"
  >
    <Heading size="lg" mb="4">Community Development Initiative</Heading>
    <Text color="muted" mb="2"><strong>Launching:</strong> July 2025</Text>
    <Text color="muted" mb="2"><strong>Location:</strong> Multiple Counties</Text>
    <Text mb="4">Our new initiative to empower local communities through sustainable development projects.</Text>
    <ButtonLink href="/projects/community-development" rightIcon={<FiArrowRight />}>
      Explore Opportunities
    </ButtonLink>
  </Box>

  <Box 
    flex="1" 
    p="6" 
    borderWidth="1px" 
    borderRadius="lg"
    borderColor="blue.400"
    _hover={{
      borderColor: 'blue.500',
      transform: 'translateY(-2px)',
      boxShadow: 'lg'
    }}
    transition="all 0.2s"
  >
    <Heading size="lg" mb="4">Brand Expo</Heading>
    <Text color="muted" mb="2"><strong>Date:</strong> August 5-7, 2025</Text>
    <Text color="muted" mb="2"><strong>Location:</strong> Sarit Center</Text>
    <Text mb="4">Showcase your brand to thousands of potential customers at this annual exhibition.</Text>
    <ButtonLink href="/events/brand-expo" rightIcon={<FiArrowRight />}>
      Reserve Your Spot
    </ButtonLink>
  </Box>
