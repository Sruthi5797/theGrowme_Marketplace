"use client"

import { use } from "react"
import { Header } from "@/components/header"
import { ProfessionalCard } from "@/components/professional-card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

const categoryData = {
  massage: {
    title: "Massage Therapy",
    description: "Relax and rejuvenate with professional massage services",
    professionals: [
      {
        id: "sarah-massage",
        image: "/massage-therapy-hands.jpg",
        title: "Therapeutic Massage with Sarah",
        location: "Downtown, New York",
        price: "From $85 per session",
        rating: 5.0,
        bookings: 428,
        reviews: 367,
      },
      {
        id: "john-massage",
        image: "/massage-therapy-hands.jpg",
        title: "Deep Tissue Massage with John",
        location: "Brooklyn, New York",
        price: "From $95 per session",
        rating: 4.97,
        bookings: 312,
        reviews: 278,
      },
      {
        id: "maria-massage",
        image: "/massage-therapy-hands.jpg",
        title: "Swedish Massage with Maria",
        location: "Queens, New York",
        price: "From $80 per session",
        rating: 4.95,
        bookings: 289,
        reviews: 245,
      },
    ],
  },
  makeup: {
    title: "Makeup Artists",
    description: "Professional makeup services for any occasion",
    professionals: [
      {
        id: "emma-makeup",
        image: "/makeup-artist-applying-makeup.jpg",
        title: "Professional Makeup by Emma",
        location: "Manhattan, New York",
        price: "From $120 per session",
        rating: 4.97,
        bookings: 389,
        reviews: 312,
      },
      {
        id: "olivia-makeup",
        image: "/makeup-artist-applying-makeup.jpg",
        title: "Bridal Makeup by Olivia",
        location: "Brooklyn, New York",
        price: "From $150 per session",
        rating: 5.0,
        bookings: 456,
        reviews: 401,
      },
      {
        id: "sophia-makeup",
        image: "/makeup-artist-applying-makeup.jpg",
        title: "Editorial Makeup by Sophia",
        location: "Manhattan, New York",
        price: "From $135 per session",
        rating: 4.98,
        bookings: 367,
        reviews: 298,
      },
    ],
  },
  hair: {
    title: "Hair Styling",
    description: "Expert hair styling and coloring services",
    professionals: [
      {
        id: "michael-hair",
        image: "/hairstylist-cutting-hair.jpg",
        title: "Hair Styling with Michael",
        location: "Brooklyn, New York",
        price: "From $95 per session",
        rating: 5.0,
        bookings: 467,
        reviews: 401,
      },
      {
        id: "jessica-hair",
        image: "/hairstylist-cutting-hair.jpg",
        title: "Color Specialist Jessica",
        location: "Manhattan, New York",
        price: "From $120 per session",
        rating: 4.96,
        bookings: 378,
        reviews: 312,
      },
      {
        id: "david-hair",
        image: "/hairstylist-cutting-hair.jpg",
        title: "Men's Grooming with David",
        location: "SoHo, New York",
        price: "From $75 per session",
        rating: 4.94,
        bookings: 289,
        reviews: 234,
      },
    ],
  },
  nails: {
    title: "Nail Care",
    description: "Beautiful nail art and manicure services",
    professionals: [
      {
        id: "sophia-nails",
        image: "/nail-care-manicure.jpg",
        title: "Nail Art by Sophia",
        location: "SoHo, New York",
        price: "From $65 per session",
        rating: 4.92,
        bookings: 234,
        reviews: 198,
      },
      {
        id: "nina-nails",
        image: "/nail-care-manicure.jpg",
        title: "Gel Nails by Nina",
        location: "Brooklyn, New York",
        price: "From $70 per session",
        rating: 4.95,
        bookings: 267,
        reviews: 223,
      },
      {
        id: "alex-nails",
        image: "/nail-care-manicure.jpg",
        title: "Acrylic Nails by Alex",
        location: "Manhattan, New York",
        price: "From $80 per session",
        rating: 4.93,
        bookings: 298,
        reviews: 245,
      },
    ],
  },
  spa: {
    title: "Spa Treatments",
    description: "Luxurious spa experiences for ultimate relaxation",
    professionals: [
      {
        id: "lisa-spa",
        image: "/spa-treatment-with-stones.jpg",
        title: "Luxury Spa Experience with Lisa",
        location: "Upper East Side, New York",
        price: "From $150 per session",
        rating: 4.95,
        bookings: 356,
        reviews: 298,
      },
      {
        id: "amanda-spa",
        image: "/spa-treatment-with-stones.jpg",
        title: "Holistic Spa with Amanda",
        location: "Tribeca, New York",
        price: "From $140 per session",
        rating: 4.97,
        bookings: 312,
        reviews: 267,
      },
      {
        id: "rachel-spa",
        image: "/spa-treatment-with-stones.jpg",
        title: "Aromatherapy Spa with Rachel",
        location: "Chelsea, New York",
        price: "From $130 per session",
        rating: 4.94,
        bookings: 289,
        reviews: 234,
      },
    ],
  },
  skincare: {
    title: "Skincare Specialists",
    description: "Expert skincare treatments and consultations",
    professionals: [
      {
        id: "olivia-skincare",
        image: "/makeup-artist-applying-makeup.jpg",
        title: "Skincare Specialist Olivia",
        location: "Upper West Side, New York",
        price: "From $110 per session",
        rating: 4.98,
        bookings: 412,
        reviews: 356,
      },
      {
        id: "emily-skincare",
        image: "/makeup-artist-applying-makeup.jpg",
        title: "Facial Expert Emily",
        location: "Manhattan, New York",
        price: "From $105 per session",
        rating: 4.96,
        bookings: 367,
        reviews: 298,
      },
      {
        id: "sarah-skincare",
        image: "/makeup-artist-applying-makeup.jpg",
        title: "Anti-Aging Specialist Sarah",
        location: "Brooklyn, New York",
        price: "From $125 per session",
        rating: 4.99,
        bookings: 445,
        reviews: 389,
      },
    ],
  },
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
        bookings: 245,
        reviews: 189,
      },
      {
        id: "james-yoga",
        image: "/spa-treatment-with-stones.jpg",
        title: "Power Yoga with James",
        location: "Manhattan, New York",
        price: "From $75 per session",
        rating: 4.97,
        bookings: 312,
        reviews: 267,
      },
      {
        id: "lisa-yoga",
        image: "/spa-treatment-with-stones.jpg",
        title: "Restorative Yoga with Lisa",
        location: "Queens, New York",
        price: "From $65 per session",
        rating: 4.95,
        bookings: 234,
        reviews: 198,
      },
    ],
  },
  pilates: {
    title: "Pilates Instructors",
    description: "Strengthen your core with professional Pilates training",
    professionals: [
      {
        id: "alex-pilates",
        image: "/person-lifting-weights-training.jpg",
        title: "Pilates Training with Alex",
        location: "Manhattan, New York",
        price: "From $85 per session",
        rating: 4.97,
        bookings: 312,
        reviews: 256,
      },
      {
        id: "jennifer-pilates",
        image: "/person-lifting-weights-training.jpg",
        title: "Reformer Pilates with Jennifer",
        location: "Brooklyn, New York",
        price: "From $90 per session",
        rating: 4.98,
        bookings: 356,
        reviews: 289,
      },
      {
        id: "mark-pilates",
        image: "/person-lifting-weights-training.jpg",
        title: "Mat Pilates with Mark",
        location: "Chelsea, New York",
        price: "From $80 per session",
        rating: 4.96,
        bookings: 278,
        reviews: 234,
      },
    ],
  },
  nutrition: {
    title: "Nutritionists",
    description: "Personalized nutrition plans for your wellness goals",
    professionals: [
      {
        id: "rachel-nutrition",
        image: "/spa-treatment-with-stones.jpg",
        title: "Nutrition Coaching with Rachel",
        location: "Queens, New York",
        price: "From $90 per session",
        rating: 4.94,
        bookings: 178,
        reviews: 142,
      },
      {
        id: "daniel-nutrition",
        image: "/spa-treatment-with-stones.jpg",
        title: "Sports Nutrition with Daniel",
        location: "Manhattan, New York",
        price: "From $100 per session",
        rating: 4.97,
        bookings: 234,
        reviews: 198,
      },
      {
        id: "sophia-nutrition",
        image: "/spa-treatment-with-stones.jpg",
        title: "Plant-Based Nutrition with Sophia",
        location: "Brooklyn, New York",
        price: "From $85 per session",
        rating: 4.95,
        bookings: 201,
        reviews: 167,
      },
    ],
  },
  fitness: {
    title: "Personal Trainers",
    description: "Achieve your fitness goals with expert guidance",
    professionals: [
      {
        id: "david-training",
        image: "/person-lifting-weights-training.jpg",
        title: "Personal Training with David",
        location: "Chelsea, New York",
        price: "From $100 per session",
        rating: 4.98,
        bookings: 521,
        reviews: 445,
      },
      {
        id: "mike-training",
        image: "/person-lifting-weights-training.jpg",
        title: "Strength Training with Mike",
        location: "Brooklyn, New York",
        price: "From $95 per session",
        rating: 4.96,
        bookings: 412,
        reviews: 356,
      },
      {
        id: "sarah-training",
        image: "/person-lifting-weights-training.jpg",
        title: "HIIT Training with Sarah",
        location: "Manhattan, New York",
        price: "From $90 per session",
        rating: 4.97,
        bookings: 378,
        reviews: 312,
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
