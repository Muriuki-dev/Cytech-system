import { Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react'

export default {
  title: 'Our Marketing & Community Services',
  items: [
    {
      name: 'Market Activations (GT)',
      description: 'Stratile Marketing Solutions',
      children: (
        <>
          <p>Enhance your brand through B2B engagement with our local retailers and distributors network.</p>
          <ul>
            <li>Product marketing and stocking solutions</li>
            <li>Salesforce engagement and management</li>
            <li>Merchandising from Ksh 3,800/day</li>
            <li>Field marketing from Ksh 4,800/day</li>
            <li>Graphic design and merchandising solutions</li>
          </ul>
        </>
      ),
      details: (
        <>
          <Heading size="md" mb={4}>Market Activation Details</Heading>
          <Text mb={4}>
            We set up merchandising centres and tables at major distributors for product promotions and consumer engagement.
          </Text>
          <UnorderedList mb={4}>
            <ListItem>Merchandising centres and POS tables</ListItem>
            <ListItem>Consumer interaction and sales data collection</ListItem>
            <ListItem>Retailer engagement for product visibility</ListItem>
            <ListItem>Reporting and strategic sales projections</ListItem>
          </UnorderedList>
          <Text fontWeight="bold">Package Options:</Text>
          <UnorderedList>
            <ListItem>Merchandising: Ksh 3,800/day</ListItem>
            <ListItem>Field Marketing & Salesforce: Ksh 4,800/day</ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      name: 'Modern Marketing Activations',
      description: '…Marketing and Media Hub',
      children: (
        <>
          <p>Create a unique digital experience for your brand with our Meta and Google Ads support.</p>
          <ul>
            <li>Dedicated brand storytelling crew</li>
            <li>Online ad placement and social media management</li>
            <li>Multi-lingual training services</li>
            <li>Training from Ksh 7,200/day</li>
          </ul>
        </>
      ),
      details: (
        <>
          <Heading size="md" mb={4}>Digital Marketing Project Details</Heading>
          <Text mb={4}>
            We record training sessions and ensure implementation to guarantee compliance during project training.
          </Text>
          <UnorderedList mb={4}>
            <ListItem>Training recordings and documentation</ListItem>
            <ListItem>State-of-the-art equipment for recording and scripting</ListItem>
            <ListItem>Social media management and strategy</ListItem>
            <ListItem>Project-level social network oversight</ListItem>
          </UnorderedList>
          <Text fontWeight="bold">Package Options:</Text>
          <UnorderedList>
            <ListItem>Training & Digital Support: Ksh 7,200/day</ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      name: 'Community Engagement Activation',
      description: 'Imani Mettle Foundation',
      children: (
        <>
          <p>Fostering vibrant sports culture within estates and promoting healthy, active lifestyles.</p>
          <ul>
            <li>Sports and wellness programs</li>
            <li>Community hikes from Ksh 500</li>
            <li>Archery rentals at Ksh 1,500/hr</li>
            <li>Event planning and competitive sports setups</li>
          </ul>
        </>
      ),
      details: (
        <>
          <Heading size="md" mb={4}>Community Engagement Details</Heading>
          <Text mb={4}>
            We set up regular community activity dates and allow bookings for individual or group participation.
          </Text>
          <UnorderedList mb={4}>
            <ListItem>Scheduled community activities (e.g., hikes)</ListItem>
            <ListItem>Archery rentals and practice sessions</ListItem>
            <ListItem>Event planning and competitive sports organization</ListItem>
            <ListItem>Service delivery at Tatu City</ListItem>
          </UnorderedList>
          <Text fontWeight="bold">Activity Rates:</Text>
          <UnorderedList>
            <ListItem>Hikes: Ksh 500</ListItem>
            <ListItem>Archery: Ksh 1,500/hr</ListItem>
          </UnorderedList>
        </>
      )
    },
    {
      name: 'Stratile Logistics',
      description: 'Stratile’s Logistics Agency and Consultancy',
      children: (
        <>
          <p>Delivering advanced logistics solutions tailored for modern business operations.</p>
          <ul>
            <li>Customized logistics consultations</li>
            <li>Business cost and operational analysis</li>
            <li>Tech-integrated logistics support</li>
            <li>Consultation from Ksh 2,800/day/person</li>
          </ul>
        </>
      ),
      details: (
        <>
          <Heading size="md" mb={4}>Logistics Consultancy Details</Heading>
          <Text mb={4}>
            We offer tailored logistics consultations to help businesses make efficient and cost-effective decisions.
          </Text>
          <UnorderedList mb={4}>
            <ListItem>Logistics strategy planning</ListItem>
            <ListItem>Cost analysis and reporting</ListItem>
            <ListItem>Booking system for on-demand support</ListItem>
            <ListItem>Integration with technology for better performance</ListItem>
          </UnorderedList>
          <Text fontWeight="bold">Rates:</Text>
          <UnorderedList>
            <ListItem>Consultation: Ksh 2,800/day/person</ListItem>
          </UnorderedList>
        </>
      )
    }
  ]
}
