"use client";
import { useState } from "react";
import Image from "next/image";
import bg from "@/public/bg3.png";
import { ArrowUpRight } from "lucide-react";
import { Outfit } from "next/font/google";
import { motion } from "framer-motion";
import Products from "@/constant/Products.js";
import ProductCard from "./ProductCard";

const outfit = Outfit({
	weight: ["700", "500", "400"],
	subsets: ["latin"],
	display: "swap",
});

const OurProducts = () => {
	const [showAll, setShowAll] = useState(false);

	const displayedProducts = showAll ? Products : Products.slice(0, 9);

	return (
		<section className="w-full px-6 md:px-12 pt-20 pb-10 bg-white">
			<Image
				src={bg}
				alt="Background"
				fill
				priority
				className="object-cover -z-10"
			/>
			{/* Header */}
			<div className="my-10">
				<h2
					className={`text-3xl md:text-5xl font-bold text-black text-center ${outfit.className}`}
				>
					Our Products
				</h2>
			</div>

			{/* Products Grid */}
			<div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-10">
				{displayedProducts.map((p, i) => (
					<ProductCard
						key={i}
						id={p._id}
						img={p.img}
						title={p.title}
						desc={p.desc}
						outfitClassName={outfit.className}
					/>
				))}
			</div>

			{/* View All Button - Only show if there are more than 9 products */}
			{Products.length > 9 && (
				<div className="flex justify-center items-center mt-10">
					<motion.button
						onClick={() => setShowAll(!showAll)}
						className={`group relative flex items-center justify-center border text-lg border-black rounded-full px-8 py-2 text-black hover:shadow-lg transition-all duration-300 cursor-pointer ${outfit.className}`}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						<span className="z-10 relative">
							{showAll ? "Show Less" : "View All"}
						</span>

						{/* Animated circular icon container with arrow */}
						<motion.div
							className="absolute right-0 translate-x-1/2"
							initial={{ scale: 1 }}
							whileHover={{ scale: 1 }}
						>
							<div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 cursor-pointer">
								<ArrowUpRight
									size={20}
									className={`text-gray-900 transition-transform duration-300 ${
										showAll ? "rotate-180" : ""
									}`}
								/>
							</div>
						</motion.div>

						{/* Subtle glow effect on hover */}
						<div className="absolute inset-0 rounded-full bg-lime-400/0 group-hover:bg-lime-400/5 transition-all duration-300" />
					</motion.button>
				</div>
			)}
		</section>
	);
};

export default OurProducts;
