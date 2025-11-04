"use client";
import { Instrument_Sans } from "next/font/google";
import Image from "next/image";

import logo1 from "@/public/logos/renata.webp";
import logo2 from "@/public/logos/Ind-Swift.png";
import logo3 from "@/public/logos/OIP (1).webp";
import logo4 from "@/public/logos/ajanta_pharma.png";
import logo5 from "@/public/logos/alkem-logo.png";
import logo6 from "@/public/logos/aristo.png";
import logo7 from "@/public/logos/bristol-laboratories-logo.png";
import logo8 from "@/public/logos/emami-group3970.jpg";
import logo9 from "@/public/logos/incepta.png";
import logo10 from "@/public/logos/indoco.png";
import logo11 from "@/public/logos/npi-pharma.webp";
import logo12 from "@/public/logos/OIP.webp";

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
  logo12,
];

const WeGrow = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-10 px-6">
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

      <div className="flex flex-wrap justify-center gap-10 mt-12 w-full max-w-6xl">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative w-40 h-24 flex items-center justify-center p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <Image
              src={logo}
              alt={`Client Logo ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100px, 160px"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeGrow;
