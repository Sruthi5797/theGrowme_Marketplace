"use client"

import { Video, Calendar, Bell, Sparkles } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ClassCardProps {
  image: string
  title: string
  instructor: string
  date: string
  duration: string
  price: string
}

export function ClassCard({ image, title, instructor, date, duration, price }: ClassCardProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-80 group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md"
      whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
        
        {/* Live Class badge */}
        <motion.div
          className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Video className="w-3.5 h-3.5" />
          </motion.div>
          Live Class
        </motion.div>
      </div>

      <div className="p-5">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="font-semibold text-base mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">with {instructor}</p>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
            <span>•</span>
            <span>{duration}</span>
          </div>
          
          <motion.div
            className="flex items-center justify-between mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-lg font-bold text-primary">{price}</p>
            <motion.div
              className="flex items-center gap-1 text-xs text-amber-600"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3" />
              <span>Trending</span>
            </motion.div>
          </motion.div>

          <div className="flex gap-2">
            <motion.button
              className="flex-1 bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white py-2.5 rounded-lg text-sm font-semibold shadow-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Class
            </motion.button>
            <motion.button
              className="px-3 border border-border hover:bg-secondary rounded-lg transition-colors"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="w-4 h-4 text-muted-foreground" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
