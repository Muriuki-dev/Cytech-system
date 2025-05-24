'use client'

import React, { useState, useEffect } from 'react'
import {
  FaArrowRight,
  FaBox,
  FaCheck,
  FaCode,
  FaCopy,
  FaFlag,
  FaThumbsUp,
  FaSearch,
  FaSlidersH,
  FaSmile,
  FaTerminal,
  FaToggleOn,
  FaChartLine,
  FaUserPlus,
  FaCalendar,
  FaLayerGroup,
  FaUsers,
  FaTools,
  FaShareAlt,
  FaShoppingBag,
} from 'react-icons/fa'

// Constants for reusable data
const CORE_FEATURES = [
  {
    title: 'Project Management',
    icon: <FaLayerGroup className="text-purple-600 text-2xl" />,
    description: 'From conceptualization to execution, we guide your project to success.'
  },
  {
    title: 'Community Development',
    icon: <FaUsers className="text-purple-600 text-2xl" />,
    description: 'We organize impactful activities that foster social development.'
  },
  {
    title: 'Strategic Partnerships',
    icon: <FaTools className="text-purple-600 text-2xl" />,
    description: 'Building collaborative relationships for shared success.'
  }
]

const SERVICES = [
  {
    title: 'Marketing Activations',
    icon: <FaChartLine className="text-purple-600 text-xl" />,
    description: 'Our trained sales force team delivers direct customer engagement and increased sales for your brand.'
  },
  {
    title: 'Creative Solutions',
    icon: <FaThumbsUp className="text-purple-600 text-xl" />,
    description: 'Graphic design services that enhance your brand messaging with visually compelling assets.'
  },
  {
    title: 'Advertising Solutions',
    icon: <FaShareAlt className="text-purple-600 text-xl" />,
    description: 'Strategic campaigns across digital, print, and outdoor channels to maximize your reach.'
  },
  {
    title: 'Social Media Marketing',
    icon: <FaUsers className="text-purple-600 text-xl" />,
    description: 'Comprehensive strategy development, content creation, and performance tracking.'
  },
  {
    title: 'Merchandising Services',
    icon: <FaShoppingBag className="text-purple-600 text-xl" />,
    description: 'POS materials and display solutions that optimize product placement and brand visibility.'
  },
  {
    title: 'Project Management',
    icon: <FaLayerGroup className="text-purple-600 text-xl" />,
    description: 'End-to-end project support from conceptualization to execution and stakeholder management.'
  }
]

const EVENTS = [
  {
    title: 'Trade Show 2025',
    date: 'June 15-17, 2025',
    location: 'Nairobi Convention Center',
    description: 'Join us for the premier industry event showcasing innovative products and services.',
    link: '/events/trade-show-2025'
  },
  {
    title: 'Community Development Initiative',
    date: 'Launching: July 2025',
    location: 'Multiple Counties',
    description: 'Our new initiative to empower local communities through sustainable development projects.',
    link: '/projects/community-development'
  },
  {
    title: 'Brand Expo',
    date: 'August 5-7, 2025',
    location: 'Sarit Center',
    description: 'Showcase your brand to thousands of potential customers at this annual exhibition.',
    link: '/events/brand-expo'
  }
]

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, TechCorp",
    content: "Stratile transformed our product launch with their exceptional project management. The team's attention to detail and strategic approach delivered results beyond our expectations.",
    avatar: "/static/images/avatar1.jpg"
  },
  {
    name: "Michael Omondi",
    role: "CEO, GreenFarm Ltd",
    content: "Their community development initiatives have made a tangible difference in our agricultural projects. Stratile understands the local context and delivers sustainable solutions.",
    avatar: "/static/images/avatar2.jpg"
  },
  {
    name: "Grace Mwende",
    role: "Brand Manager, BeautyEssentials",
    content: "The marketing activation team increased our retail sales by 40% in just three months. Their creative approach and execution are unmatched in the industry.",
    avatar: "/static/images/avatar3.jpg"
  }
]

const FAQS = [
  {
    question: "What industries does Stratile specialize in?",
    answer: "We work across multiple sectors including technology, agriculture, retail, FMCG, and community development projects. Our expertise is adaptable to various industries."
  },
  {
    question: "How does Stratile approach project management?",
    answer: "We employ a holistic methodology that combines strategic planning, stakeholder engagement, and agile execution to ensure project success from conception to completion."
  },
  {
    question: "What geographic areas do you cover?",
    answer: "While headquartered in Nairobi, we operate nationwide in Kenya and have capacity to support projects across East Africa through our partner network."
  },
  {
    question: "How can I engage Stratile for my project?",
    answer: "Simply contact us through our website or visit our offices for an initial consultation. We'll discuss your needs and propose a tailored approach."
  }
]

const Home = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="overflow-x-hidden font-sans text-gray-800">
      <HeroSection isMobile={isMobile} />
      <HighlightsSection isMobile={isMobile} />
      <ServicesSection isMobile={isMobile} />
      <EventsSection isMobile={isMobile} />
      <TestimonialsSection isMobile={isMobile} />
      <FaqSection isMobile={isMobile} />
    </div>
  )
}

