/// <reference path="../types/global.d.ts" />
import type React from "react";
import Gracious from "../assets/speaker/Gracies.png";
import Lawal from "../assets/speaker/Lawal.jpg";
import LanreImg from "../assets/speaker/Olanrewaju Bayode (1).jpg";
import Mani from "../assets/speaker/Mani.jpeg";
import Nonse from "../assets/speaker/Nonse.jpeg";
import Patrick from "../assets/speaker/Patrick1.jpg";
import Damilola from "../assets/speaker/damilola edwards.jpg";

export const Speakers: React.FC = () => {
  const items = [
    {
      id: "patrick",
      name: "Patrick Collins",
      description: "Smart contract educator and security advocate.",
      photo: Patrick,
      twitter: "https://x.com/PatrickAlphaC",
    },
    {
      id: "gracious",
      name: "Gracious Igwe",
      description: "Web3 security enthusiast and community builder.",
      photo: Gracious,
      twitter: "https://x.com/Greyshaws",
    },
    {
      id: "lawal",
      name: "Lawal",
      description: "Blockchain researcher and speaker.",
      photo: Lawal,
      twitter: undefined,
    },
    {
      id: "lanre",
      name: "Lanre Bayode",
      description: "Blockchain researcher and speaker.",
      photo: LanreImg,
      twitter: "https://x.com/LanreBayode1",
    },
    {
      id: "mani",
      name: "Mani",
      description: "Security engineer focused on DeFi.",
      photo: Mani,
      twitter: "https://x.com/manicybersec3",
    },
    {
      id: "nonse",
      name: "Nonse Odion",
      description: "Smart contract auditor and speaker.",
      photo: Nonse,
      twitter: "https://x.com/NonseOdion",
    },
    {
      id: "damilola",
      name: "Damilola Edwards",
      description: "Builder and educator in Web3 security.",
      photo: Damilola,
      twitter: "https://x.com/eddiedammy",
    },
  ];

  return (
    <section className="w-full py-12 text-center mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">Speakers</h2>
        <p className="mt-2 text-[20px] text-black">
          Meet our speakers sharing insights throughout the event.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group w-[320px] text-left rounded-lg bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <div className="w-full h-60 overflow-hidden bg-gray-100">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4">
                {item.twitter ? (
                  <a
                    href={item.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.name} Twitter profile`}
                    className="block text-black hover:text-blue-700 font-semibold leading-snug"
                  >
                    {item.name}
                  </a>
                ) : (
                  <h3 className="text-[#0f1419] font-semibold leading-snug">{item.name}</h3>
                )}
                {item.description && (
                  <p className="mt-1.5 text-sm text-gray-600">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
