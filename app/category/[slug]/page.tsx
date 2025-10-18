"use client"

import { use } from "react"
import { Header } from "@/components/header"
import { ProfessionalCard } from "@/components/professional-card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const categoryData = {
  yoga: {
    title: "Yoga Instructors",
    description: "Find your balance with expert yoga instruction",
    professionals: [
      {
        id: "maya-yoga",
        image: "/spa-treatment-with-stones.jpg",
        title: "Yoga & Meditation with Maya",
        location: "Brooklyn, New York",
        price: "From $70 per session",
        rating: 4.99,
        bookings: 1543,
        reviews: 134,
      },
      {
        id: "luna-vinyasa",
        image: "/spa-treatment-with-stones.jpg",
        title: "Vinyasa Flow with Luna",
        location: "Brooklyn, New York",
        price: "From $75 per session",
        rating: 4.98,
        bookings: 2156,
        reviews: 142,
      },
    ],
  },
  pilates: {
    title: "Pilates Instructors",
    description: "Strengthen your core with professional Pilates training",
    professionals: [
      {
        id: "sophia-pilates",
        image: "/person-lifting-weights-training.jpg",
        title: "Pilates Training with Sophia",
        location: "Manhattan, New York",
        price: "From $85 per session",
        rating: 4.97,
        bookings: 1834,
        reviews: 156,
      },
      {
        id: "kai-pilates",
        image: "/person-lifting-weights-training.jpg",
        title: "Barre & Pilates with Kai",
        location: "West Village, New York",
        price: "From $70 per session",
        rating: 4.96,
        bookings: 1456,
        reviews: 128,
      },
    ],
  },
}

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const category = categoryData[slug as keyof typeof categoryData]

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
            <Link href="/" className="text-primary hover:underline">
              Return to Home
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">{category.title}</h1>
          <p className="text-xl text-muted-foreground">{category.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.professionals.map((professional) => (
            <ProfessionalCard key={professional.id} {...professional} />
          ))}
        </div>
      </main>
    </div>
  )
}
