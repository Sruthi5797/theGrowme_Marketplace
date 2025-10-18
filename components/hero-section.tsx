"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-emerald-50 to-green-50 py-20 px-4 sm:px-6 lg:px-20 mb-16 w-full">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Grow Together with <span className="text-primary">10,000+</span> Wellness Enthusiasts
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Join a thriving community of yoga and Pilates instructors and enthusiasts. Discover classes, connect with
          expert teachers, and transform your wellness journey.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <motion.button
            className="bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Explore Professionals
          </motion.button>
          <motion.button
            className="bg-white hover:bg-gray-50 text-foreground px-8 py-4 rounded-full font-semibold text-lg border-2 border-border shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Learn More
          </motion.button>
        </div>
        <motion.div
          className="mt-12 flex flex-wrap gap-8 justify-center text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {[
            "10,000+ Active Members",
            "500+ Verified Professionals",
            "50,000+ Sessions Booked"
          ].map((stat, index) => (
            <motion.div
              key={stat}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            >
              <motion.div
                className="w-3 h-3 bg-primary rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              />
              <span className="text-muted-foreground">{stat}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
