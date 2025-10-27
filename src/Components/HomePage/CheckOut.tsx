"use client";

import Image from "next/image";
import worldMap from "@/public/Component 138.png";
import { Instrument_Sans, Outfit } from "next/font/google";
import logo1 from "@/public/Vector-2.png";
import logo2 from "@/public/Vector.png";
import logo4 from "@/public/Vector-3.png";
import logo3 from "@/public/Mask group.png";

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
    <section className="w-full py-10 px-6 bg-white text-center">
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
          <div className="p-4 rounded-full mb-10">
            <Image
             src={logo4}
             alt="dummy"
             />
          </div>
          <h3 className={`text-5xl text-[#252525] ${outfit.className} font-bold mb-6`}>14</h3>
          <p className={`uppercase text-xl tracking-wide text-[#252525] ${outfit.className}`}>
            Working Years
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full  text-[#84c11d] mb-10">
          <Image
             src={logo2}
             alt="dummy"
             />
          </div>
          <h3 className={`text-5xl  text-[#252525] ${outfit.className} font-bold mb-6`}>70</h3>
          <p className={`uppercase text-xl tracking-wide text-[#252525] ${outfit.className}`}>
            Team
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full text-[#84c11d] mb-10">
          <Image
             src={logo3}
             alt="dummy"
             />
          </div>
          <h3 className={`text-5xl  text-[#252525] ${outfit.className} font-bold mb-6`}>16</h3>
          <p className={`uppercase text-xl tracking-wide text-[#252525] ${outfit.className}`}>
            Advance Machines
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-10">
          <Image
             src={logo1}
             alt="dummy"
             />
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
