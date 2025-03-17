"use client"; // Ensures it runs on the client side if using Next.js App Router

import Link from "next/link";

export default function MembershipLevelsPage() {
  const membershipLevels = [
    {
      level: "Silver",
      purchasesRequired: 3,
      benefits: [
        { description: "Auto Inspection", discount: "10%" },
        { description: "Financing", discount: "10%" },
        { description: "Ocean Insurance", discount: "10%" },
        { description: "Any REPO Car Discount", discount: "$100" },
        { description: "Vehicle History Reports", discount: "5 reports" },
      ],
    },
    {
      level: "Gold",
      purchasesRequired: 7,
      benefits: [
        { description: "Auto Inspection", discount: "20%" },
        { description: "Financing", discount: "20%" },
        { description: "Ocean Insurance", discount: "20%" },
        { description: "Any REPO Car Discount", discount: "$100" },
        { description: "Vehicle History Reports", discount: "10 reports" },
      ],
    },
    {
      level: "Platinum",
      purchasesRequired: 10,
      benefits: [
        { description: "AuctionExport Fee", discount: "30%" },
        { description: "Auto Inspection", discount: "30%" },
        { description: "Financing", discount: "30%" },
        { description: "Ocean Insurance", discount: "30%" },
        { description: "Any REPO Car Discount", discount: "$100" },
        { description: "Vehicle History Reports", discount: "20 reports" },
      ],
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* LEFT SIDEBAR NAVIGATION */}
        <aside className="md:col-span-1">
          <nav className="bg-gray-50 rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {[
                { href: "/how-to-buy/general", label: "General" },
                { href: "/how-to-buy/registration", label: "Registration" },
                { href: "/how-to-buy/deposit", label: "Deposit" },
                { href: "/how-to-buy/buying-process", label: "Buying Process" },
                { href: "/how-to-buy/payment", label: "Payment" },
                { href: "/how-to-buy/safety-advice", label: "Safety Advice" },
                { href: "/how-to-buy/membership", label: "Membership", active: true },
              ].map((item) => (
                <li key={item.href} className={item.active ? "bg-blue-50 border-l-4 border-blue-600" : ""}>
                  <Link href={item.href} className={`block p-4 hover:bg-gray-100 ${item.active ? "font-medium text-blue-800" : ""}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <section className="md:col-span-3">
          <h1 className="text-3xl font-bold mb-6">Membership Levels</h1>

          {/* Membership Table */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <p className="text-gray-700 mb-4">
              Your membership level is determined by the number of qualifying purchases you have made with AuctionExport. A qualifying purchase is one that has been completed from a single client’s account and has been paid in full.
            </p>

            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Membership Level</th>
                  <th className="border p-2 text-left">Required Purchases</th>
                </tr>
              </thead>
              <tbody>
                {membershipLevels.map((level) => (
                  <tr key={level.level} className="border">
                    <td className="border p-2">{level.level}</td>
                    <td className="border p-2">{level.purchasesRequired}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Membership Details */}
          {membershipLevels.map((level) => (
            <div key={level.level} className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
              <h2 className="text-2xl font-bold mb-4">{level.level} Membership Benefits</h2>
              <ul className="list-disc list-inside text-gray-700">
                {level.benefits.map((benefit, index) => (
                  <li key={index}>
                    <span className="font-semibold">{benefit.description}:</span> {benefit.discount}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Support Section */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Need Help?</h2>
            <p className="text-gray-700">For any membership inquiries, contact our support team.</p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Phone: +1 416.900.3303</li>
              <li>Email: support@auctionexport.com</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
