"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import imge1 from "@/public/imge1.png";
import imge2 from "@/public/imge2.png";
import imge3 from "@/public/imge3.png";
import imge4 from "@/public/imge5.png";
import imge5 from "@/public/imge6.png";
import { Inter } from "next/font/google";
import bg from "@/public/bg3.png";

const inter = Inter({
	weight: ["600", "400", "500"],
	subsets: ["latin"],
	display: "swap",
});

export default function BlogSection() {
	const recentBlog = {
		date: "22 July 2024",
		readTime: "4 min",
		title:
			"Desiccant Packaging: A Deep Dive into Effective Moisture Control Packaging",
		desc: "Pharmaceutical products are potent, essential products that need to be safeguarded during packaging, storage, and transportation to preserve and maintain their efficiency throughout their shelf life and reaching their end user.",
		tags: ["Packing", "Product"],
		image: imge4,
	};

	const weeklyBlogs = [
		{
			date: "22 July 2024",
			readTime: "4 min",
			title:
				"Primary Packaging: Mastering Primary Packaging for Impactful Products",
			desc: "Let's start by defining what primary packaging is, it tells us about the packaging that...",
			image: imge1,
			tags: ["Product"],
		},
		{
			date: "29 July 2024",
			readTime: "5 min",
			title: "Sustainable Packaging: Innovations in Eco-Friendly Solutions",
			desc: "Sustainable packaging refers to the use of materials and processes that have minimal impact...",
			image: imge2,
			tags: ["Product"],
		},
		{
			date: "5 August 2024",
			readTime: "6 min",
			title: "Smart Packaging: The Future of Consumer Engagement",
			desc: "Smart packaging integrates technology to enhance the user experience, offering real-time data...",
			image: imge3,
			tags: ["Product"],
		},
		{
			date: "5 August 2024",
			readTime: "6 min",
			title: "Smart Packaging: The Future of Consumer Engagement",
			desc: "Smart packaging integrates technology to enhance the user experience, offering real-time data...",
			image: imge3,
			tags: ["Product"],
		},
		{
			date: "22 July 2024",
			readTime: "4 min",
			title:
				"Primary Packaging: Mastering Primary Packaging for Impactful Products",
			desc: "Let's start by defining what primary packaging is, it tells us about the packaging that...",
			image: imge4,
			tags: ["Product"],
		},
		{
			date: "29 July 2024",
			readTime: "5 min",
			title: "Sustainable Packaging: Innovations in Eco-Friendly Solutions",
			desc: "Sustainable packaging refers to the use of materials and processes that have minimal impact...",
			image: imge5,
			tags: ["Product"],
		},
	];

	return (
		<section className="relative pt-20 pb-10 bg-white">
			<Image
				src={bg}
				alt="Background"
				fill
				priority
				className="object-cover -z-10"
			/>
			<div className="max-w-7xl mx-auto p-6 pb-0">
				{/* Header */}
				<div className="text-center mb-14">
					<h2
						className={`text-3xl md:text-7xl font-semibold mb-3 text-[#000000] ${inter.className}`}
					>
						Catch Up with Our Latest Blogs
					</h2>
					<p
						className={`text-[#828282] max-w-4xl text-lg mx-auto font-normal lg:mt-8 ${inter.className}`}
					>
						Catch up with our latest news and stay in the loop on recent
						updates, insightful stories, and exciting announcements shaping our
						journey forward!
					</p>
				</div>

				{/* Recent Blog */}
				<div className="mb-16 border-t #E0E0E0">
					<h3
						className={`text-2xl italic text-[#000000] font-normal mb-4 lg:mt-8 ${inter.className}`}
					>
						Recent Blog
					</h3>
					<div className="grid md:grid-cols-2 gap-6 items-center">
						<div className="rounded-3xl overflow-hidden relative h-60 md:h-full">
							<Image
								src={recentBlog.image}
								alt={recentBlog.title}
								fill={true}
								className="object-cover"
							/>
						</div>

						<div className="rounded-2xl bg-[#F9FFEA] p-4 border-b-8 border-r-8 border border-black">
							<p
								className={`text-lg text-[#4F4F4F] mb-2 ${inter.className} font-semibold`}
							>
								{recentBlog.date} • {recentBlog.readTime}
							</p>
							<h4
								className={`text-3xl font-medium mb-3 ${inter.className} text-[#000000]`}
							>
								{recentBlog.title}
							</h4>
							<p
								className={`text-[#828282] text-lg mb-4 ${inter.className} font-normal`}
							>
								{recentBlog.desc}
							</p>
							<div className="flex gap-2">
								{recentBlog.tags.map((tag, i) => (
									<span
										key={i}
										className={`text-sm border border-[#252525] px-3 py-1 rounded-xl text-[#828282] ${inter.className}`}
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Weekly Most Read */}
				<h3
					className={`text-2xl text-[#000000] font-normal mb-4 ${inter.className}`}
				>
					Weekly Most Read <span className="text-red-500">🔥</span>
				</h3>

				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:mt-12">
					{weeklyBlogs.map((blog, index) => (
						<div
							key={index}
							className="rounded-2xl overflow-hidden hover:shadow-md transition-all"
						>
							<Image
								src={blog.image}
								alt={blog.title}
								width={400}
								height={350}
								className="object-cover w-full h-52"
							/>
							<div className="p-5">
								<p className={`text-lg text-[#4F4F4F] mb-2 ${inter.className}`}>
									{blog.date} • {blog.readTime}
								</p>
								<h4
									className={`text-2xl text-[#000000] font-regular mb-2 leading-snug ${inter.className}`}
								>
									{blog.title}
								</h4>
								<p className={`text-[#828282] text-lg mb-4 ${inter.className}`}>
									{blog.desc}
								</p>
								<div className="flex gap-2">
									{blog.tags.map((tag, i) => (
										<span
											key={i}
											className={`text-sm border border-gray-300 px-3 py-1 rounded-full text-[#828282] ${inter.className} font-normal`}
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Pagination */}
				<div className="flex justify-between items-center gap-3 mt-14">
					<button
						className={`flex items-center gap-1 border border-[#828282] text-black rounded-full px-4 py-2 text-sm hover:shadow-sm ${inter.className} font-normal`}
					>
						<ArrowLeft className="w-4 h-4" /> Previous
					</button>

					{/* Desktop Pagination */}
					<div className="hidden md:flex gap-2">
						{[1, 2, 3, 4, 5].map((n) => (
							<button
								key={n}
								className={`w-10 h-10 rounded-lg border ${
									n === 1
										? "bg-lime-500 text-white border-lime-500"
										: "border-[#828282] text-[#828282] hover:border-lime-500"
								}`}
							>
								{n}
							</button>
						))}
					</div>

					<button
						className={`flex items-center gap-1 border border-[#828282] text-black rounded-full px-4 py-2 text-sm hover:shadow-sm ${inter.className} font-normal`}
					>
						Next <ArrowRight className="w-4 h-4" />
					</button>
				</div>
			</div>
		</section>
	);
}
