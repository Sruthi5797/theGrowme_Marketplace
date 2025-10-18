"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { CTABanner } from "@/components/cta-banner"
import { SearchBar } from "@/components/search-bar"
import { CategoriesScroll } from "@/components/categories-scroll"
import { HeroSection } from "@/components/hero-section"
import { NearMeSection } from "@/components/near-me-section"
import { CategorySelector } from "@/components/category-selector"
import { DiscountCard } from "@/components/discount-card"
import { ClassCard } from "@/components/class-card"
import { ProfessionalCard } from "@/components/professional-card"
import { CollaborationCard } from "@/components/collaboration-card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<"beauty" | "wellness">("wellness")

  const wellnessProfessionals = [
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
      id: "luna-vinyasa",
      image: "/spa-treatment-with-stones.jpg",
      title: "Vinyasa Flow with Luna",
      location: "Brooklyn, New York",
      price: "From $75 per session",
      rating: 4.98,
      bookings: 2156,
      reviews: 142,
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
  ]

  const beautyProfessionals: any[] = []

  const nearMeEvents = [
    {
      id: "workshop-1",
      image: "/yoga-women.jpg",
      title: "Vinyasa Flow Workshop for Beginners",
      type: "workshop" as const,
      location: "Brooklyn Yoga Studio, NY",
      date: "Dec 18",
      time: "2:00 PM",
      attendees: 18,
      price: "$35",
    },
    {
      id: "meetup-1",
      image: "/spa-treatment-with-stones.jpg",
      title: "Meditation & Mindfulness Meetup",
      type: "meetup" as const,
      location: "Central Park, NY",
      date: "Dec 19",
      time: "10:00 AM",
      attendees: 28,
      price: "Free",
    },
    {
      id: "workshop-2",
      image: "/woman-doing-pilates-with-ball.jpg",
      title: "Pilates Mat Work Fundamentals",
      type: "workshop" as const,
      location: "Manhattan Pilates Studio, NY",
      date: "Dec 20",
      time: "3:00 PM",
      attendees: 15,
      price: "$40",
    },
    {
      id: "class-1",
      image: "/yoga-women.jpg",
      title: "Power Yoga Group Class",
      type: "class" as const,
      location: "West Village Yoga, NY",
      date: "Dec 21",
      time: "6:00 PM",
      attendees: 22,
      price: "$25",
    },
    {
      id: "meetup-2",
      image: "/spa-treatment-with-stones.jpg",
      title: "Yoga & Wellness Community Gathering",
      type: "meetup" as const,
      location: "SoHo Wellness Center, NY",
      date: "Dec 22",
      time: "5:00 PM",
      attendees: 30,
      price: "Free",
    },
  ]

  const discounts = [
    {
      image: "/yoga-women.jpg",
      title: "10-Class Yoga Package",
      discount: "30% OFF",
      originalPrice: "$700",
      discountedPrice: "$490",
      validUntil: "Dec 31",
    },
    {
      image: "/woman-doing-pilates-with-ball.jpg",
      title: "8-Session Pilates Reformer Pack",
      discount: "25% OFF",
      originalPrice: "$680",
      discountedPrice: "$510",
      validUntil: "Dec 25",
    },
    {
      image: "/spa-treatment-with-stones.jpg",
      title: "Monthly Unlimited Yoga Pass",
      discount: "20% OFF",
      originalPrice: "$250",
      discountedPrice: "$200",
      validUntil: "Jan 15",
    },
    {
      image: "/woman-doing-pilates-with-ball.jpg",
      title: "Private Pilates 5-Pack",
      discount: "15% OFF",
      originalPrice: "$425",
      discountedPrice: "$361",
      validUntil: "Dec 28",
    },
    {
      image: "/yoga-women.jpg",
      title: "Yoga & Meditation Starter Pack",
      discount: "20% OFF",
      originalPrice: "$150",
      discountedPrice: "$120",
      validUntil: "Dec 30",
    },
  ]

  const onlineClasses = [
    {
      image: "/yoga-women.jpg",
      title: "Vinyasa Flow Live Class",
      instructor: "Luna Martinez",
      date: "Dec 20, 6:00 PM",
      duration: "60 min",
      price: "$20",
    },
    {
      image: "/woman-doing-pilates-with-ball.jpg",
      title: "Core Strength Pilates",
      instructor: "Sophia Anderson",
      date: "Dec 22, 7:00 PM",
      duration: "45 min",
      price: "$22",
    },
    {
      image: "/spa-treatment-with-stones.jpg",
      title: "Guided Meditation & Breathwork",
      instructor: "Maya Chen",
      date: "Dec 23, 8:00 AM",
      duration: "30 min",
      price: "$15",
    },
    {
      image: "/yoga-women.jpg",
      title: "Restorative Yoga Evening Session",
      instructor: "Luna Martinez",
      date: "Dec 21, 7:30 PM",
      duration: "60 min",
      price: "$20",
    },
  ]

  const collaborations = [
    {
      id: "yoga-pilates-fusion",
      professional1: {
        name: "Maya Chen",
        role: "Yoga Instructor",
        image: "/yoga-women.jpg",
      },
      professional2: {
        name: "Sophia Anderson",
        role: "Pilates Instructor",
        image: "/woman-doing-pilates-with-ball.jpg",
      },
      title: "Yoga & Pilates Fusion",
      description:
        "Experience the best of both worlds with integrated yoga and Pilates sessions designed to build flexibility, strength, and mindfulness.",
      price: "$240",
      duration: "4 weeks",
    },
    {
      id: "mindful-movement",
      professional1: {
        name: "Luna Martinez",
        role: "Vinyasa Yoga Teacher",
        image: "/yoga-women.jpg",
      },
      professional2: {
        name: "Maya Chen",
        role: "Meditation Guide",
        image: "/spa-treatment-with-stones.jpg",
      },
      title: "Mindful Movement & Meditation",
      description:
        "Combine flowing vinyasa yoga with guided meditation practices for complete mind-body wellness and stress relief.",
      price: "$220",
      duration: "6 weeks",
    },
    {
      id: "core-flexibility",
      professional1: {
        name: "Kai Thompson",
        role: "Barre & Pilates Instructor",
        image: "/woman-doing-pilates-with-ball.jpg",
      },
      professional2: {
        name: "Luna Martinez",
        role: "Yoga Teacher",
        image: "/yoga-women.jpg",
      },
      title: "Core Strength & Flexibility",
      description:
        "Build a strong, flexible body with targeted Pilates core work and yoga stretching sequences designed to complement each other.",
      price: "$265",
      duration: "8 weeks",
    },
  ]

  const displayedProfessionals = selectedCategory === "wellness" ? wellnessProfessionals : beautyProfessionals

  return (
    <div className="min-h-screen w-full bg-background overflow-x-hidden">
      <Header />
      <CTABanner />
      <SearchBar />
      <CategoriesScroll />

      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <NearMeSection events={nearMeEvents} />

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8">Browse by Category</h2>
          <CategorySelector onCategoryChange={setSelectedCategory} />
        </section>

        <section id="professionals" className="mb-20">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-3">
              {selectedCategory === "wellness" ? "Wellness" : "Beauty"} Professionals
            </h2>
            <p className="text-lg text-muted-foreground">Top-rated experts ready to serve you</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProfessionals.map((professional) => (
              <ProfessionalCard key={professional.id} {...professional} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="bg-gradient-to-br from-primary/10 via-pink-50 to-rose-50 rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3">Featured This Week</h2>
                <p className="text-base sm:text-lg text-muted-foreground">Hand-picked professionals for exceptional service</p>
              </div>
              <div className="flex gap-2">
                <motion.button
                  className="p-2 border border-border rounded-full bg-white shadow-md"
                  whileHover={{ scale: 1.1, x: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>
                <motion.button
                  className="p-2 border border-border rounded-full bg-white shadow-md"
                  whileHover={{ scale: 1.1, x: 3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
              {[...wellnessProfessionals.slice(0, 3), ...beautyProfessionals.slice(0, 3)].map((professional) => (
                <div key={professional.id} className="flex-shrink-0 w-80">
                  <ProfessionalCard {...professional} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="discounts" className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-3">
                <Link href="/discounts" className="hover:text-primary transition-colors">
                  Exclusive Discounts
                </Link>
              </h2>
              <p className="text-lg text-muted-foreground">Limited-time offers from our professionals</p>
            </div>
            <div className="flex gap-2">
              <motion.button
                className="p-2 border border-border rounded-full bg-white shadow-md"
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                className="p-2 border border-border rounded-full bg-white shadow-md"
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {discounts.map((discount, index) => (
              <DiscountCard key={index} {...discount} />
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-3">Upcoming Live Classes</h2>
              <p className="text-lg text-muted-foreground">Join from the comfort of your home</p>
            </div>
            <div className="flex gap-2">
              <motion.button
                className="p-2 border border-border rounded-full bg-white shadow-md"
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                className="p-2 border border-border rounded-full bg-white shadow-md"
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {onlineClasses.map((classItem, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <ClassCard {...classItem} />
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-3">Collaboration Packages</h2>
              <p className="text-lg text-muted-foreground">
                Experience the best of both worlds with our curated professional partnerships
              </p>
            </div>
            <div className="flex gap-2">
              <motion.button
                className="p-2 border border-border rounded-full bg-white shadow-md"
                whileHover={{ scale: 1.1, x: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
              <motion.button
                className="p-2 border border-border rounded-full bg-white shadow-md"
                whileHover={{ scale: 1.1, x: 3 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {collaborations.map((collaboration) => (
              <CollaborationCard key={collaboration.id} {...collaboration} />
            ))}
          </div>
        </section>

        <HeroSection />
      </main>

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
