"use client";

import { initialViewState, mapSettings } from "@/constants/mapbox";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import Map, { Marker, Popup, MapRef, Source, Layer } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { LiaAngleUpSolid, LiaAngleDownSolid } from "react-icons/lia";
import {
  LocationPin,
  PopupInfo,
  fetchLocationCountries,
  fetchLocationPins,
} from "@/services/fetchMapData";

// See fabe Github for another implementation: https://github.com/fabe/site/blob/main/pages/globe.tsx
export default function Travels() {
  // Map settings
  const [initialView, setInitialView] = useState(initialViewState);
  const [settings, _] = useState({
    ...mapSettings,
  });
  const mapRef = useRef<MapRef | null>(null);
  // Popups
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
  const [location_pins, setLocationPins] = useState<LocationPin[]>([]);

  useEffect(() => {
    const fetchLocationData = async () => {
      const pins = await fetchLocationPins();
      setLocationPins(pins);
    };

    fetchLocationData();
  }, []);

  const pins = useMemo(
    () =>
      location_pins.map((pin, index) => (
        <Marker
          key={`marker-${index}`}
          longitude={pin.long}
          latitude={pin.lat}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            setPopupInfo(pin);
          }}
        >
          <div
            className={`h-2.5 w-2.5 cursor-pointer rounded-full border-2 pin-${pin.location_type.toLowerCase()} bg-clip-content`}
          />
        </Marker>
      )),
    [location_pins]
  );

  // Countries
  const [countries_default, setCountriesDefault] = useState<string[]>([]);
  const [countries_lived, setCountriesLived] = useState<string[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const { countriesLivedIn, countriesVisited } =
        await fetchLocationCountries();
      setCountriesLived(countriesLivedIn);
      setCountriesDefault(countriesVisited);
    };

    fetchCountries();
  }, []);

  // When the theme changes, the setFog is ignored so we have to reload the map
  useEffect(() => {
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
              filter={["in", "iso_3166_1", ...countries_default]}
            />
            <Layer
              id="country-lived"
              type="fill"
              source-layer="country_boundaries"
              paint={{
                "fill-color": "#8b5cf6",
                "fill-opacity": 0.15,
              }}
              filter={["in", "iso_3166_1", ...countries_lived]}
            />
          </Source>
          {pins}

          {popupInfo && (
            <Popup
              anchor="top"
              longitude={Number(popupInfo.long)}
              latitude={Number(popupInfo.lat)}
              onClose={() => setPopupInfo(null)}
              offset={2}
              closeButton={false}
              className="text-black uppercase"
            >
              <div>{popupInfo.desc}</div>
            </Popup>
          )}
        </Map>
      </div>
      <div className="wrapper my-4 flex justify-start">
        <div className="legend__container">
          <div onClick={toggleContent} className="legend__toggle">
            <span>{isOpen ? "Hide " : "Display "} map legend </span>
            {isOpen ? <LiaAngleUpSolid /> : <LiaAngleDownSolid />}
          </div>
          {isOpen && (
            <div className="flex flex-col space-y-2">
              <div className="legend__item">
                <div className="legend__country-square bg-blue-500/15 border-blue-500/60 " />
                <span>Countries I&apos;ve been to</span>
              </div>
              <div className="legend__item">
                <div className="legend__country-square bg-violet-500/15 border-violet-500/60" />
                <span>Countries I&apos;ve lived in</span>
              </div>
              <div className="legend__item">
                <div className="legend__point-circle pin-city" />
                <span>Cities</span>
              </div>
              <div className="legend__item">
                <div className="legend__point-circle pin-landmark" />
                <span>Landmarks</span>
              </div>
              <div className="legend__item">
                <div className="legend__point-circle pin-gem" />
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
