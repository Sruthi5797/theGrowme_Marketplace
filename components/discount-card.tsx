"use client"

import { Tag, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState } from "react"

interface DiscountCardProps {
  image: string
  title: string
  discount: string
  originalPrice: string
  discountedPrice: string
  validUntil: string
}

export function DiscountCard({
  image,
  title,
  discount,
  originalPrice,
  discountedPrice,
  validUntil,
}: DiscountCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className="w-full group cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 shadow-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <motion.div 
          className="absolute top-3 left-3 bg-gradient-to-r from-primary to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg"
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? [0, -5, 5, 0] : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <Tag className="w-3 h-3" />
          {discount}
        </motion.div>
        
        {/* Overlay with CTA button on hover */}
        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="bg-white text-primary px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-xl hover:bg-primary hover:text-white transition-colors"
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShoppingCart className="w-4 h-4" />
            Book Now
          </motion.button>
        </motion.div>
      </div>
      
      <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <div className="flex items-center gap-2 text-sm mb-1">
        <span className="line-through text-muted-foreground">{originalPrice}</span>
        <motion.span 
          className="text-primary font-extrabold text-lg"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {discountedPrice}
        </motion.span>
      </div>
      <p className="text-xs text-muted-foreground flex items-center gap-1">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Valid until {validUntil}
      </p>
    </motion.div>
  )
}
