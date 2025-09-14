// app/services/surveillance/page.tsx
import Image from 'next/image';
import { FiCheck, FiEye, FiShield, FiVideo, FiHome, FiUser } from 'react-icons/fi';

export default function SurveillancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Surveillance Solutions</h1>
          <p className="text-xl mb-8">Discreet. Intelligent. Reliable monitoring for your peace of mind</p>
          <button className="bg-white text-red-700 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition">
            Explore Solutions
          </button>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <Image 
              src="/images/surveillance-hero.jpg" 
              alt="Surveillance Solutions" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-6">Advanced Surveillance Systems</h2>
            <p className="text-lg text-gray-700 mb-6">
              Cy-Tech offers a comprehensive range of surveillance solutions designed for various applications, 
              from home security to specialized monitoring needs. Our systems combine cutting-edge technology 
              with user-friendly interfaces to provide reliable, discreet, and effective monitoring solutions.
            </p>
            <div className="flex items-center mb-4">
              <FiCheck className="text-red-500 mr-2" />
              <span>High-definition video quality with night vision</span>
            </div>
            <div className="flex items-center mb-4">
              <FiCheck className="text-red-500 mr-2" />
              <span>Remote access from any device</span>
            </div>
            <div className="flex items-center">
              <FiCheck className="text-red-500 mr-2" />
              <span>Motion detection and instant alerts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Surveillance Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 mb-4 text-2xl">
                <FiHome />
              </div>
              <h3 className="text-xl font-semibold mb-2">Nanny Cams</h3>
              <p className="text-gray-600 mb-4">
                Discreet monitoring solutions to ensure the safety and well-being of your loved ones.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Hidden camera designs</li>
                <li>Live streaming to mobile devices</li>
                <li>Motion-activated recording</li>
                <li>Secure cloud storage</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 mb-4 text-2xl">
                <FiUser />
              </div>
              <h3 className="text-xl font-semibold mb-2">Spy Cameras</h3>
              <p className="text-gray-600 mb-4">
                Covert surveillance for investigative purposes and evidence collection.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Ultra-discreet designs</li>
                <li>Long battery life</li>
                <li>Remote access and control</li>
                <li>High-quality audio/video recording</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-600 mb-4 text-2xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Farm Surveillance</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive monitoring solutions for agricultural and livestock operations.
              </p>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Weather-resistant cameras</li>
                <li>Long-range connectivity</li>
                <li>Solar-powered options</li>
                <li>Livestock monitoring features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Advanced Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-600 mb-4 text-2xl">
              <FiEye />
            </div>
            <h3 className="text-xl font-semibold mb-2">High-Definition Video</h3>
            <p className="text-gray-600">
              Crystal clear video quality with resolutions up to 4K, ensuring you capture every detail.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-600 mb-4 text-2xl">
              <FiShield />
            </div>
            <h3 className="text-xl font-semibold mb-2">Night Vision</h3>
            <p className="text-gray-600">
              Advanced infrared technology for clear monitoring in low-light or complete darkness.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-600 mb-4 text-2xl">
              <FiVideo />
            </div>
            <h3 className="text-xl font-semibold mb-2">Motion Detection</h3>
            <p className="text-gray-600">
              Smart sensors that trigger recording and alerts when movement is detected.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-600 mb-4 text-2xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Cloud Storage</h3>
            <p className="text-gray-600">
              Secure, encrypted cloud storage for your footage with easy access from anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-red-700">Home & Family Security</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Child and elderly care monitoring</li>
                <li>Domestic staff supervision</li>
                <li>Home security while away</li>
                <li>Package delivery monitoring</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-red-700">Business & Agricultural</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>Employee monitoring and safety</li>
                <li>Livestock and crop surveillance</li>
                <li>Equipment and asset protection</li>
                <li>Theft prevention and evidence collection</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Secure What Matters Most</h2>
          <p className="text-xl mb-8">Contact us to find the perfect surveillance solution for your specific needs.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-red-700 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition">
              Get Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-700 transition">
              View Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
