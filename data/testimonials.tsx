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
          </ul>
        </>
      ),
      details: (
        <>
          <Heading size="md" mb={4}>Market Activation Details</Heading>
          <Text mb={4}>
            Our comprehensive market activation services help brands establish strong retail presence and consumer engagement.
          </Text>
          <UnorderedList mb={4}>
            <ListItem>Full merchandising setup including POS materials</ListItem>
            <ListItem>Weekly performance reports with analytics</ListItem>
            <ListItem>Competitor activity monitoring</ListItem>
            <ListItem>Staff training for product knowledge</ListItem>
          </UnorderedList>
          <Text fontWeight="bold">Package Options:</Text>
          <UnorderedList>
            <ListItem>Basic: Ksh 3,800/day (1 merchandiser)</ListItem>
            <ListItem>Premium: Ksh 7,500/day (2 merchandisers + reporting)</ListItem>
            <ListItem>Enterprise: Custom solutions for large campaigns</ListItem>
          </UnorderedList>
        </>
      )
    },
    // Other items follow same pattern...
  ],
}
