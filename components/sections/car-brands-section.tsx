import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CarBrandsSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Buy cars</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-8 mb-8">
          {/* First Row - Car Logos */}
          {carBrands.slice(0, 8).map((brand, index) => (
            <CarBrandLogo key={index} name={brand} />
          ))}

          {/* Second Row - Car Logos */}
          {carBrands.slice(8, 16).map((brand, index) => (
            <CarBrandLogo key={index + 8} name={brand} />
          ))}
        </div>
        <div className="text-center">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">View more</Button>
        </div>
      </div>
    </section>
  )
}

interface CarBrandLogoProps {
  name: string
}

function CarBrandLogo({ name }: CarBrandLogoProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src="https://manofmany.com/wp-content/uploads/2021/04/Top-15-Best-Sports-Cars-Power-Luxury-and-Design-Ford-GT.jpeg"
        alt={name}
        width={80}
        height={40}
        className="grayscale hover:grayscale-0 transition-all"
      />
      <p className="text-xs text-center mt-2">{name}</p>
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

