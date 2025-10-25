"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import img1 from "@/public/first.png"
import img2 from "@/public/second.png"
import img3 from "@/public/third.png"
import img4 from "@/public/fourth.png"
import img5 from "@/public/fifth.png"
import img6 from "@/public/sixth.png"
import img7 from "@/public/seventh.png"
import img8 from "@/public/eigth.png"
import { Outfit } from "next/font/google";
import user1 from "@/public/man.png"; 

const outfit = Outfit({
    weight : ["700","400"],
    subsets: ["latin"],
    display: "swap",
})


const products = [
  {
    title: "Strip Pack",
    img: img1,
    desc: "Strip packaging is widely used in the pharmaceutical, confectionery, engineering, and industrial sectors. Designed for high-speed precision, strip packaging machines can handle up to 2,400 units per minute. Products pass through a stainless steel feeding system into sealing roller cavities.",
  },
  {
    title: "Blister Pack",
    img: img2,
    desc: "Blister packs are pre-formed packaging widely used for pharmaceuticals, including tablets and capsules. They protect products from external factors such as humidity and contamination,, while opaque blisters also shield light-sensitive products from UV rays. In addition to protection.",
  },
  {
    title: "CR Foil",
    img: img3,
    desc: "CR (Child-Resistant) Foil is designed to minimize the risk of children accidentally ingesting hazardous substances. It is widely used for prescription drugs, over-the-counter medications, pesticides, and household chemicals, in compliance with regulatory requirements. "
  },
  {
    title: "Lid Aluminum Foil",
    img: img4,
    desc: "Thin and lightweight, these aluminum foil lids serve as temporary yet secure covers for disposable food containers. They help preserve freshness, prevent contamination, and maintain the temperature of the food for longer durations. These lids are ideal for packaging in the ..",
  },
  {
    title: "Confectionery Packaging",
    img: img5,
    desc: "Aluminum’s protective qualities and recyclability make it a preferred choice for confectionery packaging. Our aluminum foil offers durability, safety, and aesthetic appeal for chocolates, candies, and other confectionery products. It helps maintain the product’s taste, aroma, and texture while..",
  },
  {
    title: "Extrusion Laminates",
    img: img6,
    desc: "Extrusion coating involves applying a molten layer of synthetic resin, typically polyethylene, onto a substrate such as paper, paperboard, aluminum foil, non-wovens, or plastic films. This process enhances the barrier properties, strength, and durability of the material, making it resistant to moisture..",
  },
  {
    title: "Preformed Pouches",
    img: img8,
    desc: "Strip packaging has come to stay in Pharmaceutical, Confectionery, Engineering and Industrial product sectors. Strip Packaging machines are designed to handle a wide range of products with utmost precision and speed up-to 2400 units per minute. ",
  },
  {
    title: "Holographic Products",
    img: img7,
    desc: "Holographic hot stamping foils are used for the authentication of valuable documents such as certificates, mark sheets, and share certificates. Fusion Mark foils can be applied to a variety of surfaces including paper, plastics, and leather. These foils not only enhance security by preventing counterfeiting but..",
  },
  {
    title: "Paper Bands For Currency",
    img: img8,
    desc: "Designed to bundle and secure currency notes, ensuring organized handling and easy identification.",
  },
];

const OurProducts = () => {
  return (
    <section className="w-full px-6 md:px-12 py-16 bg-white">
      {/* Header */}
      <div className="mb-8">
        <h2 className={`text-3xl md:text-5xl font-bold mb-3 text-[#000000] ${outfit.className}`}>
          Our Products
        </h2>
        <p className={`text-[#000000] text-base md:text-xl lg:mt-8 ${outfit.className}`}>
          Millions Of Customers Are Using Join Now!
        </p>

        {/* Avatars */}
        <div className="flex mt-10 space-x-[10px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <Image
              key={i}
              src={user1}
              alt={`user-${i}`}
              
              className="rounded-full w-16 h-16 border-2 border-white shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-16">
        {products.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden p-4 border-b-6 black"
          >
            <div className="relative w-full h-52">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
            <div className="p-6 flex flex-col justify-between h-[260px]">
              <div>
                <h3 className={`text-lg md:text-3xl font-bold mb-3 text-gray-900 ${outfit.className}`}>
                  {p.title}
                </h3>
                <p className={`text-sm text-[#37393C] leading-relaxed ${outfit.className} font-normal`}>
                  {p.desc}
                </p>
              </div>
              <button className={`mt-4 inline-flex items-center  text-sm font-medium text-[#000000] hover:text-black transition ${outfit.className}`}>
                <span className="px-4 py-2 bg-gray-100 hover:bg-green-100 rounded-full flex items-center space-x-2">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 text-green-600" />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <button className="flex items-center px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-full transition">
          <span>View All</span>
          <ArrowRight className="w-5 h-5 ml-2 text-white" />
        </button>
      </div>
    </section>
  );
};

export default OurProducts;
