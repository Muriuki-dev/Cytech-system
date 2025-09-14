// app/services/fuel-monitoring/page.tsx
import Image from 'next/image';
import { FiCheck, FiBarChart2, FiAlertTriangle, FiDatabase, FiTrendingUp, FiChevronRight } from 'react-icons/fi';

export default function FuelMonitoringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-green-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="absolute top-0 right-0 -mr-40 mt-10 opacity-10">
          <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="200" stroke="white" strokeWidth="2"/>
            <circle cx="250" cy="250" r="150" stroke="white" strokeWidth="2"/>
            <circle cx="250" cy="250" r="100" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">Intelligent Fuel Monitoring Solutions</h1>
            <p className="text-xl md:text-2xl mb-8 font-light opacity-90">Precision fuel management for optimal efficiency and cost control</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg flex items-center justify-center">
                Get Started <FiChevronRight className="ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <Image 
                src="/images/fuel-monitoring-hero.jpg" 
                alt="Fuel Monitoring System" 
                width={600} 
                height={400} 
                className="w-full h-auto transform hover:scale-105 transition duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-100 rounded-full opacity-50 z-0"></div>
          </div>
          <div className="lg:w-1/2 lg:pl-16">
            <div className="inline-block mb-4">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Advanced Technology</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Next-Generation Fuel Management</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Cy-Tech Fuel Monitoring Solutions are engineered to deliver precise, reliable, and actionable data 
              on fuel consumption and storage. Designed for businesses managing multiple assets or large fleets, 
              our system integrates advanced fuel-level sensors, GPS tracking, and telematics analytics to provide 
              comprehensive fuel management capabilities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <FiCheck className="text-green-600" />
                </div>
                <span className="text-gray-800">High-precision sensors with accuracy up to ±1%</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <FiCheck className="text-green-600" />
                </div>
                <span className="text-gray-800">Real-time monitoring and alerts</span>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <FiCheck className="text-green-600" />
                </div>
                <span className="text-gray-800">Advanced theft detection algorithms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 lg:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-green-900 to-transparent opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Excellence</h2>
            <p className="text-lg text-gray-600">Our advanced features deliver unparalleled fuel monitoring capabilities</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600 text-2xl">
                <FiBarChart2 />
              </div>
              <h3 className="text-xl font-semibold mb-3">High-Precision Fuel Sensors</h3>
              <p className="text-gray-600 mb-4">Capable of detecting even minimal fuel variations, with accuracy up to ±1%.</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{width: '99%'}}></div>
              </div>
              <div className="text-xs text-gray-500 mt-2 flex justify-between">
                <span>0%</span>
                <span>Accuracy: 99%</span>
                <span>100%</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600 text-2xl">
                <FiDatabase />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Data Transmission</h3>
              <p className="text-gray-600 mb-4">Continuous fuel-level reporting for local & cross border networks.</p>
              <div className="flex items-center text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span>Live data streaming active</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600 text-2xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-6 0H5m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Multi-Tank Support</h3>
              <p className="text-gray-600">Designed to monitor single or dual-tank vehicles and stationary tanks simultaneously.</p>
              <div className="flex mt-4">
                <div className="w-1/2 pr-2">
                  <div className="bg-gray-100 rounded-lg p-2 text-center">
                    <span className="text-sm font-medium">Primary Tank</span>
                    <div className="h-32 relative mt-2 bg-gray-200 rounded">
                      <div className="absolute bottom-0 w-full bg-green-500 rounded" style={{height: '75%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="w-1/2 pl-2">
                  <div className="bg-gray-100 rounded-lg p-2 text-center">
                    <span className="text-sm font-medium">Secondary Tank</span>
                    <div className="h-32 relative mt-2 bg-gray-200 rounded">
                      <div className="absolute bottom-0 w-full bg-green-400 rounded" style={{height: '45%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600 text-2xl">
                <FiAlertTriangle />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Theft Detection</h3>
              <p className="text-gray-600 mb-4">Algorithm-based detection of sudden fuel drops, with instant SMS, email, or platform alerts.</p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-red-700 text-sm font-medium">Alert: Unusual fuel drop detected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Benefits</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Operations</h2>
          <p className="text-lg text-gray-600">Experience tangible improvements in efficiency, security, and cost management</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <FiTrendingUp className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Cost Reduction</h3>
            <p className="text-gray-600">Identify and eliminate fuel waste, unauthorized usage, and theft.</p>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <span className="text-green-600 font-bold text-2xl">Up to 25%</span>
              <p className="text-sm text-gray-500">reduction in fuel costs</p>
            </div>
          </div>
          
          <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Enhanced Security</h3>
            <p className="text-gray-600">Protect your assets from fuel theft with immediate alerts and evidence.</p>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <span className="text-green-600 font-bold text-2xl">99%</span>
              <p className="text-sm text-gray-500">theft detection rate</p>
            </div>
          </div>
          
          <div className="text-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Operational Transparency</h3>
            <p className="text-gray-600">Gain complete visibility into fuel usage patterns and driver behavior.</p>
            <div className="mt-6 pt-4 border-t border-gray-100">
              <span className="text-green-600 font-bold text-2xl">24/7</span>
              <p className="text-sm text-gray-500">monitoring coverage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 lg:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">Applications</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industry Solutions</h2>
            <p className="text-lg text-gray-600">Tailored fuel monitoring for diverse operational needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-700">Fleet Management</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Monitor fuel consumption across all vehicles</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Detect fuel theft or unauthorized usage</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Optimize refueling schedules and routes</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Generate detailed fuel reports for accounting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-6 0H5m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-green-700">Stationary Tanks</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Monitor fuel levels in generators, boilers, or storage tanks</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Receive low-fuel alerts for timely refills</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Track fuel consumption patterns for budgeting</span>
                </li>
                <li className="flex items-start">
                  <FiCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Prevent unauthorized access to fuel reserves</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-green-800 to-green-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" x="0" y="0" width="0.05" height="0.05">
              <path d="M 0,0 L 100,0 100,100 0,100 Z" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect x="0" y="0" width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Optimize Your Fuel Management?</h2>
            <p className="text-xl mb-10 opacity-90">Contact us today to learn how our fuel monitoring solutions can save your business time and money.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                Request Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm opacity-80">
              <div className="flex items-center">
                <FiCheck className="mr-2 text-green-300" /> No credit card required
              </div>
              <div className="flex items-center">
                <FiCheck className="mr-2 text-green-300" /> 30-day free trial
              </div>
              <div className="flex items-center">
                <FiCheck className="mr-2 text-green-300" /> Setup in minutes
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
