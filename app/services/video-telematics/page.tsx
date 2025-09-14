// app/services/video-telematics/page.tsx
import Image from 'next/image';
import { FiCheck, FiVideo, FiShield, FiAlertCircle, FiEye, FiClipboard } from 'react-icons/fi';

export default function VideoTelematicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Video Telematics Solutions</h1>
          <p className="text-xl mb-8">See what happens. Understand why. Take action instantly.</p>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition">
            Request Demo
          </button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image 
              src="/images/video-telematics-hero.jpg" 
              alt="Video Telematics System" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">Intelligent Video Monitoring</h2>
            <p className="text-lg text-gray-700 mb-6">
              Cy-Tech Video Telematics combines high-definition video recording with advanced AI-powered analytics 
              to provide unparalleled visibility into fleet operations, driver behavior, and security incidents. 
              Our systems capture critical events in real-time, providing visual evidence and actionable insights.
            </p>
            <div className="flex items-center mb-4">
              <FiCheck className="text-purple-500 mr-2" />
              <span>AI-powered incident detection</span>
            </div>
            <div className="flex items-center mb-4">
              <FiCheck className="text-purple-500 mr-2" />
              <span>Real-time driver coaching</span>
            </div>
            <div className="flex items-center">
              <FiCheck className="text-purple-500 mr-2" />
              <span>Seamless integration with existing tracking systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 mb-4 text-2xl">
                <FiVideo />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dual-Camera Recording</h3>
              <p className="text-gray-600">Simultaneous road-facing and driver-facing recording for complete visibility.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 mb-4 text-2xl">
                <FiShield />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Incident Detection</h3>
              <p className="text-gray-600">Automatically detects collisions, harsh braking, and risky driving behaviors.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 mb-4 text-2xl">
                <FiAlertCircle />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Alerts</h3>
              <p className="text-gray-600">Instant notifications for safety events, with video evidence attached.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 mb-4 text-2xl">
                <FiEye />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Streaming</h3>
              <p className="text-gray-600">Monitor vehicle interiors and exteriors in real-time from any location.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 mb-4 text-2xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Driver Scoring</h3>
              <p className="text-gray-600">AI-based performance scoring to identify coaching opportunities.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 mb-4 text-2xl">
                <FiClipboard />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automated Reporting</h3>
              <p className="text-gray-600">Generate comprehensive safety and compliance reports with video evidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Business Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Safety & Compliance</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Reduce accidents by up to 50% with driver behavior monitoring</li>
              <li>Exonerate drivers from false claims with video evidence</li>
              <li>Meet insurance requirements for video-based safety programs</li>
              <li>Create a safety-first culture with objective driver scoring</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-700">Operational Efficiency</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Reduce fuel consumption through improved driving habits</li>
              <li>Lower maintenance costs by reducing vehicle wear and tear</li>
              <li>Decrease insurance premiums with proven safety records</li>
              <li>Minimize litigation costs with indisputable video evidence</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Ideal For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Logistics & Transport</h3>
              <p className="text-gray-600">Enhance safety and security for goods in transit</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Public Transport</h3>
              <p className="text-gray-600">Ensure passenger safety and monitor driver conduct</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-6 0H5m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Corporate Fleets</h3>
              <p className="text-gray-600">Protect company assets and promote responsible driving</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Fleet Safety Today!</h2>
          <p className="text-xl mb-8">See how our Video Telematics solutions can protect your assets, reduce costs, and improve safety.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition">
              Request Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-700 transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
