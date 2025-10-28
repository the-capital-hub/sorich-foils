import img1 from "@/public/first.png";
import img2 from "@/public/second.png";
import img3 from "@/public/third.png";
import img4 from "@/public/fourth.png";
import img5 from "@/public/fifth.png";
import img6 from "@/public/sixth.png";
import img7 from "@/public/seventh.png";
import img8 from "@/public/eigth.png";

import banner1 from "@/public/productDetail/Banner.svg";
import detailImg1 from "@/public/productDetail/Product.svg";

const products = [
	// 1. Strip Pack
	{
		_id: "671fb91a6b8f4c1e24a9f101",
		title: "Strip Pack",
		subtitle: "Efficient, Precise, and Protective Packaging Solution",
		img: img1,
		bannerImg: banner1,
		detailImg: detailImg1,
		desc: "Strip packaging is widely used in the pharmaceutical, confectionery, engineering, and industrial sectors. Designed for high-speed precision, strip packaging machines can handle up to 2,400 units per minute.",
		aboutSection: {
			heading: "We manufacture and supply",
			paragraphs: [
				"Strip packaging is used for pharmaceutical, confectionery, engineering, and industrial products, ensuring efficiency and precision.",
				"Using stainless steel feeding systems, products pass through sealing roller cavities for consistent, continuous sealing.",
				"Designed to meet strict industry standards, providing high protection and regulatory compliance.",
			],
		},
		keyFeatures: [
			{
				_id: "671fb91a6b8f4c1e24a9f111",
				title: "Soft-tempered",
				description:
					"Soft-tempered aluminum foil laminated with LDPE film for moisture-sensitive products.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f112",
				title: "No thermoformed cavities",
				description:
					"Strip forms around the product during sealing for efficiency.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f113",
				title: "Excellent protection",
				description: "Shields contents from moisture, light, and oxygen.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f114",
				title: "Form-fill-seal process",
				description: "Ensures consistent quality and packaging speed.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f115",
				title: "Trusted globally",
				description:
					"Used worldwide in pharmaceutical and industrial applications.",
			},
		],
	},

	// 2. Blister Pack
	{
		_id: "671fb91a6b8f4c1e24a9f102",
		title: "Blister Pack",
		subtitle: "Pre-Formed Protection for Pharmaceutical Excellence",
		img: img2,
		bannerImg: banner1,
		detailImg: detailImg1,
		desc: "Blister packs are pre-formed packaging used for tablets and capsules, offering superior protection from humidity and contamination.",
		aboutSection: {
			heading: "Pharmaceutical-Grade Blister Packaging",
			paragraphs: [
				"Blister packs protect pharmaceuticals from humidity, contamination, and UV rays.",
				"Each unit is individually sealed, ensuring dosage accuracy and tamper evidence.",
				"Manufactured using form-fill-seal equipment at high-quality pharmaceutical facilities.",
			],
		},
		keyFeatures: [
			{
				_id: "671fb91a6b8f4c1e24a9f121",
				title: "Push-through design",
				description: "Ensures easy tablet or capsule removal.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f122",
				title: "Premium foil",
				description:
					"Hard-tempered, printed or plain aluminum foil with heat-seal lacquer.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f123",
				title: "Long-term protection",
				description:
					"Guards against humidity, contamination, and light exposure.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f124",
				title: "Tamper evident",
				description:
					"Each blister is sealed on high-precision lines for security.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f125",
				title: "Globally compliant",
				description: "Meets international pharma packaging standards.",
			},
		],
	},

	// 3. CR Foil
	{
		_id: "671fb91a6b8f4c1e24a9f103",
		title: "CR Foil",
		subtitle: "Child-Resistant Safety Solutions",
		img: img3,
		bannerImg: banner1,
		detailImg: detailImg1,
		desc: "CR (Child-Resistant) Foil minimizes accidental ingestion risks, used for prescription drugs, OTC medicines, and chemicals.",
		aboutSection: {
			heading: "Enhanced Safety Standards",
			paragraphs: [
				"Child-resistant foils meet global safety regulations and reduce accidental poisoning risks.",
				"Available with paper or PVC base, widely used in Europe for generics and regulated pharma packaging.",
				"Provides tamper evidence and ensures safety for end consumers.",
			],
		},
		keyFeatures: [
			{
				_id: "671fb91a6b8f4c1e24a9f131",
				title: "Child-resistant",
				description:
					"Prevents easy access by children while remaining adult-friendly.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f132",
				title: "Custom base",
				description: "Available with paper or PVC base material.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f133",
				title: "Regulatory compliant",
				description: "Meets global child-safety standards.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f134",
				title: "Tamper evident",
				description: "Offers additional security and integrity assurance.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f135",
				title: "Pharma grade",
				description: "Used widely for regulated drug packaging.",
			},
		],
	},

	// 4. Lid Aluminum Foil
	{
		_id: "671fb91a6b8f4c1e24a9f104",
		title: "Lid Aluminum Foil",
		subtitle: "Durable and Customizable Food Packaging",
		img: img4,
		bannerImg: banner1,
		detailImg: detailImg1,
		desc: "Thin and lightweight foil lids ideal for disposable food containers, preserving freshness and preventing contamination.",
		aboutSection: {
			heading: "Food-Grade Aluminum Lid Foils",
			paragraphs: [
				"Perfect for dairy and food service packaging, ensuring freshness and hygiene.",
				"Customizable for branding with PP, PS, or universal lacquer coatings.",
				"Designed to prevent leakage and retain food temperature.",
			],
		},
		keyFeatures: [
			{
				_id: "671fb91a6b8f4c1e24a9f141",
				title: "Soft-tempered foil",
				description: "30–40 microns thick foil ensures durability.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f142",
				title: "Multi-layer coating",
				description: "PP, PS, or universal lacquer improves seal quality.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f143",
				title: "Custom branding",
				description: "Fully customizable surface for client logos.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f144",
				title: "Hygienic seal",
				description: "Maintains freshness and prevents contamination.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f145",
				title: "Lightweight",
				description: "Ideal for food service and takeout packaging.",
			},
		],
	},

	// 5. Confectionery Packaging
	{
		_id: "671fb91a6b8f4c1e24a9f105",
		title: "Confectionery Packaging",
		subtitle: "Protective, Versatile, and Eco-Friendly",
		img: img5,
		bannerImg: banner1,
		detailImg: detailImg1,
		desc: "Aluminum’s protective and recyclable nature makes it ideal for chocolates, candies, and confectionery products.",
		aboutSection: {
			heading: "Premium Confectionery Foils",
			paragraphs: [
				"Offers protection against light, oxygen, and moisture while maintaining product aroma and taste.",
				"Fully recyclable and customizable with colorful prints for branding.",
				"Used globally by premium confectionery manufacturers.",
			],
		},
		keyFeatures: [
			{
				_id: "671fb91a6b8f4c1e24a9f151",
				title: "Thin foil",
				description: "7–15 microns thick soft-tempered aluminum foil.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f152",
				title: "Food-grade coating",
				description: "Ensures product safety and freshness.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f153",
				title: "Printed design",
				description: "Custom branding with heat-seal lacquer.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f154",
				title: "Recyclable",
				description: "Eco-friendly and sustainable.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f155",
				title: "Premium finish",
				description: "Enhances shelf appeal for chocolates and candies.",
			},
		],
	},

	// 6. Extrusion Laminates
	{
		_id: "671fb91a6b8f4c1e24a9f106",
		title: "Extrusion Laminates",
		subtitle: "Versatile, Durable, and High-Quality Laminates",
		img: img6,
		bannerImg: banner1,
		detailImg: detailImg1,
		desc: "Extrusion coating applies molten synthetic resin onto substrates like paper, foil, or films for durability and barrier strength.",
		aboutSection: {
			heading: "High-Performance Laminates",
			paragraphs: [
				"Enhances moisture, grease, and contaminant resistance for food and pharma uses.",
				"Available in 2-ply to 4-ply structures for different applications.",
				"Cost-effective and long-lasting coating solution.",
			],
		},
		keyFeatures: [
			{
				_id: "671fb91a6b8f4c1e24a9f161",
				title: "Multi-layer options",
				description: "2-ply, 3-ply, and 4-ply structures available.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f162",
				title: "Enhanced durability",
				description: "Improves barrier against moisture and grease.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f163",
				title: "Flexible coating",
				description: "Poly-coated with polyethylene resin for toughness.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f164",
				title: "Customizable",
				description: "Designed per product and industry requirement.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f165",
				title: "Cost-effective",
				description: "Balances performance and price effectively.",
			},
		],
	},

	// 7. Holographic Products
	{
		_id: "671fb91a6b8f4c1e24a9f107",
		title: "Holographic Products",
		subtitle: "Secure, High-Quality, and Versatile Foils",
		img: img7,
		bannerImg: banner1,
		detailImg: detailImg1,
		desc: "Holographic hot stamping foils ensure authenticity and enhance product aesthetics across industries.",
		aboutSection: {
			heading: "High-Security Holographic Foils",
			paragraphs: [
				"Used for document authentication, branding, and anti-counterfeiting.",
				"Customizable with continuous or registered hologram patterns.",
				"Adds premium appeal and protection to packaging materials.",
			],
		},
		keyFeatures: [
			{
				_id: "671fb91a6b8f4c1e24a9f171",
				title: "Non-removable",
				description: "Provides secure, tamper-proof application.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f172",
				title: "Continuous patterns",
				description: "Available in registered or index holograms.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f173",
				title: "High security",
				description: "Protects brands from counterfeiting.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f174",
				title: "Multi-surface use",
				description: "Suitable for paper, plastic, and leather surfaces.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f175",
				title: "Aesthetic finish",
				description: "Adds brilliance and branding value.",
			},
		],
	},

	// 8. Preformed Pouches
	{
		_id: "671fb91a6b8f4c1e24a9f108",
		title: "Preformed Pouches",
		subtitle: "Flexible, Durable, and Convenient Packaging",
		img: img8,
		bannerImg: banner1,
		detailImg: detailImg1,
		desc: "Preformed pouches offer durable, resealable solutions for pharmaceutical and consumer goods.",
		aboutSection: {
			heading: "Custom Pouch Packaging",
			paragraphs: [
				"Manufactured from multilayer laminated films for superior product protection.",
				"Available in various styles—stand-up, zipper, and spout pouches.",
				"Lightweight and resealable, ideal for powders, tablets, and granules.",
			],
		},
		keyFeatures: [
			{
				_id: "671fb91a6b8f4c1e24a9f181",
				title: "Barrier protection",
				description: "Multi-layer laminates offer moisture and air resistance.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f182",
				title: "Resealable",
				description: "Zipper and spout designs for reusability.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f183",
				title: "Customizable",
				description: "Available in varied sizes and prints.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f184",
				title: "Lightweight",
				description: "Portable and easy for consumers.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f185",
				title: "Eco-friendly",
				description: "Made from recyclable materials.",
			},
		],
	},

	// 9. Paper Bands For Currency
	{
		_id: "671fb91a6b8f4c1e24a9f109",
		title: "Paper Bands For Currency",
		subtitle: "Secure, Durable, and Easy Handling",
		img: img8,
		bannerImg: banner1,
		detailImg: detailImg1,
		desc: "Designed to bundle and secure currency notes, ensuring organized handling and easy identification.",
		aboutSection: {
			heading: "High-Strength Currency Paper Bands",
			paragraphs: [
				"Manufactured using premium, high-tensile paper for reliable performance and long-lasting strength.",
				"Used by banks, cash-handling facilities, and retail chains to organize and secure currency stacks efficiently.",
				"Customizable with security features, color codes, and printed logos for easy identification and authenticity.",
			],
		},
		keyFeatures: [
			{
				_id: "671fb91a6b8f4c1e24a9f191",
				title: "Tear-resistant paper",
				description:
					"Ensures long-lasting durability during frequent handling.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f192",
				title: "Custom printing",
				description: "Allows branding or denomination-based color codes.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f193",
				title: "Smooth finish",
				description: "Prevents note damage and offers easy wrapping.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f194",
				title: "Moisture-resistant",
				description: "Coating enhances durability under humid conditions.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f195",
				title: "Standardized design",
				description: "Ideal for banks, ATMs, and financial institutions.",
			},
		],
	},

	// 10. Mono Cartons
	{
		_id: "671fb91a6b8f4c1e24a9f10a",
		title: "Mono Cartons",
		subtitle: "Lightweight and Eco-Friendly Packaging",
		img: img8,
		bannerImg: banner1,
		detailImg: detailImg1,
		desc: "Single-layer cardboard cartons ideal for lightweight packaging of consumer goods, pharmaceuticals, and FMCG products.",
		aboutSection: {
			heading: "Customizable Mono Cartons",
			paragraphs: [
				"Mono cartons are versatile packaging options for pharmaceuticals, FMCG, and retail sectors.",
				"Printed with high-resolution graphics for enhanced product branding and consumer appeal.",
				"Made from recyclable, high-strength paperboard to ensure protection during transport and handling.",
			],
		},
		keyFeatures: [
			{
				_id: "671fb91a6b8f4c1e24a9f201",
				title: "Durable construction",
				description: "Made with strong single-ply cardboard.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f202",
				title: "Custom printing",
				description: "Supports detailed graphics and brand colors.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f203",
				title: "Eco-friendly",
				description: "Completely recyclable material.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f204",
				title: "Lightweight",
				description: "Perfect for retail and pharmaceutical packaging.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f205",
				title: "Protective finish",
				description: "Provides resistance against scratches and moisture.",
			},
		],
	},

	// 11. Pharma Cartoning
	{
		_id: "671fb91a6b8f4c1e24a9f10b",
		title: "Pharma Cartoning",
		subtitle: "Precision and Safety in Pharmaceutical Packaging",
		img: img8,
		bannerImg: banner1,
		detailImg: detailImg1,
		desc: "Specialized cartons for pharmaceutical products that ensure safe storage, transport, and compliance with regulatory standards.",
		aboutSection: {
			heading: "Regulatory-Compliant Cartons",
			paragraphs: [
				"Pharma cartons are designed for safety, precision, and traceability in medication packaging.",
				"Features tamper-evident closures and high-quality print areas for batch coding and labeling.",
				"Manufactured to comply with international pharmaceutical standards for patient safety and reliability.",
			],
		},
		keyFeatures: [
			{
				_id: "671fb91a6b8f4c1e24a9f211",
				title: "Precision folding",
				description: "Ensures secure and accurate carton assembly.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f212",
				title: "Tamper evident",
				description: "Built-in features for product safety assurance.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f213",
				title: "Batch printing",
				description: "Allows addition of manufacturing and expiry details.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f214",
				title: "Regulatory approved",
				description: "Complies with pharmaceutical packaging standards.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f215",
				title: "Strong structure",
				description: "Protects delicate pharma items during shipment.",
			},
		],
	},

	// 12. Self-Adhesive Labels
	{
		_id: "671fb91a6b8f4c1e24a9f10c",
		title: "Self-Adhesive Labels",
		subtitle: "Reliable, Customizable, and High-Quality Labeling Solutions",
		img: img8,
		bannerImg: banner1,
		detailImg: detailImg1,
		desc: "Pre-printed or blank adhesive labels suitable for product identification, branding, or compliance marking.",
		aboutSection: {
			heading: "Custom Printed Label Solutions",
			paragraphs: [
				"Designed for a wide range of applications including pharma, food, and industrial products.",
				"Available in rolls or sheets with customizable adhesives and finishes.",
				"Provides durability, water resistance, and high-quality print clarity.",
			],
		},
		keyFeatures: [
			{
				_id: "671fb91a6b8f4c1e24a9f221",
				title: "Strong adhesive",
				description: "Ensures long-lasting bond on multiple surfaces.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f222",
				title: "High print quality",
				description: "Supports detailed graphics and barcodes.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f223",
				title: "Moisture-resistant",
				description: "Performs reliably in various environmental conditions.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f224",
				title: "Customizable shapes",
				description: "Available in various forms, sizes, and colors.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f225",
				title: "Durable surface",
				description: "Scratch-resistant coating for longer shelf life.",
			},
		],
	},

	// 13. Advanced Acid Copolymers – Surlyn & Nucryl
	{
		_id: "671fb91a6b8f4c1e24a9f10d",
		title: "Advanced Acid Copolymers – Surlyn & Nucryl",
		subtitle: "High-Performance Packaging Polymers",
		img: img8,
		bannerImg: banner1,
		detailImg: detailImg1,
		desc: "High-performance copolymers used in packaging requiring superior clarity, strength, and barrier properties.",
		aboutSection: {
			heading: "Advanced Copolymer Technology",
			paragraphs: [
				"Surlyn and Nucryl copolymers offer exceptional sealing, clarity, and impact strength.",
				"Used for pharmaceutical, specialty, and premium food packaging where durability is key.",
				"Provides outstanding resistance to moisture, chemicals, and temperature variations.",
			],
		},
		keyFeatures: [
			{
				_id: "671fb91a6b8f4c1e24a9f231",
				title: "High clarity",
				description: "Gives a transparent, premium product appearance.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f232",
				title: "Superior seal strength",
				description: "Ensures leak-proof and durable packaging.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f233",
				title: "Chemical resistance",
				description:
					"Prevents degradation from contact with active ingredients.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f234",
				title: "Thermal stability",
				description: "Performs well under variable temperature ranges.",
			},
			{
				_id: "671fb91a6b8f4c1e24a9f235",
				title: "Ideal for pharma",
				description: "Meets requirements for medical and specialty packaging.",
			},
		],
	},
];

export default products;
