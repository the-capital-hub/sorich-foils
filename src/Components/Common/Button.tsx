"use client";

import Image from "next/image";
import greenCircle from "@/public/Right Button.png"; 

import { Outfit } from "next/font/google";

const outfit = Outfit({
    weight: ["500"],
    subsets: ["latin"],
    display: "swap",
  });

export default function RoundedActionButton({ text = "Contact Us" }) {
  return (
    <button
      className={`relative flex items-center justify-center border text-lg border-black rounded-full px-8 py-3  text-black  bg-white hover:shadow-md transition-all ${outfit.className}`}
    >
      {/* Text */}
      <span className="z-10">{text}</span>

      {/* Constant green circular image */}
      <div className="absolute right-0 translate-x-1/2">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src={greenCircle}
            alt="arrow circle"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </button>
  );
}
