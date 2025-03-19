"use client";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";
import type { Feature, FeatureCollection } from "geojson";

// Define props for the component
interface MapComponentProps {
  highlightedCountries: string[];
}

// Define type for geoJSON state
type GeoDataType = FeatureCollection | null;

export default function MapComponent({ highlightedCountries }: MapComponentProps) {
  const [geoData, setGeoData] = useState<GeoDataType>(null);

  // Load Leaflet CSS on the client to avoid SSR issues
  useEffect(() => {
    import("leaflet/dist/leaflet.css").catch((err) =>
      console.error("Failed to load Leaflet CSS:", err),
    );
  }, []);

  // Fetch GeoJSON data
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
      .then((response) => response.json())
      .then((data: FeatureCollection) => setGeoData(data))
      .catch((error) => console.error("Error loading GeoJSON:", error));
  }, []);

  // Style function for each country
  const countryStyle = (feature: Feature) => {
    const countryName = feature.properties?.name || "";
    const isHighlighted = highlightedCountries.some((country) =>
      countryName.toLowerCase().includes(country.toLowerCase()),
    );

    return {
      fillColor: isHighlighted ? "#f59e0b" : "#e5e7eb",
      weight: 1,
      opacity: 1,
      color: "white",
      fillOpacity: isHighlighted ? 0.7 : 0.3,
    };
  };

  return (
    <MapContainer
      style={{ height: "100%", width: "100%", background: "#f8fafc" }}
      center={[20, 0]}
      zoom={2}
      scrollWheelZoom={false}
      zoomControl={true}
      attributionControl={false}
      dragging={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {geoData && <GeoJSON data={geoData} style={countryStyle} />}
    </MapContainer>
  );
}
