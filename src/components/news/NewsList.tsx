import { News } from "@/services/fetchNewsData";
import NewsTile from "./NewsTile";

interface NewsListProps {
  news: News[];
}

export default function NewsList({ news }: NewsListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {news.length === 0 && (
        <p className="text-foreground-secondary">More news are coming soon</p>
      )}

      {/* Column 1 */}
      <div className="hidden md:block md:col-span-1">
        {news
          .filter((news, index) => index % 2 === 0)
          .map((news) => (
            <div key={news.id} className="mb-6">
              <NewsTile news={news} />
            </div>
          ))}
      </div>
      {/* Column 2 */}
      <div className="hidden md:block md:col-span-1">
        {news
          .filter((news, index) => index % 2 === 1)
          .map((news) => (
            <div key={news.id} className="mb-6">
              <NewsTile news={news} />
            </div>
          ))}
      </div>
      {/* Mobile View */}
      <div className="block md:hidden">
        {news.map((news) => (
          <div key={news.id} className="mb-6">
            <NewsTile news={news} />
          </div>
        ))}
      </div>
    </div>
  );
}
