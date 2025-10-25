"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import bg from "@/public/bg.png"
import first from "@/public/firstBuilding.png"
import Image from "next/image";
import { Instrument_Sans, Inter, Outfit } from "next/font/google";

const instrument = Instrument_Sans({
    weight: ["700"],
    subsets: ["latin"],
    display: "swap",
  });

  const inter = Inter({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
  });

  const outfit = Outfit({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
  });


const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-cover bg-center"
      
    >
         <Image
          src={bg}
          alt="Background"
          fill
          priority
          quality={100}
          className="object-cover -z-10"
        />
     

      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6 text-white">
        {/* Small text */}
        <p className={`text-xl md:text-sm tracking-widest uppercase text-[#FFFFFF] ${outfit.className}`}>
          100% Trusted Company
        </p>

        {/* Heading */}
        <h1 className={`text-3xl md:text-5xl lg:text-8xl leading-tight ${instrument.className}`}>
          Building Trust Through <br /> Innovation
        </h1>

        {/* Description */}
        <p className={`text-xl md:text-base text-[#FFFFFF] max-w-2xl leading-relaxed ${inter.className}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Button */}
        <button className="mt-4 flex items-center gap-2 bg-[rgba(157,200,52,1)] text-black font-medium px-6 py-2 rounded-full transition-all hover:scale-105">
          Contact Us
          <ArrowRight size={16} />
        </button>

        {/* Video Section */}
        <div className="mt-10 border-4 border-[rgba(157,200,52,1)] rounded-3xl overflow-hidden shadow-xl w-full bg-linear-to-b from-[#9DC834] to-[#FFFFFF]">
          <div className="relative w-full h-[350px] md:h-[650px] ">
            <Image
              src={first}
              alt="Company Building"
              fill
              className="w-full h-full object-cover p-2 rounded-3xl"
            />
            {/* Play Button Overlay */}
            <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/30 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition">
                <div className="bg-[rgba(157,200,52,1)] text-white rounded-full p-3">
                <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 15 15"
    className="w-12 h-12"
>
    {/* This path is for a centered play triangle */}
    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
</svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
