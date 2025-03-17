import Image from "next/image";
import Link from "next/link";

export default function RegistrationPage() {
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
            <div className="bg-blue-50 p-4 border-l-4 border-blue-600">
              <h3 className="font-medium text-blue-800">Registration</h3>
            </div>
            <ul className="divide-y divide-gray-200">
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
          <h1 className="text-3xl font-bold mb-6">Registration</h1>
          
          <div className="mb-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image 
                src="/placeholder.svg?height=300&width=800" 
                alt="Registration Process" 
                width={800}
                height={300}
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Creating Your AuctionExport Account</h2>
            <p className="text-gray-700 mb-4">
              Registration is the first step to accessing our platform&apos;s features and purchasing vehicles. Creating an account is free, quick, and gives you immediate access to browse our inventory and use basic features.
            </p>
            <p className="text-gray-700">
              Follow the steps below to register and set up your account with AuctionExport.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Registration Process</h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Visit the Registration Page</h3>
                  <p className="text-gray-700 mb-4">
                    Click the &quot;Register&quot; button in the top right corner of our website to access the registration form.
                  </p>
                  <Link href="/register" className="text-blue-600 hover:underline font-medium">
                    Go to Registration Page
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
                  <h3 className="text-lg font-bold mb-2">Verify Your Email</h3>
                  <p className="text-gray-700 mb-4">
                    After submitting the registration form, you&apos;ll receive a verification email. Click the link in the email to verify your account and activate it.
                  </p>
                  <p className="text-gray-700">
                    If you don&apos;t receive the verification email within a few minutes, check your spam folder or request a new verification email from the login page.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Ready to Register?</h2>
            <p className="text-gray-700 mb-6">
              Join thousands of satisfied customers who have purchased vehicles through AuctionExport. Registration is free and only takes a few minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-center">
                Register Now
              </Link>
              <Link href="/how-to-buy/membership" className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-4 rounded border border-blue-600 text-center">
                View Membership Options
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
