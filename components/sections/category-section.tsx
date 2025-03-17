import type React from "react"
import Link from "next/link"
import { Car, PenToolIcon as Tool, Zap, DollarSign } from "lucide-react"

export function CategorySection() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="container px-4">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 max-w-4xl mx-auto">
          <CategoryIcon icon={<Car className="h-8 w-8 text-black" />} label="Clean cars" />
          <CategoryIcon icon={<Tool className="h-8 w-8 text-black" />} label="Salvage" />
          <CategoryIcon icon={<Car className="h-8 w-8 text-black" />} label="Live auction" />
          <CategoryIcon icon={<Zap className="h-8 w-8 text-black" />} label="Electric vehicles" />
          <CategoryIcon icon={<Car className="h-8 w-8 text-black" />} label="Repo sale" />
          <CategoryIcon icon={<DollarSign className="h-8 w-8 text-black" />} label="Vehicles under $1000" />
          <CategoryIcon icon={<Tool className="h-8 w-8 text-black" />} label="Order parts" />
        </div>
      </div>
    </section>
  )
}

interface CategoryIconProps {
  icon: React.ReactNode
  label: string
}

function CategoryIcon({ icon, label }: CategoryIconProps) {
  return (
    <Link href="#" className="flex flex-col items-center gap-2 group">
      <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center group-hover:bg-yellow-500">
        {icon}
      </div>
      <span className="text-xs text-center">{label}</span>
    </Link>
  )
}

