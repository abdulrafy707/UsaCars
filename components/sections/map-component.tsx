"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import type { Feature, FeatureCollection, GeoJsonProperties, Geometry } from "geojson";
import type { PathOptions } from "leaflet";
import type { StyleFunction } from "leaflet";

export default function MapComponent({ highlightedCountries }: { highlightedCountries: string[] }) {
  const [geoData, setGeoData] = useState<FeatureCollection | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false); // ✅ Ensure map loads once

  // ✅ Fetch GeoJSON data only on mount
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
      .then((response) => response.json())
      .then((data: FeatureCollection) => setGeoData(data))
      .catch((error) => console.error("Error loading GeoJSON:", error));
  }, []);

  // ✅ Ensure the map is only initialized once
  useEffect(() => {
    setMapLoaded(true); // ✅ Prevents duplicate maps
  }, []);

  // ✅ Correctly type the `style` function
  const countryStyle: StyleFunction<Feature<Geometry, GeoJsonProperties>> = (feature) => {
    if (!feature || !feature.properties) return {}; // ✅ Handle undefined cases safely

    const countryName = feature.properties.name || "";
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
    <div className="w-full h-full">
      {/* ✅ Only render MapContainer when `mapLoaded` is true */}
      {mapLoaded && (
        <MapContainer
          key="map-container" // ✅ Prevents reinitialization
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
      )}
    </div>
  );
}
