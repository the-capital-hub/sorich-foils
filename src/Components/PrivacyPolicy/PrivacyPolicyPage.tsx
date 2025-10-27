"use client";

import { useEffect, useState } from "react";

export default function PrivacyPolicyPage() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const sections = [
		{
			title: "1. Information We Collect",
			content:
				"We collect information you provide directly to us, such as when you contact us, request information about our products, or subscribe to our newsletter. This may include your name, email address, phone number, company name, and any other information you choose to provide.",
		},
		{
			title: "2. How We Use Your Information",
			content:
				"We use the information we collect to respond to your inquiries, provide customer support, send marketing communications (with your consent), improve our services, and comply with legal obligations. We do not sell or share your personal information with third parties without your explicit consent.",
		},
		{
			title: "3. Data Security",
			content:
				"We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.",
		},
		{
			title: "4. Cookies and Tracking",
			content:
				"Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. We use analytics tools to understand how visitors use our site and to improve our services.",
		},
		{
			title: "5. Third-Party Links",
			content:
				"Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.",
		},
		{
			title: "6. Your Rights",
			content:
				"You have the right to access, correct, or delete your personal information. You may also opt-out of marketing communications at any time. To exercise these rights, please contact us using the information provided in the Contact section.",
		},
		{
			title: "7. Changes to This Policy",
			content:
				"We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website with a new effective date.",
		},
		{
			title: "8. Contact Us",
			content:
				"If you have questions about this Privacy Policy or our privacy practices, please contact us at privacy@sorichfoils.in or through the contact information provided on our website.",
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
						Privacy Policy
					</h1>
					<p className="text-lg text-black text-center">
						Last updated: October 2024
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto">
					<div className="bg-card rounded-lg border border-black p-8 sm:p-12">
						<p className="text-black mb-8 leading-relaxed">
							Sorich Foils Limited ("we," "us," "our," or "Company") is
							committed to protecting your privacy. This Privacy Policy explains
							how we collect, use, disclose, and safeguard your information when
							you visit our website and interact with our services.
						</p>

						<div className="space-y-8">
							{sections.map((section, index) => (
								<div
									key={index}
									className="animate-fade-in"
									style={{
										animationDelay: `${index * 100}ms`,
										opacity: 0,
									}}
								>
									<h2 className="text-xl font-bold text-black mb-3">
										{section.title}
									</h2>
									<p className="text-black/80 leading-relaxed">
										{section.content}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
