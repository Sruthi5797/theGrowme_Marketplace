"use client"

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

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
    <div
      className="flex-shrink-0 w-96 bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="p-6">
        <div className="flex items-center justify-center mb-6 relative">
          <div className="relative flex items-center">
            {/* Professional 1 Avatar */}
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md z-10">
              <Image
                src={professional1.image || "/placeholder.svg"}
                alt={professional1.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Plus Sign */}
            <div className="mx-4 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-md">
              +
            </div>

            {/* Professional 2 Avatar */}
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md z-10">
              <Image
                src={professional2.image || "/placeholder.svg"}
                alt={professional2.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 text-sm">
          <div className="text-center flex-1">
            <p className="font-semibold text-foreground">{professional1.name}</p>
            <p className="text-muted-foreground text-xs">{professional1.role}</p>
          </div>
          <div className="w-px h-8 bg-border mx-2" />
          <div className="text-center flex-1">
            <p className="font-semibold text-foreground">{professional2.name}</p>
            <p className="text-muted-foreground text-xs">{professional2.role}</p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-bold text-lg mb-2 text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Package Price</p>
            <p className="font-bold text-sidebar-primary text-xl">{price}</p>
          </div>
          {duration && (
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-semibold text-sm">{duration}</p>
            </div>
          )}
        </div>

        <button
          className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
            isHovered ? "bg-primary text-primary-foreground shadow-md scale-105" : "bg-primary/10 text-primary"
          }`}
        >
          {isHovered ? "Book Together" : "Learn More"}
        </button>
      </div>
    </div>
  )
}
