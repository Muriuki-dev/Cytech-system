import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fleet & Vehicle Tracking | Cytech Systems',
  description:
    'Real-time GPS fleet tracking to monitor vehicles, improve efficiency, and reduce operational costs.'
}

export default function FleetTrackingPage() {
  return (
    <main className="py-16 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Fleet & Vehicle Tracking
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        Our GPS fleet tracking solution provides real-time monitoring of your vehicles, helping you
        reduce operational costs, improve route planning, and enhance driver accountability.
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-700">
        <li>Live location tracking and route history</li>
        <li>Geofencing with instant alerts</li>
        <li>Driver behavior analytics</li>
        <li>Mobile and web dashboards</li>
      </ul>
    </main>
  )
}
