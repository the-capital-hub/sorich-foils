"use client";

import Image from "next/image";
import { Linkedin, Instagram, X } from "lucide-react";
import founderImg from "@/public/founder.png";
import { Instrument_Sans, Inter, Roboto } from "next/font/google";

const instrument = Instrument_Sans({
    weight: ["700"],
    subsets: ["latin"],
    display: "swap",
  });

  const inter = Inter({
    weight: ["700"],
    subsets: ["latin"],
    display: "swap",
  });

  const robot = Roboto({
    weight: ["800"],
    subsets: ["latin"],
    display: "swap",
  });

  const roboto = Roboto({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
  });

export default function LeadershipSection() {
  return (
    <section className="bg-[#fafafa] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-10 ${instrument.className}`}>
          Leadership
        </h2>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 bg-[rgba(248,248,248,1)]">
          {/* Founder Image Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden w-[22%] mx-auto md:mx-0 p-5">
            <div className="relative ">
              <Image
                src={founderImg}
                alt="Founder"
                className="w-full h-[80%] object-cover "
              />
              <div className="absolute bottom-0 w-full bg-black text-white text-center py-3">
                <h3 className="font-medium text-sm">Mr. Chandrahas B. Kotian</h3>
                <p className="text-xs mb-2 opacity-80">Our Founder</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="hover:text-lime-400 transition-colors">
                    <Instagram size={16} />
                  </a>
                  <a href="#" className="hover:text-lime-400 transition-colors">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="hover:text-lime-400 transition-colors">
                    <X size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          
          <div className=" space-y-6 md:flex-1">
            <div>
              <h3 className={`text-2xl font-semibold mb-2 ${inter.className}`}>Our Founder</h3>
              <p className={`text-xl leading-relaxed font-normal`}>
                <span className={`${roboto.className} text-[rgba(49,55,61,0.8)]`}>The Company is promoted by{" "}</span>
                <span className={`${robot.className}`}>Mr. Chandrahas Kotian</span><span className={`${roboto.className} text-[rgba(49,55,61,0.8)]`}>, a
                visionary leader with over{" "}</span>
                <span className={`${robot.className}`}>
                  three decades of expertise
                </span>{" "}
                in the{" "}
                <span className={`${robot.className}`}>pharmaceutical industry</span>.
                <span className={`${roboto.className} text-[rgba(49,55,61,0.8)]`}>
                Under his guidance, Sorich Foils has successfully navigated
                multiple phases of expansion and continues to achieve new
                milestones. His strategic insights and business acumen have been
                pivotal in shaping the Company’s growth trajectory.
                </span>
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Experienced Management Team
              </h3>
              <p className="text-xl leading-relaxed ">
                <span className={`${roboto.className} text-[rgba(49,55,61,0.8)]`}>Supporting him is a{" "}</span>
                <span className={`${robot.className}`}>
                  dedicated management team
                </span>{" "}
               <span  className={`${roboto.className} text-[rgba(49,55,61,0.8)]`}> with proven expertise in{" "}</span>
                <span className={`${robot.className}`}>
                  sales, marketing, strategy, and finance
                </span>
<span className={`${roboto.className} text-[rgba(49,55,61,0.8)]`}>
. Together, they drive our mission of delivering innovative,
                sustainable, and reliable packaging solutions that add value to
                our clients and adhere to evolving global standards.
</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
