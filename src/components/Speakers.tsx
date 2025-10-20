/// <reference path="../types/global.d.ts" />
import type React from "react";
import Gracious from "../assets/speaker/Gracies.png";
import LanreImg from "../assets/speaker/Olanrewaju Bayode (1).jpg";
import Mani from "../assets/speaker/Mani.jpeg";
import Nonse from "../assets/speaker/Nonse.jpeg";
import Patrick from "../assets/speaker/Patrick1.jpg";
import Damilola from "../assets/speaker/damilola edwards.jpg";
import victor from "../assets/speaker/5857302851997516506 - VICTOR OKAFOR.webp"
import Jason from "../assets/speaker/profile_image - Jason Tanner.jpeg"
export const Speakers: React.FC = () => {
  const items = [
    {
      id: "patrick",
      name: "Patrick Collins",
      description: "Co-founder and CEO Cyfrin Audits.",
      photo: Patrick,
      twitter: "https://x.com/PatrickAlphaC",
    },
    {
      id: "gracious",
      name: "Gracious Igwe",
      description: "Blockchain Intelligence Analyst and Security Researcher.",
      photo: Gracious,
      twitter: "https://x.com/Greyshaws",
    },
    // {
    //   id: "lawal",
    //   name: "Lawal",
    //   description: "Blockchain researcher and speaker.",
    //   photo: Lawal,
    //   twitter: undefined,
    // },
    {
      id: "lanre",
      name: "Lanre Bayode",
      description: "Independent Security Researcher.",
      photo: LanreImg,
      twitter: "https://x.com/LanreBayode1",
    },
    {
      id: "mani",
      name: "Mani",
      description: "Web3 Security Recruiter.",
      photo: Mani,
      twitter: "https://x.com/manicybersec3",
    },
    {
      id: "nonse",
      name: "Nonse Odion",
      description: "Security Researcher.",
      photo: Nonse,
      twitter: "https://x.com/NonseOdion",
    },
    {
      id: "damilola",
      name: "Damilola Edwards",
      description: "Blockchain Security Engineer.",
      photo: Damilola,
      twitter: "https://x.com/eddiedammy",
    },{
      id: "damilola",
      name: "Victor Okafor",
      description: "Security Reseacher At @quilaudits.",
      photo: victor,
      twitter: "https://x.com/turvec_dev",
    },
    {
      id: "damilola",
      name: "Jason Tanner",
      description: "Security Researcher @hexens.",
      photo: Jason,
      twitter: "https://x.com/_mr_thank_you_",
    },
  ];

  return (
    <section className="w-full py-12 text-center mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">Speakers</h2>
        <p className="mt-2 text-[20px] text-black">
          Meet our speakers sharing insights throughout the event.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="group w-[360px] sm:w-[380px] text-left rounded-xl bg-white border border-gray-100 overflow-hidden shadow-md hover:shadow-2xl hover:ring-1 hover:ring-black/5 transition-all duration-300 ease-[cubic-bezier(.22,1,.36,1)] transform-gpu will-change-transform hover:-translate-y-1 hover:scale-[1.02]"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <div className="relative w-full h-72 overflow-hidden bg-gray-100">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="w-full h-full object-cover object-center transform-gpu transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-4">
                {item.twitter ? (
                  <a
                    href={item.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.name} Twitter profile`}
                    className="block text-black hover:text-blue-700 font-semibold leading-snug text-lg sm:text-xl transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                ) : (
                  <h3 className="text-[#0f1419] font-semibold leading-snug text-lg sm:text-xl">{item.name}</h3>
                )}
                {item.description && (
                  <p className="mt-1.5 text-base text-gray-600">{item.description}</p>
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
