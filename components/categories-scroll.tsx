"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const categories = [
  { name: "All Services", slug: "", image: "/wellness.jpg" },
  { name: "Yoga", slug: "yoga", image: "/yoga-women.jpg" },
  { name: "Pilates", slug: "pilates", image: "/woman-doing-pilates-with-ball.jpg" },
]

export function CategoriesScroll() {
  return (
    <div className="border-b border-border bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
        <h3 className="text-lg font-semibold mb-4">Browse by Category</h3>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              href={category.slug ? `/category/${category.slug}` : "/#professionals"}
              className="flex flex-col items-center gap-2 flex-shrink-0 group"
            >
              <motion.div
                className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-all shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
              </motion.div>
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
