import { Heart, Leaf } from "lucide-react"

interface ServiceCardProps {
  image: string
  title: string
  host: string
  price: string
  rating?: number
}

export function ServiceCard({ image, title, host, price, rating }: ServiceCardProps) {
  return (
    <div className="flex-shrink-0 w-72 group cursor-pointer">
      <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-3 right-3 p-2 hover:scale-110 transition-transform">
          <Heart className="w-5 h-5 stroke-white stroke-2 fill-transparent hover:fill-white/20" />
        </button>
      </div>
      <div className="space-y-1">
        <h3 className="font-medium text-sm line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{host}</p>
        <p className="text-sm text-muted-foreground">{price}</p>
        {rating && (
          <div className="flex items-center gap-1">
            <Leaf className="w-3 h-3 fill-current text-primary" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        )}
      </div>
    </div>
  )
}
