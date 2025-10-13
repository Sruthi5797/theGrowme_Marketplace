"use client"

import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "All Services", slug: "", image: "/wellness.jpg" },
  { name: "Massage", slug: "massage", image: "/massage-therapy-hands.jpg" },
  { name: "Hair Styling", slug: "hair", image: "/hairstylist-cutting-hair.jpg" },
  { name: "Fitness", slug: "fitness", image: "/person-lifting-weights-training.jpg" },
  { name: "Yoga", slug: "yoga", image: "/yoga-women.jpg" },
  { name: "Spa", slug: "spa", image: "/spa-treatment-with-stones.jpg" },
  { name: "Makeup", slug: "makeup", image: "/makeup-artist-applying-makeup.jpg" },
  { name: "Nails", slug: "nails", image: "/nail-care-manicure.jpg" },
  { name: "Pilates", slug: "pilates", image: "/woman-doing-pilates-with-ball.jpg" },
  { name: "Nutrition", slug: "nutrition", image: "/prepared-healthy-meal-in-container.jpg" },
  { name: "More", slug: "more", image: "" },
]

export function CategoriesScroll() {
  return (
    <div className="border-b border-border bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
        <h3 className="text-lg font-semibold mb-4">Browse by Category</h3>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.slug ? `/category/${category.slug}` : "/#professionals"}
              className="flex flex-col items-center gap-2 flex-shrink-0 group"
            >
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all">
                <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
              </div>
              <span className="text-xs font-medium text-center whitespace-nowrap">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
