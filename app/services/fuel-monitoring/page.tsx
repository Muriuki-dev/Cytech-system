// app/services/fuel-monitoring/page.tsx
import Image from 'next/image';
import { FiCheck, FiBarChart2, FiAlertTriangle, FiDatabase, FiTrendingUp } from 'react-icons/fi';

export default function FuelMonitoringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fuel Monitoring Solutions</h1>
          <p className="text-xl mb-8">Precision fuel management for optimal efficiency and cost control</p>
          <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image 
              src="/images/fuel-monitoring-hero.jpg" 
              alt="Fuel Monitoring System" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">Advanced Fuel Management</h2>
            <p className="text-lg text-gray-700 mb-6">
              Cy-Tech Fuel Monitoring Solutions are engineered to deliver precise, reliable, and actionable data 
              on fuel consumption and storage. Designed for businesses managing multiple assets or large fleets, 
              our system integrates advanced fuel-level sensors, GPS tracking, and telematics analytics to provide 
              comprehensive fuel management capabilities.
            </p>
            <div className="flex items-center mb-4">
              <FiCheck className="text-green-500 mr-2" />
              <span>High-precision sensors with accuracy up to ±1%</span>
            </div>
            <div className="flex items-center mb-4">
              <FiCheck className="text-green-500 mr-2" />
              <span>Real-time monitoring and alerts</span>
            </div>
            <div className="flex items-center">
              <FiCheck className="text-green-500 mr-2" />
              <span>Advanced theft detection algorithms</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-600 mb-4 text-2xl">
                <FiBarChart2 />
              </div>
              <h3 className="text-xl font-semibold mb-2">High-Precision Fuel Sensors</h3>
              <p className="text-gray-600">Capable of detecting even minimal fuel variations, with accuracy up to ±1%.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-600 mb-4 text-2xl">
                <FiDatabase />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Data Transmission</h3>
              <p className="text-gray-600">Continuous fuel-level reporting for local & cross border networks.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-600 mb-4 text-2xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-6 0H5m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Tank Support</h3>
              <p className="text-gray-600">Designed to monitor single or dual-tank vehicles and stationary tanks simultaneously.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-600 mb-4 text-2xl">
                <FiAlertTriangle />
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Theft Detection</h3>
              <p className="text-gray-600">Algorithm-based detection of sudden fuel drops, with instant SMS, email, or platform alerts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Operational Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiTrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
            <p className="text-gray-600">Identify and eliminate fuel waste, unauthorized usage, and theft.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
            <p className="text-gray-600">Protect your assets from fuel theft with immediate alerts and evidence.</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Operational Transparency</h3>
            <p className="text-gray-600">Gain complete visibility into fuel usage patterns and driver behavior.</p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Fleet Management</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Monitor fuel consumption across all vehicles</li>
                <li>Detect fuel theft or unauthorized usage</li>
                <li>Optimize refueling schedules and routes</li>
                <li>Generate detailed fuel reports for accounting</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Stationary Tanks</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Monitor fuel levels in generators, boilers, or storage tanks</li>
                <li>Receive low-fuel alerts for timely refills</li>
                <li>Track fuel consumption patterns for budgeting</li>
                <li>Prevent unauthorized access to fuel reserves</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Fuel Management?</h2>
          <p className="text-xl mb-8">Contact us today to learn how our fuel monitoring solutions can save your business time and money.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
