"use client"

import { Heart, Leaf } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

interface ServiceCardProps {
  image: string
  title: string
  host: string
  price: string
  rating?: number
}

export function ServiceCard({ image, title, host, price, rating }: ServiceCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <motion.div
      className="flex-shrink-0 w-72 group cursor-pointer"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-square rounded-xl overflow-hidden mb-3 shadow-md">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
        
        <motion.button
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
          onClick={(e) => {
            e.stopPropagation()
            setIsFavorite(!isFavorite)
          }}
          whileHover={{ scale: 1.15, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            scale: isFavorite ? [1, 1.2, 1] : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Heart
            className={`w-5 h-5 stroke-2 transition-colors ${
              isFavorite ? "fill-red-500 stroke-red-500" : "fill-transparent stroke-gray-700"
            }`}
          />
        </motion.button>
        
        {rating && (
          <motion.div
            className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Leaf className="w-3.5 h-3.5 fill-current text-lime-500" />
            <span className="text-sm font-bold">{rating}</span>
          </motion.div>
        )}
      </div>
      
      <motion.div
        className="space-y-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">{host}</p>
        <motion.p
          className="text-sm font-semibold text-primary"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {price}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
