"use client"

import type React from "react"

import { Users, Calendar, Leaf } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

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
    <div
      className="flex-shrink-0 w-80 group cursor-pointer"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-semibold transition-transform hover:scale-105">
              View / Book
            </button>
          </div>
        )}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform z-10"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={isFavorite ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            className={isFavorite ? "text-primary" : "text-white"}
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            <path
              d="M12 8c0-2 1-3 2-3s2 1 2 3-1 3-2 3-2-1-2-3z"
              fill={isFavorite ? "currentColor" : "white"}
              opacity="0.7"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-start justify-between mb-1">
        <h3 className="font-semibold text-base flex-1">{title}</h3>
        {rating && (
          <div className="flex items-center gap-1 text-sm">
            <Leaf className="w-4 h-4 fill-current text-lime-500" />
            <span>{rating}</span>
          </div>
        )}
      </div>
      <p className="text-sm text-muted-foreground mb-1">{location}</p>
      {(bookings || reviews) && (
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-1">
          {bookings && (
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{bookings} bookings</span>
            </div>
          )}
          {reviews && (
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>{reviews} reviews</span>
            </div>
          )}
        </div>
      )}
      <p className="text-sm">
        <span className="font-semibold">{price}</span>
      </p>
    </div>
  )
}
