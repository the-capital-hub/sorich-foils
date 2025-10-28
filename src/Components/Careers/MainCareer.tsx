"use client"

import { motion } from "framer-motion"
import { Users, Mail, ArrowRight, CheckCircle, Target, Zap, TrendingUp, Users2, Lightbulb } from "lucide-react"
import Link from "next/link"

export default function MainCareer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // const jobOpenings = [
  //   {
  //     title: "Production Manager",
  //     department: "Manufacturing",
  //     icon: Zap,
  //   },
  //   {
  //     title: "Quality Assurance Engineer",
  //     department: "Quality Control",
  //     icon: CheckCircle,
  //   },
  //   {
  //     title: "Sales Executive",
  //     department: "Business Development",
  //     icon: Target,
  //   },
  // ]

    const items = [
    {
      title: "Innovation Leader",
      desc: "Work on revolutionary packaging solutions replacing 100+ year-old technology",
      icon: <Lightbulb className="w-6 h-6 text-[#9AE600]" />,
    },
    {
      title: "Skilled Team",
      desc: "Collaborate with 70+ professionals including experts and specialists",
      icon: <Users2 className="w-6 h-6 text-[#9AE600]" />,
    },
    {
      title: "Growth Focus",
      desc: "Continuous training and skill development at every level",
      icon: <TrendingUp className="w-6 h-6 text-[#9AE600]" />,
    },
  ];


  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section - Bold White Background */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden px-4 py-24 md:py-40 bg-white"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#9AE600] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="p-3 bg-[#9ae600]/20 rounded-full border border-[#9AE600] border-opacity-30">
              <Users className="w-10 h-10 text-[#9AE600]" />
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl md:text-7xl font-bold mb-4 leading-tight"
          >
            Join Our <span className="text-[#9AE600]">Growing Team</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Be part of a revolution in pharmaceutical packaging. We're building the future with 70+ passionate
            professionals.
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {/* <a
              href="#openings"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#9AE600] text-gray-900 font-bold rounded-lg hover:bg-[#7BC400] transition-all hover:scale-105"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5" />
            </a> */}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#9AE600] text-[#9AE600] font-bold rounded-lg hover:bg-[#9AE600] hover:text-gray-900 transition-all"
            >
              Send Resume
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Join Us - Compact Grid */}
      <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="px-4 py-16 md:py-10 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          Why Join <span className="text-[#9AE600]">Sorich Foils?</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#9AE600] transition-colors group shadow-sm hover:shadow-md"
            >
              <div className="w-12 h-12 bg-[#9ae600]/20 flex items-center justify-center rounded-lg mb-4 group-hover:bg-[#9ae600]/30 transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>

      {/* About Team - Compact */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 py-16 md:py-10 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="text-[#9AE600]">Team</span>
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The backbone of Sorich Foils is a committed, experienced, and dedicated team of around 70 professionals,
                including technocrats, production experts, marketing specialists, and customer care personnel.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Together, we work as a well-knit team with a common goal: to satisfy customers worldwide by delivering
                consistent quality at competitive prices while adhering to strict delivery schedules.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#9AE600] to-[#7BC400] rounded-2xl p-8 text-gray-900"
            >
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="leading-relaxed font-medium">
                At Sorich Foils, the quality of our products and services reflects the total commitment of our people.
                We focus on enhancing the skills of our workforce at every level, making it a cornerstone of our
                organizational policy.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Current Job Openings */}
      {/* <motion.section
        id="openings"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 py-16 md:py-20 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Current <span className="text-[#9AE600]">Job Openings</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {jobOpenings.map((job, i) => {
              const Icon = job.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#9AE600] hover:shadow-lg hover:shadow-[#9AE600]/20 transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-[#9ae600]/20 rounded-lg flex items-center justify-center group-hover:bg-[#9ae600]/30 transition-all">
                      <Icon className="w-6 h-6 text-[#9AE600]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                  <p className="text-[#9AE600] text-sm font-semibold mb-4">{job.department}</p>
                  <button className="text-sm font-semibold text-gray-600 hover:text-[#9AE600] transition-colors flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.section> */}

      {/* Contact Section */}
      <motion.section
        id="contact"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="px-4 py-16 md:py-10 bg-white"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-6 text-center">
            Ready to <span className="text-[#9AE600]">Apply?</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.a
              variants={itemVariants}
              href="mailto:vikhil.kotian@sorichfoils.in"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#9AE600] hover:bg-gray-50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#9ae600]/20 rounded-lg flex items-center justify-center group-hover:bg-[#9ae600]/30 transition-all">
                  <Mail className="w-6 h-6 text-[#9AE600]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">VP Contact</p>
                  <p className="font-semibold text-[#9AE600]">vikhil.kotian@sorichfoils.in</p>
                </div>
              </div>
            </motion.a>

            <motion.a
              variants={itemVariants}
              href="mailto:ceo@sorichfoils.in"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#9AE600] hover:bg-gray-50 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#9ae600]/20 rounded-lg flex items-center justify-center group-hover:bg-[#9ae600]/30 transition-all">
                  <Mail className="w-6 h-6 text-[#9AE600]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">CEO Contact</p>
                  <p className="font-semibold text-[#9AE600]">ceo@sorichfoils.in</p>
                </div>
              </div>
            </motion.a>
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <p className="text-gray-600 mb-6">Send your resume and let's start your journey with us!</p>
            <a
              href="mailto:vikhil.kotian@sorichfoils.in"
              className="inline-flex items-center gap-2 px-10 py-4 bg-[#9AE600] text-gray-900 font-bold rounded-lg hover:bg-[#7BC400] transition-all hover:scale-105"
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-4 py-12 bg-gradient-to-r from-[#9AE600] to-[#7BC400] text-gray-900"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">We're Hiring!</h3>
          <p className="text-lg font-medium opacity-90">
            Join Sorich Foils and be part of a pharmaceutical packaging revolution
          </p>
        </div>
      </motion.section>
    </main>
  )
}
