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
  FaToggleOn,         // ✅ Replaced FaToggleLeft
  FaChartLine,
  FaUserPlus,
  FaCalendar,
  FaLayerGroup,
  FaUsers,
  FaTools,
  FaShareAlt,
  FaShoppingBag,
} from 'react-icons/fa'


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
    <div className="overflow-x-hidden">
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
      <div className="absolute inset-0 z-0 opacity-20 bg-gradient-to-r from-purple-400 to-pink-400"></div>
      
      <div className={`container mx-auto px-4 ${isMobile ? 'pt-32 pb-20' : 'pt-48 pb-40'} relative z-10`}>
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center`}>
          <div className={`${isMobile ? 'w-full' : 'w-1/2'}`}>
            <h1 className={`${isMobile ? 'text-3xl' : 'text-5xl'} font-bold leading-tight mb-6 animate-fadeIn`}>
              <span className="block">STRATILE LTD –</span>
              <span className="block">PROJECTING SUCCESS,</span>
              <span className="block">BUILDING COMMUNITIES</span>
            </h1>
            
            <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-600 mb-8 leading-relaxed animate-fadeIn delay-100`}>
              <em>Established in 2024, Stratile Ltd is a dynamic and forward-thinking Project Management Organization (PMO) dedicated to transforming visionary projects into thriving businesses and impactful community development initiatives. We serve as a catalyst for progress, providing expert guidance and comprehensive project management solutions that ensure successful execution and sustainable outcomes.</em>
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fadeIn delay-200">
              <a href="/signup" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105">
                Explore our services
              </a>
              <a href="/contact" className="px-8 py-3 border border-purple-600 text-purple-600 hover:bg-purple-50 font-medium rounded-full transition-all duration-300 flex items-center group">
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

      <div className="container mx-auto px-4 py-12">
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
          {[
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
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="flex items-start mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
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
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-8 mb-8`}>
          <div className="bg-gray-50 p-8 rounded-xl animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg">
              To be the leading project management organization that empowers individuals and communities to realize their full potential through strategically managed and successfully implemented projects.
            </p>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl animate-fadeIn delay-100">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To embody the values of partnership, coherent relationships, and unity in delivering exceptional project management services that foster functional businesses and drive meaningful social development.
            </p>
          </div>
        </div>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-8`}>
          <div className="bg-gradient-to-r from-pink-200 to-purple-500 p-8 rounded-xl text-white animate-fadeIn delay-200">
            <div className="flex items-center mb-4">
              <img src="/static/images/avatar.jpg" alt="Laban Mwangi" className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h3 className="font-bold">Laban Mwangi</h3>
                <p className="text-pink-100">Co-director</p>
              </div>
            </div>
            <blockquote className="text-lg italic">
              "Stratile serves as a catalyst for progress, providing expert guidance and comprehensive project management solutions that ensure successful execution and sustainable outcomes."
            </blockquote>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl animate-fadeIn delay-300">
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-6">
              We are committed to welcoming all who seek to engage and develop with us. We believe in the power of collaboration and are dedicated to building lasting partnerships.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'Project Conceptualization', 'Implementation', 'Stakeholder Management', 'Community Engagement', 
                'Social Development', 'Consultation', 'Business Support', 'Marketing Activations',
                'Creative Solutions', 'Advertising', 'Social Media', 'Merchandising', 'Events'
              ].map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm animate-fadeIn"
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-4`}>
            Our Comprehensive<br />Service Offerings
          </h2>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-600 max-w-3xl mx-auto`}>
            Stratile provides a wide range of services to meet your business and community development needs.
            <br />
            Explore how we can help you achieve your goals.
          </p>
        </div>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-6`}>
          {[
            {
              title: 'Marketing Activations',
              icon: <FaTrendingUp className="text-purple-600 text-xl" />,
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
          ].map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border-l-4 border-purple-600 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-3">
                {service.icon}
                <h3 className="text-xl font-semibold ml-3">{service.title}</h3>
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
          <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold mb-4`}>
            Upcoming Events & Projects
          </h2>
          <p className={`${isMobile ? 'text-lg' : 'text-xl'} text-gray-600`}>
            Discover opportunities to enhance your brand recognition
          </p>
        </div>
        
        <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 mb-8`}>
          {[
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
          ].map((event, index) => (
            <div 
              key={index}
              className={`${isMobile ? 'w-full' : 'w-1/3'} bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition-all duration-300 animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-xl font-bold mb-3">{event.title}</h3>
              <p className="text-gray-600 mb-2"><strong>Date:</strong> {event.date}</p>
              <p className="text-gray-600 mb-3"><strong>Location:</strong> {event.location}</p>
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
            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View All Events
          </a>
        </div>
      </div>
    </section>
  )
}

const TestimonialsSection = ({ isMobile }) => {
  const testimonials = [
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

  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-center mb-12 animate-fadeIn`}>
          What Our Partners Say
        </h2>
        
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-3'} gap-8`}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-600 italic">
                "{testimonial.content}"
              </blockquote>
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

  const faqs = [
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

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`${isMobile ? 'text-3xl' : 'text-4xl'} font-bold text-center mb-12 animate-fadeIn`}>
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border-b border-gray-200 pb-4 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="flex justify-between items-center w-full text-left font-medium text-lg focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <FaArrowRight 
                  className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-90 text-purple-600' : ''}`} 
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
