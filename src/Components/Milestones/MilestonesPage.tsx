"use client";

import { useEffect, useRef, useState } from "react";
import MilestoneCard from "@/src/Components/Milestones/MilestoneCard";
import Image from "next/image";
// import timeline from "@/public/timeline.svg";
import circularBg from "@/public/circularBg.svg";

interface Milestone {
	id: number;
	year: string;
	title: string;
	description: string;
	side: "left" | "right" | "center";
}

const milestones: Milestone[] = [
	{
		id: 1,
		year: "2011-12",
		title: "Inception and Strong Foundation",
		description:
			"The company was incorporated in FY 2011-12 and achieved an impressive turnover of around 70 Crores in its very first year of operations. Despite limited resources and a nascent market, the company quickly established itself as a reliable player in the pharmaceutical packaging industry, laying a strong foundation for future growth.",
		side: "left",
	},
	{
		id: 2,
		year: "2013-14",
		title: "Entry into Pharma Packaging Segment",
		description:
			"In FY 2013-14, the company diversified its product portfolio by venturing into the pharmaceutical packaging segment, marking a major step in its growth journey. During this period, Sonich secured substantial orders from leading pharmaceuticals.",
		side: "right",
	},
	{
		id: 3,
		year: "2014-15",
		title: "Innovation and Global Market Expansion",
		description:
			"Launched a new line of innovative products with the development of Child-Resistant (CR) flip, a breakthrough innovation in the field of pharmaceutical packaging. The product received prestigious certification from IMM, Germany, opening new avenues for the company in the highly regulated European pharma market.",
		side: "center",
	},
	{
		id: 4,
		year: "2017-18",
		title: "Introduction of Sustainable Products",
		description:
			"Launched a new line of sustainable and eco-friendly products, offering 100% biodegradable alternatives to single-use plastics under the brand name ECORICH. This initiative marked a significant step towards environmental responsibility and innovation in packaging solutions.",
		side: "left",
	},
	{
		id: 5,
		year: "2024-25",
		title: "Global Expansion, Innovation, and Technological Excellence",
		description:
			"Recorded an impressive turnover of 485 Crores, reflecting consistent growth and strong business fundamentals. The year marked a significant milestone in Sonich's journey towards global expansion, with operations in North America, Europe, and Bangladesh, accounting for nearly 40% of the total turnover.",
		side: "right",
	},
];

export default function MilestonesPage() {
	const [visibleMilestones, setVisibleMilestones] = useState<number[]>([]);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = Number.parseInt(
							entry.target.getAttribute("data-id") || "0"
						);
						setVisibleMilestones((prev) => [...new Set([...prev, id])]);
					}
				});
			},
			{ threshold: 0.1 }
		);

		const cards = containerRef.current?.querySelectorAll("[data-id]");
		cards?.forEach((card) => observer.observe(card));

		return () => observer.disconnect();
	}, []);

	return (
		<div className="min-h-screen bg-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-x-hidden">
			{/* Background SVGs */}
			<Image
				src={circularBg}
				alt="Circular Background"
				width={1000}
				height={1000}
				className="w-auto object-contain absolute top-0 left-0 inset-0"
			/>

			<div className="text-center my-20 z-10 relative">
				<h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-2">
					Milestones
				</h1>
			</div>

			{/* Timeline Container */}
			<div ref={containerRef} className="relative max-w-5xl mx-auto">
				<div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-transparent">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								"repeating-linear-gradient(to bottom, #a3e635 0px, #a3e635 10px, transparent 10px, transparent 20px)",
						}}
					/>
				</div>

				{/* Milestones */}
				<div className="space-y-16 sm:space-y-20">
					{milestones.map((milestone) => (
						<div
							key={milestone.id}
							data-id={milestone.id}
							className={`transition-all duration-700 ease-out ${
								visibleMilestones.includes(milestone.id)
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-8"
							}`}
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
								{/* Left Side */}
								<div
									className={`${
										milestone.side === "left" ? "block" : "hidden md:block"
									} ${milestone.side === "right" ? "md:hidden" : ""}`}
								>
									{milestone.side === "left" && (
										<MilestoneCard milestone={milestone} />
									)}
								</div>

								{/* Center Dot */}
								<div className="hidden md:flex justify-center">
									<div className="relative flex items-center justify-center">
										<div className="absolute w-5 h-5 bg-lime-400 rounded-full border-4 border-white shadow-lg z-10" />
										<div className="absolute w-8 h-8 bg-lime-400 rounded-full opacity-20 animate-pulse" />
									</div>
								</div>

								{/* Right Side */}
								<div
									className={`${
										milestone.side === "right" ? "block" : "hidden md:block"
									} ${milestone.side === "left" ? "md:hidden" : ""}`}
								>
									{milestone.side === "right" && (
										<MilestoneCard milestone={milestone} />
									)}
								</div>
							</div>

							{/* Center Card */}
							{milestone.side === "center" && (
								<div className="flex justify-center">
									<div className="w-full md:w-3/4 lg:w-2/3">
										<MilestoneCard milestone={milestone} />
									</div>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
