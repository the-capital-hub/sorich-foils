"use client";

import Image from "next/image";
import worldMap from "@/public/Component 138.png";
import { Instrument_Sans, Outfit } from "next/font/google";

const instrument = Instrument_Sans({
    weight: ["700"],
    subsets: ["latin"],
    display: "swap",
  });

  const outfit = Outfit({
    weight: ["700","400"],
    subsets: ["latin"],
    display: "swap",
  });

export default function StoreMapSection() {
  return (
    <section className="w-full py-16 bg-white text-center">
      {/* Heading */}
      <h2 className={`text-3xl md:text-6xl text-[#111827] mb-10 ${instrument.className}`}>
        Check Out Our Stores In The World
      </h2>

      {/* World Map */}
      <div className="flex justify-center mb-12">
        <div className="relative w-[95%] md:w-[70%] lg:w-[80%] lg:mt-12">
          <Image
            src={worldMap}
            alt="World Map"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 mt-8 justify-center max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full bg-[#ccf1bb] text-[#84c11d] mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-15 h-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 11h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.264 22H8.736a2 2 0 01-1.789-1.106l-3.5-7A2 2 0 014.236 11H9m5-7a2 2 0 10-4 0v7a2 2 0 104 0V4z"
              />
            </svg>
          </div>
          <h3 className={`text-5xl text-[#252525] ${outfit.className} font-bold mb-6`}>14</h3>
          <p className={`uppercase text-xl tracking-wide text-[#252525] ${outfit.className}`}>
            Working Years
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full bg-[#ccf1bb] text-[#84c11d] mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-15 h-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0-6a4 4 0 118 0m-8 0a4 4 0 108 0M12 14v7"
              />
            </svg>
          </div>
          <h3 className={`text-5xl  text-[#252525] ${outfit.className} font-bold mb-6`}>70</h3>
          <p className={`uppercase text-xl tracking-wide text-[#252525] ${outfit.className}`}>
            Team
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full bg-[#ccf1bb] text-[#84c11d] mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-15 h-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </div>
          <h3 className={`text-5xl  text-[#252525] ${outfit.className} font-bold mb-6`}>16</h3>
          <p className={`uppercase text-xl tracking-wide text-[#252525] ${outfit.className}`}>
            Advance Machines
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full bg-[#ccf1bb] text-[#84c11d] mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-15 h-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0-6a4 4 0 118 0m-8 0a4 4 0 108 0"
              />
            </svg>
          </div>
          <h3 className={`text-5xl  text-[#252525] ${outfit.className} font-bold mb-6`}>150+</h3>
          <p className={`uppercase text-xl tracking-wide text-[#252525] ${outfit.className}`}>
            Clients
          </p>
        </div>
      </div>
    </section>
  );
}
