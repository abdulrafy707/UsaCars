"use client"

import type React from "react"

import { Search, CreditCard, Truck } from "lucide-react"

export function ServicesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4 capitalize">Our Services</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
            standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ServiceCard
            title="Search"
            icon={<Search size={28} />}
            description="Find the perfect vehicle from our extensive database with powerful search tools and filters."
          />
          <ServiceCard
            title="Purchase"
            icon={<CreditCard size={28} />}
            description="Secure and streamlined buying process with multiple payment options and buyer protection."
          />
          <ServiceCard
            title="Shipping"
            icon={<Truck size={28} />}
            description="Reliable worldwide shipping services with real-time tracking and insurance coverage."
          />
        </div>
      </div>
    </section>
  )
}

interface ServiceCardProps {
  title: string
  icon: React.ReactNode
  description: string
}

function ServiceCard({ title, icon, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 text-center group">
      <div className="w-16 h-16 bg-amber-50 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300">
        <div className="text-amber-500">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-4 text-amber-500 group-hover:text-amber-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

