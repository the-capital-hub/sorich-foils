"use client";

import { useEffect, useState } from "react";

export default function TermsOfServicePage() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(true);
	}, []);

	const sections = [
		{
			title: "1. Acceptance of Terms",
			content:
				"By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
		},
		{
			title: "2. Use License",
			content:
				"Permission is granted to temporarily download one copy of the materials (information or software) on Sorich Foils Limited's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on the website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server.",
		},
		{
			title: "3. Disclaimer",
			content:
				"The materials on Sorich Foils Limited's website are provided on an 'as is' basis. Sorich Foils Limited makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
		},
		{
			title: "4. Limitations",
			content:
				"In no event shall Sorich Foils Limited or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Sorich Foils Limited's website, even if Sorich Foils Limited or an authorized representative has been notified orally or in writing of the possibility of such damage.",
		},
		{
			title: "5. Accuracy of Materials",
			content:
				"The materials appearing on Sorich Foils Limited's website could include technical, typographical, or photographic errors. Sorich Foils Limited does not warrant that any of the materials on its website are accurate, complete, or current. Sorich Foils Limited may make changes to the materials contained on its website at any time without notice.",
		},
		{
			title: "6. Links",
			content:
				"Sorich Foils Limited has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Sorich Foils Limited of the site. Use of any such linked website is at the user's own risk.",
		},
		{
			title: "7. Modifications",
			content:
				"Sorich Foils Limited may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
		},
		{
			title: "8. Governing Law",
			content:
				"These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
		},
	];

	return (
		<main className="min-h-screen bg-white text-black">
			{/* Header */}
			<div
				className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
					isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
				}`}
			>
				<div className="max-w-4xl mx-auto">
					<h1 className="text-4xl sm:text-5xl font-bold text-black my-4 text-center">
						Terms of Service
					</h1>
					<p className="text-lg text-muted-black text-center">
						Last updated: October 2024
					</p>
				</div>
			</div>

			{/* Content */}
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto">
					<div className="bg-card rounded-lg border border-border p-8 sm:p-12">
						<p className="text-black mb-8 leading-relaxed">
							Welcome to Sorich Foils Limited's website. These terms and
							conditions outline the rules and regulations for the use of our
							website. By accessing this website, we assume you accept these
							terms and conditions. Do not continue to use Sorich Foils Limited
							if you do not agree to take all of the terms and conditions stated
							on this page.
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
