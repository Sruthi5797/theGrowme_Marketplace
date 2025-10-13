"use client"

import { Calendar, MapPin, Users } from "lucide-react"
import Image from "next/image"

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
    <div className="flex-shrink-0 w-80 group cursor-pointer hover:shadow-lg transition-shadow rounded-xl overflow-hidden border border-border bg-card">
      <div className="relative aspect-[4/3]">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase">
          {type}
        </div>
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
          {price}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-base mb-3 line-clamp-2">{title}</h3>
        <div className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>
              {date} at {time}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span>{attendees} attending</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground py-2 rounded-lg font-medium transition-colors">
          Join Event
        </button>
      </div>
    </div>
  )
}
