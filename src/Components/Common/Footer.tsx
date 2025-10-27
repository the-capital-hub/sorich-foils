"use client";

import { Mail, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { Inter, Roboto, Raleway } from "next/font/google";

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
		<footer className="w-full bg-white text-black flex flex-col items-center justify-center p-10">
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
						<div className="w-10 h-10 flex items-center justify-center bg-linear-to-b from-[#00FF85] to-[#00B86B] rounded-full">
							<Mail className="text-black w-5 h-5" />
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
							className={`text-xs text-gray-500 mt-2 ${roboto.className} lg:mt-4`}
						>
							By subscribing you agree to our{" "}
							<span className="underline cursor-pointer text-[#FFFFFF]">
								Privacy Policy
							</span>
							.
						</p>
					</div>
				</div>

				<hr className="border-gray-800 my-5" />

				{/* Footer Links */}
				<div className="flex flex-col md:flex-row justify-between">
					{/* Logo & tagline */}
					<div className="flex flex-col gap-4">
						<h3 className={`text-2xl ${raleway.className}`}>Logo</h3>
						<p className={`text-sm text-gray-500 ${roboto.className}`}>
							Make your complicated
						</p>
					</div>

					{/* Links */}
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-1 text-sm text-gray-400">
						<div className="lg:ml-6">
							<p className={`text-white text-sm mb-6 ${inter.className}`}>
								Logo
							</p>
							<ul className="space-y-4">
								<li>Payment</li>
								<li>Card</li>
								<li>Pricing</li>
							</ul>
						</div>

						<div>
							<p className={`text-white text-sm mb-6 ${inter.className}`}>
								Products
							</p>
							<ul className="space-y-4">
								<li>Personal</li>
								<li>Business</li>
								<li>Invoices</li>
							</ul>
						</div>

						<div>
							<p className={`text-white text-sm mb-6 ${inter.className}`}>
								Company
							</p>
							<ul className="space-y-4">
								<li>About</li>
								<li>Careers</li>
								<li>Press Kit</li>
							</ul>
						</div>

						<div className="lg:-ml-6">
							<p className={`text-white text-sm mb-6 ${inter.className}`}>
								Developer
							</p>
							<ul className="space-y-4">
								<li>API Documentation</li>
								<li>Guide</li>
								<li>Change Log</li>
							</ul>
						</div>

						<div>
							<p className={`text-white text-sm mb-6 ${inter.className}`}>
								Community
							</p>
							<ul className="space-y-4">
								<li>Refer a Friend</li>
								<li>Gift</li>
							</ul>
						</div>

						<div>
							<p className={`text-white text-sm mb-6 ${inter.className}`}>
								Support
							</p>
							<ul className="space-y-4">
								<li>Help</li>
								<li>FAQ</li>
								<li>Contact</li>
							</ul>
						</div>

						<div>
							<p className={`text-white text-sm mb-6 ${inter.className}`}>
								Legal
							</p>
							<ul className="space-y-4">
								<li>Privacy Policy</li>
								<li>Terms of Services</li>
								<li>Cookies</li>
							</ul>
						</div>
					</div>
				</div>

				<hr className="border-gray-800 my-5" />
			</div>

			<div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-center text-[#000000] text-sm gap-5 mt-10">
				{/* Left Side: Copyright */}
				<div>
					<p>© 2023 Finzo. All Right Reserved</p>
				</div>

				{/* Right Side: Social Icons */}
				<div className="flex gap-2">
					<div className="bg-white rounded-full p-2">
						<Youtube className="text-black w-4 h-4" />
					</div>
					<div className="bg-white rounded-full p-2">
						<Facebook className="text-black w-4 h-4" />
					</div>
					<div className="bg-white rounded-full p-2">
						<Twitter className="text-black w-4 h-4" />
					</div>
					<div className="bg-white rounded-full p-2">
						<Linkedin className="text-black w-4 h-4" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
