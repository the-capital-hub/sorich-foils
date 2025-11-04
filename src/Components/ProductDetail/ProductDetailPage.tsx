"use client";

import { useState, useEffect, useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import circularBg from "@/public/circularBg.svg";
import Products from "@/constant/Products.js";

interface Product {
	_id: string;
	title: string;
	subtitle: string;
	img: any;
	bannerImg: any;
	detailImg: any;
	desc: string;
	aboutSection: {
		heading: string;
		paragraphs: string[];
	};
	keyFeatures: {
		_id: string;
		title: string;
		description: string;
	}[];
}

export default function ProductDetailsPage() {
	const params = useParams();
	const router = useRouter();
	const productId = params?.id as string;

	const [product, setProduct] = useState<Product | null>(null);
	const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
	const featuresRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Find product by ID
		const foundProduct = Products.find((p) => p._id === productId);

		if (foundProduct) {
			setProduct(foundProduct as Product);
		} else {
			// Redirect to 404 or products page if product not found
			console.error("Product not found");
			// router.push('/404'); // Uncomment if you have a 404 page
		}
	}, [productId]);

	useEffect(() => {
		if (!product) return;

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
	}, [product]);

	// Loading state
	if (!product) {
		return (
			<div className="min-h-screen bg-white flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto"></div>
					<p className="mt-4 text-gray-600">Loading product details...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white relative text-black pt-10">
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
						<h1 className="text-4xl sm:text-6xl font-bold mb-4">
							{product.title}
						</h1>
						<p className="text-2xl sm:text-3xl font-semibold">
							{product.subtitle}
						</p>
					</div>

					{/* Hero Image */}
					<div
						className="mb-8 animate-fade-in"
						style={{ animationDelay: "0.2s" }}
					>
						<div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
							<Image
								src={product.bannerImg}
								alt={`${product.title} Banner`}
								fill
								className="object-cover"
							/>
						</div>
					</div>

					{/* Contact Button */}
					<div className="w-fit mx-auto flex items-center -space-x-3">
						<button
						onClick={()=> {
							window.location.href = "/contact"
						}}
						className="h-10 text-sm font-semibold text-gray-900 hover:text-gray-700 border border-gray-800 rounded-full px-4 py-2 transition-colors">
							Contact Us
						</button>
						<div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-md cursor-pointer">
							<ArrowUpRight size={18} className="text-gray-900" />
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 relative z-10">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
						About {product.title}
					</h2>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Left Content */}
						<div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
							<h3 className="text-2xl font-bold mb-6">
								{product.aboutSection.heading}
							</h3>
							{product.aboutSection.paragraphs.map((paragraph, index) => (
								<p key={index} className="leading-relaxed mb-4">
									{paragraph}
								</p>
							))}
						</div>

						{/* Right Image */}
						<div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
							<div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg">
								<Image
									src={product.detailImg}
									alt={`${product.title} Details`}
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
						{product.keyFeatures.map((feature, index) => (
							<div
								key={feature._id}
								data-feature
								data-index={index}
								className={`flex gap-6 p-6 bg-gray-100 rounded-3xl transition-all duration-500 transform ${
									visibleFeatures.includes(index)
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-4"
								}`}
							>
								{/* Icon */}
								<div className="flex items-center justify-center rounded-lg font-bold text-7xl bg-gradient-to-b from-lime-600 to-white bg-clip-text text-transparent">
									{/* {feature._id} */}
									{index + 1}
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
