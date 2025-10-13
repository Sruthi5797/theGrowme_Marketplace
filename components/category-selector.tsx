"use client"

import { useState } from "react"
import { Sparkles, Heart } from "lucide-react"

interface CategorySelectorProps {
  onCategoryChange: (category: "beauty" | "wellness") => void
}

export function CategorySelector({ onCategoryChange }: CategorySelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<"beauty" | "wellness">("wellness")

  const handleCategoryClick = (category: "beauty" | "wellness") => {
    setSelectedCategory(category)
    onCategoryChange(category)
  }

  return (
    <div className="flex justify-center gap-6 mb-12">
      <button
        onClick={() => handleCategoryClick("wellness")}
        className={`flex items-center gap-3 px-8 py-4 rounded-2xl border-2 transition-all duration-200 ${
          selectedCategory === "wellness"
            ? "border-primary bg-primary/5 shadow-md"
            : "border-border hover:border-primary/50 hover:bg-secondary"
        }`}
      >
        <Sparkles className={`w-6 h-6 ${selectedCategory === "wellness" ? "text-primary" : "text-muted-foreground"}`} />
        <span
          className={`text-lg font-semibold ${selectedCategory === "wellness" ? "text-primary" : "text-foreground"}`}
        >
          Wellness
        </span>
      </button>

      <button
        onClick={() => handleCategoryClick("beauty")}
        className={`flex items-center gap-3 px-8 py-4 rounded-2xl border-2 transition-all duration-200 ${
          selectedCategory === "beauty"
            ? "border-primary bg-primary/5 shadow-md"
            : "border-border hover:border-primary/50 hover:bg-secondary"
        }`}
      >
        <Heart className={`w-6 h-6 ${selectedCategory === "beauty" ? "text-primary" : "text-muted-foreground"}`} />
        <span className={`text-lg font-semibold ${selectedCategory === "beauty" ? "text-primary" : "text-foreground"}`}>
          Beauty
        </span>
      </button>
    </div>
  )
}
