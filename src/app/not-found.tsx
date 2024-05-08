import Image from "next/image";
export default function Custom404() {
  return (
    <main className="max-w-[1600px] mx-auto px-6 md:px-0 space-y-16 md:space-y-52">
      <div className="mt-40">
        <p className="text-display font-mono uppercase font-medium">
          404 Page not found
        </p>
        <div className="mt-4">
          <Image
            src="/not-found/GIF/404.gif"
            alt="Page not found"
            sizes="100vw"
            width={160}
            height={90}
            className="rounded-sm w-full h-auto"
          />
        </div>
        <p className="text-display font-mono uppercase font-medium">
          404 Page not found
        </p>
      </div>
    </main>
  );
}
