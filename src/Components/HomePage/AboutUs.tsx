"use client";
import Image from "next/image";
import React from "react";
import productImg from "@/public/machinne.png";
import roundImage from "@/public/roundImage.png";
import growthImg from "@/public/inclined.png";
import { Instrument_Sans, Inter, Outfit } from "next/font/google";
import greenCircle from "@/public/Right Button.png";
import first from "@/public/firstBuilding.png";
import first1 from "@/public/firstb.png";

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

export default function AboutSection() {
	return (
		<section className="w-full bg-white text-gray-800 flex flex-col items-center px-6 md:px-10 lg:px-20 py-16">
			{/* Heading */}
			<div className="max-w-6xl text-center mb-6 md:mb-12">
				<h2
					className={`text-3xl md:text-5xl text-[#111827] mb-3 ${instrument.className}`}
				>
					About Sorich Foils Limited
				</h2>
				<h3
					className={`text-2xl md:text-4xl ${instrument.className} text-[#111827] mb-6 md:mt-8`}
				>
					We are a part of you.
				</h3>
				<p className={`text-sm md:text-xl text-[#6B7280] ${outfit.className}`}>
					Sorich Foils Limited was originally incorporated as Sorich Foils
					Private Limited on January 19, 2011, under the Companies Act, 1956,
					with the Registrar of Companies, Ahmedabad, Gujarat. Following a
					special resolution passed by our shareholders on January 31, 2018, the
					Company was converted into a public limited company, and a fresh
					certificate of incorporation reflecting this conversion was issued on
					February 7, 2018. Our Corporate Identification Number (CIN) is
					U27203GJ2011PLC063709.
				</p>
			</div>

			{/* What We Do Section */}
			<div className="max-w-6xl w-full md:mb-16 md:mt-20">
				<div className="flex flex-col md:flex-row items-center md:items-start justify-between md:gap-6 max-w-6xl mx-auto">
					{/* Left side - Heading */}
					<div className="w-full md:w-1/2">
						<h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center md:text-left mb-4">
							What We Do
						</h3>
					</div>

					{/* Right side - Paragraph */}
					<div className="w-full md:w-[40%]">
						<p className="text-sm md:text-base text-center md:text-left text-gray-600 leading-relaxed">
							Sorich Foils is a leading manufacturer and supplier of aluminium
							foils and laminates for pharmaceutical packaging. With a focus on
							safety, reliability, and performance, our products are designed to
							meet the stringent requirements of the healthcare industry.
						</p>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10 md:mt-0">
				{/* Left Image + Caption */}
				<div className="grid grid-col gap-4 relative lg:ml-12">
					{/* Image Container */}
					<div className="relative rounded-2xl overflow-hidden md:w-115 md:h-156">
						<Image
							src={productImg}
							alt="Superior Product Features"
							className="w-full h-full object-cover"
						/>

						<h4
							className={`absolute -top-2 left-2 text-black text-xl md:text-2xl z-10 max-w-[185px] ${outfit.className}`}
						>
							Superior Product Features
						</h4>
						<div className="absolute top-5 md:top-0 right-5 md:left-47 text-black text-2xl z-10 w-12 h-12">
							<Image
								src={greenCircle}
								alt="Superior Product Features"
								className="rounded-full object-cover"
							/>
						</div>
					</div>
				</div>

				<div className="flex flex-col space-y-4 lg:-mt-8">
					<div className="flex flex-col md:flex-row items-center md:p-4 rounded-2xl md:gap-6">
						<div className="w-full md:w-1/3 flex justify-center">
							<div className="w-60 h-60 relative bg-[#D9D9D9] rounded-full flex items-center justify-center">
								<div className="w-52 h-52 relative bg-[#D9D9D9] rounded-full overflow-hidden flex items-center justify-center">
									<Image
										src={roundImage}
										alt="Superior Product Features"
										fill={true}
										className="object-cover w-[90%] h-[90%]"
									/>
								</div>
							</div>
						</div>

						<div className="w-full md:w-2/3">
							<div className="bg-white rounded-2xl shadow-md border-b-4 p-5 md:p-10">
								<h5
									className={`font-semibold mb-2 text-2xl md:text-3xl text-center md:text-left ${outfit.className}`}
								>
									Superior Product Features
								</h5>
								<p
									className={`text-base text-center md:text-left text-gray-600 ${outfit.className}`}
								>
									Our products are highly valued for their excellent barrier
									properties, including moisture and chemical resistance, water
									vapor protection, and durability. They serve a wide range of
									industries ..
								</p>
							</div>
						</div>
					</div>

					<div className="flex gap-4 items-center max-w-3xl lg:ml-10">
						<div className="w-3/5 relative rounded-2xl overflow-hidden shadow-md h-39">
							<Image
								src={first}
								alt="First Image"
								fill={true}
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 40vw"
							/>
						</div>

						<div className="w-2/5 relative rounded-2xl overflow-hidden shadow-md h-39">
							<Image
								src={first1}
								alt="Second Image"
								fill={true}
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 60vw"
							/>
						</div>
					</div>

					<div className="flex-1 bg-white rounded-2xl  border-b-8 black h-48 pt-8 pb-8 justify-items-center max-w-3xl md:ml-8">
						<h5
							className={`font-semibold mb-2  ${outfit.className} text-center text-3xl`}
						>
							State-of-the-Art Manufacturing Facility
						</h5>
						<p
							className={`flex text-sm text-[#37393C] ${outfit.className} max-w-xl text-center`}
						>
							Our modern manufacturing facility is strategically located
							at:Survey No. 175, Village Manda, Near A.B. Rolling Mills, Sarigam
							– 396155, Gujarat, India.This location allows us to efficiently
							manage production, logistics, and quality control while remaining
							close to key industrial hubs.
						</p>
					</div>
				</div>
			</div>

			{/* Our Growth Section */}
			<div className="max-w-7xl w-full flex flex-col md:flex-row items-center mt-16">
				{/* Text */}
				<div className="flex-3">
					<h3 className={`text-2xl md:text-5xl mb-4 ${instrument.className}`}>
						Our Growth and Certification
					</h3>
					<p
						className={`text-xl md:text-base text-center md:text-left text-[#31373DCC] leading-relaxed md:w-[90%] ${inter.className}`}
					>
						Since our inception in 2011, we have evolved into an ISO 9001:2015
						certified organization, dedicated to manufacturing and supplying a
						comprehensive range of premium packaging materials. We source
						high-quality raw materials from trusted vendors and utilize
						state-of-the-art machinery and advanced production technologies to
						ensure our products meet international quality standards. Every
						stage of production is carefully monitored by our in-house quality
						assurance team, guaranteeing uncompromised precision, consistency,
						and reliability.
					</p>
				</div>

				{/* Image */}
				<div className="flex-2">
					<div className="bg-gray-50 rounded-2xl shadow-md flex justify-center w-full h-[350px] border-b-8 black ">
						<Image src={growthImg} alt="Growth Chart" className="rounded-2xl" />
					</div>
				</div>
			</div>
		</section>
	);
}
