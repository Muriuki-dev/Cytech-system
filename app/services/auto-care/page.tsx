// app/services/auto-care/page.tsx
import Image from 'next/image';
import { FiCheck, FiShield, FiTool, FiBell, FiMapPin, FiSmartphone, FiWrench, FiPhone, FiCalendar, FiClock, FiUsers } from 'react-icons/fi';

export default function AutoCarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Auto Care & Security Solutions</h1>
          <p className="text-xl mb-8">Comprehensive protection and maintenance for your vehicle</p>
          <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition shadow-lg">
            Explore Solutions
          </button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="bg-gray-200 h-80 w-full rounded-lg shadow-xl flex items-center justify-center">
              <span className="text-gray-500">Vehicle Image</span>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Complete Vehicle Protection</h2>
            <p className="text-lg text-gray-700 mb-6">
              Cy-Tech Auto Care & Security Solutions offer a comprehensive approach to vehicle protection, 
              combining advanced security technology with maintenance monitoring to keep your vehicle safe, 
              secure, and in optimal condition. Our solutions are designed for both individual vehicle owners 
              and fleet managers.
            </p>
            <div className="flex items-center mb-4">
              <FiCheck className="text-indigo-500 mr-2 text-xl" />
              <span className="text-gray-700">Advanced anti-theft protection</span>
            </div>
            <div className="flex items-center mb-4">
              <FiCheck className="text-indigo-500 mr-2 text-xl" />
              <span className="text-gray-700">Remote vehicle monitoring and control</span>
            </div>
            <div className="flex items-center">
              <FiCheck className="text-indigo-500 mr-2 text-xl" />
              <span className="text-gray-700">Maintenance scheduling and alerts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Security Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-indigo-600 mb-4 text-3xl">
                <FiShield />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Immobilizers</h3>
              <p className="text-gray-600">Prevent unauthorized vehicle starting with advanced electronic immobilization.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-indigo-600 mb-4 text-3xl">
                <FiBell />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Alarm Systems</h3>
              <p className="text-gray-600">Loud alarms triggered by unauthorized entry, towing, or impact.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-indigo-600 mb-4 text-3xl">
                <FiMapPin />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Tracking & Recovery</h3>
              <p className="text-gray-600">Real-time tracking and recovery assistance in case of theft.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-indigo-600 mb-4 text-3xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Remote Locking</h3>
              <p className="text-gray-600">Remotely lock or unlock your vehicle via smartphone app.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-indigo-600 mb-4 text-3xl">
                <FiSmartphone />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Mobile Alerts</h3>
              <p className="text-gray-600">Instant notifications on your phone for security events.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-indigo-600 mb-4 text-3xl">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Insurance Benefits</h3>
              <p className="text-gray-600">Potential discounts on insurance premiums with certified security systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Solutions */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Maintenance Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiTool className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Diagnostic Monitoring</h3>
            <p className="text-gray-600">Continuous monitoring of vehicle health and performance metrics.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCalendar className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Service Scheduling</h3>
            <p className="text-gray-600">Automated reminders for oil changes, tire rotations, and other maintenance.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiWrench className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Remote Diagnostics</h3>
            <p className="text-gray-600">Identify issues before they become major problems with remote diagnostics.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiClock className="text-indigo-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Service History</h3>
            <p className="text-gray-600">Digital record of all maintenance and repairs for your vehicle.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-gray-600 text-sm">Premium Member</p>
                </div>
              </div>
              <p className="text-gray-700">"The security features give me peace of mind, and the maintenance alerts have saved me from costly repairs multiple times."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-4">
                  SJ
                </div>
                <div>
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-600 text-sm">Fleet Manager</p>
                </div>
              </div>
              <p className="text-gray-700">"Managing our company vehicles has never been easier. The tracking and maintenance features are invaluable for our operations."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold mr-4">
                  MR
                </div>
                <div>
                  <h4 className="font-semibold">Michael Rodriguez</h4>
                  <p className="text-gray-600 text-sm">Business Owner</p>
                </div>
              </div>
              <p className="text-gray-700">"The recovery system helped locate my stolen vehicle within hours. I can't recommend this service enough!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Vehicle?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Get started with our comprehensive auto care and security solutions today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition shadow-lg">
              Request a Demo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-800 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Cy-Tech Auto</h3>
              <p className="text-gray-400">Comprehensive vehicle protection and maintenance solutions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Security Systems</a></li>
                <li><a href="#" className="hover:text-white">Maintenance Monitoring</a></li>
                <li><a href="#" className="hover:text-white">Fleet Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@cytech-auto.com</li>
                <li>+1 (800) 123-4567</li>
                <li>123 Tech Street, Innovation City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Cy-Tech Auto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
