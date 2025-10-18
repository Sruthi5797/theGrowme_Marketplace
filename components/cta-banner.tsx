"use client"

import { motion } from "framer-motion"

export function CTABanner() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-emerald-50 to-green-50 py-20 px-4 sm:px-6 lg:px-20 mb-16 w-full">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Connect with <span className="text-primary">10,000+</span> Wellness & Beauty Experts Near You
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Book self-care services that truly fit your style and needs today
        </p>
        <div className="flex flex-col items-center gap-3">
          <motion.button
            className="bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Start here
          </motion.button>
          <p className="text-sm text-muted-foreground">
            Free to explore • No commitments • Fully private
          </p>
        </div>
      </motion.div>
    </section>
  )
}
