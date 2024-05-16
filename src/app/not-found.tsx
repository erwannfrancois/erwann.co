import Image from "next/image";
export default function Custom404() {
  return (
    <main className="wrapper">
      <div className="mt-10 mb-10 flex flex-col items-center">
        <p className="text-3xl md:text-display uppercase font-medium">
          404 Page not found
        </p>
        <div className="my-4 md:w-[50%]">
          <Image
            src="/not-found/GIF/404.gif"
            alt="Page not found"
            sizes="100vw"
            width={160}
            height={90}
            className="rounded-sm w-full h-auto"
            unoptimized
          />
        </div>
        <p className="text-3xl md:text-display uppercase font-medium">
          404 Page not found
        </p>
      </div>
    </main>
  );
}
