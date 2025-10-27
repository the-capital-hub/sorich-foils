"use client";
import { Instrument_Sans } from "next/font/google";
import Image from "next/image";

import logo1 from "@/public/SVG.png";
import logo2 from "@/public/SVG-2.png";
import logo3 from "@/public/SVG-3.png";
import logo4 from "@/public/SVG-4.png";
import logo5 from "@/public/SVG-5.png";
import logo6 from "@/public/SVG-6.png";
import logo7 from "@/public/SVG-7.png";
import logo8 from "@/public/SVG-8.png";
import logo9 from "@/public/SVG-9.png";
import logo10 from "@/public/SVG-10.png";
import logo11 from "@/public/SVG-11.png";

const instrument = Instrument_Sans({
  weight: ["700", "400"],
  subsets: ["latin"],
  display: "swap",
});

const logos = [
  logo6,
  logo5,
  logo1,
  logo3,
  logo2,
  logo4,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
];

const WeGrow = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-16 px-6">
      <h1
        className={`text-center text-5xl font-bold text-[#000000] ${instrument.className}`}
      >
        We Grow Brands
      </h1>

      <p
        className={`${instrument.className} font-normal text-center text-[#000000] text-xl mt-8 max-w-5xl`}
      >
        Established brand demonstrating consistent growth, expanding product
        lines and inventory, driving global exports, securing a patented
        innovative packaging solution, and delivering unmatched value through
        quality and innovation.
      </p>

      <div className="flex flex-wrap justify-center gap-8 mt-12 w-full">
        {logos.map((logo, index) => (
          <div key={index} className="relative w-52">
            <Image
              src={logo}
              alt={`Client Logo ${index + 1}`}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeGrow;
