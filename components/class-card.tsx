import { Video, Calendar, Bell } from "lucide-react"
import Image from "next/image"

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
    <div className="flex-shrink-0 w-80 group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Video className="w-3 h-3" />
          Live Class
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-base mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2">with {instructor}</p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <Calendar className="w-3 h-3" />
          <span>{date}</span>
          <span>•</span>
          <span>{duration}</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-base font-semibold text-sidebar-primary">{price}</p>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-primary hover:bg-primary/90 text-white py-2 rounded-lg text-sm font-semibold transition-colors">
            Join
          </button>
          <button className="px-3 border border-border hover:bg-secondary rounded-lg transition-colors">
            <Bell className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  )
}
