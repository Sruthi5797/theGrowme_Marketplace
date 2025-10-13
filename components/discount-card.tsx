import { Tag } from "lucide-react"
import Image from "next/image"

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
  return (
    <div className="flex-shrink-0 w-80 group cursor-pointer">
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <Tag className="w-3 h-3" />
          {discount}
        </div>
      </div>
      <h3 className="font-semibold text-base mb-1">{title}</h3>
      <div className="flex items-center gap-2 text-sm">
        <span className="line-through text-muted-foreground">{originalPrice}</span>
        <span className="text-sidebar-ring font-extrabold">{discountedPrice}</span>
      </div>
      <p className="text-xs text-muted-foreground mt-1">Valid until {validUntil}</p>
    </div>
  )
}
