"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HelpPage() {
	const [isVisible, setIsVisible] = useState(false);
	const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 0);
		return () => clearTimeout(timer);
	}, []);

	const helpCategories = [
		{
			category: "Getting Started",
			items: [
				{
					question: "How can I contact Sorich Foils Limited?",
					answer:
						"You can reach us through multiple channels: Email: Vikhil.kotian@sorichfoils.in, ceo@sorichfoils.in, manohar@sorichfoils.in, sradhhasorichifoils@gmail.com. Address: Survey No. 175, Village Maroda, Near A.B. Rolling Mills, Sarigam - 396155, Gujarat, India.",
				},
				{
					question: "What products does Sorich Foils Limited manufacture?",
					answer:
						"We manufacture a comprehensive range of pharmaceutical packaging solutions including Strip Pack, Blister Pack, CR Foil, Lid Aluminum Foil, Confectionery Packaging, Extrusion Laminates, Preformed Pouches, Holographic Products, and Paper Bands for Currency.",
				},
				{
					question: "Where is your manufacturing facility located?",
					answer:
						"Our state-of-the-art manufacturing facility is strategically located at Survey No. 175, Village Maroda, Near A.B. Rolling Mills, Sarigam - 396155, Gujarat, India. This location allows us to efficiently manage production, logistics, and quality control.",
				},
			],
		},
		{
			category: "Products & Services",
			items: [
				{
					question: "What are the key features of your Strip Pack?",
					answer:
						"Our Strip Pack features soft-tempered aluminum foil (30-40 microns) laminated with LDPE film for high-moisture-sensitive tablets and capsules. It offers no thermoformed cavities, excellent protection against moisture/light/oxygen, continuous form-fill-seal process, and is trusted globally in pharmaceutical applications.",
				},
				{
					question: "Can you handle custom packaging solutions?",
					answer:
						"Yes, we specialize in customized packaging solutions tailored to your specific requirements. Our experienced team works closely with clients to develop innovative packaging that meets stringent industry standards while maintaining cost efficiency.",
				},
				{
					question: "What is your production capacity?",
					answer:
						"Our manufacturing facility can handle up to 2,400 units per minute with advanced machinery including Heat Seal Lacquer coating lines, Ten Colour Rotogravure Printing Machines, and High Speed Slitting machines. We can process up to 3,000 tonnes per year.",
				},
			],
		},
		{
			category: "Quality & Certifications",
			items: [
				{
					question: "What certifications does Sorich Foils Limited hold?",
					answer:
						"We are ISO 9001:2015 certified, reflecting our commitment to manufacturing and supplying premium packaging materials. Our products meet international quality standards and comply with regulatory requirements in pharmaceutical and industrial applications.",
				},
				{
					question: "How do you ensure product quality?",
					answer:
						"Every stage of production is carefully monitored by our in-house quality assurance team, guaranteeing uncompromised precision, consistency, and reliability. We use state-of-the-art machinery and advanced production technologies to ensure our products meet the highest standards.",
				},
				{
					question: "Are your products environmentally friendly?",
					answer:
						"We have launched a line of sustainable and eco-friendly products under our brand name ECORICH. These products offer 100% biodegradable alternatives to single-use plastics, demonstrating our commitment to environmental responsibility and innovation in packaging solutions.",
				},
			],
		},
		{
			category: "Orders & Delivery",
			items: [
				{
					question: "What is your minimum order quantity?",
					answer:
						"Minimum order quantities vary depending on the product and customization requirements. Please contact our sales team for specific details regarding your product needs.",
				},
				{
					question: "What are your delivery timeframes?",
					answer:
						"Delivery timeframes depend on order size, customization requirements, and current production schedules. We work efficiently to meet your deadlines while maintaining our quality standards. Contact us for specific delivery estimates.",
				},
				{
					question: "Do you offer international shipping?",
					answer:
						"Yes, we serve clients globally. Our products are exported to various countries, and we have experience managing international logistics and compliance requirements. Contact our team for international order details.",
				},
			],
		},
	];

	return (
		<main className="min-h-screen bg-white">
			{/* Header */}
			<div
				className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
				}`}
			>
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl sm:text-5xl font-bold text-black my-4 text-center">
						Help & Support
					</h1>
					<p className="text-lg text-black text-center">
						Find answers to common questions about our products and services
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto space-y-8">
					{helpCategories.map((category, categoryIndex) => (
						<div
							key={categoryIndex}
							className="animate-fade-in"
							style={{
								animationDelay: `${categoryIndex * 150}ms`,
								opacity: 0,
							}}
						>
							<h2 className="text-2xl font-bold text-black mb-6">
								{category.category}
							</h2>
							<div className="space-y-4">
								{category.items.map((item, itemIndex) => (
									<div
										key={itemIndex}
										className="bg-card rounded-lg border border-black overflow-hidden hover:border-accent transition-colors"
									>
										<button
											onClick={() =>
												setExpandedIndex(
													expandedIndex === `${categoryIndex}-${itemIndex}`
														? null
														: `${categoryIndex}-${itemIndex}`
												)
											}
											className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#9DC834]/40 transition-colors cursor-pointer"
										>
											<h3 className="text-lg font-semibold text-black text-left">
												{item.question}
											</h3>
											<ChevronDown
												className={`w-5 h-5 text-[#9DC834] transition-transform shrink-0 ml-4 ${
													expandedIndex === `${categoryIndex}-${itemIndex}`
														? "rotate-180"
														: ""
												}`}
											/>
										</button>
										{expandedIndex === `${categoryIndex}-${itemIndex}` && (
											<div className="px-6 py-4 bg-[#9DC834]/40 border-t border-black">
												<p className="text-black/80 leading-relaxed">
													{item.answer}
												</p>
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					))}

					{/* Contact Section */}
					<div
						className="mt-12 bg-accent/10 rounded-lg border border-black p-8 animate-fade-in"
						style={{ animationDelay: "600ms", opacity: 0 }}
					>
						<h3 className="text-2xl font-bold text-black mb-4">
							Still need help?
						</h3>
						<p className="text-black/80 mb-6">
							If you couldn&apos;t find the answer you&apos;re looking for,
							please don&apos;t hesitate to contact us directly. Our team is
							always happy to assist you.
						</p>
						<div className="space-y-2 text-black/80">
							<p>
								<strong>Email:</strong> Vikhil.kotian@sorichfoils.in
							</p>
							<p>
								<strong>Phone:</strong> Available through our contact form
							</p>
							<p>
								<strong>Address:</strong> Survey No. 175, Village Maroda, Near
								A.B. Rolling Mills, Sarigam - 396155, Gujarat, India
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
