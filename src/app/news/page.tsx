"use client";

import SocialLinks from "@/components/socials/SocialLinks";
import { useEffect, useState } from "react";
import { News, fetchNewsData } from "@/services/fetchNewsData";
import NewsList from "@/components/news/NewsList";

export default function NewsPage() {
  const [newsData, setNewsData] = useState<News[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const news = await fetchNewsData();
      setNewsData(news);
    };

    fetchNews();
  }, []);

  return (
    <div className="wrapper my-12 flex flex-col gap-6">
      <div className="flex flex-col gap-2 md:gap-2">
        <h1 className="font-medium">News</h1>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <p>Follow me on my socials to stay updated</p>
          <SocialLinks />
        </div>
      </div>
      <NewsList news={newsData} />
    </div>
  );
}
