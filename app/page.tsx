"use client"

import { useState } from "react"
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
      id: "rachel-nutrition",
      image: "/spa-treatment-with-stones.jpg",
      title: "Nutrition Coaching with Rachel",
      location: "Queens, New York",
      price: "From $90 per session",
      rating: 4.94,
      bookings: 178,
      reviews: 142,
    },
  ]

  const beautyProfessionals = [
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
      id: "alex-brows",
      image: "/makeup-artist-applying-makeup.jpg",
      title: "Eyebrow Artistry by Alex",
      location: "Tribeca, New York",
      price: "From $75 per session",
      rating: 4.93,
      bookings: 289,
      reviews: 245,
    },
    {
      id: "nina-lashes",
      image: "/makeup-artist-applying-makeup.jpg",
      title: "Lash Extensions with Nina",
      location: "East Village, New York",
      price: "From $85 per session",
      rating: 4.96,
      bookings: 334,
      reviews: 278,
    },
  ]

  const nearMeEvents = [
    {
      id: "workshop-1",
      image: "/makeup-artist-applying-makeup.jpg",
      title: "Natural Makeup Workshop for Beginners",
      type: "workshop" as const,
      location: "Manhattan Studio, NY",
      date: "Dec 18",
      time: "2:00 PM",
      attendees: 12,
      price: "$45",
    },
    {
      id: "meetup-1",
      image: "/spa-treatment-with-stones.jpg",
      title: "Wellness Community Meetup & Meditation",
      type: "meetup" as const,
      location: "Central Park, NY",
      date: "Dec 19",
      time: "10:00 AM",
      attendees: 28,
      price: "Free",
    },
    {
      id: "workshop-2",
      image: "/hairstylist-cutting-hair.jpg",
      title: "Hair Styling Techniques Masterclass",
      type: "workshop" as const,
      location: "Brooklyn Salon, NY",
      date: "Dec 20",
      time: "3:00 PM",
      attendees: 15,
      price: "$60",
    },
    {
      id: "class-1",
      image: "/person-lifting-weights-training.jpg",
      title: "Group Fitness Bootcamp",
      type: "class" as const,
      location: "Chelsea Gym, NY",
      date: "Dec 21",
      time: "6:00 PM",
      attendees: 20,
      price: "$25",
    },
    {
      id: "meetup-2",
      image: "/massage-therapy-hands.jpg",
      title: "Self-Care & Wellness Networking",
      type: "meetup" as const,
      location: "SoHo Cafe, NY",
      date: "Dec 22",
      time: "5:00 PM",
      attendees: 35,
      price: "Free",
    },
  ]

  const discounts = [
    {
      image: "/spa-treatment-with-stones.jpg",
      title: "Luxury Spa Package",
      discount: "30% OFF",
      originalPrice: "$200",
      discountedPrice: "$140",
      validUntil: "Dec 31",
    },
    {
      image: "/massage-therapy-hands.jpg",
      title: "Deep Tissue Massage",
      discount: "25% OFF",
      originalPrice: "$120",
      discountedPrice: "$90",
      validUntil: "Dec 25",
    },
    {
      image: "/makeup-artist-applying-makeup.jpg",
      title: "Bridal Makeup Package",
      discount: "20% OFF",
      originalPrice: "$250",
      discountedPrice: "$200",
      validUntil: "Jan 15",
    },
    {
      image: "/hairstylist-cutting-hair.jpg",
      title: "Hair Color & Style",
      discount: "15% OFF",
      originalPrice: "$150",
      discountedPrice: "$127",
      validUntil: "Dec 28",
    },
    {
      image: "/nail-care-manicure.jpg",
      title: "Gel Manicure & Pedicure",
      discount: "20% OFF",
      originalPrice: "$80",
      discountedPrice: "$64",
      validUntil: "Dec 30",
    },
  ]

  const onlineClasses = [
    {
      image: "/person-lifting-weights-training.jpg",
      title: "Full Body HIIT Workout",
      instructor: "Sarah Johnson",
      date: "Dec 20, 6:00 PM",
      duration: "45 min",
      price: "$15",
    },
    {
      image: "/massage-therapy-hands.jpg",
      title: "Self-Massage Techniques",
      instructor: "Michael Chen",
      date: "Dec 22, 7:00 PM",
      duration: "60 min",
      price: "$20",
    },
    {
      image: "/makeup-artist-applying-makeup.jpg",
      title: "Everyday Makeup Masterclass",
      instructor: "Emma Davis",
      date: "Dec 23, 5:00 PM",
      duration: "90 min",
      price: "$25",
    },
    {
      image: "/spa-treatment-with-stones.jpg",
      title: "Meditation & Wellness",
      instructor: "Lisa Anderson",
      date: "Dec 21, 8:00 AM",
      duration: "30 min",
      price: "$10",
    },
  ]

  const collaborations = [
    {
      id: "yoga-nutrition",
      professional1: {
        name: "Maya Chen",
        role: "Yoga Teacher",
        image: "/spa-treatment-with-stones.jpg",
      },
      professional2: {
        name: "Rachel Green",
        role: "Nutritionist",
        image: "/spa-treatment-with-stones.jpg",
      },
      title: "Yoga + Nutrition Plan",
      description:
        "Transform your wellness journey with personalized yoga sessions and a custom nutrition plan designed to complement your practice.",
      price: "$280",
      duration: "4 weeks",
    },
    {
      id: "massage-yoga",
      professional1: {
        name: "Sarah Johnson",
        role: "Massage Therapist",
        image: "/massage-therapy-hands.jpg",
      },
      professional2: {
        name: "Maya Chen",
        role: "Yoga Teacher",
        image: "/spa-treatment-with-stones.jpg",
      },
      title: "Relax & Rejuvenate Duo",
      description:
        "Experience deep relaxation with therapeutic massage followed by restorative yoga to release tension and restore balance.",
      price: "$220",
      duration: "2 hours",
    },
    {
      id: "nails-tattoo",
      professional1: {
        name: "Sophia Martinez",
        role: "Nail Artist",
        image: "/nail-care-manicure.jpg",
      },
      professional2: {
        name: "Alex Rivera",
        role: "Tattoo Artist",
        image: "/nail-care-manicure.jpg",
      },
      title: "Art & Expression Package",
      description:
        "Get stunning nail art and a small custom tattoo in one session. Perfect for those who love body art and self-expression.",
      price: "$350",
      duration: "3 hours",
    },
    {
      id: "makeup-hair",
      professional1: {
        name: "Emma Davis",
        role: "Makeup Artist",
        image: "/makeup-artist-applying-makeup.jpg",
      },
      professional2: {
        name: "Michael Chen",
        role: "Hair Stylist",
        image: "/hairstylist-cutting-hair.jpg",
      },
      title: "Complete Glam Package",
      description:
        "Look your absolute best with professional hair styling and makeup application. Ideal for special events, photoshoots, or weddings.",
      price: "$295",
      duration: "2.5 hours",
    },
    {
      id: "pilates-nutrition",
      professional1: {
        name: "Alex Thompson",
        role: "Pilates Instructor",
        image: "/person-lifting-weights-training.jpg",
      },
      professional2: {
        name: "Rachel Green",
        role: "Nutritionist",
        image: "/spa-treatment-with-stones.jpg",
      },
      title: "Core Strength & Nutrition",
      description:
        "Build core strength with Pilates training while following a personalized meal plan to fuel your fitness goals.",
      price: "$310",
      duration: "6 weeks",
    },
  ]

  const displayedProfessionals = selectedCategory === "wellness" ? wellnessProfessionals : beautyProfessionals

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CTABanner />
      <SearchBar />
      <CategoriesScroll />

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
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
          <div className="bg-gradient-to-br from-primary/10 via-pink-50 to-rose-50 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-4xl font-bold mb-3">Featured This Week</h2>
                <p className="text-lg text-muted-foreground">Hand-picked professionals for exceptional service</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border border-border rounded-full hover:bg-white transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="p-2 border border-border rounded-full hover:bg-white transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
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
              <button className="p-2 border border-border rounded-full hover:bg-secondary transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2 border border-border rounded-full hover:bg-secondary transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
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
              <button className="p-2 border border-border rounded-full hover:bg-secondary transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2 border border-border rounded-full hover:bg-secondary transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
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
              <button className="p-2 border border-border rounded-full hover:bg-secondary transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-2 border border-border rounded-full hover:bg-secondary transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
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
