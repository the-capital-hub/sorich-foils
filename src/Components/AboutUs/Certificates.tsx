"use client";

import Image from "next/image";
import certIcon from "@/public/Medal.png";
import { Instrument_Sans, Inter } from "next/font/google";
import RoundedActionButton from "../Common/Button";
import bg from "@/public/bg3.png";

const instrument = Instrument_Sans({
    weight: ["600"],
    subsets: ["latin"],
    display: "swap",
  });

  const inter = Inter({
    weight: ["500"],
    subsets: ["latin"],
    display: "swap",
  });

const certificates = [
  {
    id: 1,
    title: "1. ISO 9001:2015",
    subtitle: "Certifying Agency: BSCIC, Haryana, India",
    link: "#",
  },
  {
    id: 2,
    title: "2. ISO GMP 15378:2017",
    subtitle: "Certifying Agency: BSCIC, Haryana, India",
    link: "#",
  },
  {
    id: 3,
    title: "3. DMF (Drug Master File)",
    subtitle: "Issued by: FDA, USA",
    link: "#",
  },
 
];

const Certificates = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-white text-black py-20 px-6 relative overflow-hidden lg:mt-20">
      <Image
          src={bg}
          alt="Background"
          fill
          priority
          className="object-cover -z-10"
        /> 
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0  pointer-events-none" />

      {/* Title */}
      <h1 className={`text-6xl text-center relative z-10 mb-14 ${instrument.className}`}>
        Certificates
      </h1>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 lg:mt-8  max-w-7xl w-full justify-items-center relative z-10">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-3xl border-b-8 black pt-8 pb-2 w-[390px] text-center flex flex-col items-center justify-between hover:shadow-[6px_6px_0px_#00000030] transition-shadow"
          >
            {/* Icon */}
            <Image
              src={certIcon}
              alt="Certificate Icon"
              className="w-22 h-18 mb-4 mt-8"
            />

            {/* Title */}
            <h2 className={`${inter.className} text-3xl font-semibold mb-2`}>{cert.title}</h2>

            {/* Subtitle */}
            <p className={`text-xl text-[#000000] mb-6 ${inter.className}`}>{cert.subtitle}</p>

            {/* Button */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2  rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-100 transition"
            >
              <RoundedActionButton text="Open" />
            </a>
          </div>
        ))}
      </div>

      <div className="flex flex-row justify-items-center lg:mt-20">
      <div
           
            className="bg-white rounded-3xl border-b-8 black pt-8 pb-2 w-full text-center flex flex-col items-center justify-between hover:shadow-[6px_6px_0px_#00000030] transition-shadow"
          >
            {/* Icon */}
            <Image
              src={certIcon}
              alt="Certificate Icon"
              className="w-22 h-18 mb-4 mt-8"
            />

            {/* Title */}
            <h2 className={`${inter.className} text-3xl font-semibold mb-2`}>4.US 16 CFR 1700.20 and EN 14375 for CR Foil 
            </h2>

            {/* Subtitle */}
            <p className={`text-xl text-[#000000] mb-6 ${inter.className}`}>CertifyingAgency: IVM InstituteGmbH,Germany
            </p>

            {/* Button */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium hover:bg-gray-100 transition"
            >
              <RoundedActionButton text="Open" />
            </a>
          </div>

      </div>
    </section>
  );
};

export default Certificates;
