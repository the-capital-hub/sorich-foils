"use client";

import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Outfit } from "next/font/google";
import { FC } from "react";
import { motion } from "framer-motion";

const outfit = Outfit({
	weight: ["500"],
	subsets: ["latin"],
	display: "swap",
});

interface RoundedActionButtonProps {
	text?: string;
	textColor?: string;
	borderColor?: string;
	url?: string;
}

const RoundedActionButton: FC<RoundedActionButtonProps> = ({
	text = "Contact Us",
	textColor = "text-white",
	borderColor = "border-white",
	url = "/",
}) => {
	const router = useRouter();

	const handleClick = () => {
		router.push(url);
	};

	return (
		<motion.button
			onClick={handleClick}
			className={`group relative flex items-center justify-center border text-lg ${borderColor} rounded-full px-8 py-2 ${textColor} hover:shadow-lg transition-all duration-300 cursor-pointer ${outfit.className}`}
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
		>
			{/* Text */}
			<span className="z-10 relative">{text}</span>

			{/* Animated circular icon container with arrow */}
			<motion.div
				className="absolute right-0 translate-x-1/2"
				initial={{ scale: 1 }}
				whileHover={{ scale: 1 }}
			>
				<div className="w-12 h-12 rounded-full bg-lime-400 flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 cursor-pointer">
					<ArrowUpRight size={20} className="text-gray-900" />
				</div>
			</motion.div>

			{/* Subtle glow effect on hover */}
			<div className="absolute inset-0 rounded-full bg-lime-400/0 group-hover:bg-lime-400/5 transition-all duration-300" />
		</motion.button>
	);
};

export default RoundedActionButton;
