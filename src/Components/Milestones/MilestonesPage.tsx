"use client";
import { useEffect, useRef, useState, useId } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import circularBg from "@/public/circularBg.svg";
import MilestoneCard from "@/src/Components/Milestones/MilestoneCard";

interface Milestone {
  id: number;
  year: string;
  title: string;
  description: string;
  side: "left" | "right" | "center";
}

const milestones: Milestone[] = [
  {
    id: 1,
    year: "2011-12",
    title: "Inception and Strong Foundation",
    description:
" The company was incorporated in FY 2011–12 and achieved an impressive turnover of around ₹10 Crores in its very first year of operations. Despite limited resources and infrastructure, Sorich successfully catered to the food packaging industry, laying a strong foundation for future growth. This early success reflected the company’s commitment to quality, customer satisfaction, and operational efficiency. The year marked the beginning of Sorich’s journey as an emerging player in the packaging sector, driven by innovation, determination, and a clear vision for sustainable growth.",
    side: "left",
  },
  {
    id: 2,
    year: "2013-14",
    title: "Entry into Pharma Packaging Segment",
    description:
" In FY 2013–14, the company diversified its product portfolio by venturing into the pharmaceutical packaging segment, marking a major step in its growth journey. During this period, Sorich secured substantial orders from leading pharmaceutical companies such as Ajanta Pharma Limited and Zydus Pharmaceutical Limited, establishing its credibility as a reliable and quality-driven supplier. With a turnover of ₹22.83 Crores, the year reflected significant progress and growing trust among reputed industry players. This strategic expansion not only strengthened the company’s market presence but also reinforced its commitment to delivering innovative, safe, and high-performance packaging solutions tailored to the stringent requirements of the pharma industry."  ,

side: "right",
  },
  {
    id: 3,
    year: "2014-15",
    title: "Innovation and Global Market Expansion",
    description:
      "FY 2014–15 marked one of the most significant milestones in Sorich’s journey with the development of Child-Resistant (CR) Foil, a breakthrough innovation in the field of pharmaceutical packaging. The product received prestigious certification from IVM, Germany, opening new avenues for the company in the highly regulated European pharma market.",
    side: "center",
  },
  {
    id: 4,
    year: "2017-18",
    title: "Introduction of Sustainable Products",
    description:
      " Launched a new line of sustainable and eco-friendly products, offering 100% biodegradable alternatives to single-use plastics under the brand name ECORICH. This initiative marked a significant step towards environmental responsibility and innovation in packaging solutions. The ECORICH range is designed to decompose naturally without harming the ecosystem, addressing one of the most pressing global challenges — plastic pollution. By introducing these products, the company reinforced its commitment to sustainability, circular economy principles, and green manufacturing practices. This milestone reflects Sorich’s vision to blend technological advancement with environmental consciousness, paving the way for a future where performance, quality, and sustainability go hand in han ",
    side: "left",
  },
  {
    id: 5,
    year: "2024-25",
    title: "Global Expansion and Excellence",
    description:
      "Recorded an impressive turnover of ₹45 Crores, reflecting consistent growth and strong business fundamentals. The year marked a significant milestone in Sorich’s journey towards global recognition, with exports expanding to regions such as Oman, Egypt, South America, North America, and Bangladesh, accounting for nearly 40% of the total turnover. This achievement underscores Sorich’s rising global footprint, robust operational capabilities, and unwavering focus on quality and innovation. Strengthened by long-term relationships with international clients and partners, the company continues to deliver world-class solutions while maintaining sustainability and excellence at its core. The company also proudly holds two registered patents, highlighting its commitment to technological advancement and product innovation”.",
    side: "right",
  },
];

