import Image from "next/image"
import Link from "next/link"

export default function ReceivingYourCarPage() {
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
            <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
              <h3 className="font-medium text-blue-800">Receiving your car at destination port</h3>
            </div>
            <ul className="divide-y divide-gray-200">
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
          <h1 className="text-3xl font-bold mb-6">Receiving Your Car at Destination Port</h1>
          
          <div className="mb-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/placeholder.svg?height=300&width=800" 
                alt="Car at destination port" 
                width={800}
                height={300}
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Preparing to Receive Your Vehicle</h2>
            <p className="text-gray-700 mb-4">
              Once your vehicle arrives at the destination port, there are several steps you need to take to clear it through customs and take possession. Being prepared with the right documentation and understanding the process will help ensure a smooth experience.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">The Vehicle Reception Process</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Notification of Arrival</h3>
                  <p className="text-gray-700">
                    You will receive notification when your vehicle arrives at the destination port. This typically includes the vessel name, arrival date, and necessary reference numbers. We&apos;ll provide this information via email and through your account dashboard.
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
                  <h3 className="text-lg font-bold mb-2">Required Documentation</h3>
                  <p className="text-gray-700 mb-4">
                    Prepare all necessary documentation for customs clearance. Requirements vary by country, but typically include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Original Bill of Lading or Sea Waybill</li>
                    <li>Vehicle purchase invoice</li>
                    <li>Vehicle title or ownership documents</li>
                    <li>Passport or government-issued ID</li>
                    <li>Import permit (if required by your country)</li>
                    <li>Customs declaration forms</li>
                    <li>Payment receipts for shipping and other services</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Customs Clearance</h3>
                  <p className="text-gray-700 mb-4">
                    Your vehicle must clear customs before you can take possession. This process includes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Submission of all required documentation</li>
                    <li>Payment of import duties and taxes</li>
                    <li>Vehicle inspection by customs officials</li>
                    <li>Verification of vehicle identification numbers (VIN)</li>
                    <li>Compliance with local import regulations</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Customs clearance can be handled by you personally, through a customs broker, or through our local partners in many countries (additional fees may apply).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Port Fees and Charges</h3>
                  <p className="text-gray-700 mb-4">
                    Be prepared to pay various port fees and charges, which may include:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Terminal handling charges</li>
                    <li>Storage fees (if the vehicle is not picked up promptly)</li>
                    <li>Documentation processing fees</li>
                    <li>Port security fees</li>
                    <li>Inspection fees</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    These fees vary by port and country. We recommend budgeting for these expenses in advance.
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
                  <h3 className="text-lg font-bold mb-2">Vehicle Inspection</h3>
                  <p className="text-gray-700 mb-4">
                    Before accepting delivery, thoroughly inspect your vehicle for:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Any damage that may have occurred during shipping</li>
                    <li>Verification that all components match your purchase documentation</li>
                    <li>Operational condition (if possible to test at the port)</li>
                    <li>Presence of all keys, manuals, and accessories included in the purchase</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Document any issues with photos and report them immediately to our customer service team.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Taking Possession</h3>
                  <p className="text-gray-700 mb-4">
                    Once customs clearance is complete and all fees are paid, you can take possession of your vehicle. This typically involves:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Signing release documents</li>
                    <li>Receiving all vehicle documentation</li>
                    <li>Physical handover of the vehicle and keys</li>
                    <li>Arranging for transportation from the port to your location (if needed)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4">Local Registration and Compliance</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <p className="text-gray-700 mb-4">
              After taking possession of your vehicle, you&apos;ll need to complete local registration and ensure compliance with local regulations:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Register the vehicle with your local transportation authority</li>
              <li>Obtain local license plates</li>
              <li>Secure required insurance coverage</li>
              <li>Complete any required vehicle modifications to meet local standards (emissions, lighting, etc.)</li>
              <li>Obtain roadworthiness certification (if required)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Requirements vary significantly by country and region. We recommend researching these requirements before importing your vehicle.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4">Our Support Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Customs Clearance Assistance</h3>
              <p className="text-gray-700 mb-4">
                In many countries, we can connect you with local partners who specialize in customs clearance for imported vehicles. These partners can handle the entire clearance process on your behalf, saving you time and reducing complications.
              </p>
              <a href="#" className="text-blue-600 hover:underline font-medium">
                Learn more about our customs clearance services
              </a>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Local Transportation</h3>
              <p className="text-gray-700 mb-4">
                We can arrange for transportation of your vehicle from the port to your location. This service is particularly valuable if the port is far from your residence or if the vehicle requires special handling.
              </p>
              <a href="#" className="text-blue-600 hover:underline font-medium">
                Request local transportation services
              </a>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">How long does customs clearance typically take?</h3>
                <p className="text-gray-700">
                  Customs clearance times vary by country, but typically range from 3-10 business days. Factors that can affect this timeline include the completeness of your documentation, local customs workload, and any special inspections required for your vehicle.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">What if my vehicle is damaged during shipping?</h3>
                <p className="text-gray-700">
                  If you discover damage that wasn&apos;t noted in the pre-shipping inspection, document it thoroughly with photos and report it immediately. All vehicles are covered by marine insurance during transit, and we&apos;ll assist you with filing a claim.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Can someone else pick up my vehicle on my behalf?</h3>
                <p className="text-gray-700">
                  Yes, but you&apos;ll need to provide them with a notarized power of attorney and authorization letter. They will also need to present their identification along with copies of your documents. Requirements vary by country, so check with our shipping department for specific instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
