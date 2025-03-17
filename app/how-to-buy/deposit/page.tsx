import Image from "next/image"
import Link from "next/link"

export default function DepositPage() {
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
            <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
              <h3 className="font-medium text-blue-800">Deposit</h3>
            </div>
            <ul className="divide-y divide-gray-200">
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
          <h1 className="text-3xl font-bold mb-6">Deposit Information</h1>
          
          <div className="mb-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/placeholder.svg?height=300&width=800" 
                alt="Deposit Process" 
                width={800}
                height={300}
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Understanding Deposits</h2>
            <p className="text-gray-700 mb-4">
              When purchasing vehicles through AuctionExport, a deposit is required to secure your vehicle and demonstrate your commitment to complete the purchase. The deposit serves as a security measure and is applied toward the final purchase price of your vehicle.
            </p>
            <p className="text-gray-700">
              This guide explains the deposit process, requirements, and policies to help you understand this important step in the vehicle purchasing process.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Deposit Requirements</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">Deposit Amounts</h3>
              <p className="text-gray-700 mb-4">
                The required deposit amount varies based on several factors:
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="py-3 px-4 text-left">Vehicle Price Range</th>
                      <th className="py-3 px-4 text-left">Standard Deposit</th>
                      <th className="py-3 px-4 text-left">Premium Member Deposit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">$0 - $7,500</td>
                      <td className="py-3 px-4">$500</td>
                      <td className="py-3 px-4">$400</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">$7,501 - $15,000</td>
                      <td className="py-3 px-4">$1,000</td>
                      <td className="py-3 px-4">$800</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">$15,001 - $25,000</td>
                      <td className="py-3 px-4">$1,500</td>
                      <td className="py-3 px-4">$1,200</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">$25,001 - $50,000</td>
                      <td className="py-3 px-4">$2,000</td>
                      <td className="py-3 px-4">$1,600</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">$50,001+</td>
                      <td className="py-3 px-4">10% of vehicle price</td>
                      <td className="py-3 px-4">8% of vehicle price</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-700 mt-4">
                Note: Special vehicles such as luxury cars, classic cars, or vehicles with unique features may require higher deposit amounts regardless of price range.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-4">When a Deposit is Required</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">For Auction Vehicles:</h4>
                  <p className="text-gray-700">
                    A deposit is required before we can place bids on your behalf. This ensures that you are committed to purchasing the vehicle if your bid is successful.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">For Direct Purchase Vehicles:</h4>
                  <p className="text-gray-700">
                    A deposit is required to reserve the vehicle and remove it from our available inventory. This prevents other customers from purchasing the same vehicle while you complete the transaction.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">For Vehicle Sourcing Requests:</h4>
                  <p className="text-gray-700">
                    If you request us to source a specific vehicle that is not currently in our inventory, a deposit may be required before we begin the sourcing process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Deposit Process</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Select Your Vehicle</h3>
                  <p className="text-gray-700">
                    Browse our inventory and select the vehicle you wish to purchase, or identify an auction vehicle you want to bid on.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Receive Deposit Instructions</h3>
                  <p className="text-gray-700">
                    After selecting your vehicle, you&apos;ll receive deposit instructions that include the required deposit amount and payment options.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Make the Deposit Payment</h3>
                  <p className="text-gray-700 mb-4">
                    Pay the deposit using one of our accepted payment methods:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Credit Card (Visa, MasterCard, American Express)</li>
                    <li>Wire Transfer</li>
                    <li>Bank Deposit</li>
                    <li>Online Payment Services (where available)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Deposit Confirmation</h3>
                  <p className="text-gray-700">
                    Once your deposit is received and processed, you&apos;ll receive a confirmation email. For auction vehicles, we&apos;ll begin bidding on your behalf. For direct purchase vehicles, the vehicle will be reserved for you.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Application of Deposit</h3>
                  <p className="text-gray-700">
                    Your deposit is applied toward the final purchase price of your vehicle. After a successful purchase, you&apos;ll receive an invoice for the remaining balance, which will reflect the deposit amount already paid.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-6">Deposit Policies</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Refundable Conditions:</h3>
                <p className="text-gray-700 mb-2">
                  Your deposit is fully refundable in the following situations:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>If we are unable to win the auction for your selected vehicle</li>
                  <li>If the vehicle is sold to another buyer before your deposit is processed</li>
                  <li>If the vehicle is found to have undisclosed significant damage or issues during our inspection</li>
                  <li>If we are unable to source a vehicle that meets your specified requirements</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Non-Refundable Conditions:</h3>
                <p className="text-gray-700 mb-2">
                  Your deposit is non-refundable in the following situations:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>If you win the auction or secure the vehicle but decide not to complete the purchase</li>
                  <li>If you provide incorrect information that prevents the completion of the transaction</li>
                  <li>If you fail to pay the remaining balance within the specified timeframe</li>
                  <li>If you request changes to the vehicle or shipping specifications after the purchase is confirmed</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Deposit Timeframes:</h3>
                <p className="text-gray-700 mb-2">
                  Important timeframes to be aware of:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Deposits must be received at least 24 hours before an auction ends to ensure we can bid on your behalf</li>
                  <li>Refundable deposits are typically processed within 3-5 business days</li>
                  <li>Deposits are valid for 30 days if we are sourcing a vehicle for you</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Ready to Make a Deposit?</h2>
            <p className="text-gray-700 mb-6">
              Browse our inventory to find your perfect vehicle, or contact our customer service team for assistance with vehicle selection and the deposit process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/search" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center">
                Browse Inventory
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-4 rounded border border-blue-600 text-center">
                Contact Customer Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
