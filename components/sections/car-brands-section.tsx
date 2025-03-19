import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CarBrandsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Buy cars</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {/* Car Brand Logos */}
          {carBrands.map((brand, index) => (
            <CarBrandLogo
              key={index}
              name={brand}
              imageNumber={(index % 12) + 1} // Cycle through images 1-12
            />
          ))}
        </div>
        <div className="text-center">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-2 text-sm font-medium uppercase tracking-wide transition-colors">
            View more
          </Button>
        </div>
      </div>
    </section>
  )
}

interface CarBrandLogoProps {
  name: string
  imageNumber: number
}

function CarBrandLogo({ name, imageNumber }: CarBrandLogoProps) {
  return (
    <div className="flex flex-col items-center justify-center group">
      <div className="relative w-24 h-24 overflow-hidden rounded-full p-2 flex items-center justify-center transition-all duration-300 group-hover:shadow-md">
        <Image
          src={`/${imageNumber}.png`}
          alt={name}
          width={80}
          height={80}
          className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <p className="text-sm font-medium text-center mt-3 text-gray-700 group-hover:text-black transition-colors">
        {name}
      </p>
    </div>
  )
}

const carBrands = [
  "Toyota",
  "Honda",
  "Ford",
  "Mercedes-Benz",
  "Hyundai",
  "Nissan",
  "Lexus",
  "Chevrolet",
  "BMW",
  "Volkswagen",
  "Kia",
  "Mazda",
  "Dodge",
  "Jeep",
  "Land Rover",
  "Audi",
]

