"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Heart, Sparkles } from "lucide-react"

interface CollaborationCardProps {
  id: string
  professional1: {
    name: string
    role: string
    image: string
  }
  professional2: {
    name: string
    role: string
    image: string
  }
  title: string
  description: string
  price: string
  duration?: string
}

export function CollaborationCard({
  id,
  professional1,
  professional2,
  title,
  description,
  price,
  duration,
}: CollaborationCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    // Navigate to a collaboration booking page or show modal
    console.log("[v0] Collaboration clicked:", id)
  }

  return (
    <motion.div
      className="flex-shrink-0 w-96 bg-white rounded-2xl border border-border overflow-hidden shadow-md cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-center mb-6 relative">
          <div className="relative flex items-center">
            {/* Professional 1 Avatar */}
            <motion.div
              className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-10"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={professional1.image || "/placeholder.svg"}
                alt={professional1.name}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Plus Sign with animation */}
            <motion.div
              className="mx-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-lg"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-5 h-5 fill-current" />
            </motion.div>

            {/* Professional 2 Avatar */}
            <motion.div
              className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-10"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={professional2.image || "/placeholder.svg"}
                alt={professional2.name}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Sparkles decoration */}
          <motion.div
            className="absolute -top-2 -right-2"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-5 h-5 text-amber-500" />
          </motion.div>
        </div>

        <motion.div
          className="flex items-center justify-between mb-4 text-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="text-center flex-1">
            <p className="font-semibold text-foreground">{professional1.name}</p>
            <p className="text-muted-foreground text-xs">{professional1.role}</p>
          </div>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-border to-transparent mx-2" />
          <div className="text-center flex-1">
            <p className="font-semibold text-foreground">{professional2.name}</p>
            <p className="text-muted-foreground text-xs">{professional2.role}</p>
          </div>
        </motion.div>

        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </motion.div>

        <motion.div
          className="flex items-center justify-between mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div>
            <p className="text-xs text-muted-foreground mb-1">Package Price</p>
            <motion.p
              className="font-bold text-primary text-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {price}
            </motion.p>
          </div>
          {duration && (
            <div className="text-right">
              <p className="text-xs text-muted-foreground mb-1">Duration</p>
              <p className="font-semibold text-sm">{duration}</p>
            </div>
          )}
        </motion.div>

        <motion.button
          className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
            isHovered
              ? "bg-gradient-to-r from-primary to-emerald-500 text-white shadow-lg"
              : "bg-primary/10 text-primary"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isHovered ? "Book Together 💫" : "Learn More"}
        </motion.button>
      </div>
    </motion.div>
  )
}
