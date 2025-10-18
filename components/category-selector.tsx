"use client"

import { Sparkles } from "lucide-react"

interface CategorySelectorProps {
  onCategoryChange: (category: "beauty" | "wellness") => void
}

export function CategorySelector({ onCategoryChange }: CategorySelectorProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-primary bg-primary/5 shadow-md">
        <Sparkles className="w-6 h-6 text-primary" />
        <span className="text-lg font-semibold text-primary">
          Yoga & Pilates Instructors
        </span>
      </div>
    </div>
  )
}
