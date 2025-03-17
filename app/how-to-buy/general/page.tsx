import Image from "next/image"
import Link from "next/link"

export default function HowToBuyGeneralPage() {
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
                <Link href="/how-to-buy/registration" className="block p-4 hover:bg-gray-100">
                  Registration
                </Link>
              </li>
              <li>
                <Link href="/how-to-buy/deposit" className="block p-4 hover:bg-gray-100">
                  Deposit
                </Link>
              </li>
              <li>
                <Link href="/how-to-buy/buying-process" className="block p-4 hover:bg-gray-100">
                  Buying Process
                </Link>
              </li>
              <li>
                <Link href="/how-to-buy/payment" className="block p-4 hover:bg-gray-100">
                  Payment
                </Link>
              </li>
              <li>
                <Link href="/how-to-buy/safety-advise" className="block p-4 hover:bg-gray-100">
                  Safety advise
                </Link>
              </li>
              <li>
                <Link href="/how-to-buy/membership" className="block p-4 hover:bg-gray-100">
                  Membership
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <h1 className="text-3xl font-bold mb-6">How to Buy - General Information</h1>
          
          <div className="mb-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/placeholder.svg?height=300&width=800" 
                alt="How to Buy Vehicles" 
                width={800}
                height={300}
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Buying Vehicles with AuctionExport</h2>
            <p className="text-gray-700 mb-4">
              AuctionExport provides a simple and secure way to purchase vehicles from the United States and have them shipped to your location worldwide. Our platform gives you access to thousands of vehicles from various sources, including auto auctions, dealerships, and private sellers.
            </p>
            <p className="text-gray-700">
              This guide will walk you through the general process of buying a vehicle through our platform, from registration to receiving your vehicle at your destination.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">The Buying Process Overview</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Registration</h3>
                  <p className="text-gray-700 mb-4">
                    Create an account on AuctionExport to access our inventory and services. Registration is free and only takes a few minutes.
                  </p>
                  <Link href="/how-to-buy/registration" className="text-blue-600 hover:underline font-medium">
                    Learn more about registration
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Vehicle Selection</h3>
                  <p className="text-gray-700 mb-4">
                    Browse our extensive inventory of vehicles or use our search tools to find specific makes, models, or features. Each listing includes detailed information, photos, and condition reports when available.
                  </p>
                  <Link href="/search" className="text-blue-600 hover:underline font-medium">
                    Browse our inventory
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Deposit</h3>
                  <p className="text-gray-700 mb-4">
                    Once you've found a vehicle you want to purchase, you'll need to place a deposit to secure it. The deposit amount varies based on the vehicle's price and your membership level.
                  </p>
                  <Link href="/how-to-buy/deposit" className="text-blue-600 hover:underline font-medium">
                    Learn more about deposits
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Purchase Confirmation</h3>
                  <p className="text-gray-700 mb-4">
                    After your deposit is received, we'll confirm the purchase and provide you with a detailed invoice that includes the vehicle cost, shipping fees, and any additional services you've requested.
                  </p>
                  <Link href="/how-to-buy/buying-process" className="text-blue-600 hover:underline font-medium">
                    Learn more about the buying process
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Payment</h3>
                  <p className="text-gray-700 mb-4">
                    Complete the payment for your vehicle and shipping. We accept various payment methods, including wire transfers, credit cards, and bank deposits.
                  </p>
                  <Link href="/how-to-buy/payment" className="text-blue-600 hover:underline font-medium">
                    Learn more about payment options
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Shipping</h3>
                  <p className="text-gray-700 mb-4">
                    Once payment is complete, we'll arrange for your vehicle to be shipped to your destination. You'll receive tracking information and regular updates throughout the shipping process.
                  </p>
                  <Link href="/shipping/general" className="text-blue-600 hover:underline font-medium">
                    Learn more about shipping
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">7</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Delivery</h3>
                  <p className="text-gray-700 mb-4">
                    Your vehicle will arrive at the destination port, where you'll need to complete customs clearance and take possession. We can provide guidance and assistance with this process.
                  </p>
                  <Link href="/shipping/receiving-your-car" className="text-blue-600 hover:underline font-medium">
                    Learn more about receiving your vehicle
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Buying Options</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Auction Bidding</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Bid on vehicles from major auto auctions across the United States. Our platform provides access to auctions that are typically only available to licensed dealers.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li>Access to Copart, IAAI, Manheim, and other major auctions</li>
                <li>Live bidding with real-time updates</li>
                <li>Bid recommendation tools to help you make informed decisions</li>
                <li>Potential for significant savings compared to retail prices</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Direct Purchase</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Buy vehicles directly from our inventory at fixed prices. This option provides a simpler purchasing process without the need for bidding.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
                <li>No bidding required - fixed price purchases</li>
                <li>Carefully selected inventory of quality vehicles</li>
                <li>Detailed vehicle information and condition reports</li>
                <li>Immediate purchase option without waiting for auction end</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Vehicle Types Available</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Clean Title Vehicles</h3>
              <p className="text-gray-700 text-sm">
                Vehicles with clean titles that have not been in major accidents or declared total losses.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Salvage Vehicles</h3>
              <p className="text-gray-700 text-sm">
                Vehicles that have been declared total losses by insurance companies, often due to accidents, flood damage, or theft recovery.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Repossessed Vehicles</h3>
              <p className="text-gray-700 text-sm">
                Vehicles that have been repossessed by financial institutions due to loan defaults.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Fleet Vehicles</h3>
              <p className="text-gray-700 text-sm">
                Former rental, corporate, or government vehicles that are typically well-maintained.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Dealer Trade-Ins</h3>
              <p className="text-gray-700 text-sm">
                Vehicles that have been traded in at dealerships and are now being resold.
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Specialty Vehicles</h3>
              <p className="text-gray-700 text-sm">
                Luxury cars, classic cars, motorcycles, boats, RVs, and commercial vehicles.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-700 mb-6">
              Join thousands of satisfied customers who have purchased vehicles through AuctionExport. Our team is ready to assist you throughout the entire process, from vehicle selection to delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center">
                Register Now
              </Link>
              <Link href="/search" className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-4 rounded border border-blue-600 text-center">
                Browse Inventory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
