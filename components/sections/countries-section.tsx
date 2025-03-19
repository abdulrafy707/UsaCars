"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./map-component"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[2/1] bg-gray-100 flex items-center justify-center rounded-lg">
      <div className="animate-pulse text-gray-400">Loading map...</div>
    </div>
  ),
});

// Define country type
interface Country {
  name: string;
  highlighted?: boolean;
}

export function CountriesSection() {
  const [showAllCountries, setShowAllCountries] = useState(false);

  const highlightedCountries: Country[] = [
    { name: "Nigeria", highlighted: true },
    { name: "Ghana", highlighted: true },
    { name: "Bulgaria", highlighted: true },
    { name: "United Arab Emirates", highlighted: true },
  ];

  const allCountries: Country[] = [
    ...highlightedCountries,
    { name: "United Kingdom" },
    { name: "Albania" },
    { name: "France" },
    { name: "Netherlands" },
    { name: "Côte dIvoire" },
    { name: "Italy" },
    { name: "United States" },
    { name: "Germany" },
    { name: "Kazakhstan" },
    { name: "Croatia" },
    { name: "Poland" },
    { name: "Oman" },
    { name: "Romania" },
    { name: "Senegal" },
    { name: "Saudi Arabia" },
  ];

  // ✅ Define columns array with explicit types
  const columns: Country[][] = [[], [], [], [], []];
  const countryList = showAllCountries ? allCountries : allCountries.slice(0, 20);

  countryList.forEach((country, index) => {
    const columnIndex = index % 5;
    columns[columnIndex].push(country);
  });

  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">We work with these countries</h2>
          <p className="text-gray-500 max-w-3xl mx-auto mb-4">
            With our global presence, we have served a vast number of customers and delivered vehicles internationally.
          </p>
          <p className="font-medium">Use our service and get a car delivered directly to your destination!</p>
        </div>

        <div className="relative mb-12 rounded-xl overflow-hidden shadow-md">
          <div className="aspect-[2/1] w-full">
            <MapComponent highlightedCountries={highlightedCountries.map((c) => c.name)} />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-6 gap-x-4 text-sm mb-8">
          {columns.map((column, columnIndex) => (
            <CountryColumn key={columnIndex} countries={column} />
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-amber-500 text-white hover:bg-amber-600"
            onClick={() => setShowAllCountries(!showAllCountries)}
          >
            {showAllCountries ? "Show less" : "View more"}
          </Button>
        </div>
      </div>
    </section>
  );
}

interface CountryColumnProps {
  countries: Country[];
}

function CountryColumn({ countries }: CountryColumnProps) {
  return (
    <div>
      {countries.map((country, index) => (
        <p key={index} className={`py-1 ${country.highlighted ? "font-semibold text-amber-500" : "text-gray-700"}`}>
          {country.name}
        </p>
      ))}
    </div>
  );
}
