import React from "react";
import { ConferenceSchedule } from "../components/ConferenceSchedule";

export const LiveStream: React.FC<{ streamUrl?: string }>= ({ streamUrl }) => {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video card */}
        <div className="lg:col-span-2">
          <div className="rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white">
            {streamUrl ? (
              <div className="aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={streamUrl}
                  title="Live Stream"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="aspect-video bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
                Stream will appear here when live
              </div>
            )}
            <div className="p-4 bg-slate-800 text-white">
              <div className="font-semibold">WEB3 SECURITY SUMMIT AFRICA 2025 - Main Stage</div>
              <div className="text-sm opacity-80">Live Stream</div>
            </div>
          </div>
        </div>

        {/* Right side schedule panel */}
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-0">
            <ConferenceSchedule />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStream;
