import { useEffect, useState } from "react";
import { supabase } from "@/config/supabaseClient";

export interface SupabaseUrls {
  cvUrl: string;
}

export const useSupabaseUrls = (): SupabaseUrls => {
  const [cvUrl, setCvUrl] = useState("");

  useEffect(() => {
    const fetchCvUrl = async () => {
      try {
        const cvResponse = await supabase.storage
          .from("public-content")
          .getPublicUrl("cv/Erwann_Francois-CV.pdf");

        if (!cvResponse) {
          throw new Error("CV URL not found");
        }

        setCvUrl(cvResponse.data.publicUrl);
      } catch (error: any) {
        console.error("Error fetching CV URL:", error.message);
      }
    };

    fetchCvUrl();
  }, []);

  return { cvUrl };
};
