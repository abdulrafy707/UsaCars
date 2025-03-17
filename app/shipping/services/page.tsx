import Image from "next/image"
import Link from "next/link"

export default function ShippingServicesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="p-4">
              <Link href="/shipping/general" className="block hover:text-blue-600">
                General
              </Link>
            </div>
            <div className="p-4">
              <Link href="/shipping/calculator" className="block hover:text-blue-600">
                Shipping calculator
              </Link>
            </div>
            <div className="p-4">
              <Link href="/shipping/transportation" className="block hover:text-blue-600">
                Transportation
              </Link>
            </div>
            <div className="p-4">
              <Link href="/shipping/receiving-your-car" className="block hover:text-blue-600">
                Receiving your car at destination port
              </Link>
            </div>
            <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
              <h3 className="font-medium text-blue-800">Shipping services</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              <li className="relative">
                <Link href="/shipping/import-guide" className="block p-4 hover:bg-gray-100">
                  Import guide
                </Link>
                <span className="absolute right-4 top-1/2 -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold mb-6">Shipping Services</h1>
          
          <div className="mb-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/placeholder.svg?height=300&width=800" 
                alt="Shipping Services" 
                width={800}
                height={300}
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Comprehensive Shipping Solutions</h2>
            <p className="text-gray-700">
              AuctionExport provides end-to-end shipping services for vehicles purchased through our platform. We handle every aspect of the shipping process, from pickup at the source location to delivery at your destination port, ensuring a smooth and hassle-free experience.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Our Shipping Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" y1="22" x2="4" y2="15"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">RoRo Shipping</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Roll-on/Roll-off shipping is our standard method for drivable vehicles. Vehicles are driven directly onto specialized vessels and secured for transport.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li>Most economical shipping option</li>
                <li>Available to most major ports worldwide</li>
                <li>Suitable for drivable vehicles without extensive damage</li>
                <li>Regular sailing schedules</li>
              </ul>
              <Link href="/shipping/calculator" className="text-blue-600 hover:underline font-medium">
                Calculate RoRo shipping costs
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                    <line x1="1" y1="10" x2="23" y2="10"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Container Shipping</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Container shipping provides additional protection and is required for non-drivable or extensively damaged vehicles. Vehicles are loaded into 20ft or 40ft shipping containers.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li>Better protection from weather and external elements</li>
                <li>Required for non-drivable vehicles going to West Africa</li>
                <li>Allows for personal items to be shipped with the vehicle</li>
                <li>Available as exclusive (single vehicle) or shared containers</li>
              </ul>
              <Link href="/shipping/calculator" className="text-blue-600 hover:underline font-medium">
                Calculate container shipping costs
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Inland Transportation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We arrange transportation of your vehicle from its source location to the nearest appropriate exit port.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Coverage throughout the United States</li>
                <li>Specialized auto carriers</li>
                <li>Fully insured transportation</li>
                <li>Tracking and status updates</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Documentation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                We handle all necessary shipping documentation to ensure smooth transit and customs clearance.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Bill of Lading preparation</li>
                <li>Export customs documentation</li>
                <li>Vehicle title processing</li>
                <li>Destination documentation guidance</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Insurance</h3>
              </div>
              <p className="text-gray-700 mb-4">
                All vehicles shipped through our platform are covered by marine insurance during transit.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Basic transit insurance included</li>
                <li>Additional comprehensive coverage available</li>
                <li>Coverage for damage during loading, transit, and unloading</li>
                <li>Simplified claims process</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Destination Coverage</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <p className="text-gray-700 mb-4">
              We ship vehicles to over 120 countries worldwide, with established shipping routes and customs clearance expertise for each destination. Our most popular shipping destinations include:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Africa</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Nigeria (Tincan Port)</li>
                  <li>Ghana (Tema Port)</li>
                  <li>Kenya (Mombasa)</li>
                  <li>Tanzania</li>
                  <li>South Africa</li>
                  <li>And many more</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Middle East</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>United Arab Emirates</li>
                  <li>Saudi Arabia</li>
                  <li>Jordan</li>
                  <li>Lebanon</li>
                  <li>Oman</li>
                  <li>And many more</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Europe</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>United Kingdom</li>
                  <li>Germany</li>
                  <li>Italy</li>
                  <li>Spain</li>
                  <li>Netherlands</li>
                  <li>And many more</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Asia</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Japan</li>
                  <li>South Korea</li>
                  <li>Thailand</li>
                  <li>Philippines</li>
                  <li>Malaysia</li>
                  <li>And many more</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Oceania</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Australia</li>
                  <li>New Zealand</li>
                  <li>Fiji</li>
                  <li>Papua New Guinea</li>
                  <li>And many more</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Americas</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Canada</li>
                  <li>Mexico</li>
                  <li>Brazil</li>
                  <li>Chile</li>
                  <li>And many more</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-700">
              Don't see your country listed? Contact our shipping department to confirm service availability and shipping options for your specific destination.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Shipping Process Timeline</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="relative">
              <div className="absolute left-4 inset-y-0 w-0.5 bg-blue-100"></div>
              
              <div className="relative pl-10 pb-8">
                <div className="absolute left-2 -top-1 w-5 h-5 rounded-full bg-blue-600"></div>
                <h3 className="text-lg font-bold mb-2">Payment Confirmation</h3>
                <p className="text-gray-700">
                  Shipping process begins once full payment for the vehicle and shipping is received.
                </p>
              </div>
              
              <div className="relative pl-10 pb-8">
                <div className="absolute left-2 -top-1 w-5 h-5 rounded-full bg-blue-100 border-2 border-blue-600"></div>
                <h3 className="text-lg font-bold mb-2">Vehicle Pickup (3-7 days)</h3>
                <p className="text-gray-700">
                  Vehicle is picked up from the auction facility, dealership, or seller's location.
                </p>
              </div>
              
              <div className="relative pl-10 pb-8">
                <div className="absolute left-2 -top-1 w-5 h-5 rounded-full bg-blue-100 border-2 border-blue-600"></div>
                <h3 className="text-lg font-bold mb-2">Transportation to Port (2-5 days)</h3>
                <p className="text-gray-700">
                  Vehicle is transported to the appropriate exit port based on your destination.
                </p>
              </div>
              
              <div className="relative pl-10 pb-8">
                <div className="absolute left-2 -top-1 w-5 h-5 rounded-full bg-blue-100 border-2 border-blue-600"></div>
                <h3 className="text-lg font-bold mb-2">Port Processing (7-14 days)</h3>
                <p className="text-gray-700">
                  Vehicle undergoes customs clearance, inspection, and preparation for loading.
                </p>
              </div>
              
              <div className="relative pl-10 pb-8">
                <div className="absolute left-2 -top-1 w-5 h-5 rounded-full bg-blue-100 border-2 border-blue-600"></div>
                <h3 className="text-lg font-bold mb-2">Ocean Transit (15-45 days)</h3>
                <p className="text-gray-700">
                  Transit time varies based on destination. Africa: 30-45 days, Middle East: 30-40 days, Europe: 15-25 days, Asia: 25-40 days, Oceania: 30-45 days.
                </p>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-2 -top-1 w-5 h-5 rounded-full bg-blue-100 border-2 border-blue-600"></div>
                <h3 className="text-lg font-bold mb-2">Arrival at Destination</h3>
                <p className="text-gray-700">
                  Vehicle arrives at destination port, ready for customs clearance and pickup.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Get a Shipping Quote</h2>
            <p className="text-gray-700 mb-6">
              Ready to ship your vehicle? Use our shipping calculator to get an estimate of shipping costs to your destination, or contact our shipping department for a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shipping/calculator" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center">
                Use Shipping Calculator
              </Link>
              <a href="mailto:shipping@auctionexport.com" className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-4 rounded border border-blue-600 text-center">
                Contact Shipping Department
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
