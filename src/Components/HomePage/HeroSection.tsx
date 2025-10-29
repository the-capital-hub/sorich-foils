"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import bg from "@/public/bg0.png";
import first from "@/public/firstBuilding.png";
import Image from "next/image";
import { Instrument_Sans, Inter, Outfit } from "next/font/google";
import RoundedActionButton from "../Common/Button";

const instrument = Instrument_Sans({
	weight: ["700"],
	subsets: ["latin"],
	display: "swap",
});

const inter = Inter({
	weight: ["400"],
	subsets: ["latin"],
	display: "swap",
});

const outfit = Outfit({
	weight: ["400"],
	subsets: ["latin"],
	display: "swap",
});

const HeroSection = () => {
	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-cover bg-center">
			{/* Background image + overlay */}
			<div className="absolute inset-0 -z-10">
				<Image
				src={bg}
				alt="Background"
				fill
				priority
				quality={100}
				className="object-cover"
				/>
				<div className="absolute inset-0 bg-black/80"></div>
			</div>

			<div className="max-w-7xl mx-auto flex flex-col items-center space-y-6 text-white lg:mt-8">
				{/* Small text */}
				<p
					className={`text-xl md:text-sm tracking-widest uppercase text-[#FFFFFF] ${outfit.className}`}
				>
					100% Trusted Company
				</p>

				{/* Heading */}
				<h1
					className={`text-3xl md:text-5xl lg:text-8xl leading-tight ${instrument.className}`}
				>
					Building Trust Through <br /> Innovation
				</h1>

				{/* Description */}
				<p
					className={`text-xl md:text-base text-[#FFFFFF] max-w-2xl leading-relaxed ${inter.className} mb-12`}
				>
					Sorich Foils is a leading manufacturer and supplier of aluminium foils
					and laminates for pharmaceutical packaging. With a focus on safety,
					reliability, and performance, our products are designed to meet the
					stringent requirements of the healthcare industry.
				</p>

				{/* Button */}
				<RoundedActionButton url="/contact" />

			</div>
		</section>
	);
};

export default HeroSection;
