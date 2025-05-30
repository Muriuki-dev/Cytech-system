'use client'

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  SimpleGrid,
  AlertDialogHeader,
  AlertDialogOverlay,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  IconButton,
  Center,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Stack,
  Tag,
  Text,
  ListItem,
  Textarea,
  UnorderedList,
  useClipboard,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiHeart,
  FiCheckCircle,
  FiUserCheck,
  FiGlobe,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
  FiCalendar,
  FiLayers,
  FiUsers,
  FiTool,
  FiShare2,
  FiShoppingBag,
  FiMessageSquare,
  FiX,
} from 'react-icons/fi'
import { useState, useEffect, useRef } from 'react'
import * as React from 'react'
import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'


import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem
} from '#components/highlights'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'

import faq from '#data/faq'
import testimonials from '#data/testimonials'
import { FallInPlace } from '#components/motion/fall-in-place'

const Home = () => {
  return (
    <Box>
      <HeroSection />
      <ServicesSection />
      <HighlightsSection />
      <TestimonialsSection />
      <EventsSection />
      <FaqSection />
      <LiveSupportChat />
    </Box>
  )
}

const LiveSupportChat = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { 
      id: 1, 
      sender: 'support', 
      text: 'Hello there! 👋 Welcome to Stratile Ltd. May I know your name before we proceed?', 
      time: new Date() 
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [awaitingHuman, setAwaitingHuman] = useState(false);
  const [conversationContext, setConversationContext] = useState({
    currentTopic: '',
    previousTopics: [] as string[],
    customerInterest: '',
    pricingRequests: 0,
    userName: ''
  });
  const [hasAskedForName, setHasAskedForName] = useState(false);

  // FAQ State
  const [faqs] = useState([
    {
      question: "What services does Stratile Ltd offer?",
      answer: `At Stratile Ltd, we're your one-stop solution for:\n\n• **Project Management** - End-to-end execution\n• **Marketing Activations** - Retail & field marketing\n• **Social Media Management** - Professional content & ads\n• **Creative Design** - Graphics & branding\n• **Advertising Campaigns** - Multi-channel strategies\n• **Merchandising** - In-store brand presence\n• **Community Engagement** - Sports & wellness programs\n\nWe help both businesses and communities thrive through tailored solutions. Which service interests you most?`
    },
    {
      question: "Can Stratile help with launching a new product or service?",
      answer: `Absolutely! 🚀 We specialize in product launches from concept to market:\n\n1. **Strategy Development** - Market positioning\n2. **Creative Design** - Branding & packaging\n3. **Marketing Activations** - Retail & digital campaigns\n4. **Implementation** - Nationwide rollout\n\nWe ensure your launch makes maximum impact. Would you like to discuss a specific product?`
    },
    {
      question: "Do you work with government or community organizations?",
      answer: `Yes! 🤝 We actively collaborate with:\n\n• County governments\n• National agencies\n• NGOs & CBOs\n• International development partners\n\nOur community projects focus on sustainable social impact through sports, wellness, and economic empowerment programs. Interested in partnership opportunities?`
    },
    {
      question: "Can Stratile handle both small and large-scale projects?",
      answer: `We scale to fit your needs perfectly:\n\n🔹 **Startups/SMEs**: Cost-effective small activations\n🔹 **Corporates**: Nationwide campaigns\n🔹 **Government**: County-wide programs\n🔹 **Communities**: Grassroots initiatives\n\nFrom one-day merchandising to multi-year development projects, we've got you covered. What's your project scale?`
    },
    {
      question: "How can I get started with Stratile?",
      answer: `Getting started is easy:\n\n1. **Reach out**: Call/WhatsApp 0741953190 or email labanmwangi444@gmail.com\n2. **Consultation**: Free initial discussion\n3. **Proposal**: Tailored solution plan\n4. **Kickoff**: We implement while you focus on your business\n\nWould you like me to connect you with our team now?`
    },
    {
      question: "Is your team available countrywide?",
      answer: `🌍 Yes! We operate across Kenya with:\n\n• Trained teams in all major counties\n• Rural outreach programs\n• Flexible mobile units\n• Local partner networks\n\nWhether you need activations in Nairobi or community programs in remote areas, we deliver. Where do you need services?`
    }
  ]);

  // Knowledge base for different services
  const serviceKnowledge = {
    marketing: {
      description: `Our Market Activations service is all about getting your brand noticed where it matters most. We specialize in:\n\n• B2B engagement through local retailers/distributors\n• Product marketing and strategic stocking\n• Salesforce management (from KSH 4800/day)\n• Merchandising solutions (from KSH 3800/day)\n\nWe create eye-catching merchandising centers at major distributors and gather valuable consumer data to boost your sales.`,
      benefits: [
        "Increased brand visibility at point of sale",
        "Direct consumer engagement",
        "Data-driven sales strategies",
        "Professional merchandising teams"
      ],
      pricing: {
        merchandising: "KSH 3800/day per merchandiser",
        fieldMarketing: "KSH 4800/day per field agent",
        graphicDesign: "Custom quotes based on project scope"
      }
    },
    digital: {
      description: `In our Modern Marketing Activations, we blend creativity with technology to tell your brand's story:\n\n• Meta & Google Ads management\n• Professional content creation\n• Social media account management\n• Training programs (from KSH 7200/day)\n• Multi-lingual support\n\nWe use state-of-the-art equipment to produce training materials that ensure compliance and engagement.`,
      benefits: [
        "Guaranteed online ad space",
        "Professional video production",
        "Measurable campaign results",
        "Certified training programs"
      ]
    },
    community: {
      description: `The Imani Mettle Foundation brings communities together through:\n\n• Organized sports activities\n• Community hikes (KSH 500)\n• Archery sessions (KSH 1500/hour)\n• Healthy lifestyle programs\n\nBased at Tatu City, we create vibrant sporting opportunities that enhance quality of life.`,
      benefits: [
        "Improved community relations",
        "Health and wellness focus",
        "Professional equipment and facilities",
        "Flexible booking system"
      ]
    },
    logistics: {
      description: `Stratile Logistics provides smart solutions for your supply chain:\n\n• Logistics consultancy (from KSH 2800/day)\n• Business cost analysis\n• Market demand forecasting\n• Technology-integrated solutions\n\nWe help businesses make data-driven logistical decisions.`,
      benefits: [
        "Cost optimization",
        "Technology-driven solutions",
        "Customized for your business size",
        "End-to-end supply chain analysis"
      ]
    }
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const userMessage = { 
      id: Date.now(), 
      sender: 'user', 
      text: message, 
      time: new Date() 
    };
    setChatMessages(prev => [...prev, userMessage]);
    setMessage('');

    // If we haven't captured the user's name yet and this is the first message
    if (!conversationContext.userName && !hasAskedForName) {
      setHasAskedForName(true);
      // Store the name and acknowledge it
      setConversationContext(prev => ({
        ...prev,
        userName: message.trim()
      }));
      
      // Add welcome message with name
      setTimeout(() => {
        setChatMessages(prev => [...prev, {
          id: Date.now(),
          sender: 'support',
          text: `Nice to meet you, ${message.trim()}! I'm your virtual assistant here to help with anything from market activations to logistics solutions. What can I do for you today?`,
          time: new Date()
        }]);
      }, 800);
      return;
    }

    // Process the message with slight delay for natural feel
    setTimeout(() => {
      const response = generateResponse(message);
      setChatMessages(prev => [...prev, response]);
    }, 800 + Math.random() * 700); // Random delay between 800-1500ms
  };

  const generateResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();
    let responseText = '';
    let newContext = {...conversationContext};
    
    const userName = newContext.userName ? `, ${newContext.userName}` : '';

    // Check for conversation continuations first
    if (conversationContext.currentTopic) {
      const followUp = handleFollowUp(lowerMessage, conversationContext.currentTopic);
      if (followUp) {
        newContext.previousTopics.push(conversationContext.currentTopic);
        return {
          id: Date.now(),
          sender: 'support',
          text: followUp,
          time: new Date()
        };
      }
    }

    // FAQ Handling
    const matchedFAQ = faqs.find(faq => 
      lowerMessage.includes(faq.question.toLowerCase().split(' ')[0]) || 
      faq.question.toLowerCase().split(' ').some(word => 
        word.length > 3 && lowerMessage.includes(word)
      )
    );

    if (matchedFAQ) {
      newContext.currentTopic = 'faq';
      setConversationContext(newContext);
      return {
        id: Date.now(),
        sender: 'support',
        text: matchedFAQ.answer,
        time: new Date()
      };
    }

    // FAQ shortcut handler
    if (/faq|frequently asked|common questions/i.test(lowerMessage)) {
      newContext.currentTopic = 'faq_list';
      setConversationContext(newContext);
      
      const faqList = faqs.map((faq, i) => 
        `${i+1}. ${faq.question.replace('?', '')}`
      ).join('\n');
      
      return {
        id: Date.now(),
        sender: 'support',
        text: `Here are our frequently asked questions${userName}:\n\n${faqList}\n\nWhich one would you like me to explain? (just type the number)`,
        time: new Date()
      };
    }

    // Human support request
    if (lowerMessage.includes('human') || lowerMessage.includes('agent') || lowerMessage.includes('representative')) {
      setAwaitingHuman(true);
      newContext.currentTopic = 'human_support';
      setConversationContext(newContext);
      return {
        id: Date.now(),
        sender: 'support',
        text: `I've flagged a support representative to join us${userName}. They'll be with you shortly! \n\nWhile we wait, I can still help with:\n• Service details\n• Pricing\n• Event bookings\n• Or anything else you need!`,
        time: new Date()
      };
    }

    // Greetings
    if (/^(hi|hello|hey|greetings|good\s(morning|afternoon|evening))/i.test(lowerMessage)) {
      const greetings = [
        `Hello again${userName}! What can I help you with today?`,
        `Hi there${userName}! How can I assist you?`,
        `Greetings${userName}! What brings you to Stratile today?`,
        `Good ${getTimeOfDay()}${userName}! What would you like to know about our services?`
      ];
      return {
        id: Date.now(),
        sender: 'support',
        text: greetings[Math.floor(Math.random() * greetings.length)],
        time: new Date()
      };
    }

    // Thanks response
    if (/thank|thanks|appreciate/i.test(lowerMessage)) {
      const thanksResponses = [
        `You're very welcome${userName}! Is there anything else I can help with?`,
        `My pleasure${userName}! Don't hesitate to ask if you need anything more.`,
        `Glad I could help${userName}! 😊 What else can I do for you today?`
      ];
      return {
        id: Date.now(),
        sender: 'support',
        text: thanksResponses[Math.floor(Math.random() * thanksResponses.length)],
        time: new Date()
      };
    }

    // Service inquiries
    if (
      /what (services|can you do|do you offer|do you provide|does stratle do|stratile (can|do) you have)|services?|offer|provide|stratile do you have/i.test(lowerMessage)
    ) {
      newContext.currentTopic = 'services_overview';
      setConversationContext(newContext);
      return {
        id: Date.now(),
        sender: 'support',
        text: `We offer several specialized services - which area interests you most?\n\n1. **Market Activations** (Retail merchandising & field marketing)\n2. **Digital Marketing** (Ads, social media & training)\n3. **Community Engagement** (Sports & wellness programs)\n4. **Logistics Solutions** (Supply chain consulting)\n\nOr shall I explain them all?`,
        time: new Date()
      };
    }

    // Marketing activations
    if (
      /(market activations?|brand activations?|product launch|merchandising|retail (promotion|setup|activation)|field (marketing|campaigns?)|sales (force|agents?)|sales team|on-ground marketing|push my brand|introduce.*product.*market)/i.test(lowerMessage)
    ) {
      newContext.currentTopic = 'marketing';
      newContext.customerInterest = 'marketing';
      setConversationContext(newContext);

      const benefitsList = serviceKnowledge.marketing.benefits
        .map(b => `• ${b}`)
        .join('\n');

      return {
        id: Date.now(),
        sender: 'support',
        text: `Ah${userName}, our Market Activations! 🛍️ ${serviceKnowledge.marketing.description}\n\n**Key Benefits:**\n${benefitsList}\n\nWould you like pricing details, or should I explain how we implement these activations?`,
        time: new Date()
      };
    }

    // Digital marketing
    if (
      /(digital marketing|online marketing|social media( marketing| ads)?|facebook ads?|instagram ads?|meta ads?|meta campaigns?|google (ads?|campaigns?)|run ads|online promotions?|content creation|business promotion|train(ing)?|learn (digital|online|social media)|manage (facebook|instagram)|grow my page|get customers online|boost(ed)? posts?)/i.test(lowerMessage)
    ) {
      newContext.currentTopic = 'digital';
      newContext.customerInterest = 'digital';
      setConversationContext(newContext);

      return {
        id: Date.now(),
        sender: 'support',
        text: `Our Digital Marketing services are perfect for today's connected world${userName}! 📱 ${serviceKnowledge.digital.description}\n\nDid you know we can create campaigns in multiple languages? Would you like details about our:\n1. Ad packages\n2. Training programs\n3. Content creation\n4. Or something else?`,
        time: new Date()
      };
    }

    // Community engagement
    if (
      /(community (events?|programs?|projects?|engagement)|imani (foundation)?|sports (events?|tournaments?)|join.*football|football (match|event|tournament)|archery|hikes?|book.*hike|wellness (day|event|program)|team[- ]?building|corporate wellness|youth empowerment|outreach|fitness activities|plan.*sports event|register.*tournament|host.*community event)/i.test(lowerMessage)
    ) {
      newContext.currentTopic = 'community';
      newContext.customerInterest = 'community';
      setConversationContext(newContext);

      return {
        id: Date.now(),
        sender: 'support',
        text: `The Imani Mettle Foundation is all about building stronger communities through sports${userName}! ⚽ ${serviceKnowledge.community.description}\n\nWe can help you:\n• Book activities\n• Organize corporate wellness events\n• Plan competitive tournaments\n\nWhat interests you most?`,
        time: new Date()
      };
    }

    // Logistics
    if (
      /(logistics (services|support)?|supply chain (management|solutions)?|delivery (services|support)?|business delivery|delivery strategy|logistics strategy|logistics partner|delivery help|help with deliveries|consultancy (services)?|business analysis|process improvement|cost saving|transportation planning|business operations|how to improve logistics|streamline my supply chain|delivery challenges|outsourcing logistics|inventory management|distribution planning)/i.test(lowerMessage)
    ) {
      newContext.currentTopic = 'logistics';
      newContext.customerInterest = 'logistics';
      setConversationContext(newContext);

      return {
        id: Date.now(),
        sender: 'support',
        text: `Smart logistics can transform your business operations${userName}! 🚛 ${serviceKnowledge.logistics.description}\n\nOur consultants help identify:\n• Cost-saving opportunities\n• Process improvements\n• Technology integration points\n\nWould you like a consultation overview or pricing details?`,
        time: new Date()
      };
    }

    // Pricing requests
    if (/(price|cost|rate|how much|fee)/i.test(lowerMessage)) {
      newContext.pricingRequests += 1;
      setConversationContext(newContext);
      
      if (conversationContext.customerInterest) {
        return generatePricingResponse(conversationContext.customerInterest);
      } else {
        return {
          id: Date.now(),
          sender: 'support',
          text: `I'd be happy to provide pricing${userName}! Our rates vary by service:\n\n• Market Activations: from KSH 3800/day\n• Digital Marketing: from KSH 7200/day\n• Community Activities: from KSH 500/session\n• Logistics Consultancy: from KSH 2800/day\n\nWhich service would you like detailed pricing for?`,
          time: new Date()
        };
      }
    }

    // Contact information
    if (/(contact|reach|phone|email|address)/i.test(lowerMessage)) {
      return {
        id: Date.now(),
        sender: 'support',
        text: `You can reach us through${userName}:\n\n📞 Phone: 0741953190\n📧 Email: labanmwangi444@gmail.com\n📍 Location: Tatu City (for community activities)\n\nWould you like me to connect you with a specific department?`,
        time: new Date()
      };
    }

    // Default intelligent response
    const defaultResponses = [
      `Interesting question${userName}! Could you tell me more about what you're looking for?`,
      `I'd be happy to help with that${userName}. To give you the best answer, could you clarify: are you interested in our services, events, or something else?`,
      `Great question${userName}! We have several options that might suit your needs. Could you tell me more about your specific requirements?`,
      `I can definitely help with that${userName}. Let me understand better - is this for a business, community group, or personal interest?`
    ];
    
    return {
      id: Date.now(),
      sender: 'support',
      text: defaultResponses[Math.floor(Math.random() * defaultResponses.length)],
      time: new Date()
    };
  };

  const handleFollowUp = (message: string, topic: string) => {
    const userName = conversationContext.userName ? `, ${conversationContext.userName}` : '';
    
    switch(topic) {
      case 'marketing':
        if (/(price|cost|rate)/i.test(message)) {
          return `Here's our marketing activation pricing${userName}:\n\n• Merchandising: ${serviceKnowledge.marketing.pricing.merchandising}\n• Field Marketing: ${serviceKnowledge.marketing.pricing.fieldMarketing}\n• Graphic Design: ${serviceKnowledge.marketing.pricing.graphicDesign}\n\nWould you like a customized quote based on your specific needs?`;
        }
        if (/(how|process|implement)/i.test(message)) {
          return `Our marketing activation process${userName}:\n1. Needs assessment meeting\n2. Retailer/distributor mapping\n3. Team deployment\n4. Ongoing monitoring\n5. Performance reporting\n\nWe typically see measurable results within 4-6 weeks. Would you like a case study example?`;
        }
        break;
        
      case 'digital':
        if (/(price|cost)/i.test(message)) {
          return `Digital marketing service rates${userName}:\n\n• Basic Ad Management: KSH 15,000/month\n• Full Campaign Management: KSH 35,000/month\n• Training Programs: KSH 7,200/day per participant\n• Video Production: KSH 25,000/day\n\nWe offer package discounts for combined services. Interested in a consultation?`;
        }
        break;
        
      case 'community':
        if (/(book|reserve|sign up)/i.test(message)) {
          return `To book community activities${userName}:\n1. Choose your activity (hikes, archery, etc.)\n2. Select preferred date(s)\n3. Provide participant count\n4. We'll confirm availability\n\nWould you like to start a booking now?`;
        }
        break;
        
      case 'logistics':
        if (/(consult|meeting)/i.test(message)) {
          return `We'd love to discuss your logistics needs${userName}! Our typical process:\n1. Initial discovery call (30 mins)\n2. Business assessment\n3. Solution proposal\n4. Implementation\n\nI can arrange a consultation - would tomorrow or later this week work better?`;
        }
        break;

      case 'faq_list':
        const faqIndex = parseInt(message) - 1;
        if (!isNaN(faqIndex) && faqs[faqIndex]) {
          return faqs[faqIndex].answer;
        }
        break;
    }
    return null;
  };

  const generatePricingResponse = (service: string) => {
    const userName = conversationContext.userName ? `, ${conversationContext.userName}` : '';
    
    switch(service) {
      case 'marketing':
        return {
          id: Date.now(),
          sender: 'support',
          text: `Here's detailed pricing for Market Activations${userName}:\n\n• Basic Merchandising: KSH 3800/day per staff\n• Premium Merchandising (with reporting): KSH 4500/day\n• Field Marketing Agents: KSH 4800/day\n• Salesforce Management: KSH 5500/day\n\nVolume discounts available for 30+ day engagements. Need a customized quote?`,
          time: new Date()
        };
      case 'digital':
        return {
          id: Date.now(),
          sender: 'support',
          text: `Digital Marketing Services Pricing${userName}:\n\n• Social Media Management: from KSH 20,000/month\n• Google/Meta Ads: 15% of ad spend (min. KSH 10,000)\n• Training Programs: KSH 7200/day per person\n• Video Production: KSH 25,000/day\n\nPackage deals available for multiple services.`,
          time: new Date()
        };
      case 'community':
        return {
          id: Date.now(),
          sender: 'support',
          text: `Community Activity Rates${userName}:\n\n• Community Hikes: KSH 500 per person\n• Archery Sessions: KSH 1500/hour (equipment included)\n• Corporate Wellness Days: Custom pricing\n• Tournament Organization: From KSH 25,000\n\nGroup discounts available for 10+ participants.`,
          time: new Date()
        };
      case 'logistics':
        return {
          id: Date.now(),
          sender: 'support',
          text: `Logistics Consultancy Fees${userName}:\n\n• Initial Assessment: KSH 2800/day\n• Full Analysis: KSH 15,000-50,000 (project-based)\n• Ongoing Support: KSH 10,000/month\n\nFirst consultation is free for new clients!`,
          time: new Date()
        };
      default:
        return {
          id: Date.now(),
          sender: 'support',
          text: `I'd be happy to provide pricing details${userName}. Could you specify which service you're interested in? We offer:\n1. Market Activations\n2. Digital Marketing\n3. Community Programs\n4. Logistics Solutions`,
          time: new Date()
        };
    }
  };

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClose = () => {
    onClose();
    setAwaitingHuman(false);
    setHasAskedForName(false);
    setConversationContext(prev => ({
      ...prev,
      userName: ''
    }));
    // Reset to initial state when closing
    setChatMessages([
      { 
        id: 1, 
        sender: 'support', 
        text: 'Hello there! 👋 Welcome to Stratile Ltd. May I know your name before we proceed?', 
        time: new Date() 
      }
    ]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  return (
    <>
      <Box position="fixed" bottom="6" right="6" zIndex="999">
        {!isOpen ? (
          <IconButton
            aria-label="Open live chat"
            icon={
              <div style={{ width: '24px', height: '24px', position: 'relative' }}>
                <Image 
                  src="/static/images/support.png" 
                  alt="Support icon"
                  fill
                />
              </div>
            }
            onClick={onOpen}
            colorScheme="green"
            size="lg"
            isRound
            boxShadow="lg"
          />
        ) : (
          <Box
            bg={useColorModeValue('white', 'gray.800')}
            rounded="lg"
            boxShadow="xl"
            width={{ base: '90vw', md: '400px' }}
            maxH="70vh"
            display="flex"
            flexDirection="column"
          >
            <Box
              bg="green.500"
              color="white"
              p={3}
              borderTopRadius="lg"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text fontWeight="bold">
                {awaitingHuman ? 'Connecting to support...' : 'Stratile Assistant'}
              </Text>
              <IconButton
                aria-label="Close chat"
                icon={<Icon as={FiX} />}
                onClick={handleClose}
                variant="ghost"
                color="white"
                size="sm"
              />
            </Box>

            <Box
              flex="1"
              p={4}
              overflowY="auto"
              bg={useColorModeValue('gray.50', 'gray.700')}
            >
              {chatMessages.map((msg) => (
                <Box
                  key={msg.id}
                  mb={4}
                  alignSelf={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
                  maxW="80%"
                >
                  <Box
                    bg={msg.sender === 'user' ? 'green.500' : useColorModeValue('white', 'gray.600')}
                    color={msg.sender === 'user' ? 'white' : useColorModeValue('gray.800', 'white')}
                    px={4}
                    py={2}
                    rounded="lg"
                    boxShadow="sm"
                    whiteSpace="pre-line"
                  >
                    <Text>{msg.text}</Text>
                    <Text
                      fontSize="xs"
                      color={msg.sender === 'user' ? 'green.100' : useColorModeValue('gray.500', 'gray.300')}
                      textAlign="right"
                      mt={1}
                    >
                      {msg.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </Text>
                  </Box>
                </Box>
              ))}
              <div ref={messagesEndRef} />
            </Box>

            <Box p={3} borderTopWidth="1px">
              <HStack>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={handleKeyPress}
                  resize="none"
                  rows={1}
                />
                <Button
                  colorScheme="green"
                  onClick={handleSendMessage}
                  isDisabled={!message.trim()}
                >
                  Send
                </Button>
              </HStack>
              {!awaitingHuman && (
                <Text mt={2} fontSize="sm" textAlign="center" color="gray.500">
                  Ask me about services, pricing, or type "human" for live support
                </Text>
              )}
            </Box>
          </Box>
        )}
      </Box>
    </>
  )
}

const HeroSection: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const { colorMode } = useColorMode();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/static/images/slide1.jpeg',
    '/static/images/slide2.jpeg',
    '/static/images/slide3.jpeg',
    '/static/images/slide4.jpeg',
    '/static/images/slide5.jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = () => {
    if (name && email && message) {
      alert(`Thank you, ${name}! We'll contact you soon at ${email}.`);
      onClose();
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <Box position="relative" overflow="hidden" minH="100vh">
      {/* Image Slideshow Background */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-2}
        backgroundImage={`url(${images[currentImageIndex]})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        transition="background-image 1s ease-in-out"
      />
      
      {/* Dark overlay for better text visibility */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.600"
        zIndex={-1}
      />

      {/* Gradient overlay (kept from your original) */}
      <BackgroundGradient height="100%" zIndex="-1" />

      <Container maxW="container.xl" pt={{ base: 20, lg: 40 }} pb="20">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center" spacing={8}>
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                STRATILE LTD – PROJECTING SUCCESS,  
                <Br display={{ base: "none", md: "block" }} /> 
                <Box as="span" display={{ base: "block", md: "none" }}> </Box>
                BUILDING COMMUNITIES
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                <Text as="span" fontSize={["sm", "md", "lg"]}>
                  <Em>Established in 2024, Stratile Ltd is a dynamic and forward-thinking Project Management 
                  Organization (PMO) dedicated to transforming visionary projects into thriving businesses and 
                  impactful community development initiatives. We serve as a catalyst for progress, providing 
                  expert guidance and comprehensive project management solutions that ensure successful 
                  execution and sustainable outcomes.</Em>
                </Text>
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup 
                spacing={4} 
                alignItems="center" 
                flexDirection="row"
                w="full"
                maxW={{ base: "100%", md: "auto" }}
              >
                <ButtonLink 
                  colorScheme="primary" 
                  size={{ base: "md", md: "lg" }} 
                  href="/"
                  width={{ base: "full", md: "auto" }}
                >
                  Explore our services 
                </ButtonLink>
                <Button
                  size={{ base: "md", md: "lg" }}
                  onClick={onOpen}
                  variant="outline"
                  width={{ base: "full", md: "auto" }}
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                  _light={{ bg: "white", color: "black" }}
                  _dark={{ bg: "white", color: "black" }}
                >
                  Contact us
                </Button>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
        </Stack>
      </Container>

      {/* Contact Form Modal */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            bg={colorMode === "dark" ? "gray.800" : "white"}
            color={colorMode === "dark" ? "white" : "gray.800"}
          >
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Contact Us
            </AlertDialogHeader>

            <AlertDialogBody>
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message us with your requirements, and we'll send you a custom quotation tailored to your needs"
                    rows={4}
                  />
                </FormControl>
              </VStack>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="primary"
                onClick={handleSubmit}
                ml={3}
                isDisabled={!name || !email || !message}
              >
                Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}

const HighlightsSection = () => {
  const images = [
    "/static/images/inner1.jpg",
    "/static/images/inner2.jpg",
    "/static/images/inner3.jpg",
    "/static/images/inner4.jpg",
    "/static/images/inner5.jpg",
    "/static/images/inner6.jpg"
  ];
  
 const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
   
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Our Vision">
         <BackgroundGradient height="100%" zIndex="-1" />
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            To be the leading project management organization that empowers individuals and communities to realize their full potential through strategically managed and successfully implemented projects.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Our Mission">
        <Text color="muted" fontSize="lg">
          To embody the values of partnership, coherent relationships, and unity in delivering exceptional 
          project management services that foster functional businesses and drive meaningful social 
          development. We are committed to organizing impactful community activities, establishing social 
          development, and sharing valuable insights through our work and digital platforms.
        </Text>
      </HighlightsItem>

      {/* Our Values Section */}
      <HighlightsItem title="Our Values">
        <VStack alignItems="flex-start" spacing="4">
          <Box>
            <Text fontWeight="bold" fontSize="lg">● Partnership:</Text>
            <Text color="muted" fontSize="md" pl="4">
              We believe in fostering strong, collaborative relationships with our clients,
              stakeholders, and the communities we serve. Working together is key to achieving shared
              success.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">● Coherent Relationships:</Text>
            <Text color="muted" fontSize="md" pl="4">
              We prioritize clear communication, mutual respect, and
              transparent engagement to build trust and ensure seamless project execution.
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" fontSize="lg">● Unity:</Text>
            <Text color="muted" fontSize="md" pl="4">
              We champion a unified approach, bringing together diverse talents and
              perspectives to achieve common goals and create a stronger collective impact.
            </Text>
          </Box>
        </VStack>
      </HighlightsItem>

    
   <HighlightsTestimonialItem colSpan={[1, null, 2]} title="">
  <Box
    position="relative"
    overflow="hidden"
    height="400px"       // Set explicit height
    width="100%"         // Ensure full width
    border="none"        // ✅ Remove any default border if applied
    p="0"                // ✅ Remove any default padding
    m="0"                // ✅ Remove any default margin
  >
    {images.map((image, index) => (
      <Box
        key={index}
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        opacity={index === currentIndex ? 1 : 0}
        transition="opacity 1s ease-in-out"
      >
        <Image
          src={image}
          alt={`Slide ${index + 1}`}
          fill
          style={{
            objectFit: 'cover',     // ✅ Image fills container proportionally
            objectPosition: 'center',
          }}
        />
      </Box>
    ))}
  </Box>
</HighlightsTestimonialItem>



      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Our Commitment"
      >
        <Text color="muted" fontSize="lg">
          We are committed to welcoming all who seek to engage and develop with us. We believe in the power of collaboration and are dedicated to building lasting partnerships.
        </Text>
        <Wrap mt="8">
          {[
            'Project Conceptualization',
            'Implementation',
            'Stakeholder Management',
            'Community Engagement',
            'Social Development',
            'Consultation',
            'Business Support',
            'Marketing Activations',
            'Creative Solutions',
            'Advertising',
            'Social Media',
            'Merchandising',
            'Events',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const ServicesSection = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBookingForm = () => {
    setIsBookingOpen(true);
  };

  const closeBookingForm = () => {
    setIsBookingOpen(false);
  };

  return (
     
    <Box 
      as="section"
      maxW="8xl"
      mx="auto"
      px={[4, 6, 8, 10]}
      py={[12, 16, 20]}
      position="relative"
      overflow="hidden"
      
    >
     
      
      {/* Decorative elements */}
      <Box
        position="absolute"
        top="-100px"
        right="-100px"
        w="400px"
        h="400px"
        bgGradient="radial(green.400, transparent 70%)"
        opacity={0.1}
        borderRadius="full"
        zIndex="-1"
      />
      <Box
        position="absolute"
        bottom="-150px"
        left="-150px"
        w="500px"
        h="500px"
        bgGradient="radial(blue.400, transparent 70%)"
        opacity={0.1}
        borderRadius="full"
        zIndex="-1"
      />
      
      {/* Header Section */}
      <Box 
        textAlign="center" 
        mb={[10, 12, 16]}
        maxW="4xl"
        mx="auto"
      >
        <Text
          fontSize={['sm', 'md']}
          fontWeight="semibold"
          color={useColorModeValue('green.500', 'green.400')}
          letterSpacing="wide"
          textTransform="uppercase"
          mb={3}
        >
          Stratile Services
        </Text>
        
        <Heading
          as="h2"
          fontSize={['3xl', '4xl', '5xl', '6xl']}
          fontWeight="bold"
          lineHeight="1.1"
          letterSpacing="tight"
          mb={6}
          position="relative"
          _after={{
            content: '""',
            position: 'absolute',
            width: ['60px', '80px'],
            height: '4px',
            bottom: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            bg: useColorModeValue('green.500', 'green.400'),
            borderRadius: 'full',
          }}
        >
          <Box 
            as="span" 
            display="block"
            bgGradient={useColorModeValue(
              'linear(to-r, gray.800, gray.700)',
              'linear(to-r, gray.100, gray.200)'
            )}
            bgClip="text"
          >
            Comprehensive Solutions
          </Box>
          <Box 
            as="span" 
            display="block"
            bgGradient={useColorModeValue(
              'linear(to-r, green.500, teal.500)',
              'linear(to-r, green.300, teal.300)'
            )}
            bgClip="text"
          >
            Tailored for Your Success
          </Box>
        </Heading>
        
        <Text
          fontSize={['lg', 'xl']}
          color={useColorModeValue('gray.600', 'gray.300')}
          maxW="2xl"
          mx="auto"
          lineHeight="1.6"
        >
          Stratile Ltd offers a comprehensive suite of project management services designed to meet the unique needs of our clients and the communities we support.
        </Text>
      </Box>
      
      {/* Features Section */}
      <SimpleGrid
        columns={[1, 2, 3]}
        spacing={[8, 10, 12]}
        mb={[12, 16, 20]}
      >
        {[
          {
            title: 'Marketing Activations',
            icon: FiTrendingUp,
            description: 'Our trained sales force team delivers direct customer engagement and increased sales for your brand.',
          },
          {
            title: 'Creative Solutions',
            icon: FiGrid,
            description: 'Graphic design services that enhance your brand messaging with visually compelling assets.',
          },
          {
            title: 'Advertising Solutions',
            icon: FiShare2,
            description: 'Strategic campaigns across digital, print, and outdoor channels to maximize your reach.',
          },
          {
            title: 'Social Media Marketing',
            icon: FiUsers,
            description: 'Comprehensive strategy development, content creation, and performance tracking.',
          },
          {
            title: 'Community & Sports Engagement',
            icon: FiShoppingBag,
            description: 'Interactive events designed to build strong community ties and boost brand presence.',
          },
          {
            title: 'Project Conceptualization',
            icon: FiLayers,
            description: 'We work closely with stakeholders to define project objectives, scope, and deliverables.',
          },
        ].map((feature, index) => (
          <Box
            key={index}
            bg={useColorModeValue('white', 'gray.800')}
            p={[6, 8]}
            borderRadius="xl"
            boxShadow={useColorModeValue('0 4px 24px rgba(0, 0, 0, 0.08)', '0 4px 24px rgba(0, 0, 0, 0.2)')}
            border="1px solid"
            borderColor={useColorModeValue('gray.100', 'gray.700')}
            transition="all 0.3s ease"
            _hover={{
              transform: 'translateY(-5px)',
              boxShadow: useColorModeValue('0 8px 32px rgba(0, 0, 0, 0.12)', '0 8px 32px rgba(0, 0, 0, 0.3)'),
              borderColor: useColorModeValue('green.300', 'green.400'),
            }}
            textAlign="center"
          >
            <Center
              w="16"
              h="16"
              mx="auto"
              mb={6}
              bg={useColorModeValue('green.50', 'green.900')}
              color={useColorModeValue('green.500', 'green.300')}
              borderRadius="xl"
            >
              <Icon as={feature.icon} boxSize={6} />
            </Center>
            <Heading
              as="h3"
              fontSize={['xl', '2xl']}
              fontWeight="semibold"
              mb={4}
              color={useColorModeValue('gray.800', 'white')}
            >
              {feature.title}
            </Heading>
            <Text
              fontSize={['md', 'lg']}
              color={useColorModeValue('gray.600', 'gray.300')}
              lineHeight="1.6"
            >
              {feature.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
      
      {/* CTA Section */}
      <Box textAlign="center">
        <Button 
          onClick={openBookingForm}
          colorScheme="green"
          size="lg"
          px={10}
          py={7}
          fontSize="lg"
          fontWeight="semibold"
          borderRadius="xl"
          boxShadow="0 4px 16px rgba(72, 187, 120, 0.3)"
          _hover={{
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(72, 187, 120, 0.4)',
          }}
          transition="all 0.3s ease"
        >
          Book Our Services
        </Button>
        <Text
          mt={4}
          color={useColorModeValue('gray.500', 'gray.400')}
          fontSize="sm"
        >
          Get a custom quote tailored to your specific needs
        </Text>
      </Box>
      {/* Booking Form Modal */}
      <Modal isOpen={isBookingOpen} onClose={closeBookingForm}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Book Our Services</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your name" />
            </FormControl>
            
          <FormControl mt={4}>
          <FormLabel>Business Name</FormLabel>
          <Input placeholder="Your company/organization name" />
          </FormControl>
            
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your email" />
            </FormControl>

            <FormControl mt={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input 
            type="tel" 
            placeholder="07XX XXX XXX" 
            pattern="[0-9]{10}"
            maxLength={10}
          />
        </FormControl>

             <FormControl mt={4}>
          <FormLabel>County</FormLabel>
          <Select placeholder="Select your county">
            <option>Nairobi</option>
            <option>Mombasa</option>
            <option>Kisumu</option>
            <option>Nakuru</option>
            <option>Eldoret</option>
            <option>Kiambu</option>
            <option>Machakos</option>
            <option>Other</option>
          </Select>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Specific Location</FormLabel>
          <Input placeholder="E.g. Westlands, Karen, Kilimani etc." />
        </FormControl>

            <FormControl mt={4}>
              <FormLabel>Service</FormLabel>
              <Select placeholder="Select service">
                <option>Marketing Activations</option>
                <option>Creative Solutions</option>
                <option>Advertising Solutions</option>
                <option>Social Media Marketing</option>
                <option>Merchandising Services</option>
                <option>Project Management</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Message us with your requirements, and we'll send you a custom quotation tailored to your needs" />
            </FormControl>
            
            <Checkbox mt={4} defaultChecked>
             I agree to receive communications via phone, email or SMS
            </Checkbox>
            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3}>
              Submit Booking
            </Button>
            <Button onClick={closeBookingForm}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}
const EventsSection = () => {
  const { 
    isOpen: isInfoOpen, 
    onOpen: onInfoOpen, 
    onClose: onInfoClose 
  } = useDisclosure();
  
  const { 
    isOpen: isBookingOpen, 
    onOpen: onBookingOpen, 
    onClose: onBookingClose 
  } = useDisclosure();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    package: 'premium', // default to premium
    message: 'I want to register for the Naivasha Event Marketing Package'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '254741953190';
    const packageDetails = formData.package === 'premium' 
      ? 'Premium Package (Ksh 45,000)' 
      : 'Basic Package (Ksh 20,000)';
    const message = `New Registration for Naivasha Event:\n\n*Name:* ${formData.name}\n*Company:* ${formData.company}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Package:* ${packageDetails}\n*Message:* ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    onBookingClose();
  };

  const handleProceedToBook = (packageType) => {
    setFormData(prev => ({ ...prev, package: packageType }));
    onInfoClose();
    onBookingOpen();
  };

  return (
    <Container maxW="container.xl" py="20">
      <Stack spacing="12">
        <Box textAlign="center">
          <Heading
            lineHeight="short"
            fontSize={['2xl', null, '4xl']}
            as="p"
          >
            Upcoming Events & Projects
          </Heading>
          <Text color="muted" fontSize="xl" mt="4">
            Discover opportunities to enhance your brand recognition
          </Text>
        </Box>

   <Stack direction={{ base: 'column', md: 'row' }} spacing="8">
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
    position="relative"
    overflow="hidden"
  >
    {/* Animated Diagonal Corner Banner */}
    <Box
      position="absolute"
      top="0"
      right="0"
      width="0"
      height="0"
      borderTop="24px solid red.500"
      borderLeft="24px solid transparent"
      borderRight="24px solid red.500"
      borderBottom="24px solid transparent"
      animation="pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      sx={{
        "@keyframes pulse": {
          "0%, 100%": {
            opacity: 1,
            borderTopColor: "red.500",
            borderRightColor: "red.500"
          },
          "50%": {
            opacity: 0.8,
            borderTopColor: "red.600",
            borderRightColor: "red.600"
          }
        }
      }}
    >
      <Text
        position="absolute"
        top="4px"
        right="-22px"
        fontSize="xs"
        fontWeight="extrabold"
        color="red"
        transform="rotate(45deg)"
        transformOrigin="0 0"
        whiteSpace="nowrap"
        textShadow="0 0 2px black"
        animation="textPop 2s ease-in-out infinite"
        sx={{
          "@keyframes textPop": {
            "0%, 100%": {
              transform: "rotate(45deg) scale(1)",
              opacity: 1
            },
            "50%": {
              transform: "rotate(45deg) scale(1.1)",
              opacity: 0.9
            }
          }
        }}
      >
        EVENT FINISHED
      </Text>
    </Box>
    
    <Heading size="lg" mb="4">Kanini Opening Activations</Heading>
    <Text color="muted" mb="2"><strong>Date:</strong> May 30, 2025</Text>
    <Text color="muted" mb="2"><strong>Location:</strong> Naivasha Town, Dubai Plaza, Opposite Modern Market, Next to Ketias Supermarket</Text>
    <Text mb="4">Join us as we bring the energy to the new Kanini opening,
We will offer VR gaming to help engage consumers
If you want custom data report on your brand review (how customers felt about your product ).</Text>
    
  </Box>
</Stack>

      {/* Information Modal */}
      <Modal isOpen={isInfoOpen} onClose={onInfoClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p="0">
            <Container maxW="container.lg" py="10">
              <Stack spacing="8">
                <Box>
                  <Heading size="2xl" mb="4">Marketing Package Promotion</Heading>
                  <Text fontSize="xl" color="blue.500" fontWeight="bold">Naivasha Event – Friday 30th May 2025</Text>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6">
                  {/* Premium Package */}
                  <Box bg="blue.50" p="6" borderRadius="lg" borderLeft="4px" borderColor="blue.500">
                    <Heading size="lg" mb="4" color="blue.700">Premium Package</Heading>
                    <Text fontSize="xl" fontWeight="bold" mb="2">Price: Ksh 45,000</Text>
                    
                    <UnorderedList spacing="3" fontSize="lg">
                      <ListItem>
                        <strong>250+ expected client engagements</strong> - Get direct access to a large audience
                      </ListItem>
                      <ListItem>
                        <strong>VR Gaming Activation</strong> - Attract more visitors with VR experiences
                      </ListItem>
                      <ListItem>
                        <strong>Dedicated Merchandising Table</strong> - Prime location for your products
                      </ListItem>
                      <ListItem>
                        <strong>Brand Visibility</strong> - Logo in all event marketing materials
                      </ListItem>
                      <ListItem>
                        <strong>Social Media Coverage</strong> - Included in our promotions
                      </ListItem>
                      <ListItem>
                        <strong>Lead Generation</strong> - Attendee contact information provided
                      </ListItem>
                    </UnorderedList>
                  </Box>

                  {/* Basic Package */}
                  <Box bg="gray.50" p="6" borderRadius="lg" borderLeft="4px" borderColor="gray.400">
                    <Heading size="lg" mb="4" color="gray.700">Basic Package</Heading>
                    <Text fontSize="xl" fontWeight="bold" mb="2">Price: Ksh 20,000</Text>
                    
                    <UnorderedList spacing="3" fontSize="lg">
                      <ListItem>
                        <strong>100 expected client engagements</strong> - Smaller audience access
                      </ListItem>
                      <ListItem>
                        <strong>Shared Merchandising Space</strong> - Display area with other brands
                      </ListItem>
                      <ListItem>
                        <strong>Basic Brand Visibility</strong> - Logo on select marketing materials
                      </ListItem>
                      <ListItem>
                        <strong>Limited Social Media Mention</strong> - Secondary inclusion
                      </ListItem>
                      <ListItem>
                        <strong>Self-Managed Lead Collection</strong> - Bring your own collection system
                      </ListItem>
                      <ListItem>
                        <strong>No VR Activation</strong> - Standard booth setup only
                      </ListItem>
                    </UnorderedList>
                  </Box>
                </SimpleGrid>

                <Box>
                  <Heading size="lg" mb="4">Why This Event?</Heading>
                  <Text mb="4">
                    The Kanini Haraka Wholesalers and Distribution event is the premier gathering for industry professionals in Naivasha. 
                    With over 500 expected attendees, this is a unique opportunity to connect with retailers, distributors, and suppliers 
                    in a high-energy environment.
                  </Text>
                  <Text mb="4">
                    Our marketing packages are designed to fit different budgets while maximizing your brand's exposure. 
                    The Premium package with VR Gaming activation increases booth traffic by up to 300% at similar events.
                  </Text>
                </Box>

                <Box>
                  <Heading size="lg" mb="4">Frequently Asked Questions</Heading>
                  <Accordion allowToggle>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex='1' textAlign='left'>
                            What's the difference between the packages?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        The Premium package offers more visibility, exclusive benefits like VR activation, 
                        dedicated space, and full lead generation services. The Basic package provides 
                        essential exposure at a lower cost with shared space and self-managed lead collection.
                      </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex='1' textAlign='left'>
                            Can we upgrade from Basic to Premium later?
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        Yes, upgrades are possible based on availability. However, early booking guarantees 
                        better placement and inclusion in all marketing materials.
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing="6" textAlign="center" py="4">
                  <Box>
                    <Button 
                      colorScheme="green" 
                      size="lg" 
                      onClick={() => handleProceedToBook('premium')}
                      rightIcon={<FiArrowRight />}
                      px="8"
                      py="6"
                      fontSize="xl"
                    >
                      Book Premium (45K)
                    </Button>
                  </Box>
                  <Box>
                    <Button 
                      colorScheme="blue" 
                      size="lg" 
                      onClick={() => handleProceedToBook('basic')}
                      rightIcon={<FiArrowRight />}
                      px="8"
                      py="6"
                      fontSize="xl"
                    >
                      Book Basic (20K)
                    </Button>
                  </Box>
                </SimpleGrid>
              </Stack>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Booking Form Modal */}
      <Modal isOpen={isBookingOpen} onClose={onBookingClose} size="lg">
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

                <FormControl isRequired>
                  <FormLabel>Package Selection</FormLabel>
                  <Select 
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                  >
                    <option value="premium">Premium Package (Ksh 45,000)</option>
                    <option value="basic">Basic Package (Ksh 20,000)</option>
                  </Select>
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
              <Button variant="ghost" mr={3} onClick={onBookingClose}>
                Cancel
              </Button>
              <Button 
                colorScheme="green" 
                type="submit"
                rightIcon={<FiCheck />}
              >
                Send via WhatsApp
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Container>
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title="Active Projects"
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
