"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import React, { useEffect, useState, useRef, useMemo } from "react";
import Map, { Marker, Popup, MapRef } from "react-map-gl";
import { useTheme } from "next-themes";
import { fontSecondary } from "@/config/fonts";
import { cn, compareObjects } from "@/lib/utils";
import { countriesLived, countriesVisited, places } from "@/constants/mapData";

const initialViewState = {
  latitude: 45.8,
  longitude: 1.26,
  zoom: 0.7,
  bearing: 0,
  pitch: 0,
};

interface PopupInfo {
  lat: number;
  lon: number;
  locationType: string;
  desc: string;
}

export default function Travels() {
  const [popupInfo, setPopupInfo] = useState<PopupInfo | null>(null);
  const [mode, setMode] = useState("light");
  const [mapReloadTrigger, setMapReloadTrigger] = useState(0); // Trigger to reload map
  const [initialView, setInitialView] = useState(initialViewState); // Store initial view state
  const mapRef = useRef<MapRef | null>(null); // Define mapRef with type MapRef | null

  const { theme, setTheme } = useTheme();

  const [settings, _] = useState({
    scrollZoom: true,
    boxZoom: true,
    dragRotate: true,
    dragPan: true,
    keyboard: true,
    doubleClickZoom: true,
    touchZoomRotate: true,
    touchPitch: true,
    minZoom: 0,
    maxZoom: 14,
    minPitch: 0,
    maxPitch: 0,
  });

  const pins = useMemo(
    () =>
      places.map((place, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={place.lon}
          latitude={place.lat}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(place);
          }}
        >
          <div
            className={cn(
              "h-4 w-4 cursor-pointer rounded-xl border-2 bg-clip-content p-0.5",
              (place.locationType = "Lived"
                ? "bg-blue-500/60 border-blue-500/10"
                : "bg-red-500/60 border-red-500/10")
            )}
          />
        </Marker>
      )),
    []
  );

  useEffect(() => {
    // Increment the trigger whenever the theme changes
    setMapReloadTrigger((prev) => prev + 1);
    reloadMap();
  }, [theme]);

  const onMapLoad = () => {
    if (mapRef.current) {
      const map = mapRef.current.getMap();
      if (map) {
        map.setFog(null);

        map.addLayer(
          {
            id: "country-visited",
            source: {
              type: "vector",
              url: "mapbox://mapbox.country-boundaries-v1",
            },
            "source-layer": "country_boundaries",
            type: "fill",
            paint: {
              "fill-color": "#d2361e",
              "fill-opacity": 0.2,
            },
          },
          "country-label"
        );

        map.setFilter("country-visited", [
          "in",
          "iso_3166_1",
          ...countriesVisited,
        ]);

        map.addLayer(
          {
            id: "country-lived",
            source: {
              type: "vector",
              url: "mapbox://mapbox.country-boundaries-v1",
            },
            "source-layer": "country_boundaries",
            type: "fill",
            paint: {
              "fill-color": "#6495ED",
              "fill-opacity": 0.2,
            },
          },
          "country-label"
        );

        map.setFilter("country-lived", ["in", "iso_3166_1", ...countriesLived]);

        if (compareObjects(initialView, initialViewState)) {
          if (window.screen.width > 768) {
            map.setZoom(2);
          }
        }
      }
    }
  };

  const reloadMap = () => {
    // Manually store the current view state before reloading
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
  };

  return (
    <div>
      {/* Map */}
      <div className="fixed top-0 left-0 right-0 bg-surface">
        <Map
          key={mapReloadTrigger} // Use mapReloadTrigger as the key
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
          {pins}

          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.lon)}
              latitude={Number(popupInfo.lat)}
              onClose={() => setPopupInfo(null)}
              className="pb-2"
            >
              <div className="text-black font-medium">{popupInfo.desc}</div>
            </Popup>
          )}
        </Map>
      </div>
      {/* Legend */}
      <div className="fixed bottom-8 left-0 md:left-8 right-0 flex justify-center md:justify-start">
        <div className="bg-white/20 shadow-md rounded-md py-4 px-6">
          <p
            className={cn(
              "text-lg font-medium mb-2 font-secondary",
              fontSecondary.variable
            )}
          >
            Places I&apos;ve been to
          </p>
          <p>Cities</p>
          <p>Countries</p>
          <p>
            Inspired by{" "}
            <a
              href="https://www.fabianschultz.com/"
              target="_blank"
              className="text-sm text-foreground-secondary underline underline-offset-4"
            >
              Fabian Schultz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
