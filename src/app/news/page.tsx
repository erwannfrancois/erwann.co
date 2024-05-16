import SocialLinks from "@/components/socials/SocialLinks";

export default function News() {
  return (
    <div className="wrapper my-12 flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:gap-2">
        <h1 className="font-medium">News</h1>
        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <p>Follow me on my socials to stay updated</p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
