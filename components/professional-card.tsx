"use client"

import type React from "react"

import { Users, Calendar, Leaf, Sparkles } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion"

interface ProfessionalCardProps {
  id: string
  image: string
  title: string
  location: string
  price: string
  rating?: number
  bookings?: number
  reviews?: number
}

export function ProfessionalCard({
  id,
  image,
  title,
  location,
  price,
  rating,
  bookings,
  reviews,
}: ProfessionalCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleCardClick = () => {
    router.push(`/professional/${id}`)
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <motion.div
      className="flex-shrink-0 w-full group cursor-pointer"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 shadow-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
        
        {/* Hover overlay with CTA */}
        <motion.div
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="bg-gradient-to-r from-primary to-emerald-500 hover:from-primary/90 hover:to-emerald-500/90 text-white px-6 py-3 rounded-full font-semibold shadow-xl flex items-center gap-2"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: isHovered ? 1 : 0, rotate: isHovered ? 0 : -10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-4 h-4" />
            View Profile & Book
          </motion.button>
        </motion.div>

        {/* Favorite button */}
        <motion.button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg z-10"
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            scale: isFavorite ? [1, 1.2, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            className={isFavorite ? "text-red-500" : "text-gray-700"}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.button>

        {/* Rating badge */}
        {rating && (
          <motion.div
            className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Leaf className="w-4 h-4 fill-current text-lime-500" />
            <span className="font-semibold text-sm">{rating}</span>
          </motion.div>
        )}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-base flex-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-sm text-muted-foreground mb-2 flex items-center gap-1">
          <span className="inline-block w-1 h-1 rounded-full bg-primary/60"></span>
          {location}
        </p>
        
        {(bookings || reviews) && (
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
            {bookings && (
              <motion.div
                className="flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{bookings} bookings</span>
              </motion.div>
            )}
            {reviews && (
              <motion.div
                className="flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-3.5 h-3.5" />
                <span>{reviews} reviews</span>
              </motion.div>
            )}
          </div>
        )}
      </motion.div>
      <motion.div
        className="text-sm"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-semibold text-primary">{price}</span>
      </motion.div>
    </motion.div>
  )
}
