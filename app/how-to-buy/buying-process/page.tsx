import Image from "next/image"
import Link from "next/link"

export default function BuyingProcessPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="p-4">
              <Link href="/how-to-buy/general" className="block hover:text-blue-600">
                General
              </Link>
            </div>
            <div className="p-4">
              <Link href="/how-to-buy/registration" className="block hover:text-blue-600">
                Registration
              </Link>
            </div>
            <div className="p-4">
              <Link href="/how-to-buy/deposit" className="block hover:text-blue-600">
                Deposit
              </Link>
            </div>
            <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
              <h3 className="font-medium text-blue-800">Buying Process</h3>
            </div>
            <ul className="divide-y divide-gray-200">
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
          <h1 className="text-3xl font-bold mb-6">The Vehicle Buying Process</h1>

          <div className="mb-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=800"
                alt="Vehicle Buying Process"
                width={800}
                height={300}
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Understanding the Buying Process</h2>
            <p className="text-gray-700 mb-4">
              AuctionExport offers multiple ways to purchase vehicles, each with its own process and requirements. This
              guide explains the different buying methods and walks you through each step of the process to help you
              make informed decisions.
            </p>
            <p className="text-gray-700">
              Whether you're bidding on auction vehicles or making direct purchases, our goal is to make the process as
              smooth and transparent as possible.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Buying Methods</h2>

          <div className="space-y-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Auction Bidding</h3>
              <p className="text-gray-700 mb-4">
                Bid on vehicles from major auto auctions across the United States. This method often provides the best
                prices but requires patience and strategy.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Find Auction Vehicles</h4>
                    <p className="text-gray-700">
                      Browse our inventory of upcoming auction vehicles. Each listing includes detailed information,
                      photos, and condition reports when available.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Place a Deposit</h4>
                    <p className="text-gray-700">
                      Once you've found a vehicle you want to bid on, place a deposit to secure our bidding services.
                      The deposit amount varies based on the vehicle's estimated value.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Set Your Maximum Bid</h4>
                    <p className="text-gray-700">
                      Determine the maximum amount you're willing to pay for the vehicle. Our bidding experts will use
                      this as a ceiling when bidding on your behalf.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Auction Day</h4>
                    <p className="text-gray-700">
                      On the day of the auction, our professional buyers will bid on your behalf, up to your maximum bid
                      amount. You'll receive updates on the bidding process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Auction Results</h4>
                    <p className="text-gray-700">
                      After the auction, you'll be notified of the results. If your bid was successful, we'll proceed
                      with the purchase process. If not, your deposit can be refunded or applied to another vehicle.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Direct Purchase</h3>
              <p className="text-gray-700 mb-4">
                Buy vehicles directly from our inventory at fixed prices. This option provides a simpler purchasing
                process without the need for bidding.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Browse Fixed-Price Inventory</h4>
                    <p className="text-gray-700">
                      Explore our selection of vehicles available for immediate purchase at fixed prices. These vehicles
                      have already been acquired and are ready for shipping.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Place a Deposit</h4>
                    <p className="text-gray-700">
                      Once you've found a vehicle you want to purchase, place a deposit to reserve it. This removes the
                      vehicle from our available inventory while you complete the transaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Receive Purchase Confirmation</h4>
                    <p className="text-gray-700">
                      After your deposit is processed, you'll receive a purchase confirmation and detailed invoice for
                      the remaining balance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Complete Payment</h4>
                    <p className="text-gray-700">
                      Pay the remaining balance to finalize your purchase. Once payment is complete, we'll begin the
                      shipping process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">Vehicle Sourcing</h3>
              <p className="text-gray-700 mb-4">
                If you can't find the specific vehicle you're looking for in our inventory, we can source it for you
                from our extensive network of dealers and auctions.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Submit Vehicle Requirements</h4>
                    <p className="text-gray-700">
                      Provide detailed specifications for the vehicle you're looking for, including make, model, year
                      range, features, condition, and budget.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Receive Sourcing Proposal</h4>
                    <p className="text-gray-700">
                      Our team will search for vehicles that match your requirements and provide you with options,
                      including detailed information and pricing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Place a Sourcing Deposit</h4>
                    <p className="text-gray-700">
                      If you approve one of the options, place a deposit to secure our sourcing services. This deposit
                      will be applied toward the final purchase price.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Vehicle Acquisition</h4>
                    <p className="text-gray-700">
                      We'll acquire the vehicle on your behalf, conduct a thorough inspection, and provide you with
                      confirmation and detailed information.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Complete Purchase</h4>
                    <p className="text-gray-700">
                      Pay the remaining balance to finalize your purchase. Once payment is complete, we'll begin the
                      shipping process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">After Purchase Process</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3">Vehicle Inspection</h3>
                <p className="text-gray-700">
                  After purchasing a vehicle, we conduct a thorough inspection to verify its condition and ensure it
                  matches the description. This inspection includes checking the mechanical condition, exterior and
                  interior condition, and verifying the VIN and title information.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">Documentation Processing</h3>
                <p className="text-gray-700">
                  We handle all necessary documentation for the vehicle purchase and export, including the bill of sale,
                  title transfer, and export customs documentation. This ensures a smooth and legal transfer of
                  ownership and export process.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">Shipping Arrangement</h3>
                <p className="text-gray-700">
                  Once the vehicle purchase and documentation are complete, we arrange for shipping to your destination.
                  This includes inland transportation to the port, customs clearance at the exit port, and ocean
                  shipping to your destination port.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">Tracking and Updates</h3>
                <p className="text-gray-700">
                  Throughout the shipping process, you'll receive regular updates on your vehicle's status and location.
                  You can also track your shipment through your account dashboard.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">Arrival and Delivery</h3>
                <p className="text-gray-700">
                  When your vehicle arrives at the destination port, we'll notify you and provide guidance on the
                  customs clearance process and taking possession of your vehicle.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Fees and Costs</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <p className="text-gray-700 mb-4">
              When purchasing a vehicle through AuctionExport, there are several fees and costs to consider beyond the
              vehicle's purchase price:
            </p>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="py-3 px-4 text-left">Fee Type</th>
                    <th className="py-3 px-4 text-left">Description</th>
                    <th className="py-3 px-4 text-left">Typical Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-3 px-4 font-medium">Buyer's Premium</td>
                    <td className="py-3 px-4">Service fee for purchasing the vehicle</td>
                    <td className="py-3 px-4">5-10% of vehicle price</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Shipping Cost</td>
                    <td className="py-3 px-4">Cost to ship the vehicle to your destination</td>
                    <td className="py-3 px-4">$800-$3,000+ (varies by destination)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Inland Transportation</td>
                    <td className="py-3 px-4">Cost to transport the vehicle to the exit port</td>
                    <td className="py-3 px-4">$150-$600 (varies by distance)</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Documentation Fees</td>
                    <td className="py-3 px-4">Costs for processing necessary paperwork</td>
                    <td className="py-3 px-4">$100-$300</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Import Duties & Taxes</td>
                    <td className="py-3 px-4">Fees paid to your country's customs authority</td>
                    <td className="py-3 px-4">Varies by country (typically 10-100% of vehicle value)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mt-4">
              All applicable fees will be clearly outlined in your invoice before you complete your purchase. Import
              duties and taxes are paid directly to your local customs authority upon arrival and are not included in
              our pricing.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Ready to Start Your Vehicle Purchase?</h2>
            <p className="text-gray-700 mb-6">
              Browse our inventory to find your perfect vehicle, or contact our customer service team for assistance
              with vehicle selection and the buying process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/search"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center"
              >
                Browse Inventory
              </Link>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-4 rounded border border-blue-600 text-center"
              >
                Contact Customer Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

