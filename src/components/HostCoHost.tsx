import type React from "react";
import standing from "../assets/speaker/Ekoh.jpeg";
import woman from "../assets/speaker/Gracie.jpeg";

export type HostItem = {
  id: string;
  role: string;
  name: string;
  photo: string;
  bio?: string;
  twitter?: string;
};

export const HostCoHost: React.FC<{ items?: HostItem[] }> = ({ items }) => {
  const defaults: HostItem[] = [
    {
      id: "host",
      role: "Host",
      name: "Victor Ekoh",
      photo: standing,
      bio: "Master of Ceremonies for the summit.",
      twitter: undefined,
    },
    {
      id: "cohost",
      role: "Co-Host",
      name: "Glory Praise Emmanuel",
      photo: woman,
      bio: "Co-host supporting program flow.",
      twitter: undefined,
    },
  ];

  const data = items ?? defaults;

  return (
    <section className="w-full py-12 text-center mx-auto max-w-7xl">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">Host & Co-Host</h2>
        <p className="mt-2 text-[20px] text-black">Meet the anchors guiding you through the day.</p>

        <div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-10">
          {data.map((item) => (
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
                <div className="text-xs uppercase tracking-wide text-gray-500">{item.role}</div>
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
                {item.bio && <p className="mt-1.5 text-base text-gray-600">{item.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostCoHost;
