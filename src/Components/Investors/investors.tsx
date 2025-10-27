"use client";
import Image from "next/image";
import Link from "next/link";
import investors from "@/public/bg2.png";
import { Inter, Manrope } from "next/font/google";
import RoundedActionButton from "../Common/Button";
import { Facebook, Instagram, Twitter } from "lucide-react";

const inter = Inter({
	weight: ["700", "400"],
	subsets: ["latin"],
	display: "swap",
});

const manrope = Manrope({
	weight: ["700", "400"],
	subsets: ["latin"],
	display: "swap",
});

const Investors = () => {
	return (
		<section className="min-h-screen bg-white text-gray-900 p-10 pt-20">
			{/* Hero Section */}
			<div className="flex relative md:w-[95%] h-auto md:h-[720px] rounded-3xl overflow-hidden mb-16 justify-items-center lg:ml-6">
				<Image
					src={investors}
					alt="Investors"
					className="object-cover w-full h-full"
					priority
				/>
				<div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
					<h1
						className={`text-4xl md:text-6xl font-bold text-white mb-3 ${inter.className}`}
					>
						Investors
					</h1>
					<p
						className={`text-white/90 max-w-4xl text-base md:text-xl ${inter.className} font-semibold`}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
			</div>

			{/* Form Section */}
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col md:flex-row justify-between items-start mb-12">
					{/* Left Side: Headings */}
					<div className="max-w-5xl">
						<h3
							className={`text-[#000000] mb-3 text-xl uppercase tracking-wide ${manrope.className} font-bold`}
						>
							Get Started
						</h3>
						<h2
							className={`text-3xl md:text-7xl font-bold leading-tight ${manrope.className}`}
						>
							Information Available on Request
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

				{/* Form Section */}
				<form className="space-y-10">
					{/* Form Row 1 */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="flex flex-col">
							<label
								className={`text-xl text-[#000000] mb-1 ${manrope.className} font-semibold`}
							>
								Your Name
							</label>
							<input
								type="text"
								placeholder=""
								className="border-b border-gray-300 focus:border-gray-800 outline-none py-2"
							/>
						</div>
						<div className="flex flex-col">
							<label
								className={`text-xl font-semibold text-[#000000] mb-1 ${manrope.className}`}
							>
								Email Address
							</label>
							<input
								type="email"
								placeholder=""
								className="border-b border-gray-300 focus:border-gray-800 outline-none py-2"
							/>
						</div>
						<div className="flex flex-col">
							<label
								className={`text-xl font-semibold text-[#000000] mb-1 ${manrope.className}`}
							>
								Phone Number (optional)
							</label>
							<input
								type="tel"
								placeholder=""
								className="border-b border-gray-300 focus:border-gray-800 outline-none py-2"
							/>
						</div>
					</div>

					{/* Row 2 */}
					<div>
						<label
							className={`text-xl font-semibold text-[#000000] mb-1 block ${manrope.className}`}
						>
							Purpose of Request
						</label>
						<textarea
							rows={2}
							className="w-full border-b border-gray-300 focus:border-gray-800 outline-none py-2 resize-none"
						></textarea>
					</div>

					{/* Row 3 */}
					<div>
						<label
							className={`text-xl font-semibold text-[#000000] mb-1 block ${manrope.className}`}
						>
							Specific Information Required
						</label>
						<textarea
							rows={2}
							className="w-full border-b border-gray-300 focus:border-gray-800 outline-none py-2 resize-none"
						></textarea>
					</div>

					{/* Submit Button */}
					<div className="w-full flex justify-center md:justify-start">
						<RoundedActionButton
							text="Send Request"
							textColor="text-black"
							borderColor="border-black"
						/>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Investors;