const HeroSection = ({ isMobile }) => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxValue = scrollY * 0.5

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-r from-purple-400 to-pink-400"></div>
      
      <div className={`container mx-auto px-4 ${isMobile ? 'pt-32 pb-20' : 'pt-48 pb-40'} relative z-10`}>
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center gap-8`}>
          <div className={`${isMobile ? 'w-full' : 'w-1/2'}`}>
            <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold leading-tight mb-6 animate-fadeIn`}>
              <span className="block text-purple-900">STRATILE LTD –</span>
              <span className="block text-gray-800">PROJECTING SUCCESS,</span>
              <span className="block text-gray-800">BUILDING COMMUNITIES</span>
            </h1>
            
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-600 mb-8 leading-relaxed animate-fadeIn delay-100`}>
              <em>Established in 2024, Stratile Ltd is a dynamic and forward-thinking Project Management Organization (PMO) dedicated to transforming visionary projects into thriving businesses and impactful community development initiatives. We serve as a catalyst for progress, providing expert guidance and comprehensive project management solutions that ensure successful execution and sustainable outcomes.</em>
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fadeIn delay-200">
              <a href="/signup" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-300">
                Explore our services
              </a>
              <a href="/contact" className="px-8 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium rounded-full transition-all duration-300 flex items-center group">
                Contact us
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
          
          {!isMobile && (
            <div className="w-1/2 relative" style={{ transform: `translateY(${parallaxValue}px)` }}>
              <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="/static/images/stratile-team.jpg" 
                  alt="Stratile team working together" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Core Features */}
      <div className="container mx-auto px-4 py-12">
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
          {CORE_FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeInUp border-t-4 border-purple-500"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const HighlightsSection = ({ isMobile }) => {
  const TAGS = [
    'Project Conceptualization', 'Implementation', 'Stakeholder Management', 'Community Engagement', 
    'Social Development', 'Consultation', 'Business Support', 'Marketing Activations',
    'Creative Solutions', 'Advertising', 'Social Media', 'Merchandising', 'Events'
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-8 mb-8`}>
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl animate-fadeIn shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the leading project management organization that empowers individuals and communities to realize their full potential through strategically managed and successfully implemented projects.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl animate-fadeIn delay-100 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To embody the values of partnership, coherent relationships, and unity in delivering exceptional project management services that foster functional businesses and drive meaningful social development.
            </p>
          </div>
        </div>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-8`}>
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-8 rounded-xl text-white animate-fadeIn delay-200 shadow-lg">
            <div className="flex items-center mb-4">
              <img src="/static/images/avatar.jpg" alt="Laban Mwangi" className="w-12 h-12 rounded-full mr-4 border-2 border-white" />
              <div>
                <h3 className="font-bold">Laban Mwangi</h3>
                <p className="text-purple-200">Co-director</p>
              </div>
            </div>
            <blockquote className="text-lg italic leading-relaxed">
              "Stratile serves as a catalyst for progress, providing expert guidance and comprehensive project management solutions that ensure successful execution and sustainable outcomes."
            </blockquote>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl animate-fadeIn delay-300 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-purple-800">Our Commitment</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are committed to welcoming all who seek to engage and develop with us. We believe in the power of collaboration and are dedicated to building lasting partnerships.
            </p>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm animate-fadeIn hover:bg-purple-200 transition-colors"
                  style={{ animationDelay: `${index * 0.05 + 0.4}s` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ServicesSection = ({ isMobile }) => {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-4 text-purple-900`}>
            Our Comprehensive Service Offerings
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-600 max-w-3xl mx-auto`}>
            Stratile provides a wide range of services to meet your business and community development needs.
            <br />
            Explore how we can help you achieve your goals.
          </p>
        </div>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-6`}>
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border-l-4 border-purple-600 animate-fadeInUp hover:translate-y-[-5px]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-3">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const EventsSection = ({ isMobile }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-4 text-purple-900`}>
            Upcoming Events & Projects
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-600`}>
            Discover opportunities to enhance your brand recognition
          </p>
        </div>
        
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 mb-8`}>
          {EVENTS.map((event, index) => (
            <div 
              key={index}
              className={`${isMobile ? 'w-full' : 'w-1/3'} bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-t-4 border-purple-500 animate-fadeInUp hover:translate-y-[-5px]`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-3">
                <div className="p-2 bg-purple-100 rounded-lg mr-3">
                  <FaCalendar className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
              </div>
              <p className="text-gray-600 mb-2"><strong className="text-purple-700">Date:</strong> {event.date}</p>
              <p className="text-gray-600 mb-3"><strong className="text-purple-700">Location:</strong> {event.location}</p>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <a 
                href={event.link} 
                className="text-purple-600 font-medium inline-flex items-center group transition-all duration-300"
              >
                Learn more
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="text-center animate-fadeIn delay-300">
          <a 
            href="/events" 
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-300"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = ({ isMobile }) => {
  return (
    <section className="py-16 bg-purple-900">
      <div className="container mx-auto px-4">
        <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-center mb-12 text-white animate-fadeIn`}>
          What Our Partners Say
        </h2>
        <div className="w-20 h-1 bg-purple-400 mx-auto mb-12"></div>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-purple-200" />
                <div>
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-purple-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic relative pl-4 border-l-2 border-purple-300">
                "{testimonial.content}"
              </blockquote>
              <div className="mt-4 text-purple-500">
                <FaThumbsUp className="inline mr-1" /> Recommended
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FaqSection = ({ isMobile }) => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-center mb-12 text-purple-900 animate-fadeIn`}>
          Frequently Asked Questions
        </h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-12"></div>
        
        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border-b border-gray-200 pb-4 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="flex justify-between items-center w-full text-left font-medium text-lg focus:outline-none text-purple-800 hover:text-purple-600"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <FaArrowRight 
                  className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-90 text-purple-600' : 'text-purple-400'}`} 
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-40 mt-3' : 'max-h-0'}`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
