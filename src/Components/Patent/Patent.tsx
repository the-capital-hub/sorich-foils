"use client"

import { motion } from "framer-motion"
import { Award, Shield, Zap, Lightbulb } from "lucide-react"
import { FeatureCard } from "./FeatureCard"
import { PatentCard } from "./PatentCard"

const certifications = [
  {
    title: "Pharmaceutical Packaging Patent",
    subtitle:
      "A revolutionary innovation replacing 100+ years of Heat Sealing Lacquer (HSL) technology globally.",
    agency: "Granted Patent, India",
    icon: <Lightbulb className="w-6 h-6 text-gray-700" />,
  },
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    agency: "BSCIC, Haryana, India",
    icon: <Award className="w-6 h-6 text-gray-700" />,
  },
  {
    title: "ISO GMP 15378:2017",
    subtitle: "Good Manufacturing Practice",
    agency: "BSCIC, Haryana, India",
    icon: <Shield className="w-6 h-6 text-gray-700" />,
  },
  {
    title: "DMF (Drug Master File)",
    subtitle: "Regulatory Approval",
    agency: "FDA, USA",
    icon: <Zap className="w-6 h-6 text-gray-700" />,
  },
]

// ✅ Added Patent Highlights Section
const patentHighlights = [
  "This patent introduces a revolutionary packaging solution that replaces a 100+ year-old Heat Sealing Lacquer (HSL) technology in pharmaceutical packaging globally.",
  "The innovation eliminates a major constraint of contamination in global pharmaceutical blister pack packaging.",
  "It helps society by ensuring contamination-free medicines, thereby reducing health hazards.",
  "The solution assists pharmaceutical companies in avoiding devaluation or adverse actions on medicines and also provides enhanced anti-counterfeit protection.",
  "At the same time, the invention fully addresses user-friendliness of existing packaging to avoid any confusion for end users.",
]

const features = [
  {
    title: "Perfect Peel-Push Lidding Foil",
    description: "Designed to replace imported foils with superior performance and cost-effectiveness.",
  },
  {
    title: "Peelable Lidding Foil",
    description: "High barrier properties ensuring contamination-free pharmaceutical packaging.",
  },
  {
    title: "Push-Through Child-Resistant Foils",
    description: "Enhanced safety features for consumer protection and regulatory compliance.",
  },
  {
    title: "Tropical Blister Foil",
    description: "Designed for enhanced protection in challenging climate conditions.",
  },
]

export default function Patent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white pt-35">
      {/* Hero Section */}
      <section className="px-4  lg:px-2 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-[#9AE600]/20 text-[#7BC400] font-semibold text-sm">
              Patent Granted
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Revolutionary Pharmaceutical
            <span className="block text-[#9AE600]">Packaging Solution</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Replacing 100+ years of Heat Sealing Lacquer technology with innovative, contamination-free packaging that
            ensures medicine safety and authenticity.
          </p>
        </motion.div>

        {/* Patent Highlights Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Patent Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {patentHighlights.map((point, index) => (
              <PatentCard
                key={index}
                title={`${index + 1}`}
                subtitle={point}
                agency="Patent Granted, India"
                icon={<Lightbulb className="w-6 h-6 text-gray-700" />}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Certifications Grid */}
        {/* <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Certifications & Approvals
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <PatentCard key={index} {...cert} index={index} onOpen={() => console.log(`Opening ${cert.title}`)} />
            ))}
          </div>
        </div> */}

        {/* Features Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Key Features
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why This Innovation Matters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#9AE600] rounded-full" />
                Contamination Prevention
              </h4>
              <p className="text-gray-700 text-sm">
                Eliminates major contamination constraints in global pharmaceutical blister pack packaging.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#9AE600] rounded-full" />
                Anti-Counterfeit Protection
              </h4>
              <p className="text-gray-700 text-sm">
                Enhanced security features prevent medicine devaluation and counterfeit products.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#9AE600] rounded-full" />
                User-Friendly Design
              </h4>
              <p className="text-gray-700 text-sm">
                Maintains ease of use for end consumers while improving safety standards.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#9AE600] rounded-full" />
                Global Impact
              </h4>
              <p className="text-gray-700 text-sm">Reduces health hazards and ensures medicine safety worldwide.</p>
            </div>
          </div>
        </motion.section>
      </section>
    </main>
  )
}
