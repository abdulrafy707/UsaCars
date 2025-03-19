"use client";

import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useEffect, useState } from "react";

interface MapComponentProps {
  highlightedCountries: string[];
}

export default function MapComponent({ highlightedCountries }: MapComponentProps) {
  const [geoData, setGeoData] = useState<any>(null);

  useEffect(() => {
    import("leaflet/dist/leaflet.css"); // ✅ Load CSS in useEffect to prevent SSR issues
  }, []);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
      .then((response) => response.json())
      .then((data) => {
        setGeoData(data);
      })
      .catch((error) => console.error("Error loading GeoJSON:", error));
  }, []);

  const countryStyle = (feature: any) => {
    const countryName = feature.properties.name;
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
