"use client"
import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { Leaf, Shield, Sparkles, Heart, TrendingUp, Recycle } from 'lucide-react';
import RoundedActionButton from '@/src/Components/Common/Button';

export default function EcorichLanding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants:Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatVariants:Variants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative bg-gradient-to-br from-lime-400 to-lime-500 text-gray-900 py-20 px-6 overflow-hidden mt-20"
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex items-center justify-center mb-6"
          >
            <Leaf className="w-12 h-12 mr-3" />
            <h1 className="text-6xl font-bold">ECORICH</h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl text-center max-w-3xl mx-auto font-medium"
          >
            100% Biodegradable Premium Paper Packaging Solutions
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-center max-w-2xl mx-auto mt-4 text-gray-800"
          >
            By Sorich Foils Ltd
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content - Bento Grid */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Large Feature Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-lime-50 to-lime-100 rounded-3xl p-8 border-2 border-lime-400 relative overflow-hidden"
          >
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute top-4 right-4"
            >
              <Sparkles className="w-16 h-16 text-lime-400" />
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              ECORICH is Sorich Foils Ltd's pioneering brand, offering 100% biodegradable, eco-friendly, and premium paper packaging solutions. Specially designed for the food and beverage industry, ECORICH products are completely free from plastic and harmful chemicals, making them safe for consumers and helping reduce the risk of diseases linked to plastic contamination, including cancer.
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="h-1 bg-lime-400 rounded-full w-32"
            />
          </motion.div>

          {/* Plastic Free Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-lime-400 rounded-3xl p-8 flex flex-col items-center justify-center text-center"
          >
            <Shield className="w-20 h-20 mb-4 text-gray-900" />
            <h3 className="text-2xl font-bold mb-2">100% Plastic Free</h3>
            <p className="text-gray-800">Zero harmful chemicals</p>
          </motion.div>

          {/* Biodegradable Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white border-2 border-lime-400 rounded-3xl p-8 flex flex-col items-center justify-center text-center"
          >
            <motion.div
              variants={floatVariants}
              animate="animate"
            >
              <Recycle className="w-20 h-20 mb-4 text-lime-400" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-2">Biodegradable</h3>
            <p className="text-gray-600">100% eco-friendly</p>
          </motion.div>

          {/* Health Benefits Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-gradient-to-r from-white to-lime-50 rounded-3xl p-8 border-2 border-lime-400"
          >
            <Heart className="w-12 h-12 mb-4 text-lime-400" />
            <h3 className="text-3xl font-bold mb-4">Health & Safety First</h3>
            <p className="text-lg text-gray-700">
              Built on the principles of sustainability, health, and performance, ECORICH empowers brands to stand out responsibly while protecting both people and the planet. Our products help reduce the risk of diseases linked to plastic contamination.
            </p>
          </motion.div>

          {/* Performance Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-lime-400 rounded-3xl p-8"
          >
            <TrendingUp className="w-12 h-12 mb-4 text-gray-900" />
            <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
            <p className="text-gray-800">
              Advanced materials & cutting-edge manufacturing
            </p>
          </motion.div>

          {/* Technology Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-3 bg-gradient-to-br from-lime-400 via-lime-300 to-lime-200 rounded-3xl p-8 relative overflow-hidden"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -right-20 -top-20 w-64 h-64 bg-white rounded-full"
            />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Advanced Manufacturing Excellence</h3>
              <p className="text-lg text-gray-800 mb-4">
                Our products combine advanced materials, cutting-edge manufacturing, and thoughtful design to ensure freshness, durability, and visual appeal. By choosing ECORICH, brands can enhance their market presence, inspire consumer confidence, and contribute to a healthier and greener future.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-3 bg-white border-2 border-lime-400 rounded-3xl p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 200 }}
            >
              <Leaf className="w-16 h-16 mx-auto mb-6 text-lime-400" />
            </motion.div>
            
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Shaping the Future</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              With ECORICH, we are not just providing packaging—we are shaping the future of safe, eco-friendly, and high-quality packaging solutions across industries.
            </p>
            
            <motion.div
              className="mt-8 flex justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {/* <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lime-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg cursor-pointer"
              >
                Discover More
              </motion.div> */}
             <RoundedActionButton
             onClick={()=>{
              window.location.href='/contact';
             }}
             text='Contact Us'
              textColor="text-black"
            borderColor="border-black"
             />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="bg-gray-900 text-white py-8 text-center"
      >
        <p className="text-lg">
          <span className="text-lime-400 font-bold">ECORICH</span> by Sorich Foils Ltd
        </p>
        <p className="text-gray-400 mt-2">Premium Paper Packaging Solutions for a Sustainable Future</p>
      </motion.footer>
    </div>
  );
}