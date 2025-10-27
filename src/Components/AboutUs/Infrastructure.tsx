"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import RoundedActionButton from "../Common/Button";
import hslImg from "@/public/inst3.png";
import rotogravureImg from "@/public/inst2.png";
import slittingImg from "@/public/inst1.png";
import bg from "@/public/bg3.png";

import { Instrument_Sans } from "next/font/google";


const instrument = Instrument_Sans({
    weight: ["600","400"],
    subsets: ["latin"],
    display: "swap",
  });

export default function MachinerySection() {
  const machines = [
    {
      id: 1,
      title:
        "The Heat Seal Lacquer (HSL) coating line with Wet & Dry Lamination Facilities",
      points: [
        "Maximum speed up to 120 mtr/minutes.",
        "Processing capacity – 3,000 tonnes per year",
        "German make 7 drive system.",
        "Maximum web width up to 1000 mm.",
      ],
      image: hslImg,
    },
    {
      id: 2,
      title:
        "Ten Colour Rotogravure Printing Machines and Web Video with Auto Registration Controller",
      points: [
        "Maximum speed up to 200 meters per minute",
        "Maximum web width up to 1000 mm",
        "Maximum diameter 900 mm",
      ],
      image: rotogravureImg,
    },
    {
      id: 3,
      title: "High Speed Slitting machine 3 nos",
      points: [
        "Maximum speed up to 250 mtr/minutes",
        "Maximum web width up to 1000 mm",
        "Auto Tension Controller",
      ],
      image: slittingImg,
    },
  ];

  return (
    <section className="relative py-20 bg-white lg:mt-20">
        <Image
          src={bg}
          alt="Background"
          fill
          priority
          className="object-cover -z-10"
        /> 
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <h2 className={`text-2xl md:text-3xl lg:text-5xl font-semibold text-center mb-16 ${instrument.className}`}>
          Infrastructure :: <span className="font-bold">Machinery</span>
        </h2>

        <div className="space-y-20">
  {machines.map((machine, index) => (
    <div
      key={machine.id}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      {/* Text Section */}
      <div
        className={`space-y-4 ${
          index % 2 === 1 ? "md:order-2" : "md:order-1"
        }`}
      >
        <h6 className={`text-xl md:text-4xl font-semibold leading-snug ${instrument.className}`}>
          {machine.title}
        </h6>
        <ul className={`text-[#31373DCC] text-xl space-y-2 list-disc list-inside font-normal ${instrument.className}`}>
          {machine.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>

        <RoundedActionButton text="Read More" textColor="text-black" borderColor="border-black"/>
      </div>

      {/* Image Section */}
      <div
        className={`${
          index % 2 === 1 ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="rounded-2xl overflow-hidden">
          <Image
            src={machine.image}
            alt={machine.title}
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  ))}
</div>


        <div className="flex justify-center mt-16">
        <RoundedActionButton text="View All" textColor="text-black" borderColor="border-black"/>
        </div>
      </div>
    </section>
  );
}
