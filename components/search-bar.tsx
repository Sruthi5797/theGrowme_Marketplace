"use client"

import { Search, MapPin, Calendar, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function SearchBar() {
  return (
    <div className="bg-background border-b border-border py-6 w-full">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center bg-white border border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <button className="flex-1 text-left px-8 py-4 hover:bg-emerald-50 transition-colors group">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-orange-600" />
              <div className="font-extrabold text-sidebar-accent-foreground text-base">Where</div>
            </div>
            <div className="text-sm text-muted-foreground">Search location</div>
          </button>

          <div className="w-px h-12 bg-border" />

          <button className="flex-1 text-left px-8 py-4 hover:bg-blue-50 transition-colors group">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-amber-400" />
              <div className="text-base text-slate-800 font-bold">When</div>
            </div>
            <div className="text-sm text-muted-foreground">Add date</div>
          </button>

          <div className="w-px h-12 bg-border" />

          <button className="flex-1 text-left px-8 py-4 hover:bg-purple-50 transition-colors group">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-orange-800" />
              <div className="text-base text-card-foreground font-extrabold">Service Type</div>
            </div>
            <div className="text-sm text-muted-foreground">Add service</div>
          </button>

          <motion.button
            className="bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white rounded-lg p-4 m-2 shadow-md"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Search className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
