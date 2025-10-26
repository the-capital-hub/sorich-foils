"use client";

import Image from "next/image";
import { Instrument_Sans, Inter, Fustat } from "next/font/google";
import RoundedActionButton from "../Common/Button";
import bg from "@/public/bg3.png"
import building from "@/public/about.png"; 
import founder from "@/public/founder.png";
import company from "@/public/group2.png";

const instrument = Instrument_Sans({
  weight: ["600", "400"],
  subsets: ["latin"],
  display: "swap",
});

const fustat = Fustat({
    weight: ["600"],
    subsets: ["latin"],
    display: "swap",
  });

const inter = Inter({
    weight: ["700", "400"],
    subsets: ["latin"],
    display: "swap",
  });

const AboutUs = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-white text-black pt-28">
       <Image
          src={bg}
          alt="Background"
          fill
          priority
          className="object-cover -z-10"
        /> 
      {/* ---------- Top Section ---------- */}
      <div className="relative w-full max-w-7xl mt-10">
        <div className="overflow-hidden rounded-[30px]">
          <Image
            src={building}
            alt="About Us Building"
            className="w-full h-[700px] object-cover"
          />
        </div>

        <div className="absolute top-[45%] left-[23%] transform -translate-x-1/2 translate-y-[120px] text-center px-4">
          <h1
            className={`text-3xl md:text-9xl font-semibold ${instrument.className} tracking-tight`}
          >
            ABOUT US
          </h1>
          <p
            className={`text-[#31373D] mt-4 max-w-2xl mx-auto ${instrument.className} text-2xl`}
          >
            At Sorich Foils Limited, we believe we are not just a company — we
            are part of you, contributing to healthier lives and a better
            tomorrow.
          </p>
        </div>
      </div>

      {/* ---------- Founder Section ---------- */}
      <div className="w-full flex justify-center mt-44 px-6 ">
        <div className="max-w-7xl w-full bg-white rounded-[20px] shadow-sm border-b-10 border-l-10 black p-16 lg:p-12 flex flex-col lg:flex-row gap-10">
          {/* Founder Photo */}
          <div className="flex flex-col items-center bg-[#F8F8F8] rounded-2xl overflow-hidden p-4">
            <Image
              src={founder}
              alt="Founder"
              className="w-[340px] h-[440px] object-cover"
            />
            <div className="bg-black text-white w-full text-center py-3">
              <h5 className={`text-xl ${fustat.className}`}>Mr. Chandrahas B. Kotian</h5>
              <p className={`text-sm opacity-80 mt-16 text-[#E6FAF5] ${fustat.className}`}>Our Founder</p>
              <div className="flex justify-center gap-4 mt-2">
                <a href="#" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin text-white text-lg"></i>
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fa-brands fa-instagram text-white text-lg"></i>
                </a>
                <a href="#" aria-label="X">
                  <i className="fa-brands fa-x-twitter text-white text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Founder Text */}
          <div className="flex-1">
            <h2 className={`text-5xl font-bold mb-4 text-[#1A1A1A] ${inter.className}`}>Our Founder</h2>
            <p className={`text-[#31373D] text-xl leading-relaxed mb-4 ${instrument.className} font-normal`}>
              Mr. Chandrahas B. Kotian, aged 53, is a visionary Printing
              Technocrat with over three decades of experience in the
              pharmaceutical industry. Specializing in high-quality pharma
              flexible packaging, strategic decision-making, innovation,
              strategic growth, and advanced machinery, he combines deep
              technical expertise with strong commercial acumen.
            </p>
            <p className={`text-[#31373D] text-xl leading-relaxed mb-4 ${instrument.className} font-normal`}>
              Having built extensive relationships with pharmaceutical
              manufacturing plants and corporate offices across India, Mr.
              Kotian leveraged his experience to become a successful entrepreneur
              within just seven years. In 2011, he founded Sorich Foils Private
              Limited at Sarigam, Gujarat, starting with just 4–5 clients. Today,
              under his inspiring leadership, the company serves over 150
              clients, setting benchmarks in quality, innovation, and customer
              satisfaction.
            </p>
            <p className={`text-[#31373D] text-xl leading-relaxed mb-4 ${instrument.className} font-normal`}>
              Mr. Kotian is also a proud innovator, holding two patents in the
              field of pharmaceutical packaging, reflecting his commitment to
              advancing technology and delivering unique solutions. His
              relentless focus on excellence, coupled with mastery over high-end
              machinery and strategic growth initiatives, continues to drive
              Sorich Foils forward as a trusted leader in pharmaceutical
              packaging solutions.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- Company Section ---------- */}
      <div className="w-full flex justify-center mt-20 px-6 lg:mb-20">
        <div className="max-w-7xl w-full bg-[#F0F0F0] rounded-[20px] p-8 lg:p-12 items-center gap-10 shadow-sm border border-gray-200">
          {/* Company Text */}
          
          <h2 className={`text-5xl font-bold mb-2 ${instrument.className} text-center`}>Our Company</h2>
          
         <div className="flex flex-col lg:flex-row mt-20">
         <div className="flex-1">
            
            <h3 className={`text-5xl font-semibold mb-4 ${instrument.className}`}>We are a part of you.</h3>
            <p className={`text-[#31373DCC] leading-relaxed mb-6 max-w-xl text-xl ${instrument.className} font-normal`}>
              Our Company was incorporated as "Sorich Foils Private Limited" on
              January 19, 2011 under the Companies Act, 1956, with the Registrar
              of Companies, Ahmedabad, Gujarat. Pursuant to a special resolution
              of our shareholders dated January 31, 2018, our Company was
              converted into a public limited company and a fresh certificate of
              incorporation was issued by the Registrar of Companies, Ahmedabad,
              Gujarat, on February 7, 2018. The Corporate Identification Number
              of our Company is U27203GJ2011PLC063709.
            </p>

            <div>
            <RoundedActionButton text="Read More" textColor="text-black" borderColor="border-black"/>
            </div>
          </div>

          {/* Company Image */}
          <div className="overflow-hidden rounded-2xl lg:-mr-4 ">
            <Image
              src={company}
              alt="Sorich Foils Pvt. Ltd."
              className="w-[650px] h-[450px] object-cover"
            />
          </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
