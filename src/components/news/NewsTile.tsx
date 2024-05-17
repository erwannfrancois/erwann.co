import { News } from "@/services/fetchNewsData";
import Image from "next/image";

interface NewsTileProps {
  news: News;
}

export default function NewsTile({ news }: NewsTileProps) {
  const formattedDate = new Date(news.published_at)
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, ".");

  const content = (
    <div className="flex flex-col gap-3">
      <div className="relative">
        <Image
          src={news.image_url}
          alt={news.image_alt}
          sizes="100vw"
          width={160}
          height={90}
          className="w-full h-auto rounded-sm"
        />
        <div className="news__date">
          <span>{formattedDate}</span>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <p className="font-medium">{news.title}</p>
        <p className="text-sm text-foreground-secondary">{news.description}</p>
      </div>
    </div>
  );

  // If the news has a link, wrap the content in an anchor tag
  return news.link ? (
    <a
      href={news.link}
      target="_blank"
      rel="noopener"
      className="hover:text-foreground-secondary"
    >
      {content}
    </a>
  ) : (
    content
  );
}
