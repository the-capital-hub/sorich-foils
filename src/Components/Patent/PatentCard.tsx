"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface PatentCardProps {
  title: string
  subtitle: string
  agency: string
  icon?: React.ReactNode
  index?: number
  onOpen?: () => void
}

export function PatentCard({ title, subtitle, agency, icon, index = 0, onOpen }: PatentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      <div className="relative h-full rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {/* Header with gradient background */}
        <div className="relative h-32 bg-[#6ea303] overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-2 right-4 w-16 h-16 bg-white rounded-full blur-xl" />
          </div>

          {/* Icon badge */}
          <div className="absolute top-4 right-4 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
            {icon ? icon : <div className="w-8 h-8 bg-yellow-300 rounded-full" />}
          </div>

          {/* Title in header */}
          <div className="absolute bottom-4 left-4 right-12">
            <h3 className="text-white font-bold text-7xl leading-tight">{title}</h3>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 space-y-4">
          <div>
            <p className="text-sm text-gray-600 font-medium mb-1">{subtitle}</p>
            {/* <p className="text-xs text-gray-500">
              Issued by: <span className="font-semibold text-gray-700">{agency}</span>
            </p> */}
          </div>

          {/* Accent line */}
          <div className="h-1 w-12 bg-[#9AE600] rounded-full" />

          {/* Open button */}
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#9ae600] text-gray-900 font-semibold text-sm hover:bg-[#9ae600] hover:text-white transition-colors duration-200"
          >
            Open
            <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ArrowUpRight className="w-8 h-8 p-2 bg-[#9ae600] rounded-full" />
            </motion.div>
          </motion.button> */}
        </div>

        {/* Bottom accent border */}
      </div>
    </motion.div>
  )
}