export default function MilestonesPage() {
  const [pathLength, setPathLength] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const maskId = useId();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 150%"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const strokeDashoffset = useTransform(smoothProgress, [0, 1], [pathLength, 0]);

  // Fade out "Scroll to explore" + SVG + first card as scroll starts
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  const cardVisibility = [
    useTransform(smoothProgress, [0.0, 0.2], [0, 1]),
    useTransform(smoothProgress, [0.2, 0.35], [0, 1]),
    useTransform(smoothProgress, [0.35, 0.55], [0, 1]),
    useTransform(smoothProgress, [0.55, 0.8], [0, 1]),
    useTransform(smoothProgress, [0.8, 1.0], [0, 1]),
  ];

  const firstTwoMilestones = milestones.slice(0, 2);
  const lastThreeMilestones = milestones.slice(2);

  return (
    <div
      ref={containerRef}
      className="relative bg-white max-w-7xl mx-auto min-h-[400vh] pt-20 overflow-x-hidden"
    >
      <Image
        src={circularBg}
        alt="Circular Background"
        width={1000}
        height={100}
        className="absolute top-0 left-0 w-auto object-contain pointer-events-none select-none z-10"
      />

      {/* Title */}
      <div className="text-center mt-10 z-10 relative">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
          Milestones
        </h1>
      </div>

      {/* Scroll Hint Section */}
      <motion.div
        style={{ opacity: scrollHintOpacity }}
        className="fixed inset-x-0 -bottom-10 flex flex-col items-center z-50"
      >
        {/* Decorative SVG (subtle curve/arrow) */}
        {/* <motion.svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M10 20 C20 35, 30 35, 40 20"
            stroke="#9DC834"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M25 35 L20 28 M25 35 L30 28"
            stroke="#9DC834"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </motion.svg> */}

        <p className="text-gray-600 text-sm font-medium mt-5 mb-2">
          Scroll to explore
        </p>


        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-gray-600 w-6 h-6" />
        </motion.div>

        {/* First Card Preview */}
        <motion.div
          className="mt-6 w-[90%] max-w-md scale-90 pointer-events-none select-none"
          style={{ opacity: scrollHintOpacity }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <MilestoneCard milestone={milestones[0]} />
        </motion.div>
      </motion.div>


      <div className="relative z-30">
        <div className="absolute left-1/5 pointer-events-none">
          <div className="absolute">
            <svg
              width="1209"
              height="2050"
              viewBox="0 0 1009 1680"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <mask id={maskId}>
                  <motion.path
                    ref={pathRef}
                    d="M314.017 1.50004L314.017 128.984C314.017 151.075 296.109 168.984 274.017 168.984L41.4999 168.984C19.4085 168.984 1.4999 186.892 1.4999 208.984L1.4999 504.846C1.4999 526.938 19.4085 544.846 41.4999 544.846L65.2024 544.846L966.914 531.623C989.232 531.295 1007.5 549.298 1007.5 571.618L1007.5 1027.73C1007.5 1049.82 989.591 1067.73 967.5 1067.73L361.511 1067.73C339.42 1067.73 321.511 1085.64 321.511 1107.73L321.511 1678.5"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={pathLength}
                    strokeDashoffset={strokeDashoffset}
                  />
                </mask>
              </defs>

              <g mask={`url(#${maskId})`}>
                <path
                  d="M314.017 1.50004L314.017 128.984C314.017 151.075 296.109 168.984 274.017 168.984L41.4999 168.984C19.4085 168.984 1.4999 186.892 1.4999 208.984L1.4999 504.846C1.4999 526.938 19.4085 544.846 41.4999 544.846L65.2024 544.846L966.914 531.623C989.232 531.295 1007.5 549.298 1007.5 571.618L1007.5 1027.73C1007.5 1049.82 989.591 1067.73 967.5 1067.73L361.511 1067.73C339.42 1067.73 321.511 1085.64 321.511 1107.73L321.511 1678.5"
                  stroke="#9DC834"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeDasharray="12 12"
                  fill="none"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* Cards Section */}
        <div className="relative z-40 space-y-3">
          {/* First 2 Milestones */}
          <div className="flex flex-col max-w-5xl top-[22rem] left-0 mx-auto relative md:flex-row justify-evenly gap-8 md:gap-[12rem] items-start">
            {firstTwoMilestones.map((milestone, i) => (
              <motion.div
                key={milestone.id}
                data-id={milestone.id}
                style={{ opacity: cardVisibility[i] }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-[45%]"
              >
                <MilestoneCard milestone={milestone} />
              </motion.div>
            ))}
          </div>

          {/* Last 3 Milestones */}
          <div className="flex flex-col items-center space-y-18 relative top-[46rem] right-10">
            {lastThreeMilestones.map((milestone, i) => (
              <motion.div
                key={milestone.id}
                data-id={milestone.id}
                style={{ opacity: cardVisibility[i + 2] }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-3xl"
              >
                <MilestoneCard milestone={milestone} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
