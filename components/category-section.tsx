import { ServiceCategory } from "./service-category"
import { ProfessionalCard } from "./professional-card"

interface CategorySectionProps {
  title: string
  categories: Array<{
    image: string
    title: string
    availability: string
  }>
  professionals: Array<{
    id: string
    image: string
    title: string
    location: string
    price: string
    rating: number
  }>
}

export function CategorySection({ title, categories, professionals }: CategorySectionProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-foreground">{title}</h3>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {categories.map((category, index) => (
          <ServiceCategory key={index} {...category} />
        ))}
      </div>

      {/* Example Professionals */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4 text-muted-foreground">Featured {title} Professionals</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionals.map((professional, index) => (
            <ProfessionalCard key={index} {...professional} />
          ))}
        </div>
      </div>
    </div>
  )
}
