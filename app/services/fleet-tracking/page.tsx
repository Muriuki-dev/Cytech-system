// app/services/fleet-tracking/page.tsx
import Image from 'next/image';
import { FiCheck, FiMap, FiShield, FiBarChart2, FiClock, FiSmartphone, FiMail } from 'react-icons/fi';

export default function FleetTrackingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fleet & Vehicle Tracking Solutions</h1>
          <p className="text-xl mb-8">Monitor. Manage. Protect. Anywhere, Anytime.</p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
            Request a Demo
          </button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image 
              src="/images/fleet-tracking-hero.jpg" 
              alt="Fleet Tracking Dashboard" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">Powerful Fleet Management</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our cutting-edge GPS Vehicle Tracking Solutions empower businesses and individuals to monitor, 
              manage, and safeguard their vehicles and assets effortlessly. With advanced telematics and 
              real-time data, you can enhance operational efficiency, improve safety, and cut down unnecessary costs.
            </p>
            <div className="flex items-center mb-4">
              <FiCheck className="text-green-500 mr-2" />
              <span>Real-time location tracking with pinpoint accuracy</span>
            </div>
            <div className="flex items-center mb-4">
              <FiCheck className="text-green-500 mr-2" />
              <span>Comprehensive fleet optimization tools</span>
            </div>
            <div className="flex items-center">
              <FiCheck className="text-green-500 mr-2" />
              <span>24/7 support and monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4 text-2xl">
                <FiMap />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-gray-600">Live location updates with pinpoint accuracy.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4 text-2xl">
                <FiShield />
              </div>
              <h3 className="text-xl font-semibold mb-2">Geofencing Alerts</h3>
              <p className="text-gray-600">Virtual zones with instant notifications for unauthorized movements.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4 text-2xl">
                <FiBarChart2 />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fleet Optimization</h3>
              <p className="text-gray-600">Reduce fuel costs and idle time through smarter route planning.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4 text-2xl">
                <FiClock />
              </div>
              <h3 className="text-xl font-semibold mb-2">Maintenance Reminders</h3>
              <p className="text-gray-600">Get automated alerts for scheduled maintenance and service intervals.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4 text-2xl">
                <FiSmartphone />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
              <p className="text-gray-600">Manage your fleet from anywhere with iOS & Android apps.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4 text-2xl">
                <FiMail />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Notifications</h3>
              <p className="text-gray-600">Stay informed with email & SMS alerts for important events.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Who Benefits From Our Solution?</h2>
        <p className="text-xl text-center text-gray-600 mb-12">Our fleet tracking system is designed for various industries and applications</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Logistics & Delivery</h3>
            <p className="text-gray-600">Optimize routes and ensure timely deliveries</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Corporate Fleets</h3>
            <p className="text-gray-600">Manage company vehicles efficiently</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Public Transport</h3>
            <p className="text-gray-600">Ensure passenger safety and schedule adherence</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Private Owners</h3>
            <p className="text-gray-600">Advanced security for personal vehicles</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Take Control of Your Fleet Today!</h2>
          <p className="text-xl mb-8">Get a free consultation or book a live demo and experience how our Vehicle Tracking Solutions can transform your operations.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
