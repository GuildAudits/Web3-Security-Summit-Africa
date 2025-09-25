/// <reference path="../types/global.d.ts" />
import React from "react";
import twitter from "../assets/twitter.svg";
import TheBuidl from "../assets/TheBuidl.jpg";
import Web3Afrika from "../assets/Web3 Afrika.png";
import Web3Bridge from "../assets/Web3 Bridge.png";

// Local wrapper to safely render legacy <marquee> element without TS intrinsic typing
const Marquee: React.FC<React.HTMLAttributes<HTMLElement> & { scrollAmount?: number; behavior?: string; direction?: string; }>
  = ({ children, ...rest }) => React.createElement('marquee' as any, rest, children);

export const EventPartners: React.FC = () => {
  const items = [
    { id: "the-buidl", name: "The Buidl", logo: TheBuidl, site: "https://x.com/the_buidl", twitter: "https://x.com/the_buidl" },
    { id: "web3-afrika", name: "Web3 Afrika", logo: Web3Afrika, site: "https://x.com/web3afrika", twitter: "https://x.com/web3afrika" },
    { id: "web3-bridge", name: "Web3 Bridge", logo: Web3Bridge, site: "https://x.com/Web3Bridge", twitter: "https://x.com/Web3Bridge" },
  ];

  return (
    <section className="w-full py-12 text-center mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold  text-black ">
          Event Partners
        </h2>
        <p className="mt-2 text-[20px]  text-black ">
          Shoutout to our partners collaborating to deliver a world-class experience.
        </p>

        <div className="mt-6 relative overflow-hidden rounded-lg">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <Marquee behavior="scroll" direction="left" scrollAmount={8}>
            <div className="flex flex-nowrap items-stretch gap-12 py-6">
              {items.map((item) => (
                <div key={`p1-${item.id}`} className="w-56 min-w-[14rem] flex-none text-center shadow-md">
                  <a
                    href={item.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl bg-white shadow-sm hover:shadow-md transition overflow-hidden border border-gray-200"
                    aria-label={`${item.name} website`}
                  >
                    <div className="flex items-center justify-center p-6">
                      <img src={item.logo} alt={item.name} className="h-24 w-auto object-contain" />
                    </div>
                  </a>
                  <div className="mt-3 font-semibold text-black">{item.name}</div>
                  <div className="mt-2 flex justify-center">
                    <a
                      href={item.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600"
                      aria-label={`${item.name} Twitter`}
                    >
                      <img src={twitter} alt="Twitter" className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}

              {items.map((item) => (
                <div key={`p2-${item.id}`} className="w-56 min-w-[14rem] flex-none text-center shadow-md" aria-hidden="true">
                  <a
                    href={item.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl bg-white shadow-sm hover:shadow-md transition overflow-hidden border border-gray-200"
                    aria-label={`${item.name} website`}
                  >
                    <div className="flex items-center justify-center p-6">
                      <img src={item.logo} alt={item.name} className="h-24 w-auto object-contain" />
                    </div>
                  </a>
                  <div className="mt-3 font-semibold text-black">{item.name}</div>
                  <div className="mt-2 flex justify-center">
                    <a
                      href={item.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-500 hover:text-sky-600"
                      aria-label={`${item.name} Twitter`}
                    >
                      <img src={twitter} alt="Twitter" className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default EventPartners;
