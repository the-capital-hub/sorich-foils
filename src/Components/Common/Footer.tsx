"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Inter, Roboto, Raleway } from "next/font/google";
import logo from "@/public/logo.png";

const inter = Inter({
	weight: ["500"],
	subsets: ["latin"],
	display: "swap",
});

const roboto = Roboto({
	weight: ["500"],
	subsets: ["latin"],
	display: "swap",
});

const raleway = Raleway({
	weight: ["700"],
	subsets: ["latin"],
	display: "swap",
});

const robot = Roboto({
	weight: ["700"],
	subsets: ["latin"],
	display: "swap",
});

const Footer = () => {
	return (
		<footer className="w-full bg-white text-black flex flex-col items-center justify-center py-10 px-6 md:px-10">
			{/* Top Heading */}
			<h1
				className={`text-4xl md:text-8xl font-semibold text-center mb-10 ${inter.className}`}
			>
				Save smart. Achieve more.
			</h1>

			{/* Footer Main Section */}
			<div className="w-full max-w-7xl bg-[#111111] text-white rounded-3xl p-10 md:p-14 flex flex-col gap-10">
				{/* Newsletter Section */}
				<div className="flex flex-col md:flex-row justify-between gap-10">
					{/* Left */}
					<div className="flex flex-col gap-3 md:w-1/2">
						<div className="w-14 h-14 flex items-center justify-center bg-linear-to-b from-[#00B512] to-black rounded-full">
							<Mail className="text-white w-7 h-7" />
						</div>

						<h2 className={`text-6xl font-semibold ${roboto.className} mt-10`}>
							Keep up with the latest
						</h2>
						<p className={`text-[#9E9E9E] text-sm ${robot.className} mt-4`}>
							Join our newsletter to stay up to date on features and releases.
						</p>
					</div>

					{/* Right */}
					<div className="flex flex-col lg:mt-28 md:w-1/2">
						<p
							className={`text-sm text-[#FFFFFF] mb-3 ${roboto.className} text-left`}
						>
							Stay up to date
						</p>
						<div className="flex w-full md:w-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="w-full md:w-72 px-5 py-3 rounded-full bg-[#1E1E1E] text-[#FFFFFF] focus:outline-none **placeholder-[#FFFFFF]**"
							/>
							<button className="ml-3 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition">
								Subscribe
							</button>
						</div>
						<p
							className={`text-xs text-[#9E9E9E] mt-2 ${roboto.className} lg:mt-4`}
						>
							By subscribing you agree to our{" "}
							<Link
								href="/privacy-policy"
								className="underline cursor-pointer text-[#FFFFFF]"
							>
								Privacy Policy
							</Link>
							.
						</p>
					</div>
				</div>

				<hr className="border-gray-800 my-5" />

				{/* Footer Links */}
				<div className="flex flex-col md:flex-row justify-between">
					{/* Logo & tagline */}
					<div className="flex flex-col gap-4">
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1, duration: 0.3 }}
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<Image
								src={logo}
								alt="whymedia logo"
								width={170}
								className="w-24 md:w-44"
							/>
						</motion.div>
						<p className={`text-sm text-[#9E9E9E] ${roboto.className}`}>
							Building Trust Through Innovation
						</p>
					</div>

					{/* Links */}
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-sm text-gray-400">
						<div>
							<p className={`text-white text-sm mb-6 ${inter.className}`}>
								Navigation
							</p>
							<ul className="space-y-4 text-[#9E9E9E]">
								<li>
									<Link href="/" className="hover:text-white transition-colors">
										Home
									</Link>
								</li>
								<li>
									<Link
										href="/product"
										className="hover:text-white transition-colors"
									>
										Products
									</Link>
								</li>
								<li>
									<Link
										href="/investor"
										className="hover:text-white transition-colors"
									>
										Investors
									</Link>
								</li>
								<li>
									<Link
										href="/blog"
										className="hover:text-white transition-colors"
									>
										Blogs
									</Link>
								</li>
							</ul>
						</div>

						{/* Company */}
						<div>
							<p className={`text-white text-sm mb-6 ${inter.className}`}>
								Company
							</p>
							<ul className="space-y-4 text-[#9E9E9E]">
								<li>
									<Link
										href="/milestone"
										className="hover:text-white transition-colors"
									>
										Milestones
									</Link>
								</li>
								<li>
									<Link
										href="/infra"
										className="hover:text-white transition-colors"
									>
										Infrastructure
									</Link>
								</li>
								<li>
									<Link
										href="/certificate"
										className="hover:text-white transition-colors"
									>
										Certificates
									</Link>
								</li>
								<li>
									<Link
										href="/about"
										className="hover:text-white transition-colors"
									>
										About Us
									</Link>
								</li>
							</ul>
						</div>

						{/* Support */}
						<div>
							<p className={`text-white text-sm mb-6 ${inter.className}`}>
								Support
							</p>
							<ul className="space-y-4 text-[#9E9E9E]">
								<li>
									<Link
										href="/help"
										className="hover:text-white transition-colors"
									>
										Help
									</Link>
								</li>
								<li>
									<Link
										href="/faq"
										className="hover:text-white transition-colors"
									>
										FAQ
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="hover:text-white transition-colors"
									>
										Contact
									</Link>
								</li>
							</ul>
						</div>

						{/* Legal */}
						<div>
							<p className={`text-white text-sm mb-6 ${inter.className}`}>
								Legal
							</p>
							<ul className="space-y-4 text-[#9E9E9E]">
								<li>
									<Link
										href="/privacy-policy"
										className="hover:text-white transition-colors"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href="/terms-of-service"
										className="hover:text-white transition-colors"
									>
										Terms of Services
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center text-[#000000] text-sm gap-5 mt-10">
				{/* Left Side: Copyright */}
				<div>
					<p>© 2025 Sorich Foils Limited. All Right Reserved</p>
				</div>

				{/* Right Side: Social Icons */}
				<div className="flex gap-2">
					{/* <Link href="mailto:K7s2d@example.com" className="text-white">
						<div className="text-white bg-black rounded-full p-2 cursor-pointer hover:scale-110">
							<Youtube className="w-4 h-4" />
						</div>
					</Link>

					<Link href="mailto:K7s2d@example.com" className="text-white">
						<div className="text-white bg-black rounded-full p-2 cursor-pointer hover:scale-110">
							<Facebook className="w-4 h-4" />
						</div>
					</Link> */}

					<Link
						href="https://x.com/SorichL52560?t=7l86KjFsHeWD3smSGSrzPA&s=08"
						className="text-white"
					>
						<div className="text-white bg-black rounded-full p-2 cursor-pointer hover:scale-110 ">
							<Twitter className="w-4 h-4" />
						</div>
					</Link>

					<Link
						href="https://www.linkedin.com/company/sorich-foils-ltd/"
						className="text-white"
					>
						<div className="text-white bg-black rounded-full p-2 cursor-pointer hover:scale-110 ">
							<Linkedin className="w-4 h-4" />
						</div>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
