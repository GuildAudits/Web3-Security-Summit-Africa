import React from "react";
import twitter from "../assets/twitter.svg";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex justify-between py-4 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-4">
          <p className="">
            Enquiries/Details: <a href="https://x.com/GuildAcademy_" className="underline-offset-2 hover:underline">@GuildAcademy_
            </a>
          </p>

          <a
            href="https://x.com/GuildAcademy_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter/X"
            className=" p-1 rounded hover:bg-gray-100"
          >
            <img src={twitter} alt="Twitter" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
