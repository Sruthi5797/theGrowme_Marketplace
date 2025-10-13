"use client"

import { MapPin, Users, Clock, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface NearMeEvent {
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

interface NearMeSectionProps {
  events: NearMeEvent[]
}

export function NearMeSection({ events }: NearMeSectionProps) {
  const [selectedLocation, setSelectedLocation] = useState("Brooklyn, NY")
  const [isLocationOpen, setIsLocationOpen] = useState(false)

  const locations = [
    "Brooklyn, NY",
    "Manhattan, NY",
    "Queens, NY",
    "Bronx, NY",
    "Staten Island, NY",
    "Jersey City, NJ",
    "Hoboken, NJ",
  ]

  return (
    <div className="bg-gradient-to-br from-primary/5 via-emerald-50/50 to-green-50/30 rounded-3xl p-8 mb-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <MapPin className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Near Me</h2>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsLocationOpen(!isLocationOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-border hover:border-primary transition-colors"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">{selectedLocation}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {isLocationOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-border z-10">
              {locations.map((location) => (
                <button
                  key={location}
                  onClick={() => {
                    setSelectedLocation(location)
                    setIsLocationOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors first:rounded-t-xl last:rounded-b-xl ${
                    selectedLocation === location ? "bg-primary/5 text-primary font-medium" : ""
                  }`}
                >
                  {location}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <p className="text-muted-foreground mb-6">Events and workshops happening in your area right now</p>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {events.map((event) => (
          <Link
            key={event.id}
            href={`/event/${event.id}`}
            className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
          >
            <div className="relative h-40">
              <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
              <div className="absolute top-3 right-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                {event.type}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-sm mb-3 line-clamp-2">{event.title}</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                <MapPin className="w-3 h-3" />
                <span className="truncate text-fuchsia-950 text-sm">{event.location}</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span>
                      {event.date}, {event.time}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3 text-muted-foreground" />
                    <span>{event.attendees}</span>
                  </div>
                </div>
                <span className="text-destructive font-bold">{event.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
