import { supabase } from "../config/supabaseClient";

export interface News {
  id: number;
  title: string;
  description: string;
  image_url: string;
  image_alt: string;
  published_at: string;
  link: string;
}

export const fetchNewsData = async (): Promise<News[]> => {
  try {
    const { data, error } = await supabase.from("news").select("*");
    if (error) {
      throw error;
    }
    const sortedData = (data || [])
      .map((news) => ({
        ...news,
        published_at: new Date(news.published_at), // Convert to Date object
      }))
      .sort((a, b) => b.published_at.getTime() - a.published_at.getTime());

    return sortedData;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching news data:", error.message);
    } else {
      console.error("Unknown error fetching news data:", error);
    }
    return [];
  }
};
