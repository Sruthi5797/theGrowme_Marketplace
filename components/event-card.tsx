"use client"

import { Calendar, MapPin, Users, Sparkles } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface EventCardProps {
  id: string
  image: string
  title: string
  type: "workshop" | "meetup" | "class"
  location: string
  date: string
  time: string
  attendees: number
  price: string
}

export function EventCard({ id, image, title, type, location, date, time, attendees, price }: EventCardProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-80 group cursor-pointer rounded-xl overflow-hidden border border-border bg-card shadow-md"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
        
        {/* Type badge */}
        <motion.div
          className="absolute top-3 left-3 bg-gradient-to-r from-primary to-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase shadow-lg"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {type}
        </motion.div>
        
        {/* Price badge */}
        <motion.div
          className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold shadow-lg"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {price}
        </motion.div>
      </div>
      <div className="p-5">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="font-semibold text-base mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="space-y-2.5 text-sm text-muted-foreground mb-4">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Calendar className="w-4 h-4 text-primary" />
              <span>
                {date} at {time}
              </span>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>{location}</span>
            </motion.div>
            
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Users className="w-4 h-4 text-primary" />
              <span>{attendees} attending</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="w-3 h-3 text-amber-500" />
              </motion.div>
            </motion.div>
          </div>
          
          <motion.button
            className="w-full bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white py-2.5 rounded-lg font-semibold shadow-md"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Join Event
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  )
}
