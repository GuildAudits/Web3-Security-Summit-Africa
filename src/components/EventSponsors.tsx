/// <reference path="../types/global.d.ts" />
import React from "react";
import twitter from "../assets/twitter.svg";
import GuildAudit from "../assets/Auditing.png";

export const EventSponsors: React.FC = () => {
  const item = {
    id: "guild-audit",
    name: "Guild Audit",
    logo: GuildAudit,
    twitter: "https://x.com/GuildAudits",
  } as const;

  return (
    <section className="w-full py-12 text-center mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-3xl font-bold tracking-tight text-black ">
          Event Sponsors
        </h2>
        <p className="mt-2 text-[20px] text-black ">
          A special thanks to our generous sponsors who make this event possible.
        </p>

        <div className="mt-6">
          <div className="mx-auto w-56 min-w-[14rem] text-center shadow-md">
            <a
              href={item.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl bg-white shadow-sm hover:shadow-md transition overflow-hidden border border-gray-200"
              aria-label={`${item.name} Twitter`}
            >
              <div className="flex items-center justify-center p-6">
                <img src={item.logo} alt={item.name} className="h-24 w-auto object-contain"/>
              </div>
            </a>
            <div className="mt-3 font-semibold text-black">{item.name}</div>
            <div className="mt-2 flex justify-center">
              <a
                href={item.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-500 hover:text-sky-600 flex items-center gap-1"
                aria-label={`${item.name} Twitter`}
              >
                <img src={twitter} alt="Twitter" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSponsors;
