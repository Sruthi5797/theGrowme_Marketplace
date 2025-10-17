"use client"

import { use, useState, useEffect } from "react"
import { Header } from "@/components/header"
import { GamificationWidget } from "@/components/gamification-widget"
import { Leaf, MapPin, Clock, CheckCircle, Calendar, ChevronLeft, ChevronRight, Award, TrendingUp, Star, Users } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const professionalsData: Record<string, any> = {
  "sarah-massage": {
    name: "Sarah Johnson",
    title: "Licensed Massage Therapist",
    rating: 5.0,
    reviews: 127,
    yearsExperience: 10,
    totalBookings: 1247,
    weeklyBookings: 18,
    location: "Downtown, New York",
    responseTime: "Within 1 hour",
    images: ["/massage-therapy-hands.jpg", "/spa-treatment-with-stones.jpg", "/massage-therapy-hands.jpg"],
    about:
      "I'm a licensed massage therapist with over 10 years of experience specializing in deep tissue, Swedish, and sports massage. My goal is to help you relax, recover, and feel your best.",
    services: [
      { name: "Deep Tissue Massage", duration: "60 min", price: "$85" },
      { name: "Swedish Massage", duration: "60 min", price: "$75" },
      { name: "Sports Massage", duration: "90 min", price: "$120" },
      { name: "Hot Stone Therapy", duration: "75 min", price: "$95" },
    ],
    thingsToKnow: [
      "Please arrive 10 minutes early for your appointment",
      "Cancellations must be made 24 hours in advance",
      "Gratuity is appreciated but not required",
      "All equipment and linens are sanitized between sessions",
    ],
    availability: [
      { date: "Dec 20", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"] },
      { date: "Dec 21", slots: ["10:00 AM", "1:00 PM", "3:00 PM"] },
      { date: "Dec 22", slots: ["9:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"] },
    ],
  },
  "lisa-spa": {
    name: "Lisa Anderson",
    title: "Luxury Spa Specialist",
    rating: 4.95,
    reviews: 98,
    yearsExperience: 15,
    totalBookings: 2134,
    weeklyBookings: 12,
    location: "Upper East Side, New York",
    responseTime: "Within 2 hours",
    images: ["/spa-treatment-with-stones.jpg", "/massage-therapy-hands.jpg", "/spa-treatment-with-stones.jpg"],
    about:
      "With 15 years in luxury spa treatments, I create personalized wellness experiences that rejuvenate body and mind. Specializing in aromatherapy, hot stone therapy, and holistic healing.",
    services: [
      { name: "Luxury Spa Package", duration: "120 min", price: "$150" },
      { name: "Aromatherapy Session", duration: "90 min", price: "$130" },
      { name: "Hot Stone Therapy", duration: "75 min", price: "$110" },
      { name: "Body Scrub & Wrap", duration: "60 min", price: "$95" },
    ],
    thingsToKnow: [
      "Arrive 15 minutes early to enjoy our relaxation lounge",
      "Robes and slippers provided",
      "48-hour cancellation policy",
      "Complimentary herbal tea included",
    ],
    availability: [
      { date: "Dec 20", slots: ["10:00 AM", "1:00 PM", "4:00 PM"] },
      { date: "Dec 21", slots: ["9:00 AM", "12:00 PM", "3:00 PM", "5:00 PM"] },
      { date: "Dec 22", slots: ["11:00 AM", "2:00 PM"] },
    ],
  },
  "david-training": {
    name: "David Martinez",
    title: "Certified Personal Trainer",
    rating: 4.98,
    reviews: 156,
    yearsExperience: 8,
    totalBookings: 1876,
    weeklyBookings: 24,
    location: "Chelsea, New York",
    responseTime: "Within 30 minutes",
    images: [
      "/person-lifting-weights-training.jpg",
      "/person-lifting-weights-training.jpg",
      "/person-lifting-weights-training.jpg",
    ],
    about:
      "NASM certified personal trainer with 8 years of experience. I specialize in strength training, weight loss, and athletic performance. Let's achieve your fitness goals together!",
    services: [
      { name: "Personal Training Session", duration: "60 min", price: "$100" },
      { name: "Strength & Conditioning", duration: "90 min", price: "$140" },
      { name: "HIIT Training", duration: "45 min", price: "$85" },
      { name: "Nutrition Consultation", duration: "30 min", price: "$50" },
    ],
    thingsToKnow: [
      "Bring workout clothes and water bottle",
      "First session includes fitness assessment",
      "Package deals available for multiple sessions",
      "Training available at gym or your location",
    ],
    availability: [
      { date: "Dec 20", slots: ["6:00 AM", "8:00 AM", "5:00 PM", "7:00 PM"] },
      { date: "Dec 21", slots: ["6:00 AM", "7:00 AM", "6:00 PM"] },
      { date: "Dec 22", slots: ["7:00 AM", "9:00 AM", "5:00 PM", "6:00 PM"] },
    ],
  },
  "emma-makeup": {
    name: "Emma Davis",
    title: "Professional Makeup Artist",
    rating: 4.97,
    reviews: 143,
    yearsExperience: 12,
    totalBookings: 1653,
    weeklyBookings: 15,
    location: "Manhattan, New York",
    responseTime: "Within 1 hour",
    images: [
      "/makeup-artist-applying-makeup.jpg",
      "/spa-treatment-with-stones.jpg",
      "/makeup-artist-applying-makeup.jpg",
    ],
    about:
      "Award-winning makeup artist with 12 years of experience in bridal, editorial, and special events. I use premium products and techniques to enhance your natural beauty.",
    services: [
      { name: "Bridal Makeup", duration: "90 min", price: "$120" },
      { name: "Special Event Makeup", duration: "60 min", price: "$95" },
      { name: "Makeup Lesson", duration: "90 min", price: "$110" },
      { name: "Airbrush Makeup", duration: "75 min", price: "$130" },
    ],
    thingsToKnow: [
      "Trial session recommended for bridal makeup",
      "Come with clean, moisturized face",
      "Lashes and touch-up kit included",
      "Travel fee may apply for on-location services",
    ],
    availability: [
      { date: "Dec 20", slots: ["9:00 AM", "12:00 PM", "3:00 PM"] },
      { date: "Dec 21", slots: ["10:00 AM", "1:00 PM", "4:00 PM"] },
      { date: "Dec 22", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "5:00 PM"] },
    ],
  },
  "michael-hair": {
    name: "Michael Chen",
    title: "Master Hair Stylist",
    rating: 5.0,
    reviews: 189,
    yearsExperience: 14,
    totalBookings: 2456,
    weeklyBookings: 22,
    location: "Brooklyn, New York",
    responseTime: "Within 1 hour",
    images: ["/hairstylist-cutting-hair.jpg", "/hairstylist-cutting-hair.jpg", "/hairstylist-cutting-hair.jpg"],
    about:
      "Master stylist with 14 years of experience in cutting, coloring, and styling. Trained in NYC and Paris, I create modern looks that complement your lifestyle and personality.",
    services: [
      { name: "Haircut & Style", duration: "60 min", price: "$95" },
      { name: "Color & Highlights", duration: "120 min", price: "$180" },
      { name: "Balayage", duration: "150 min", price: "$220" },
      { name: "Keratin Treatment", duration: "180 min", price: "$250" },
    ],
    thingsToKnow: [
      "Consultation included with all services",
      "Premium products used (Olaplex, Redken)",
      "Color patch test required 48 hours before first coloring",
      "Complimentary blow-dry with all services",
    ],
    availability: [
      { date: "Dec 20", slots: ["10:00 AM", "2:00 PM", "5:00 PM"] },
      { date: "Dec 21", slots: ["9:00 AM", "1:00 PM", "4:00 PM"] },
      { date: "Dec 22", slots: ["10:00 AM", "12:00 PM", "3:00 PM"] },
    ],
  },
  "sophia-nails": {
    name: "Sophia Rodriguez",
    title: "Nail Artist & Technician",
    rating: 4.92,
    reviews: 112,
    yearsExperience: 7,
    totalBookings: 1289,
    weeklyBookings: 20,
    location: "SoHo, New York",
    responseTime: "Within 2 hours",
    images: ["/nail-care-manicure.jpg", "/nail-care-manicure.jpg", "/nail-care-manicure.jpg"],
    about:
      "Licensed nail technician specializing in nail art, gel extensions, and luxury manicures. I create beautiful, long-lasting nail designs using the highest quality products.",
    services: [
      { name: "Gel Manicure", duration: "45 min", price: "$65" },
      { name: "Gel Pedicure", duration: "60 min", price: "$75" },
      { name: "Nail Art Design", duration: "90 min", price: "$95" },
      { name: "Gel Extensions", duration: "120 min", price: "$120" },
    ],
    thingsToKnow: [
      "All tools are sterilized and sanitized",
      "Wide selection of gel colors available",
      "Nail art designs can be customized",
      "Removal service available for previous gel",
    ],
    availability: [
      { date: "Dec 20", slots: ["11:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"] },
      { date: "Dec 21", slots: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"] },
      { date: "Dec 22", slots: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"] },
    ],
  },
  "maya-yoga": {
    name: "Maya Patel",
    title: "Yoga & Meditation Instructor",
    rating: 4.99,
    reviews: 134,
    yearsExperience: 9,
    totalBookings: 1543,
    weeklyBookings: 16,
    location: "Brooklyn, New York",
    responseTime: "Within 1 hour",
    images: ["/spa-treatment-with-stones.jpg", "/massage-therapy-hands.jpg", "/spa-treatment-with-stones.jpg"],
    about:
      "RYT-500 certified yoga instructor with 9 years of teaching experience. I offer personalized yoga and meditation sessions for all levels, focusing on mindfulness and holistic wellness.",
    services: [
      { 
        name: "Private Yoga Session", 
        duration: "60 min", 
        price: "$70",
        description: "One-on-one personalized yoga practice tailored to your goals and fitness level",
        procedure: [
          "Initial consultation to understand your goals and physical condition",
          "Warm-up with gentle stretches and breathing exercises (10 min)",
          "Customized asana practice focusing on alignment and form (35 min)",
          "Cool-down with restorative poses and deep stretches (10 min)",
          "Final relaxation in Savasana with guided meditation (5 min)"
        ],
        images: ["/spa-treatment-with-stones.jpg", "/massage-therapy-hands.jpg"]
      },
      { 
        name: "Meditation & Breathwork", 
        duration: "45 min", 
        price: "$55",
        description: "Learn powerful breathing techniques and meditation practices for stress relief and mental clarity",
        procedure: [
          "Comfortable seated position setup with props if needed",
          "Introduction to pranayama (breathing) techniques (10 min)",
          "Guided breathwork practice - alternate nostril, ujjayi breathing (15 min)",
          "Mindfulness meditation with body scan technique (15 min)",
          "Integration and reflection time (5 min)"
        ],
        images: ["/spa-treatment-with-stones.jpg", "/massage-therapy-hands.jpg"]
      },
      { 
        name: "Restorative Yoga", 
        duration: "75 min", 
        price: "$80",
        description: "Gentle, deeply relaxing practice using props to support your body in restful poses",
        procedure: [
          "Welcome and intention setting for the practice",
          "Gentle breathing exercises to calm the nervous system (10 min)",
          "Supported restorative poses with bolsters and blankets (50 min)",
          "Each pose held for 5-10 minutes for deep release",
          "Final relaxation with yoga nidra (yogic sleep) (15 min)"
        ],
        images: ["/spa-treatment-with-stones.jpg", "/massage-therapy-hands.jpg"]
      },
      { 
        name: "Couples Yoga", 
        duration: "90 min", 
        price: "$120",
        description: "Partner yoga session to deepen connection, trust, and communication through shared practice",
        procedure: [
          "Partner breathing and synchronization exercises (10 min)",
          "Warm-up with individual and partner stretches (15 min)",
          "Partner-assisted poses focusing on trust and balance (40 min)",
          "Communication and connection-building exercises (15 min)",
          "Couples meditation and relaxation practice (10 min)"
        ],
        images: ["/spa-treatment-with-stones.jpg", "/massage-therapy-hands.jpg"]
      },
    ],
    thingsToKnow: [
      "Yoga mat and props provided",
      "Wear comfortable, stretchy clothing",
      "Sessions available at studio or your location",
      "Beginners welcome",
    ],
    availability: [
      { date: "Dec 20", slots: ["7:00 AM", "9:00 AM", "5:00 PM", "7:00 PM"] },
      { date: "Dec 21", slots: ["6:00 AM", "8:00 AM", "6:00 PM"] },
      { date: "Dec 22", slots: ["7:00 AM", "10:00 AM", "4:00 PM", "6:00 PM"] },
    ],
  },
  "james-physio": {
    name: "James Wilson",
    title: "Licensed Physiotherapist",
    rating: 4.96,
    reviews: 167,
    yearsExperience: 11,
    totalBookings: 1934,
    weeklyBookings: 19,
    location: "Manhattan, New York",
    responseTime: "Within 30 minutes",
    images: ["/massage-therapy-hands.jpg", "/person-lifting-weights-training.jpg", "/massage-therapy-hands.jpg"],
    about:
      "Licensed physiotherapist with 11 years of experience treating sports injuries, chronic pain, and post-surgical rehabilitation. Evidence-based approach to help you move better and feel stronger.",
    services: [
      { name: "Physiotherapy Assessment", duration: "60 min", price: "$120" },
      { name: "Manual Therapy", duration: "45 min", price: "$95" },
      { name: "Sports Injury Treatment", duration: "60 min", price: "$110" },
      { name: "Rehabilitation Program", duration: "90 min", price: "$150" },
    ],
    thingsToKnow: [
      "Bring any relevant medical records",
      "Wear loose, comfortable clothing",
      "Insurance accepted (check with provider)",
      "Home exercise program included",
    ],
    availability: [
      { date: "Dec 20", slots: ["8:00 AM", "10:00 AM", "2:00 PM", "4:00 PM"] },
      { date: "Dec 21", slots: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"] },
      { date: "Dec 22", slots: ["8:00 AM", "12:00 PM", "2:00 PM"] },
    ],
  },
  "rachel-nutrition": {
    name: "Rachel Green",
    title: "Certified Nutrition Coach",
    rating: 4.94,
    reviews: 89,
    yearsExperience: 7,
    totalBookings: 1067,
    weeklyBookings: 14,
    location: "Queens, New York",
    responseTime: "Within 2 hours",
    images: ["/spa-treatment-with-stones.jpg", "/massage-therapy-hands.jpg", "/spa-treatment-with-stones.jpg"],
    about:
      "Certified nutrition coach and registered dietitian with 7 years of experience. I help clients achieve their health goals through personalized nutrition plans and sustainable lifestyle changes.",
    services: [
      { name: "Nutrition Consultation", duration: "60 min", price: "$90" },
      { name: "Meal Planning Session", duration: "45 min", price: "$70" },
      { name: "Weight Management Program", duration: "90 min", price: "$130" },
      { name: "Follow-up Session", duration: "30 min", price: "$50" },
    ],
    thingsToKnow: [
      "Bring food diary if available",
      "Lab results welcome for review",
      "Customized meal plans provided",
      "Virtual sessions available",
    ],
    availability: [
      { date: "Dec 20", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "5:00 PM"] },
      { date: "Dec 21", slots: ["10:00 AM", "1:00 PM", "3:00 PM", "6:00 PM"] },
      { date: "Dec 22", slots: ["9:00 AM", "12:00 PM", "4:00 PM"] },
    ],
  },
  "olivia-skincare": {
    name: "Olivia Thompson",
    title: "Licensed Esthetician",
    rating: 4.98,
    reviews: 121,
    yearsExperience: 10,
    totalBookings: 1432,
    weeklyBookings: 17,
    location: "Upper West Side, New York",
    responseTime: "Within 1 hour",
    images: [
      "/makeup-artist-applying-makeup.jpg",
      "/spa-treatment-with-stones.jpg",
      "/makeup-artist-applying-makeup.jpg",
    ],
    about:
      "Licensed esthetician with 10 years of experience in advanced skincare treatments. Specializing in facials, chemical peels, and anti-aging treatments using medical-grade products.",
    services: [
      { name: "Custom Facial", duration: "75 min", price: "$110" },
      { name: "Chemical Peel", duration: "60 min", price: "$130" },
      { name: "Microdermabrasion", duration: "60 min", price: "$120" },
      { name: "LED Light Therapy", duration: "45 min", price: "$85" },
    ],
    thingsToKnow: [
      "Skin analysis included with first visit",
      "Avoid sun exposure before chemical peels",
      "Home care products recommended",
      "Series packages available at discount",
    ],
    availability: [
      { date: "Dec 20", slots: ["10:00 AM", "1:00 PM", "4:00 PM"] },
      { date: "Dec 21", slots: ["9:00 AM", "12:00 PM", "3:00 PM"] },
      { date: "Dec 22", slots: ["11:00 AM", "2:00 PM", "5:00 PM"] },
    ],
  },
  "alex-brows": {
    name: "Alex Kim",
    title: "Eyebrow Specialist",
    rating: 4.93,
    reviews: 95,
    yearsExperience: 6,
    totalBookings: 1156,
    weeklyBookings: 13,
    location: "Tribeca, New York",
    responseTime: "Within 2 hours",
    images: [
      "/makeup-artist-applying-makeup.jpg",
      "/spa-treatment-with-stones.jpg",
      "/makeup-artist-applying-makeup.jpg",
    ],
    about:
      "Certified eyebrow specialist with expertise in microblading, brow lamination, and precision shaping. I create natural-looking, perfectly shaped brows that frame your face beautifully.",
    services: [
      { name: "Eyebrow Shaping", duration: "30 min", price: "$75" },
      { name: "Brow Lamination", duration: "60 min", price: "$95" },
      { name: "Microblading", duration: "120 min", price: "$350" },
      { name: "Brow Tinting", duration: "30 min", price: "$45" },
    ],
    thingsToKnow: [
      "Consultation included with all services",
      "Patch test required 24 hours before tinting",
      "Microblading requires touch-up after 6 weeks",
      "Aftercare instructions provided",
    ],
    availability: [
      { date: "Dec 20", slots: ["9:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"] },
      { date: "Dec 21", slots: ["10:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"] },
      { date: "Dec 22", slots: ["10:00 AM", "1:00 PM", "4:00 PM"] },
    ],
  },
  "nina-lashes": {
    name: "Nina Foster",
    title: "Lash Extension Specialist",
    rating: 4.96,
    reviews: 108,
    yearsExperience: 6,
    totalBookings: 1298,
    weeklyBookings: 21,
    location: "East Village, New York",
    responseTime: "Within 1 hour",
    images: [
      "/makeup-artist-applying-makeup.jpg",
      "/makeup-artist-applying-makeup.jpg",
      "/makeup-artist-applying-makeup.jpg",
    ],
    about:
      "Certified lash artist with 6 years of experience in classic, volume, and mega volume lash extensions. I use premium products and techniques for beautiful, long-lasting results.",
    services: [
      { name: "Classic Lash Extensions", duration: "120 min", price: "$85" },
      { name: "Volume Lash Extensions", duration: "150 min", price: "$120" },
      { name: "Mega Volume Lashes", duration: "180 min", price: "$150" },
      { name: "Lash Fill", duration: "60 min", price: "$60" },
    ],
    thingsToKnow: [
      "Come with clean lashes (no makeup)",
      "Avoid caffeine before appointment",
      "Lashes last 4-6 weeks with proper care",
      "Aftercare kit included",
    ],
    availability: [
      { date: "Dec 20", slots: ["9:00 AM", "12:00 PM", "3:00 PM"] },
      { date: "Dec 21", slots: ["10:00 AM", "1:00 PM", "4:00 PM"] },
      { date: "Dec 22", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "5:00 PM"] },
    ],
  },
}

export default function ProfessionalProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const professional = professionalsData[id] || professionalsData["sarah-massage"]

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % professional.images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [professional.images.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % professional.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + professional.images.length) % professional.images.length)
  }

  const generateCalendar = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    return days
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        {/* Minimalistic Hero Section */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">{professional.name}</h1>
          <p className="text-xl text-muted-foreground mb-6">{professional.title}</p>
          
          {/* Compact Stats Row */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <div>
                <span className="text-2xl font-bold text-primary">{professional.yearsExperience}</span>
                <span className="text-sm text-muted-foreground ml-1">years</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-600" />
              <div>
                <span className="text-2xl font-bold text-green-600">{professional.totalBookings.toLocaleString()}</span>
                <span className="text-sm text-muted-foreground ml-1">bookings</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <div>
                <span className="text-2xl font-bold text-blue-600">{professional.weeklyBookings}</span>
                <span className="text-sm text-muted-foreground ml-1">this week</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              <div>
                <span className="text-2xl font-bold text-amber-500">{professional.rating}</span>
                <span className="text-sm text-muted-foreground ml-1">({professional.reviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Location and Response */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{professional.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Responds {professional.responseTime}</span>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-3">About</h2>
              <p className="text-muted-foreground leading-relaxed">{professional.about}</p>
            </section>

            {/* Services */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Services</h2>
              <div className="space-y-4">
                {professional.services.map((service: any, index: number) => (
                  <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setSelectedService(selectedService?.name === service.name ? null : service)}
                      className="w-full p-5 text-left hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold mb-1">{service.name}</h3>
                          {service.description && (
                            <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                          )}
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">{service.price}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {selectedService?.name === service.name ? "Hide details" : "View details"}
                          </p>
                        </div>
                      </div>
                    </button>
                    
                    {/* Expandable Service Details */}
                    {selectedService?.name === service.name && service.procedure && (
                      <div className="border-t border-border p-5 bg-muted/30">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          What to Expect
                        </h4>
                        <ol className="space-y-2 mb-4">
                          {service.procedure.map((step: string, idx: number) => (
                            <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
                                {idx + 1}
                              </span>
                              <span className="pt-0.5">{step}</span>
                            </li>
                          ))}
                        </ol>
                        
                        {service.images && service.images.length > 0 && (
                          <div className="grid grid-cols-2 gap-3 mt-4">
                            {service.images.map((img: string, imgIdx: number) => (
                              <div key={imgIdx} className="relative aspect-video rounded-lg overflow-hidden">
                                <Image
                                  src={img}
                                  alt={`${service.name} ${imgIdx + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Things to Know */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Things to Know</h2>
              <div className="space-y-2">
                {professional.thingsToKnow.map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Location */}
            <section className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-3">Location</h2>
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{professional.location}</span>
              </div>
              <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Map placeholder</p>
              </div>
            </section>
          </div>

          {/* Right Column - Booking Card & Image */}
          <div className="lg:col-span-1 space-y-6">
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <div className="relative aspect-[3/4]">
                <Image
                  src={professional.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${professional.name}`}
                  fill
                  className="object-cover"
                />
                
                {/* Simple Navigation */}
                {professional.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                      aria-label="Previous"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-800" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                      aria-label="Next"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-800" />
                    </button>
                    
                    {/* Dots */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {professional.images.map((_: any, index: number) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-1.5 rounded-full transition-all ${
                            index === currentImageIndex ? "bg-white w-6" : "bg-white/50 w-1.5"
                          }`}
                          aria-label={`Image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            <GamificationWidget />

            {/* Booking Card */}
            <div className="sticky top-6 bg-card border border-border rounded-xl p-5 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Book a Session</h3>

              {/* Service Selection */}
              <div className="mb-4">
                <label className="text-sm font-medium mb-2 block">Select Service</label>
                <div className="space-y-2">
                  {professional.services.map((service: any, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedService(service)}
                      className={`w-full p-3 border rounded-lg text-left transition-all text-sm ${
                        selectedService?.name === service.name
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">{service.name}</p>
                          <p className="text-xs text-muted-foreground">{service.duration}</p>
                        </div>
                        <p className="font-semibold text-primary">{service.price}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Calendar */}
              {selectedService && (
                <div className="mb-4">
                  <label className="text-sm font-medium mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Select Date
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() =>
                          setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
                        }
                        className="p-1 hover:bg-muted rounded"
                      >
                        <ChevronLeft className="w-3 h-3" />
                      </button>
                      <span className="text-xs">
                        {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                      </span>
                      <button
                        onClick={() =>
                          setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
                        }
                        className="p-1 hover:bg-muted rounded"
                      >
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </label>

                  <div className="border border-border rounded-lg p-2">
                    <div className="grid grid-cols-7 gap-1 mb-1">
                      {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => (
                        <div key={i} className="text-center text-xs font-medium text-muted-foreground">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {generateCalendar().map((day, index) => (
                        <button
                          key={index}
                          onClick={() => day && setSelectedDate(`Dec ${day}`)}
                          disabled={!day}
                          className={`aspect-square flex items-center justify-center text-xs rounded transition-colors ${
                            !day
                              ? "invisible"
                              : selectedDate === `Dec ${day}`
                                ? "bg-primary text-primary-foreground font-semibold"
                                : "hover:bg-muted"
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Time Selection */}
              {selectedDate && selectedService && (
                <div className="mb-4">
                  <label className="text-sm font-medium mb-2 block">Select Time</label>
                  <div className="grid grid-cols-2 gap-2">
                    {professional.availability
                      .find((day: any) => day.date === selectedDate)
                      ?.slots.map((slot: string, index: number) => (
                        <button
                          key={index}
                          onClick={() => setSelectedTime(slot)}
                          className={`p-2 border rounded text-xs transition-colors ${
                            selectedTime === slot
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                  </div>
                </div>
              )}

              <Button
                className="w-full"
                size="lg"
                disabled={!selectedService || !selectedDate || !selectedTime}
              >
                Book Now
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-3">You won't be charged yet</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
