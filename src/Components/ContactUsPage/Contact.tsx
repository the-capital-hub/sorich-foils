"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { Manrope, Outfit, Inter } from "next/font/google";
import bg from "@/public/bg3.png";
import bg1 from "@/public/bg4.png";
import Image from "next/image";
import RoundedActionButton from "../Common/Button";

const manrope = Manrope({
	weight: ["400", "700"],
	subsets: ["latin"],
	display: "swap",
});

const inter = Inter({
	weight: ["400", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

const outfit = Outfit({
	weight: ["500"],
	subsets: ["latin"],
	display: "swap",
});

export default function ContactSection() {
	return (
		<section className="w-full bg-white text-black">
			<div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10 relative">
				<div className="flex flex-col md:flex-row justify-between items-start my-10">
					{/* Left Side: Headings */}
					<div>
						<h3
							className={`text-black mb-3 text-xl uppercase tracking-wide ${manrope.className} font-bold`}
						>
							Get Started
						</h3>
						<h2
							className={`text-3xl md:text-7xl font-bold leading-tight ${manrope.className}`}
						>
							Get in touch with us. <br />
							We&apos;re here to assist you.
						</h2>
					</div>

					{/* Right Side: Social Icons (Now Static) */}
					<div className="flex md:flex-col gap-3 mt-6 md:mt-8 justify-end max-w-5xl lg:mr-20">
						<Link
							href="#"
							className="w-9 h-9 flex items-center justify-center bg-white border rounded-full shadow hover:bg-gray-100 transition"
						>
							<Facebook className="text-black w-4 h-4" />
						</Link>
						<Link
							href="#"
							className="w-9 h-9 flex items-center justify-center bg-white border rounded-full shadow hover:bg-gray-100 transition"
						>
							<Instagram className="text-black w-4 h-4" />
						</Link>
						<Link
							href="#"
							className="w-9 h-9 flex items-center justify-center bg-white border rounded-full shadow hover:bg-gray-100 transition"
						>
							<Twitter className="text-black w-4 h-4" />
						</Link>
					</div>
				</div>

				{/* Contact Form */}
				<form className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="flex flex-col">
						<label
							className={`text-xl font-medium text-[#000000] mb-2 ${manrope.className}`}
						>
							Your Name
						</label>
						<input
							type="text"
							className="border-b border-gray-300 focus:border-black outline-none pb-2"
						/>
					</div>

					<div className="flex flex-col">
						<label
							className={`text-xl font-medium text-[#000000] mb-2 ${manrope.className}`}
						>
							Email Address
						</label>
						<input
							type="email"
							className="border-b border-gray-300 focus:border-black outline-none pb-2"
						/>
					</div>

					<div className="flex flex-col">
						<label
							className={`text-xl font-medium text-[#000000] mb-2 ${manrope.className}`}
						>
							Phone Number (optional)
						</label>
						<input
							type="text"
							className="border-b border-gray-300 focus:border-black outline-none pb-2"
						/>
					</div>

					<div className="md:col-span-3 flex flex-col">
						<label
							className={`text-xl font-medium text-[#000000] mb-2 ${manrope.className}`}
						>
							Message
						</label>
						<textarea
							rows={2}
							className="border-b border-gray-300 focus:border-black outline-none pb-2"
						></textarea>
					</div>

					<div className="md:col-span-3">
						<RoundedActionButton
							text="Leave a Message"
							textColor="text-black"
							borderColor="border-black"
						/>
					</div>
				</form>
			</div>

			{/* Footer Contact Info */}
			<div className="bg-gray-50 py-16 px-6 md:px-20">
				<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
					<div>
						<p
							className={`text-black mb-3 text-xl uppercase tracking-wide ${manrope.className} font-bold`}
						>
							Contact Info
						</p>
						<h2
							className={`text-5xl leading-snug ${inter.className} font-bold`}
						>
							We are always <br /> happy to assist you
						</h2>
					</div>

					<div className="lg:ml-16 mt-4">
						<p
							className={`text-xl text-[#000000] mb-2 ${inter.className} font-bold`}
						>
							Address
						</p>
						<p>-----</p>
						<p
							className={`text-[18px] text-[#000000] mb-2 ${inter.className} font-semibold mt-4`}
						>
							Sorich Foils Ltd
						</p>
						<p
							className={`text-[#000000] text-sm mt-1 font-normal leading-relaxed ${inter.className}`}
						>
							Survey No. 175, Village <br />
							Manda, Near A B Rolling
							<br /> Mills, Sarigam 396155,
							<br /> Gujarat, India
						</p>
					</div>

					<div className="mt-4">
						<p
							className={`text-xl text-[#000000] mb-2 ${inter.className} font-bold`}
						>
							Email Address
						</p>
						<ul
							className={`text-[16px] text-[#000000] mb-2 ${inter.className} font-semibold space-y-4`}
						>
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
