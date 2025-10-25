"use client";

import { FC } from "react";
import { Cpu, Gem, Lightbulb, ShieldCheck, FileCheck2 } from "lucide-react";

import { Instrument_Sans, Outfit } from "next/font/google";

const instrument = Instrument_Sans({
    weight: ["700"],
    subsets: ["latin"],
    display: "swap",
  });

  const outfit = Outfit({
    weight: ["500", "400"],
    subsets: ["latin"],
    display: "swap",
  });

const WhySorichFoils: FC = () => {
  const features = [
    {
      icon: <Cpu className="w-19 h-19 text-[#9DC834] mb-4" />,
      title: "Cutting-Edge Technology",
      desc: "We use advanced machinery and modern production techniques to deliver packaging that is precise, efficient, and of world-class quality.",
    },
    {
      icon: <Gem className="w-19 h-19 text-[#9DC834] mb-4" />,
      title: "Quality at the Core",
      desc: "Every product undergoes rigorous in-house quality checks and adheres to international safety standards, delivering reliable and high-performance packaging.",
    },
    {
      icon: <Lightbulb className="w-19 h-19 text-[#9DC834] mb-4" />,
      title: "Innovation That Leads",
      desc: "Continuous R&D and innovation allow us to develop superior, functional, and sustainable packaging solutions that meet evolving industry needs.",
    },
    {
      icon: <ShieldCheck className="w-19 h-19 text-[#9DC834] mb-4" />,
      title: "Trusted by Industry Leaders",
      desc: "Sorich Foils is the preferred partner for leading pharmaceutical companies across India and abroad, known for dependable solutions and timely delivery.",
    },
    {
      icon: <FileCheck2 className="w-19 h-19 text-[#9DC834] mb-4" />,
      title: "Pioneering Breakthroughs",
      desc: "Holder of a patent for a revolutionary packaging solution, replacing the 100-year-old Heat Sealing Lacquer (HSL) technology, setting a new benchmark in pharmaceutical packaging globally.",
    },
  ];

  return (
    <section className="py-16 bg-[#FEFFFA] text-center">
      <h2 className={`text-3xl lg:text-5xl  text-[rgba(17, 24, 39, 1)] mb-10 ${instrument.className}`}>
        Why Sorich Foils?
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
  {features.map((feature, index) => (
    <div
      key={index}
      className="bg-white shadow-md rounded-2xl p-6 w-[80%] max-w-sm flex flex-col items-center text-center hover:shadow-lg justify-center transition-shadow duration-300 border-b-4 border-black"
    >
      {feature.icon}
      <h3 className={`text-3xl mb-2 font-medium ${outfit.className}`}>{feature.title}</h3>
      <p className={`text-gray-600 text-sm font-normal ${outfit.className}`}>{feature.desc}</p>
    </div>
  ))}
</div>

    </section>
  );
};

export default WhySorichFoils;
