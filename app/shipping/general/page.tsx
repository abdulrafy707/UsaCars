import Image from "next/image"
import Link from "next/link"

export default function ShippingGeneralPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
              <h3 className="font-medium text-blue-800">General</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              <li>
                <Link href="/shipping/calculator" className="block p-4 hover:bg-gray-100">
                  Shipping calculator
                </Link>
              </li>
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
          <div className="mb-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="https://sjc.microlink.io/iqa17oeh-GKi0gtf_8txNne6JHXcIjVTDe5Wy-oHHUMh4TO9mewzVtqM59tOBlxkkF7VH4V5RfwtpRzNdBlkEA.jpeg" 
                alt="Shipping containers with white car" 
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700 mb-4">
              Please note that Ports of America changed its regulations in regard to NON-DRIVABLE and EXTENSIVE DAMAGED vehicles. Please note that AuctionExport will now use container shipping for all extensive damaged, non-drivable vehicles that have to be forklifted and are going to WEST AFRICA. All drivable vehicles without visible extensive damage will sail by RORO as usual, vehicles that are non-drivable and do not have extensive damage will be accepted by RORO TOWABLE. Ports of destination will stay the same as Tincan Port for Nigeria and Tema Port for Ghana.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Our services include shipping</h2>
          
          <p className="text-gray-700 mb-6">
            As soon as the full payment is received, we will start the shipping process. A purchased car will be delivered by two main means of transportation - by ground and by ocean. It usually takes around 45-60 days for a car to be delivered to the destination port. This term will include inland delivery to the exit port, Customs clearance at the exit port and ocean shipping to your destination.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-blue-800 mb-1">Shipping calculator</h3>
                <Link href="/shipping/calculator" className="text-blue-600 hover:underline">
                  Calculate shipping costs
                </Link>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-blue-800 mb-1">Transportation</h3>
                <Link href="/shipping/transportation" className="text-blue-600 hover:underline">
                  Learn about transportation options
                </Link>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                  <line x1="4" y1="22" x2="4" y2="15"></line>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-blue-800 mb-1">Shipping services</h3>
                <Link href="/shipping/services" className="text-blue-600 hover:underline">
                  View our shipping services
                </Link>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-blue-800 mb-1">Import guide</h3>
                <Link href="/shipping/import-guide" className="text-blue-600 hover:underline">
                  Read our import guide
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Answers to popular questions</h2>
            <div className="space-y-4">
              <div className="border-b border-blue-100 pb-4">
                <h3 className="font-medium mb-2">How long does shipping take?</h3>
                <p className="text-gray-700">
                  Shipping typically takes 45-60 days depending on the destination. This includes inland transportation to the exit port, customs clearance, and ocean shipping.
                </p>
              </div>
              <div className="border-b border-blue-100 pb-4">
                <h3 className="font-medium mb-2">What shipping methods do you use?</h3>
                <p className="text-gray-700">
                  We use both RoRo (Roll-on/Roll-off) and container shipping. Drivable vehicles without extensive damage use RoRo, while non-drivable or extensively damaged vehicles use container shipping.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Do you handle customs clearance?</h3>
                <p className="text-gray-700">
                  Yes, our service includes customs clearance at the exit port. However, import duties and taxes at the destination are the responsibility of the buyer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
