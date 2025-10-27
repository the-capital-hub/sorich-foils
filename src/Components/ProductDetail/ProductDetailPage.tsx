"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Banner from "@/public/productDetail/Banner.svg";
import Product from "@/public/productDetail/Product.svg";
import circularBg from "@/public/circularBg.svg";

const features = [
	{
		id: 1,
		title: "Soft-tempered",
		description:
			"Soft-tempered aluminum foil (30-40 microns) laminated with LDPE film for high-moisture-sensitive tablets and capsules.",
	},
	{
		id: 2,
		title: "No thermoformed",
		description:
			"No thermoformed or cold-formed cavities; the strip forms around the product during sealing.",
	},
	{
		id: 3,
		title: "Excellent protection",
		description:
			"Provides excellent protection against moisture, light, and oxygen.",
	},
	{
		id: 4,
		title: "Continuous form-fill-seal",
		description:
			"Continuous form-fill-seal process ensures consistent quality and efficiency.",
	},
	{
		id: 5,
		title: "Trusted globally",
		description:
			"Trusted globally in pharmaceutical and other industrial applications.",
	},
];

export default function ProductDetailsPage() {
	const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
	const featuresRef = useRef<HTMLDivElement>(null);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = Number.parseInt(
							entry.target.getAttribute("data-index") || "0"
						);
						setVisibleFeatures((prev) => [...new Set([...prev, index])]);
					}
				});
			},
			{ threshold: 0.1 }
		);

		const featureElements = document.querySelectorAll("[data-feature]");
		featureElements.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	return (
		<div className="min-h-screen bg-white relative text-black">
			{/* Background SVGs */}
			<Image
				src={circularBg}
				alt="Circular Background"
				width={1000}
				height={1000}
				className="w-auto object-contain absolute top-0 left-0 inset-0"
			/>

			{/* Hero Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="max-w-6xl mx-auto">
					{/* Title and Subtitle */}
					<div className="text-center mb-12 animate-fade-in">
						<h1 className="text-4xl sm:text-6xl font-bold mb-4">Strip Pack</h1>
						<p className="text-2xl sm:text-3xl font-semibold">
							Efficient, Precise, and Protective Packaging Solution
						</p>
					</div>

					{/* Hero Image */}
					<div
						className="mb-8 animate-fade-in"
						style={{ animationDelay: "0.2s" }}
					>
						<div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
							<Image
								src={Banner.src}
								alt="Strip Pack Product"
								fill
								className="object-cover"
							/>
						</div>
					</div>

					{/* Contact Button */}
					<div className="w-fit mx-auto flex items-center -space-x-3">
						<button className="h-10 text-sm font-semibold text-gray-900 hover:text-gray-700 border border-gray-800 rounded-full px-4 py-2 transition-colors">
							Read More
						</button>
						<div
							className={`w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-md cursor-pointer`}
						>
							<ArrowUpRight size={18} className="text-gray-900" />
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative z-10">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
						About Strip Pack
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Left Content */}
						<div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
							<h3 className="text-2xl font-bold mb-6">
								We manufacture and supply
							</h3>
							<p className="leading-relaxed mb-4">
								Strip packaging is widely used in the pharmaceutical,
								confectionery, engineering, and industrial sectors. Designed for
								high-speed precision strip packaging machines that handle up to
								2,400 units per minute.
							</p>
							<p className="leading-relaxed mb-4">
								Products use a stainless steel feeding system into sealing
								roller cavities, where laminated foils pack and seal them in a
								continuous area. The strip then passes through vertical and
								horizontal gutter assemblies to deliver packages in the desired
								sizes.
							</p>
							<p className="leading-relaxed">
								Furthermore, strip packaging machines are designed to meet
								stringent industry standards, ensuring product safety and
								compliance with regulatory requirements.
							</p>
						</div>

						{/* Right Image */}
						<div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
							<div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
								<Image
									src={Product.src}
									alt="Strip Pack Manufacturing"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Key Features Section */}
			<section className="pt-16 px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
						Key Features
					</h2>

					<div ref={featuresRef} className="space-y-6">
						{features.map((feature, index) => (
							<div
								key={feature.id}
								data-feature
								data-index={index}
								className={`flex gap-6 p-6 bg-gray-100 rounded-3xl transition-all duration-500 transform ${
									visibleFeatures.includes(index)
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								{/* Icon */}
								<div className="flex items-center justify-center rounded-lg font-bold text-7xl bg-linear-to-b from-lime-600 to-white bg-clip-text text-transparent">
									{feature.id}
								</div>

								{/* Content */}
								<div className="flex-1">
									<h3 className="text-xl font-bold mb-2">{feature.title}</h3>
									<p className="text-gray-600">{feature.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
