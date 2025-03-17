import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CountriesSection() {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">We work with these countries</h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-4">
            With our global presence, we have served a vast number of customers and delivered vehicles internationally.
          </p>
          <p className="font-medium">Usa car and get a car directly to your destination!</p>
        </div>
        <div className="relative mb-12">
          <div className="aspect-[2/1] relative">
            <Image
              src="https://images.pexels.com/photos/210143/pexels-photo-210143.jpeg?cs=srgb&dl=pexels-pixabay-210143.jpg&fm=jpg"
              alt="World Map with Shipping Routes"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-6 gap-x-4 text-sm mb-8">
          <CountryColumn
            countries={[
              { name: "Nigeria", highlighted: true },
              { name: "United Kingdom" },
              { name: "Albania" },
              { name: "France" },
            ]}
          />
          <CountryColumn
            countries={[
              { name: "Ghana", highlighted: true },
              { name: "Netherlands" },
              { name: "Côte dIvoire" },
              { name: "Italy" },
            ]}
          />
          <CountryColumn
            countries={[{ name: "United States" }, { name: "Germany" }, { name: "Kazakhstan" }, { name: "Croatia" }]}
          />
          <CountryColumn
            countries={[
              { name: "Bulgaria", highlighted: true },
              { name: "Poland" },
              { name: "Oman" },
              { name: "Romania" },
            ]}
          />
          <CountryColumn
            countries={[
              { name: "United Arab Emirates", highlighted: true },
              { name: "Senegal" },
              { name: "Saudi Arabia" },
            ]}
          />
        </div>
        <div className="text-center">
          <Button className="bg-yellow-400 text-black hover:bg-yellow-500">View more</Button>
        </div>
      </div>
    </section>
  )
}

interface Country {
  name: string
  highlighted?: boolean
}

interface CountryColumnProps {
  countries: Country[]
}

function CountryColumn({ countries }: CountryColumnProps) {
  return (
    <div>
      {countries.map((country, index) => (
        <p key={index} className={country.highlighted ? "font-semibold text-yellow-400" : ""}>
          {country.name}
        </p>
      ))}
    </div>
  )
}

