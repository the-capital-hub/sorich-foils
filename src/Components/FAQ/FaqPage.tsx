"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
	const [isVisible, setIsVisible] = useState(false);
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 0);
		return () => clearTimeout(timer);
	}, []);

	const faqs = [
		{
			question: "What makes Sorich Foils Limited different from competitors?",
			answer:
				"Sorich Foils Limited stands out through our commitment to innovation, quality, and customer satisfaction. With over a decade of experience, ISO 9001:2015 certification, state-of-the-art manufacturing facilities, and a dedicated management team, we deliver superior packaging solutions that meet the stringent requirements of the pharmaceutical and industrial sectors.",
		},
		{
			question: "How long has Sorich Foils Limited been in business?",
			answer:
				"Sorich Foils Limited was originally incorporated as Sorich Foils Private Limited on January 19, 2011. Following a special resolution by our shareholders on January 31, 2018, the company was converted into a public limited company. Our Corporate Identification Number (CIN) is U27203GJ2011PLC063709.",
		},
		{
			question: "What is your company's vision?",
			answer:
				"Our vision is to be a trusted leader in pharmaceutical and industrial packaging solutions globally. We are committed to manufacturing innovative, sustainable, and high-quality products that meet evolving market demands while maintaining our core values of excellence, reliability, and customer satisfaction.",
		},
		{
			question: "Do you offer samples of your products?",
			answer:
				"Yes, we can provide product samples for evaluation. Please contact our sales team with your specific requirements, and we'll be happy to send samples for your assessment.",
		},
		{
			question: "What payment methods do you accept?",
			answer:
				"We accept various payment methods including bank transfers, checks, and other standard commercial payment options. For specific details about payment terms and methods, please contact our finance team.",
		},
		{
			question: "Can you provide technical specifications for your products?",
			answer:
				"Absolutely. We provide comprehensive technical specifications for all our products. Our technical team can provide detailed information about material composition, dimensions, performance characteristics, and compliance certifications.",
		},
		{
			question: "Do you have a quality guarantee?",
			answer:
				"Yes, we stand behind the quality of our products. All our products are manufactured under strict quality control measures and comply with international standards. We offer support and solutions for any quality-related concerns.",
		},
		{
			question: "How can I request a quote for bulk orders?",
			answer:
				"To request a quote for bulk orders, please contact our sales team with details about your requirements including product type, quantity, specifications, and delivery timeline. We'll provide a competitive quote tailored to your needs.",
		},
		{
			question: "Are your products compliant with pharmaceutical regulations?",
			answer:
				"Yes, our products are designed and manufactured to comply with pharmaceutical industry regulations and standards. We maintain ISO 9001:2015 certification and ensure all products meet stringent quality and safety requirements.",
		},
		{
			question: "What is your approach to sustainability?",
			answer:
				"We are committed to environmental responsibility. We have launched ECORICH, our line of sustainable and eco-friendly products offering 100% biodegradable alternatives. We continuously work to reduce our environmental footprint while delivering innovative packaging solutions.",
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
					<h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 text-center">
						Frequently Asked Questions
					</h1>
					<p className="text-lg text-black text-center">
						Quick answers to questions about Sorich Foils Limited
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto">
					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<div
								key={index}
								className="bg-card rounded-lg border border-black overflow-hidden hover:border-black transition-colors animate-fade-in"
								style={{
									animationDelay: `${index * 50}ms`,
									opacity: 0,
								}}
							>
								<button
									onClick={() =>
										setExpandedIndex(expandedIndex === index ? null : index)
									}
									className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#9DC834]/40 cursor-pointer transition-colors"
								>
									<h3 className="text-lg font-semibold text-black text-left">
										{faq.question}
									</h3>
									<ChevronDown
										className={`w-5 h-5 text-[#9DC834] transition-transform shrink-0 ml-4 ${
											expandedIndex === index ? "rotate-180" : ""
										}`}
									/>
								</button>
								{expandedIndex === index && (
									<div className="px-6 py-4 bg-[#9DC834]/40 border-t border-black">
										<p className="text-black/80 leading-relaxed">
											{faq.answer}
										</p>
									</div>
								)}
							</div>
						))}
					</div>

					{/* Additional Help */}
					<div
						className="mt-12 bg-white rounded-lg border border-black p-8 text-center animate-fade-in"
						style={{ animationDelay: "500ms", opacity: 0 }}
					>
						<h3 className="text-2xl font-bold text-black mb-3">
							Didn&apos;t find your answer?
						</h3>
						<p className="text-black/80 mb-6">
							Check out our Help & Support page for more detailed information or
							contact us directly.
						</p>
						<a
							href="/help"
							className="inline-flex items-center justify-center px-6 py-3 bg-lime-500 text-white font-semibold rounded-full hover:bg-lime-600 transition-colors"
						>
							Visit Help Center
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}
