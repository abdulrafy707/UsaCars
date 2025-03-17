import Image from "next/image"
import Link from "next/link"

export default function TransportationPage() {
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
            <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
              <h3 className="font-medium text-blue-800">Transportation</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              <li>
                <Link href="/shipping/receiving-your-car" className="block p-4 hover:bg-gray-100">
                  Receiving your car at destination port
                </Link>
              </li>
              <li>
                <Link href="/shipping/services" className="block p-4 hover:bg-gray-100">
                  Shipping services
                </Link>
              </li>
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
          <h1 className="text-3xl font-bold mb-6">Transportation</h1>
          
          <div className="mb-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/placeholder.svg?height=300&width=800" 
                alt="Vehicle Transportation" 
                width={800}
                height={300}
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Vehicle Transportation Process</h2>
            <p className="text-gray-700 mb-4">
              Once your vehicle purchase is complete and payment has been received, we begin the transportation process. This involves two main stages: inland transportation to the exit port and ocean shipping to your destination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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
                We arrange for your vehicle to be transported from its current location (auction facility, dealership, etc.) to the nearest appropriate exit port. This is typically done via specialized auto carriers that can safely transport multiple vehicles at once.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Pickup from the source location</li>
                <li>Secure loading onto auto carriers</li>
                <li>Transportation to the exit port</li>
                <li>Delivery to the port processing facility</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Ocean Shipping</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Once at the port, your vehicle will be prepared for ocean shipping. Depending on the vehicle's condition and destination, we'll use either RoRo (Roll-on/Roll-off) or container shipping methods.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Customs clearance at the exit port</li>
                <li>Vehicle inspection and documentation</li>
                <li>Loading onto the vessel</li>
                <li>Ocean transit to destination port</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Shipping Methods</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3">RoRo (Roll-on/Roll-off) Shipping</h3>
              <p className="text-gray-700 mb-4">
                RoRo shipping is our standard method for drivable vehicles without extensive damage. Vehicles are driven directly onto specialized vessels and secured for transport. This is typically the most economical shipping option.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Advantages:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>More cost-effective</li>
                    <li>Faster loading and unloading</li>
                    <li>More frequent sailing schedules</li>
                    <li>Suitable for most standard vehicles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Limitations:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Vehicle must be in drivable condition</li>
                    <li>No personal items can be shipped inside</li>
                    <li>Limited protection from weather elements</li>
                    <li>Not suitable for oversized or specialty vehicles</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-3">Container Shipping</h3>
              <p className="text-gray-700 mb-4">
                Container shipping is used for non-drivable vehicles, extensively damaged vehicles, or when additional protection is required. Vehicles are loaded into 20ft or 40ft shipping containers for transport.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Advantages:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Better protection from weather and external elements</li>
                    <li>Can accommodate non-drivable vehicles</li>
                    <li>Personal items can be shipped inside the vehicle</li>
                    <li>Higher security during transit</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Limitations:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>More expensive than RoRo shipping</li>
                    <li>Longer loading and unloading times</li>
                    <li>Less frequent sailing schedules</li>
                    <li>Size limitations for larger vehicles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Transportation Timeline</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="relative">
              <div className="absolute left-4 inset-y-0 w-0.5 bg-blue-100"></div>
              
              <div className="relative pl-10 pb-8">
                <div className="absolute left-2 -top-1 w-5 h-5 rounded-full bg-blue-600"></div>
                <h3 className="text-lg font-bold mb-2">Vehicle Purchase Completion</h3>
                <p className="text-gray-700">
                  Payment is received and processed. Transportation arrangements begin.
                </p>
              </div>
              
              <div className="relative pl-10 pb-8">
                <div className="absolute left-2 -top-1 w-5 h-5 rounded-full bg-blue-100 border-2 border-blue-600"></div>
                <h3 className="text-lg font-bold mb-2">Inland Transportation (5-10 days)</h3>
                <p className="text-gray-700">
                  Vehicle is picked up and transported to the exit port. This timeline varies based on the distance from the source location to the port.
                </p>
              </div>
              
              <div className="relative pl-10 pb-8">
                <div className="absolute left-2 -top-1 w-5 h-5 rounded-full bg-blue-100 border-2 border-blue-600"></div>
                <h3 className="text-lg font-bold mb-2">Port Processing (7-14 days)</h3>
                <p className="text-gray-700">
                  Vehicle undergoes customs clearance, inspection, and preparation for loading. Documentation is processed and verified.
                </p>
              </div>
              
              <div className="relative pl-10 pb-8">
                <div className="absolute left-2 -top-1 w-5 h-5 rounded-full bg-blue-100 border-2 border-blue-600"></div>
                <h3 className="text-lg font-bold mb-2">Ocean Transit (15-45 days)</h3>
                <p className="text-gray-700">
                  Vehicle is transported by sea to the destination port. Transit time varies significantly based on the destination and shipping method.
                </p>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-2 -top-1 w-5 h-5 rounded-full bg-blue-100 border-2 border-blue-600"></div>
                <h3 className="text-lg font-bold mb-2">Arrival at Destination</h3>
                <p className="text-gray-700">
                  Vehicle arrives at the destination port, ready for customs clearance and pickup by the customer or their agent.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Transportation FAQs</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Can I track my vehicle during transportation?</h3>
                <p className="text-gray-700">
                  Yes, we provide tracking information once your vehicle is shipped. You'll receive regular updates on its status and location throughout the transportation process.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">What happens if my vehicle is damaged during transportation?</h3>
                <p className="text-gray-700">
                  All vehicles are covered by transit insurance during transportation. In the rare event of damage, you can file a claim through our customer service department.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Can I choose which exit port to use?</h3>
                <p className="text-gray-700">
                  While we typically select the most efficient exit port based on your vehicle's location and destination, you can request a specific port if needed. This may affect the transportation timeline and cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
