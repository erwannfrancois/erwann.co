"use client";

import { initialViewState, mapSettings } from "@/constants/mapbox";
import { countriesLived, countriesVisited } from "@/constants/placesData";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import Map, { Marker, Popup, MapRef, Source, Layer } from "react-map-gl";

export default function Travels() {
  // Map settings
  const [initialView, setInitialView] = useState(initialViewState);
  const [settings, _] = useState({
    ...mapSettings,
  });
  const mapRef = useRef<MapRef | null>(null);

  // Theme
  const { theme, setTheme } = useTheme();
  // Trigger to reload map
  const [mapReloadTrigger, setMapReloadTrigger] = useState(0);

  // Triggers when the map loads or reloads
  const onMapLoad = () => {
    if (mapRef.current) {
      const map = mapRef.current.getMap();
      if (map) {
        map.setFog(null);
      }
    }
  };

  // When the theme changes, the setFog is ignored so we have to reload the map
  useEffect(() => {
    // Stores the current view to reload with the same
    if (mapRef.current) {
      const map = mapRef.current.getMap();
      if (map) {
        const { lng, lat } = map.getCenter();
        const zoom = map.getZoom();
        const bearing = map.getBearing();
        const pitch = map.getPitch();
        setInitialView({
          latitude: lat,
          longitude: lng,
          zoom: zoom,
          bearing: bearing,
          pitch: pitch,
        });
      }
    }
    setMapReloadTrigger((prev) => prev + 1); // Trigger map reload
  }, [theme]);

  return (
    <div className="h-screen">
      {/* Map */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Map
          key={mapReloadTrigger} // Changes key to reload
          ref={mapRef}
          onLoad={onMapLoad}
          initialViewState={initialView} // Set initial view state
          {...settings}
          mapStyle={
            theme === "light"
              ? "mapbox://styles/erwannfrancois/clv70h6rg009201o0atz7epcf"
              : "mapbox://styles/erwannfrancois/clv6uu88x00mw01qv3jtf961d"
          }
          projection={{ name: "globe" }}
          style={{
            width: "100vw",
            height: "100vh",
          }}
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        >
          {/* Layers */}
          <Source
            id="country-boundaries"
            type="vector"
            url="mapbox://mapbox.country-boundaries-v1"
          >
            <Layer
              id="country-visited"
              type="fill"
              source-layer="country_boundaries"
              paint={{
                "fill-color": "#FF9800",
                "fill-opacity": 0.15,
              }}
              filter={["in", "iso_3166_1", ...countriesVisited]}
            />
            <Layer
              id="country-lived"
              type="fill"
              source-layer="country_boundaries"
              paint={{
                "fill-color": "#1E88E5",
                "fill-opacity": 0.15,
              }}
              filter={["in", "iso_3166_1", ...countriesLived]}
            />
          </Source>
        </Map>
      </div>
    </div>
  );
}
