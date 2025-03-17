import Image from "next/image";
import Link from "next/link";

export default function PaymentPage() {
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
            <div className="p-4">
              <Link href="/how-to-buy/buying-process" className="block hover:text-blue-600">
                Buying Process
              </Link>
            </div>
            <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
              <h3 className="font-medium text-blue-800">Payment</h3>
            </div>
            <ul className="divide-y divide-gray-200">
              <li>
                <Link href="/how-to-buy/safety-advise" className="block p-4 hover:bg-gray-100">
                  Safety Advice
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
          <h1 className="text-3xl font-bold mb-6">Payment Information</h1>

          <div className="mb-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/placeholder.svg?height=300&width=800" 
                alt="Payment Process" 
                width={800}
                height={300}
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Understanding the Payment Process</h2>
            <p className="text-gray-700 mb-4">
              After selecting your vehicle and placing a deposit, you'll need to complete the payment process to finalize your purchase. We offer several secure payment methods to accommodate customers worldwide.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Payment Process Overview</h2>

          <div className="space-y-6 mb-8">
            {[
              { step: "1", title: "Invoice Generation", description: "After confirmation, a detailed invoice is generated including all charges." },
              { step: "2", title: "Payment Method Selection", description: "Choose from our available payment methods." },
              { step: "3", title: "Payment Submission", description: "Complete your payment via the selected method." },
              { step: "4", title: "Payment Verification", description: "Our team verifies your payment (typically 1-3 days)." },
              { step: "5", title: "Payment Confirmation", description: "You receive confirmation and a receipt." },
            ].map(({ step, title, description }) => (
              <div key={step} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600 font-bold">{step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{title}</h3>
                    <p className="text-gray-700">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Accepted Payment Methods</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {[
              { title: "Wire Transfer", advantages: ["No transaction limits", "Secure & traceable", "Available worldwide"], disadvantages: ["Processing time: 1-3 days", "Bank fees may apply"] },
              { title: "Credit Card", advantages: ["Immediate processing", "Easy & convenient"], disadvantages: ["3.5% processing fee", "Transaction limits apply"] },
              { title: "Bank Deposit", advantages: ["Lower fees", "Faster processing"], disadvantages: ["Limited availability", "May require in-person visit"] },
              { title: "Online Payment Services", advantages: ["Fast & secure", "Buyer protection"], disadvantages: ["Limited regional availability", "Transaction limits"] },
            ].map(({ title, advantages, disadvantages }) => (
              <div key={title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-bold mb-4">{title}</h3>
                <ul className="text-gray-700">
                  {advantages.map((adv, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span> {adv}
                    </li>
                  ))}
                  {disadvantages.map((dis, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span> {dis}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Payment Considerations</h2>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            {[
              { title: "Payment Timeframe", description: "Complete payment within 7 days of purchase." },
              { title: "Currency", description: "All payments must be made in USD. Currency conversion fees may apply." },
              { title: "Payment Security", description: "We use PCI-compliant payment gateways and encrypted transactions." },
              { title: "Verification", description: "We may request additional verification for large payments." },
              { title: "Receipts & Documentation", description: "Receipts and confirmations will be provided for your records." },
            ].map(({ title, description }) => (
              <div key={title} className="mb-4">
                <h3 className="font-medium">{title}</h3>
                <p className="text-gray-700">{description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Need Assistance?</h2>
            <p className="text-gray-700">Our support team is available to assist you with any payment-related queries.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
