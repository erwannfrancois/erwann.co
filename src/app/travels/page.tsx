"use client";

import { initialViewState, mapSettings } from "@/constants/mapbox";
import {
  countriesLived,
  countriesVisited,
  places,
} from "@/constants/placesData";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import Map, { Marker, Popup, MapRef, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { LiaAngleUpSolid, LiaAngleDownSolid } from "react-icons/lia";

// See fabe Github for another implementation: https://github.com/fabe/site/blob/main/pages/globe.tsx
export default function Travels() {
  // Map settings
  const [initialView, setInitialView] = useState(initialViewState);
  const [settings, _] = useState({
    ...mapSettings,
  });
  const mapRef = useRef<MapRef | null>(null);
  // Popups
  interface PopupInfo {
    lat: number;
    lon: number;
    locationType: string;
    desc: string;
  }
  const [popupInfo, setPopupInfo] = useState<PopupInfo | null>(null);

  // Theme
  const { theme, setTheme } = useTheme();
  // Trigger to reload map
  const [mapReloadTrigger, setMapReloadTrigger] = useState(0);

  // Legend
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen((prev) => !prev);
  };

  // Pins
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
            className={`h-2.5 w-2.5 cursor-pointer rounded-full border-2 pin-${place.locationType.toLowerCase()} bg-clip-content`}
          />
        </Marker>
      )),
    []
  );

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

  // Triggers when the map loads or reloads
  const onMapLoad = () => {
    if (mapRef.current) {
      const map = mapRef.current.getMap();
      if (map) {
        map.setFog(null);
      }
    }
  };

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
                "fill-color": "#3b82f6",
                "fill-opacity": 0.15,
              }}
              filter={["in", "iso_3166_1", ...countriesVisited]}
            />
            <Layer
              id="country-lived"
              type="fill"
              source-layer="country_boundaries"
              paint={{
                "fill-color": "#8b5cf6",
                "fill-opacity": 0.15,
              }}
              filter={["in", "iso_3166_1", ...countriesLived]}
            />
          </Source>
          {pins}

          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.lon)}
              latitude={Number(popupInfo.lat)}
              onClose={() => setPopupInfo(null)}
              offset={2}
              closeButton={false}
              className="text-black font-mono uppercase"
            >
              <div>{popupInfo.desc}</div>
            </Popup>
          )}
        </Map>
      </div>
      <div className="max-w-[1600px] mx-auto px-6 md:px-0  flex justify-start">
        <div className="flex flex-col font-mono space-y-6 text-sm uppercase bg-surface/60 p-4 rounded-sm relative z-30 shadow-sm">
          <div
            onClick={toggleContent}
            className="flex flex-row items-center space-x-8 justify-between cursor-pointer"
          >
            <span>{isOpen ? "Hide " : "Display "}the map legend </span>
            {isOpen ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
          </div>
          {isOpen && (
            <div className="flex flex-col space-y-2">
              <div className="flex flex-row items-center space-x-2">
                <div className="h-4 w-8 cursor-pointer border-2 bg-blue-500/15 border-blue-500/60 bg-clip-content" />
                <span>Countries I&apos;ve been to</span>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="h-4 w-8 cursor-pointer border-2 bg-violet-500/15 border-violet-500/60 bg-clip-content" />
                <span>Countries I&apos;ve lived in</span>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="h-4 w-4 cursor-pointer rounded-full border-2 pin-city bg-clip-content" />
                <span>Cities</span>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="h-4 w-4 cursor-pointer rounded-full border-2 pin-landmark bg-clip-content" />
                <span>Landmarks</span>
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="h-4 w-4 cursor-pointer rounded-full border-2 pin-gem bg-clip-content" />
                <span>Gems</span>
              </div>
              <div className="text-xs">
                Inspired by{" "}
                <a
                  href="https://www.fabianschultz.com/"
                  target="_blank"
                  className="hover:underline hover underline-offset-4"
                >
                  Fabian Schultz
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
