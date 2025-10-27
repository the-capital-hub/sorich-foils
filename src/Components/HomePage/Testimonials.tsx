"use client";

import Image from "next/image";
import { Quote } from "lucide-react";

import user1 from "@/public/man.png";
import { Instrument_Sans, Poppins } from "next/font/google";

const instrument = Instrument_Sans({
	weight: ["700"],
	subsets: ["latin"],
	display: "swap",
});

const poppins = Poppins({
	weight: ["400"],
	subsets: ["latin"],
	display: "swap",
});

export default function TestimonialSection() {
	const testimonials = [
		{
			id: 1,
			text: `I like getting the SMS & knowing the jobs done. I often refer to it, “hope you get a ping today!” because my product`,
			name: "Mike Torello",
			position: "CEO of Initech",
			image: user1,
			bg: "bg-white",
			border: "",
		},
		{
			id: 2,
			text: `We have successfully sold digital product and have happy with the results & look forward to using it again this.`,
			name: "Richards Hawkins",
			position: "Marketing Manager of Upnow",
			image: user1,
			bg: "bg-[#9DC834]",
			border: "border-b-4 border-black text-white",
		},
		{
			id: 3,
			text: `Design Monks offers producers a cost-effective selling tool. Having the ability to post prices that you want on an exchange visible.`,
			name: "Thomas Magnum",
			position: "Barellon NSW",
			image: user1,
			bg: "bg-white",
			border: "",
		},
	];

	return (
		<section className="py-20 px-4 bg-[rgba(246,246,246,1)] text-black">
			<div className="max-w-7xl mx-auto text-center">
				{/* Section Header */}
				<div className="flex justify-center mb-4">
					<span className="text-sm font-semibold bg-[#F9FAFB] border border-gray-200 px-4 py-1 rounded-full flex items-center gap-1">
						<span>🔥</span> TESTIMONIAL
					</span>
				</div>

				<h2
					className={`text-3xl lg:text-5xl font-extrabold text-gray-900 mb-14 ${instrument.className}`}
				>
					Get To Know Our Clients
				</h2>

				{/* Testimonials */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-5xl mx-auto">
					{testimonials.map((t, index) => (
						<div
							key={t.id}
							className={`rounded-2xl p-8 flex flex-col justify-between text-left transition-all
        ${t.bg} ${t.border}
        w-full max-w-sm
        ${
					t.bg === "bg-[#9DC834]"
						? "shadow-[0_8px_20px_rgba(0,0,0,0.3)] scale-105"
						: "shadow-sm"
				}
      `}
						>
							<Quote
								className={`w-8 h-8 mb-4 ${
									t.bg === "bg-[#9DC834]" ? "text-white" : "text-black"
								}`}
							/>

							<p
								className={`text-sm leading-relaxed mb-6 mt-4 ${
									t.bg === "bg-[#9DC834]" ? "text-white" : "text-gray-800"
								} ${poppins.className}`}
							>
								{t.text}
							</p>

							<div className="flex items-center gap-3">
								<Image
									src={t.image}
									alt={t.name}
									width={50}
									height={50}
									className="rounded-full object-cover"
								/>
								<div>
									<div className="flex gap-1 mb-1">
										{[...Array(5)].map((_, i) => (
											<span key={i} className="text-emerald-500 text-xs">
												★
											</span>
										))}
									</div>
									<h4
										className={`text-sm font-semibold ${
											t.bg === "bg-[#9DC834]" ? "text-white" : "text-gray-900"
										}`}
									>
										{t.name}
									</h4>
									<p
										className={`text-xs ${
											t.bg === "bg-[#9DC834]"
												? "text-white/90"
												: "text-gray-600"
										}`}
									>
										{t.position}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
