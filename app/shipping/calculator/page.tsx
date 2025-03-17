import Image from "next/image"
import Link from "next/link"

export default function ShippingCalculatorPage() {
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
            <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
              <h3 className="font-medium text-blue-800">Shipping calculator</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              <li>
                <Link href="/shipping/transportation" className="block p-4 hover:bg-gray-100">
                  Transportation
                </Link>
              </li>
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
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700">
              Please note that Ports of America changed its regulations in regard to NON-DRIVABLE and EXTENSIVE DAMAGED vehicles. Please note that AuctionExport will now use container shipping for all extensive damaged, non-drivable vehicles that have to be forklifted and are going to WEST AFRICA. All drivable vehicles without visible extensive damage will sail by RORO as usual, vehicles that are non-drivable and do not have extensive damage will be accepted by RORO TOWABLE. Ports of destination will stay the same as Tincan Port for Nigeria and Tema Port for Ghana.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Ocean Shipping Calculator</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Port of Departure
                </label>
                <div className="relative">
                  <select className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500">
                    <option>New York, NJ</option>
                    <option>Los Angeles, CA</option>
                    <option>Houston, TX</option>
                    <option>Miami, FL</option>
                    <option>Baltimore, MD</option>
                    <option>Savannah, GA</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination Country
                </label>
                <div className="relative">
                  <select className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500">
                    <option>Afghanistan</option>
                    <option>Nigeria</option>
                    <option>Ghana</option>
                    <option>Kenya</option>
                    <option>South Africa</option>
                    <option>United Arab Emirates</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination Port
                </label>
                <div className="relative">
                  <select className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500">
                    <option>Nothing selected</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service
                </label>
                <div className="relative">
                  <select className="block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500">
                    <option>RORO</option>
                    <option>Container</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <span className="text-gray-700 font-medium">Ocean Cost</span>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                Request
              </button>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 mb-2">
              For ocean shipping to this destination, kindly refer to our Shipping Department -
            </p>
            <a href="mailto:shipping@auctionexport.com" className="text-blue-600 hover:underline">
              shipping@auctionexport.com
            </a>
          </div>

          <h2 className="text-2xl font-bold mb-6">Exit ports map</h2>
          
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <Image 
              src="https://sjc.microlink.io/f2diQP7Ambp3u_pJLLBKDcBEUTyLSj72LRfSLuUf_4ThbgRPr_5oDZX-IR6IB0vA6UVGpwNMVHWcN-CR_XwiQg.jpeg" 
              alt="US Exit Ports Map" 
              fill
              className="object-contain"
            />
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Shipping Cost Factors</h3>
            <p className="text-gray-700 mb-4">
              The cost of shipping a vehicle internationally depends on several factors:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Origin and destination ports</li>
              <li>Vehicle size and weight</li>
              <li>Shipping method (RoRo vs Container)</li>
              <li>Current fuel prices and market conditions</li>
              <li>Additional services (inland transportation, customs clearance, etc.)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              For the most accurate and up-to-date shipping quote, please use our calculator above or contact our shipping department directly.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
