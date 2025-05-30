import {
  chakra,
  SimpleGrid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'
import { Section, SectionProps, SectionTitle } from 'components/section'

interface FaqProps extends Omit<SectionProps, 'title' | 'children'> {
  title?: React.ReactNode
  description?: React.ReactNode
  items: { q: React.ReactNode; a: React.ReactNode }[]
}

export const Faq: React.FC<FaqProps> = (props) => {
  const {
    title = 'Frequently Asked Questions',
    description,
    items = [],
    ...rest
  } = props
  return (
    <Section id="faq" {...rest}>
      <SectionTitle title={title} description={description} />

      <Accordion allowToggle>
        <SimpleGrid columns={[1, null, 2]} spacingY={4} spacingX="20">
          {items?.map(({ q, a }, i) => (
            <FaqItem key={i} question={q} answer={a} />
          ))}
        </SimpleGrid>
      </Accordion>
    </Section>
  )
}

export interface FaqItemProps {
  question: React.ReactNode
  answer: React.ReactNode
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  return (
    <AccordionItem border="none">
      <chakra.dl>
        <AccordionButton
          px={0}
          py={4}
          _hover={{ bg: 'transparent' }}
          _expanded={{ color: 'primary.500' }}
        >
          <Box flex="1" textAlign="left">
            <chakra.dt fontWeight="semibold">{question}</chakra.dt>
          </Box>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel px={0} pb={4}>
          <chakra.dd color="muted">{answer}</chakra.dd>
        </AccordionPanel>
      </chakra.dl>
    </AccordionItem>
  )
}
