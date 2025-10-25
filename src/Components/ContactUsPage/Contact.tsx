"use client";

import { ArrowUpRight, Facebook, Instagram, Twitter, Weight } from "lucide-react";
import { Manrope,Outfit, Inter } from "next/font/google";

const manrope = Manrope({
    weight : ["400","700"],
    subsets: ["latin"],
    display: "swap",
})

const inter = Inter({
    weight : ["400","600","700"],
    subsets: ["latin"],
    display: "swap",
})

const outfit = Outfit({
    weight : ["500"],
    subsets: ["latin"],
    display: "swap",
})


export default function ContactSection() {
  return (
    <section className="w-full bg-white text-black">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative">
        {/* Social Icons */}
        <div className="absolute right-6 top-20 flex flex-col space-y-4">
          <a href="#" className="p-2 border rounded-full hover:bg-gray-100 transition">
            <Facebook size={18} />
          </a>
          <a href="#" className="p-2 border rounded-full hover:bg-gray-100 transition">
            <Instagram size={18} />
          </a>
          <a href="#" className="p-2 border rounded-full hover:bg-gray-100 transition">
            <Twitter size={18} />
          </a>
        </div>

        <div>
          <p className={`text-xl font-medium text-[#000000] mb-2 ${manrope.className}`}>Get Started</p>
          <h1 className={`text-4xl md:text-7xl font-bold leading-tight ${manrope.className}`}>
            Get in touch with us. <br />
            We're here to assist you.
          </h1>
        </div>

        {/* Contact Form */}
        <form className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col">
            <label className={`text-xl font-medium text-[#000000] mb-2 ${manrope.className}`}>Your Name</label>
            <input
              type="text"
              className="border-b border-gray-300 focus:border-black outline-none pb-2"
            />
          </div>

          <div className="flex flex-col">
            <label className={`text-xl font-medium text-[#000000] mb-2 ${manrope.className}`}>Email Address</label>
            <input
              type="email"
              className="border-b border-gray-300 focus:border-black outline-none pb-2"
            />
          </div>

          <div className="flex flex-col">
            <label className={`text-xl font-medium text-[#000000] mb-2 ${manrope.className}`}>
              Phone Number (optional)
            </label>
            <input
              type="text"
              className="border-b border-gray-300 focus:border-black outline-none pb-2"
            />
          </div>

          <div className="md:col-span-3 flex flex-col">
            <label className={`text-xl font-medium text-[#000000] mb-2 ${manrope.className}`}>Message</label>
            <textarea
              rows={4}
              className="border-b border-gray-300 focus:border-black outline-none pb-2"
            ></textarea>
          </div>

          <div className="md:col-span-3 mt-4">
            <button
              type="submit"
              className={`flex items-center gap-2 border border-black px-6 py-3 rounded-full font-medium hover:bg-[rgba(157,200,52,1)] hover:border-transparent transition ${outfit.className}`}
            >
              Leave a Message
              <ArrowUpRight size={18} />
            </button>
          </div>
        </form>
      </div>

      {/* Footer Contact Info */}
      <div className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <p className={`text-xl text-[#000000] font-normal mb-2 ${inter.className}`}>Contact Info</p>
            <h2 className={`text-5xl leading-snug ${inter.className} font-bold`}>
              We are always <br /> happy to assist you
            </h2>
          </div>

          <div className="lg:ml-16 mt-4">
            <p className={`text-xl text-[#000000] mb-2 ${inter.className} font-bold`}>Address</p>
            <p>-----</p>
            <p className={`text-[18px] text-[#000000] mb-2 ${inter.className} font-semibold mt-4`}>Sorich Foils Ltd</p>
            <p className={`text-[#000000] text-sm mt-1 font-normal leading-relaxed ${inter.className}`}>
              Survey No. 175, Village <br/>Manda, Near A B Rolling<br/> Mills, Sarigam 396155,<br/> Gujarat, India
            </p>
          </div>

          <div className="mt-4">
            <p className={`text-xl text-[#000000] mb-2 ${inter.className} font-bold`}>Email Address</p>
            <ul className={`text-[16px] text-[#000000] mb-2 ${inter.className} font-semibold space-y-4`}>
            <p>-----</p>
              <li>Vikhil.kotian@sorichfoils.in</li>
              <li>ceo@sorichfoils.in</li>
              <li>manohar@sorichfoils.in</li>
              <li>sradhhasorichfoils@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
