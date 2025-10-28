"use client";

import Image from "next/image";
import certIcon from "@/public/Medal.png";
import { Instrument_Sans, Inter } from "next/font/google";
import RoundedActionButton from "../Common/Button";
import bg from "@/public/bg3.png";

const instrument = Instrument_Sans({
	weight: ["600"],
	subsets: ["latin"],
	display: "swap",
});

const inter = Inter({
	weight: ["500"],
	subsets: ["latin"],
	display: "swap",
});

const certificates = [
	{
		id: 1,
		title: "1. ISO 9001:2015",
		subtitle: "Certifying Agency: BSCIC, Haryana, India",
		link: "/Certificates/ISO.pdf",
	},
	{
		id: 2,
		title: "2. ISO GMP 15378:2017",
		subtitle: "Certifying Agency: BSCIC, Haryana, India",
		link: "/Certificates/GMP.pdf",
	},
	{
		id: 3,
		title: "3. DMF (Drug Master File)",
		subtitle: "Issued by: FDA, USA",
		link: "/Certificates/DMF.pdf",
	},
];

// And for the fourth certificate
const pdfUrl = "/Certificates/IVM-US-EN.pdf";

const Certificates = () => {
	return (
		<section className="flex flex-col items-center justify-center w-full bg-white text-black pt-20 pb-10 px-6 relative overflow-hidden">
			<Image
				src={bg}
				alt="Background"
				fill
				priority
				className="object-cover -z-10"
			/>

			{/* Subtle background pattern */}
			<div className="absolute inset-0  pointer-events-none" />

			{/* Title */}
			<h1
				className={`text-6xl text-center relative z-10 mt-16 ${instrument.className}`}
			>
				Certificates
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  max-w-7xl w-full justify-items-center relative z-10">
				{certificates.map((cert) => (
					<div
						key={cert.id}
						className="bg-white rounded-3xl border-b-8 py-10 w-[390px] text-center flex flex-col items-center justify-between"
					>
						{/* Icon */}
						<Image
							src={certIcon}
							alt="Certificate Icon"
							className="w-22 h-18 mb-4 mt-8"
						/>

						{/* Title */}
						<h2 className={`${inter.className} text-3xl font-semibold mb-2`}>
							{cert.title}
						</h2>

						{/* Subtitle */}
						<p className={`text-xl text-[#000000] mb-6 ${inter.className}`}>
							{cert.subtitle}
						</p>

						{/* Button */}
						<RoundedActionButton
							text="Open"
							textColor="text-black"
							borderColor="border-black"
							pdfUrl={cert.link}
							openInNewTab={true}
						/>
					</div>
				))}
			</div>

			<div className="flex flex-row justify-items-center lg:mt-10">
				<div className="bg-white rounded-3xl border-b-8 black py-10 w-full text-center flex flex-col items-center justify-between">
					{/* Icon */}
					<Image
						src={certIcon}
						alt="Certificate Icon"
						className="w-22 h-18 mb-4 mt-8"
					/>

					{/* Title */}
					<h2 className={`${inter.className} text-3xl font-semibold mb-2`}>
						4.US 16 CFR 1700.20 and EN 14375 for CR Foil
					</h2>

					{/* Subtitle */}
					<p className={`text-xl text-[#000000] mb-6 ${inter.className}`}>
						CertifyingAgency: IVM InstituteGmbH,Germany
					</p>

					{/* Button */}
					<RoundedActionButton
						text="Open"
						textColor="text-black"
						borderColor="border-black"
						pdfUrl={pdfUrl}
						openInNewTab={true}
					/>
				</div>
			</div>
		</section>
	);
};

export default Certificates;
