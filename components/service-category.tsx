interface ServiceCategoryProps {
  image: string
  title: string
  availability: string
}

export function ServiceCategory({ image, title, availability }: ServiceCategoryProps) {
  return (
    <button className="text-left group w-full">
      <div className="aspect-square rounded-xl overflow-hidden mb-3 border border-border">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold text-base mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{availability}</p>
    </button>
  )
}
