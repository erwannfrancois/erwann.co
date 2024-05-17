import { supabase } from "@/config/supabaseClient";

export interface LocationPin {
  id: number;
  lat: number;
  long: number;
  location_type: string;
  desc: string;
}

export interface LocationCountry {
  id: number;
  country_code: string;
  has_lived_in: boolean;
}

export interface PopupInfo {
  lat: number;
  long: number;
  location_type: string;
  desc: string;
}

// Function to fetch location pins from Supabase
export const fetchLocationPins = async (): Promise<LocationPin[]> => {
  try {
    const { data, error } = await supabase.from("location_pins").select("*");
    if (error) {
      throw error;
    }
    return data || [];
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching location pins:", error.message);
    } else {
      console.error("Unknown error fetching location pins:", error);
    }
    return [];
  }
};

// Function to fetch location countries from Supabase
export const fetchLocationCountries = async (): Promise<{
  countriesLivedIn: string[];
  countriesVisited: string[];
}> => {
  try {
    const { data, error } = await supabase
      .from("location_countries")
      .select("*");
    if (error) {
      throw error;
    }
    // Split countries into two arrays based on whether I've lived there
    const countriesLivedIn = data
      .filter((country) => country.has_lived_in)
      .map((country) => country.country_code);
    const countriesVisited = data
      .filter((country) => !country.has_lived_in)
      .map((country) => country.country_code);

    return { countriesLivedIn, countriesVisited };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching location countries:", error.message);
    } else {
      console.error("Unknown error fetching location countries:", error);
    }
    return { countriesLivedIn: [], countriesVisited: [] };
  }
};
