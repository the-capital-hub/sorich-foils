"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  index?: number
}

export function FeatureCard({ title, description, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-[#9AE600] transition-colors duration-300 shadow-md hover:shadow-lg">
        {/* Accent corner */}
        <div className="absolute inset-0 w-px  bg-gradient-to-b from-transparent via-[#9ae600] to-transparent rounded-bl-lg" />
        <div className="flex gap-4">
          <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 text-[#9AE600]" />
          </motion.div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
