/// <reference path="../types/global.d.ts" />
import type React from "react";
import Collins from "../assets/Collins.png";
import Lanre from "../assets/Lanre.png";
import twitter from "../assets/twitter.svg";
import Nonce from "../assets/Nonse.jpeg";
import Damilola from "../assets/Damilola.jpeg";

export const Speakers: React.FC = () => {
  const items = [
    { id: "collins", name: " Patrick Collins", photo: Collins, twitter: "https://x.com/PatrickAlphaC" },
    { id: "lanre", name: "Lanre Bayode", photo: Lanre, twitter: "https://x.com/LanreBayode1" },
    { id: "nonce", name: "Nonce", photo: Nonce, twitter: "X.com/NonseOdion" },
    { id: "damilola", name: "Damilola", photo: Damilola, twitter: "https://x.com/eddiedammy" },
  ];

  return (
    <section className="w-full py-12 text-center mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">Speakers</h2>
        <p className="mt-2 text-[20px] text-black">
          Meet our speakers sharing insights throughout the event.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-8">
          {items.map((item) => (
            <a
              key={item.id}
              href={item.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.name} Twitter profile`}
              className="basis-full sm:basis-[calc(50%-1rem)] md:basis-[calc(33.333%-1.333rem)] lg:basis-[calc(33.333%-1.333rem)] block text-center shadow-md rounded-xl bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition outline-none focus:outline-none focus-visible:outline-none active:outline-none focus:ring-0 focus:ring-transparent focus:border-transparent"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <div className="flex items-center justify-center p-6">
                <img
                  src={item.photo}
                  alt={item.name}
                  className=" "
                />
              </div>
              <div className="mt-3 font-semibold text-black">{item.name}</div>
              <div className="mt-2 pb-6 flex justify-center">
                <img src={twitter} alt="Twitter/X" className="h-5 w-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
