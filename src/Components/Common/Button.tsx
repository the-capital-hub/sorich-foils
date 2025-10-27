"use client";

import Image from "next/image";
import greenCircle from "@/public/Right Button.png"; 

import { Outfit } from "next/font/google";
import { FC } from "react";

const outfit = Outfit({
    weight: ["500"],
    subsets: ["latin"],
    display: "swap",
  });

interface RoundedActionButtonProps {
  text?: string;
  textColor?: string; 
  borderColor?: string
}

const RoundedActionButton: FC<RoundedActionButtonProps> = ({ 
    text = "Contact Us", 
    textColor = "text-white",
    borderColor = "border-white" // Default to white
}) => {
  return (
    <button
     
      className={`relative flex items-center justify-center border text-lg ${borderColor} rounded-full px-8 py-2 ${textColor} hover:shadow-md transition-all ${outfit.className}`}
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

export default RoundedActionButton;