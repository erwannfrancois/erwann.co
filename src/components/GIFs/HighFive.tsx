"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import gifInfo from "gif-info";

export default function HighFive() {
  const [showGif, setShowGif] = useState(false);
  const [randomGifUrl, setRandomGifUrl] = useState("");
  const [index, setIndex] = useState(0);

  const gifFiles = [
    "TheOffice.gif",
    "B99.gif",
    "HIMYM.gif",
    "Scrubs.gif",
    "Spongebob.gif",
    "Will.gif",
    "Justin.gif",
    "TopGun.gif",
    "Barney.gif",
    "Freevee.gif",
  ];

  useEffect(() => {
    // Generate a random index when the component mounts
    const randomIndex = Math.floor(Math.random() * gifFiles.length);
    setIndex(randomIndex);
  }, [gifFiles.length]);

  const getGif = async () => {
    const selectedGif = gifFiles[index % gifFiles.length];
    setIndex(index + 1);

    // Fetch the GIF file and get its duration
    const response = await fetch(`/GIFs/${selectedGif}`);
    const buffer = await response.arrayBuffer();
    const info = gifInfo(buffer);
    const duration = info.duration;

    // Return the selected GIF URL and duration
    return { url: `/GIFs/${selectedGif}`, duration };
  };

  const handleClick = async () => {
    const { url, duration } = await getGif();
    setRandomGifUrl(url);
    setShowGif(true);

    // After the duration of the GIF, hide it
    setTimeout(() => {
      setShowGif(false);
    }, duration);
  };

  return (
    <div>
      <p onClick={handleClick} className="cursor-pointer">
        Click here to high five!
      </p>

      {showGif && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div>
            <Image
              src={randomGifUrl}
              alt="High Five GIF"
              sizes="100vw"
              width={320}
              height={180}
              className="rounded-sm w-102 h-auto"
              unoptimized
            />
          </div>
        </div>
      )}
    </div>
  );
}
