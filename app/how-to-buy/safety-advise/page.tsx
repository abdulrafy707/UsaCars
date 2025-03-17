import Link from 'next/link';

export default function SafetyAdvicePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:col-span-1">
          <nav className="bg-gray-50 rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {[
                { href: '/how-to-buy/general', label: 'General' },
                { href: '/how-to-buy/registration', label: 'Registration' },
                { href: '/how-to-buy/deposit', label: 'Deposit' },
                { href: '/how-to-buy/buying-process', label: 'Buying Process' },
                { href: '/how-to-buy/payment', label: 'Payment' },
                { href: '/how-to-buy/transportation', label: 'Transportation and Shipping' },
                { href: '/how-to-buy/fees', label: 'Fees' },
                { href: '/how-to-buy/safety-advise', label: 'Safety Advice', active: true },
                { href: '/how-to-buy/membership', label: 'Membership Levels' },
              ].map((item) => (
                <li key={item.href} className={item.active ? 'bg-blue-50 border-l-4 border-blue-600' : ''}>
                  <Link href={item.href} className={`block p-4 hover:bg-gray-100 ${item.active ? 'font-medium text-blue-800' : ''}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="md:col-span-3">
          <h1 className="text-3xl font-bold mb-6">Safety Advice</h1>

          <article className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-2xl font-bold mb-4">Stay Safe: Be Aware of Fraud</h2>
            <p className="text-gray-700 mb-4">
              With the rise of online vehicle purchasing platforms, it&apos;s essential to be vigilant and informed to protect yourself from potential scams. Here are some guidelines to ensure a safe transaction:
            </p>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Research the Company</h3>
              <p className="text-gray-700">
                Before making any payments, thoroughly research the company. Look for verified business licenses, physical office addresses, and authentic customer reviews.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Beware of Deceptive Emails</h3>
              <p className="text-gray-700">
                Scammers may use email addresses similar to legitimate companies. Always verify the sender&apos;s email address and avoid clicking on suspicious links.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Verify Payment Details</h3>
              <p className="text-gray-700">
                Only use the bank wire instructions provided in your official client profile. Do not trust email-sent payment instructions.
              </p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Secure Your Account</h3>
              <p className="text-gray-700">
                Use strong, unique passwords and enable two-factor authentication to secure your account.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
              <p className="text-gray-700">
                If you suspect fraudulent activity, contact our support team:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Phone: +1 416.900.3303 ext: 1</li>
                <li>Email: help@auctionexport.com</li>
              </ul>
            </section>
          </article>
        </section>
      </div>
    </main>
  );
}
