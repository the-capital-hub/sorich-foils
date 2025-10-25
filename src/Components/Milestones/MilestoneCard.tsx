"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface Milestone {
	id: number;
	year: string;
	title: string;
	description: string;
	side: "left" | "right" | "center";
}

interface MilestoneCardProps {
	milestone: Milestone;
}

export default function MilestoneCard({ milestone }: MilestoneCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="group relative"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className="bg-lime-100 border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-black shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
				{/* Year and Title */}
				<div className="mb-4">
					<h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">
						{milestone.year} - {milestone.title}
					</h3>
				</div>

				{/* Description */}
				<p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
					{milestone.description}
				</p>

				<div className="flex items-center -space-x-3">
					<button className="h-10 text-sm font-semibold text-gray-900 hover:text-gray-700 border border-gray-800 rounded-full px-4 py-2 transition-colors">
						Read More
					</button>
					<div
						className={`w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center transition-all duration-300 transform cursor-pointer ${
							isHovered ? "scale-110 shadow-md" : ""
						}`}
					>
						<ArrowUpRight size={18} className="text-gray-900" />
					</div>
				</div>

				<div
					className="hidden md:block absolute top-1/2 -translate-y-1/2 h-0.5"
					style={{
						[milestone.side === "left" ? "right" : "left"]: "-48px",
						width: "48px",
						backgroundImage:
							"repeating-linear-gradient(to right, #a3e635 0px, #a3e635 8px, transparent 8px, transparent 16px)",
					}}
				/>
			</div>
		</div>
	);
}
