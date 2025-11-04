"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import RoundedActionButton from "../Common/Button";
import { Instrument_Sans } from "next/font/google";


import hslImg from "@/public/Machine-Images/Hsl-1000mm.jpg";
// import rotogravureImg from "@/public/inst2.png";
import onetwofourImg from "@/public/Machine-Images/onetwofour.jpg";
import slittingImg from "@/public/Machine-Images/hs-slitting.jpg";
import docotringImg from "@/public/Machine-Images/doctoringInspection.jpg";
import ArcImg from "@/public/Machine-Images/Arc&web10.jpg";
import sixcolorImg from "@/public/Machine-Images/colorfrontback.jpg";
import bg from "@/public/bg3.png";

import { MapPin, Building2,  HardHat, Wallpaper, Expand, LandPlot } from "lucide-react";

const instrument = Instrument_Sans({
  weight: ["600", "400"],
  subsets: ["latin"],
  display: "swap",
});

export default function MachinerySection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const machines = [
    {
      id: 1,
      title:
        "The Heat Seal Lacquer (HSL) coating line with Wet & Dry Lamination Facilities",
      image: hslImg,
      points: [
        "Maximum speed up to 120 mtr/minutes.",
        "Processing capacity – 3,000 tonnes per year.",
        "German make 7 drive system.",
        "Maximum web width up to 1000 mm.",
        "Variable HSL coating speed to control coating GSM.",
        "Designed to operate up to 9 micron soft foil.",
        "Chilling roll after shellac wash.",
        "HSL drying length 54 feet.",
        "Shellac drying length 22 feet.",
        "Wet & Dry Lamination Facility.",
      ],
    },
    {
      id: 2,
      title:
        "The Heat Seal Lacquer (HSL) coating line with Wet & Dry Lamination Facilities",
      image: hslImg,
      points: [
        "Maximum speed up to 120 mtr/minutes.",
        "German make 7 drive system.",
        "Maximum web width up to 1300 mm.",
        "Variable HSL coating speed to control coating GSM.",
        "Designed to operate up to 9 micron soft foil.",
        "Chilling roll after shellac wash.",
        "HSL drying length 54 feet.",
        "Shellac drying length 22 feet.",
        "Processing capacity 3,000 tonnes per year.",
        "Wet & Dry Lamination Facility.",
      ],
    },
    {
      id: 3,
      title:
        "Ten Colour Rotogravure Printing Machines and Web Video with Auto Registration Controller",
      image: ArcImg,
      points: [
        "Maximum speed up to 200 meters per minute.",
        "Maximum web width up to 1000 mm.",
        "Maximum diameter 900 mm.",
        "Designed to print on paper, film, laminates & aluminium foil.",
        "Auto registration controller.",
        "In-built web video.",
      ],
    },
    {
      id: 4,
      title:
        "One two + four colour combination printing machine for pharmaceutical primary packaging printing",
      image: onetwofourImg,
      points: [
        "Maximum speed up to 120 mtr/minutes.",
        "Maximum web width up to 500 mm.",
        "Designed to print on Aluminium Foil, 4 ply laminates, Paper & Paper poly.",
        "Both side printing facility (2+4).",
      ],
    },
    {
      id: 5,
      title: "Six colour printing machine with front & back printing facility",
      image: sixcolorImg,
      points: [
        "Maximum speed up to 80 mtr/minutes.",
        "Maximum web width up to 800 mm.",
        "Designed to print on Aluminium Foil, 4 ply laminates, Paper & Paper poly.",
        "Both side printing facility (2+4).",
        "German make control systems.",
      ],
    },
    {
      id: 6,
      title: "High Speed Slitting machine (3 Nos)",
      image: slittingImg,
      points: [
        "Maximum speed up to 250 mtr/minutes.",
        "Maximum web width up to 1000 mm.",
        "Auto Tension Controller.",
        "Processing Capacity 3,500 tonnes per month.",
      ],
    },
    {
      id: 7,
      title: "Doctoring / Inspection Machine",
      image: docotringImg,
      points: [
        "Maximum speed up to 100 mtr/minutes.",
        "Maximum web width up to 500 mm.",
        "Auto Tension Controller.",
      ],
    },
  ];

  const toggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  const visibleMachines = showAll ? machines : machines.slice(0, 3);

  return (
    <section className="relative pt-20 pb-10 bg-white text-black overflow-hidden">
      <Image src={bg} alt="Background" fill priority className="object-cover -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ---------- LAND SECTION ---------- */}
         {/* ---------- LAND SECTION ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border-b-4 border-lime-400 rounded-3xl p-8 md:p-12 mb-7 mt-12 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="bg-white border-b-4 border-lime-400 rounded-full p-6 shadow-md">
                <MapPin size={48} className="text-lime-400" />
              </div>
            </div>
            <div className="flex-grow">
              <h2 className={`text-3xl md:text-4xl font-bold text-neutral-900 mb-3 ${instrument.className}`}>
                Land Infrastructure
              </h2>
              <p className={`text-neutral-800 text-lg leading-relaxed font-semibold ${instrument.className}`}>
                Spread across about <span className="font-bold">2 acres</span>, providing ample space for current
                operations as well as future expansion requirements.
              </p>
              <div className="mt-6 flex gap-4 flex-wrap">
                <div className="bg-white border border-lime-400 bg-opacity-30 rounded-full px-4 py-2">
                  <p className="text-neutral-600 font-semibold text-sm flex items-center gap-2">
                    <LandPlot className="text-lime-400"/>
                   2 Acres</p>
                </div>
               <div className="bg-white border border-lime-400 bg-opacity-30 rounded-full px-4 py-2">
                  <p className="text-neutral-600 font-semibold text-sm flex items-center gap-2">
                    <Expand className="text-lime-400"/>
                    Expansion Ready.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ---------- BUILDING SECTION ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border-b-4 border-lime-400 rounded-3xl p-8 md:p-12 mb-16  shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 md:order-2">
              <div className="bg-white border-b-4 border-lime-400 rounded-full p-6 shadow-md">
                <Building2 size={48} className="text-lime-400" />
              </div>
            </div>
            <div className="flex-grow md:order-1">
              <h2 className={`text-3xl md:text-4xl font-bold text-neutral-900 mb-3 ${instrument.className}`}>
                Building Infrastructure
              </h2>
              <p className={`text-neutral-700 text-lg leading-relaxed font-semibold ${instrument.className}`}>
                Approximately <span className="font-bold">40,000 sq. ft.</span> of well-planned construction, designed
                to accommodate production units, storage, utilities, and administrative facilities in a safe and
                efficient manner.
              </p>
              <div className="mt-6 flex gap-4 flex-wrap">
                <div className="bg-white border border-lime-400 bg-opacity-30 rounded-full px-4 py-2">
                  <p className="text-neutral-600 font-semibold text-sm flex items-center gap-2">
                    <Expand className="text-lime-400"/>
                    40,000 sq. ft.</p>
                </div>
                <div className="bg-white border border-lime-400  bg-opacity-30 rounded-full px-4 py-2">
                  <p className="text-neutral-600 font-semibold flex items-center gap-2 text-sm">
                    <Wallpaper className="text-lime-400"/>
                    Modern Design</p>
                </div>
                <div className="bg-white border border-lime-400  bg-opacity-30 rounded-full px-4 py-2">
                  <p className="text-black font-semibold text-sm flex items-center gap-2">
                    <HardHat className="text-lime-400"/>
                    Safe & Efficient</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ---------- MACHINERY SECTION ---------- */}
        <div className="text-center mt-20 mb-10">
          <div className="flex justify-center items-center gap-2 mb-4">
            <h2
              className={`text-2xl md:text-3xl lg:text-5xl font-semibold ${instrument.className}`}
            >
              Infrastructure :: <span className="font-bold">Machinery</span>
            </h2>
          </div>
        </div>

        {/* ---------- MACHINERY CARDS ---------- */}
        <AnimatePresence>
          {visibleMachines.map((machine, index) => {
            const isExpanded = expanded === machine.id;
            const visiblePoints = isExpanded
              ? machine.points
              : machine.points.slice(0, 3);

            return (
              <motion.div
                key={machine.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-8 items-center my-10"
              >
                {/* Text Section */}
                <div
                  className={`space-y-4 ${
                    index % 2 === 1 ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <h6
                    className={`text-xl md:text-4xl font-semibold leading-snug ${instrument.className}`}
                  >
                    {machine.title}
                  </h6>

                  <motion.div layout transition={{ duration: 0.4 }}>
                    <motion.ul
                      layout
                      className={`text-[#31373DCC] text-xl space-y-2 list-disc list-inside font-normal ${instrument.className}`}
                    >
                      {visiblePoints.map((p, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {p}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {machine.points.length > 3 && (
                    <div onClick={() => toggleExpand(machine.id)}>
                      <RoundedActionButton
                        text={isExpanded ? "Show Less" : "Read More"}
                        textColor="text-black"
                        borderColor="border-black"
                      />
                    </div>
                  )}
                </div>

                {/* Image Section */}
                <div
                  className={`${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
                >
                  <div className="rounded-2xl overflow-hidden">
                    <Image
                      src={machine.image}
                      alt={machine.title}
                      className="rounded-2xl object-cover w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* View All / Show Less Button */}
        <div
          className="flex justify-center mt-10"
          onClick={() => setShowAll(!showAll)}
        >
          <RoundedActionButton
            text={showAll ? "Show Less" : "View All"}
            textColor="text-black"
            borderColor="border-black"
          />
        </div>
      </div>
    </section>
  );
}
