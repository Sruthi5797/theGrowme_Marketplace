"use client"

import { use, useState, useEffect } from "react"
import { Header } from "@/components/header"
import { GamificationWidget } from "@/components/gamification-widget"
import { Leaf, MapPin, Clock, CheckCircle, Calendar, ChevronLeft, ChevronRight, Award, TrendingUp, Users } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const professionalsData: Record<string, any> = {
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
    clientReviews: [
      {
        name: "Emily Rodriguez",
        date: "2 weeks ago",
        rating: 5,
        comment: "Maya's yoga sessions have transformed my practice! She's incredibly knowledgeable and creates a safe, nurturing space. Her attention to alignment and breathing has helped me deepen my practice significantly."
      },
      {
        name: "David Chen",
        date: "1 month ago",
        rating: 5,
        comment: "The best yoga instructor I've ever worked with. Maya's meditation and breathwork session helped me manage my stress and anxiety. Highly recommend her to anyone looking for holistic wellness."
      },
      {
        name: "Sarah Thompson",
        date: "3 weeks ago",
        rating: 5,
        comment: "Restorative yoga with Maya is pure bliss. She uses the perfect props and creates such a calming atmosphere. I always leave feeling completely rejuvenated and at peace."
      },
      {
        name: "Michael & Jessica",
        date: "1 week ago",
        rating: 5,
        comment: "We did couples yoga with Maya and it was an amazing experience! It really helped us connect on a deeper level and we learned so much about partner work and communication."
      }
    ]
  },
  "sophia-pilates": {
    name: "Sophia Martinez",
    title: "Certified Pilates Instructor",
    rating: 4.97,
    reviews: 156,
    yearsExperience: 8,
    totalBookings: 1834,
    weeklyBookings: 20,
    location: "Manhattan, New York",
    responseTime: "Within 30 minutes",
    images: ["/person-lifting-weights-training.jpg", "/massage-therapy-hands.jpg", "/spa-treatment-with-stones.jpg"],
    about:
      "Certified Pilates instructor with 8 years of experience in mat and reformer Pilates. I specialize in core strengthening, posture correction, and injury rehabilitation through mindful movement.",
    services: [
      { 
        name: "Private Pilates Session", 
        duration: "60 min", 
        price: "$85",
        description: "Personalized mat or reformer Pilates session focused on your specific goals",
        procedure: [
          "Assessment of your posture, alignment, and movement patterns",
          "Warm-up with breathing and core activation exercises (10 min)",
          "Customized Pilates sequence targeting your needs (40 min)",
          "Stretching and flexibility work (8 min)",
          "Cool-down and integration (2 min)"
        ],
        images: ["/person-lifting-weights-training.jpg", "/massage-therapy-hands.jpg"]
      },
      { 
        name: "Reformer Pilates", 
        duration: "55 min", 
        price: "$95",
        description: "Dynamic reformer workout for strength, flexibility, and core stability",
        procedure: [
          "Equipment setup and safety overview",
          "Centering and breathing exercises (5 min)",
          "Full-body reformer workout with spring resistance (40 min)",
          "Core-focused exercises and balance work (8 min)",
          "Final stretch and relaxation (2 min)"
        ],
        images: ["/person-lifting-weights-training.jpg", "/spa-treatment-with-stones.jpg"]
      },
      { 
        name: "Mat Pilates Class", 
        duration: "50 min", 
        price: "$65",
        description: "Classical mat Pilates focusing on core strength and body control",
        procedure: [
          "Introduction to Pilates principles (5 min)",
          "Warm-up with breathing and pelvic floor activation (5 min)",
          "Classical mat Pilates sequence (35 min)",
          "Cool-down stretches and spine mobility (5 min)"
        ],
        images: ["/massage-therapy-hands.jpg", "/spa-treatment-with-stones.jpg"]
      },
      { 
        name: "Prenatal Pilates", 
        duration: "45 min", 
        price: "$75",
        description: "Safe and effective Pilates for expecting mothers at all trimesters",
        procedure: [
          "Check-in and pregnancy-specific modifications discussion (5 min)",
          "Gentle warm-up and pelvic floor awareness (10 min)",
          "Modified Pilates exercises for pregnancy (25 min)",
          "Relaxation and breathing for labor preparation (5 min)"
        ],
        images: ["/spa-treatment-with-stones.jpg", "/massage-therapy-hands.jpg"]
      },
    ],
    thingsToKnow: [
      "All equipment and props provided",
      "Wear form-fitting athletic clothing",
      "Socks with grips recommended",
      "Let me know about any injuries or conditions",
    ],
    availability: [
      { date: "Dec 20", slots: ["8:00 AM", "10:00 AM", "3:00 PM", "5:00 PM"] },
      { date: "Dec 21", slots: ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"] },
      { date: "Dec 22", slots: ["8:00 AM", "12:00 PM", "3:00 PM", "6:00 PM"] },
    ],
    clientReviews: [
      {
        name: "Amanda Foster",
        date: "1 week ago",
        rating: 5,
        comment: "Sophia is an exceptional Pilates instructor! Her reformer classes are challenging yet accessible. I've seen amazing improvements in my core strength and posture in just 2 months."
      },
      {
        name: "Jennifer Liu",
        date: "3 weeks ago",
        rating: 5,
        comment: "The prenatal Pilates sessions with Sophia were a lifesaver during my pregnancy. She made me feel safe and strong throughout. Highly recommend for expecting moms!"
      },
      {
        name: "Robert Johnson",
        date: "2 weeks ago",
        rating: 5,
        comment: "I came to Sophia with chronic back pain. Her personalized approach and focus on proper form has made a huge difference. I'm pain-free and stronger than ever."
      }
    ]
  },
  "luna-vinyasa": {
    name: "Luna Williams",
    title: "Vinyasa Flow & Ashtanga Yoga Specialist",
    rating: 4.98,
    reviews: 142,
    yearsExperience: 11,
    totalBookings: 2156,
    weeklyBookings: 18,
    location: "Brooklyn, New York",
    responseTime: "Within 1 hour",
    images: ["/spa-treatment-with-stones.jpg", "/massage-therapy-hands.jpg", "/spa-treatment-with-stones.jpg"],
    about:
      "E-RYT 500 certified yoga instructor specializing in Vinyasa Flow and Ashtanga yoga. Trained in India and certified in advanced yoga therapy. I believe in the transformative power of breath-synchronized movement.",
    services: [
      { 
        name: "Vinyasa Flow Class", 
        duration: "75 min", 
        price: "$80",
        description: "Dynamic flowing yoga practice linking breath with movement",
        procedure: [
          "Centering meditation and intention setting (5 min)",
          "Pranayama (breath work) practice (10 min)",
          "Sun salutations and warm-up flow (15 min)",
          "Peak pose sequence with creative transitions (35 min)",
          "Cool-down, savasana, and closing meditation (10 min)"
        ],
        images: ["/spa-treatment-with-stones.jpg", "/massage-therapy-hands.jpg"]
      },
      { 
        name: "Ashtanga Yoga", 
        duration: "90 min", 
        price: "$90",
        description: "Traditional Ashtanga primary series or personalized practice",
        procedure: [
          "Opening chant and breathing exercises (5 min)",
          "Sun salutation A & B sequences (10 min)",
          "Standing sequence (20 min)",
          "Seated sequence and forward folds (30 min)",
          "Finishing sequence, backbends, and inversions (15 min)",
          "Final relaxation and closing chant (10 min)"
        ],
        images: ["/massage-therapy-hands.jpg", "/spa-treatment-with-stones.jpg"]
      },
      { 
        name: "Power Yoga", 
        duration: "60 min", 
        price: "$75",
        description: "Intense, fitness-based yoga for strength and stamina",
        procedure: [
          "Dynamic warm-up and breath connection (10 min)",
          "Power flow with strength-building poses (35 min)",
          "Core work and arm balances (10 min)",
          "Cool-down and final relaxation (5 min)"
        ],
        images: ["/person-lifting-weights-training.jpg", "/spa-treatment-with-stones.jpg"]
      },
      { 
        name: "Yin Yoga & Meditation", 
        duration: "75 min", 
        price: "$70",
        description: "Slow-paced practice with long-held poses for deep tissue release",
        procedure: [
          "Guided meditation and body scan (10 min)",
          "Yin yoga poses held 3-5 minutes each (50 min)",
          "Pranayama and energy work (10 min)",
          "Closing meditation in savasana (5 min)"
        ],
        images: ["/spa-treatment-with-stones.jpg", "/massage-therapy-hands.jpg"]
      },
    ],
    thingsToKnow: [
      "Bring your own mat or rent for $5",
      "Water bottle recommended",
      "Classes suitable for intermediate to advanced practitioners",
      "Modifications offered for all levels",
    ],
    availability: [
      { date: "Dec 20", slots: ["6:00 AM", "9:00 AM", "6:00 PM", "7:30 PM"] },
      { date: "Dec 21", slots: ["6:00 AM", "10:00 AM", "5:00 PM"] },
      { date: "Dec 22", slots: ["7:00 AM", "9:00 AM", "4:00 PM", "6:00 PM"] },
    ],
    clientReviews: [
      {
        name: "Marcus Anderson",
        date: "1 week ago",
        rating: 5,
        comment: "Luna's Ashtanga classes are authentic and challenging in the best way. Her guidance and adjustments have helped me progress safely in my practice."
      },
      {
        name: "Olivia Park",
        date: "2 weeks ago",
        rating: 5,
        comment: "The Vinyasa Flow with Luna is absolutely beautiful. She creates such artistic sequences and her cueing is perfect. I leave every class feeling energized and centered."
      },
      {
        name: "Daniel Torres",
        date: "3 days ago",
        rating: 5,
        comment: "Power yoga with Luna kicks my butt every time (in a good way!). She pushes you to your edge while keeping it safe. Best workout and meditation combined."
      },
      {
        name: "Grace Mitchell",
        date: "1 month ago",
        rating: 5,
        comment: "Luna's Yin Yoga and Meditation class is my weekly sanctuary. The deep stretches and her soothing voice create the most peaceful experience."
      }
    ]
  },
  "kai-pilates": {
    name: "Kai Thompson",
    title: "Advanced Pilates & Barre Instructor",
    rating: 4.96,
    reviews: 128,
    yearsExperience: 7,
    totalBookings: 1456,
    weeklyBookings: 17,
    location: "West Village, New York",
    responseTime: "Within 2 hours",
    images: ["/person-lifting-weights-training.jpg", "/massage-therapy-hands.jpg", "/person-lifting-weights-training.jpg"],
    about:
      "Comprehensively certified Pilates instructor with advanced training in classical and contemporary Pilates. Also certified in Barre and functional movement. I help clients build long, lean muscles and develop body awareness.",
    services: [
      { 
        name: "Barre Fusion Class", 
        duration: "50 min", 
        price: "$70",
        description: "Ballet-inspired workout combining Pilates, dance, and strength training",
        procedure: [
          "Warm-up with light cardio and stretching (8 min)",
          "Barre work - legs, glutes, and thighs (20 min)",
          "Upper body sculpting with light weights (10 min)",
          "Core work and planks (10 min)",
          "Final stretch and cooldown (2 min)"
        ],
        images: ["/person-lifting-weights-training.jpg", "/massage-therapy-hands.jpg"]
      },
      { 
        name: "Tower Pilates", 
        duration: "60 min", 
        price: "$90",
        description: "Unique Pilates apparatus work for full-body conditioning",
        procedure: [
          "Body alignment check and tower setup (5 min)",
          "Upper body and arm work on tower (15 min)",
          "Lower body and leg springs exercises (20 min)",
          "Core and abdominal series (15 min)",
          "Stretching on the tower (5 min)"
        ],
        images: ["/person-lifting-weights-training.jpg", "/spa-treatment-with-stones.jpg"]
      },
      { 
        name: "Chair Pilates", 
        duration: "45 min", 
        price: "$80",
        description: "Challenging Pilates using the specialized Wunda Chair",
        procedure: [
          "Introduction to chair apparatus (5 min)",
          "Lower body strengthening exercises (15 min)",
          "Upper body and back work (15 min)",
          "Balance and stability challenges (8 min)",
          "Cool-down stretch (2 min)"
        ],
        images: ["/massage-therapy-hands.jpg", "/person-lifting-weights-training.jpg"]
      },
      { 
        name: "Athletic Pilates", 
        duration: "55 min", 
        price: "$85",
        description: "High-intensity Pilates for athletes and fitness enthusiasts",
        procedure: [
          "Dynamic warm-up and mobility work (10 min)",
          "Power-based Pilates exercises (30 min)",
          "Plyometric core work (10 min)",
          "Flexibility and recovery stretches (5 min)"
        ],
        images: ["/person-lifting-weights-training.jpg", "/massage-therapy-hands.jpg"]
      },
    ],
    thingsToKnow: [
      "Grippy socks required for Barre classes",
      "All equipment sanitized between sessions",
      "Private and semi-private sessions available",
      "Package deals for multiple sessions",
    ],
    availability: [
      { date: "Dec 20", slots: ["7:00 AM", "11:00 AM", "4:00 PM", "6:00 PM"] },
      { date: "Dec 21", slots: ["8:00 AM", "10:00 AM", "3:00 PM", "5:00 PM"] },
      { date: "Dec 22", slots: ["7:00 AM", "12:00 PM", "4:00 PM"] },
    ],
    clientReviews: [
      {
        name: "Victoria Adams",
        date: "5 days ago",
        rating: 5,
        comment: "Kai's Barre Fusion classes are addictive! The burn is real but so worth it. I've never felt stronger or more toned. His energy is contagious!"
      },
      {
        name: "Ethan Cooper",
        date: "2 weeks ago",
        rating: 5,
        comment: "As a runner, Athletic Pilates with Kai has been game-changing for my performance and injury prevention. His knowledge of functional movement is impressive."
      },
      {
        name: "Isabella Santos",
        date: "1 week ago",
        rating: 5,
        comment: "Tower Pilates is my favorite workout ever! Kai is so patient and explains everything clearly. I love the challenge and variety in each session."
      }
    ]
  }
}

export default function ProfessionalProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<any>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const professional = professionalsData[id] || professionalsData["maya-yoga"]

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
              <Leaf className="w-5 h-5 text-primary fill-primary" />
              <div>
                <span className="text-2xl font-bold text-primary">{professional.rating}</span>
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

            {/* Client Reviews */}
            {professional.clientReviews && professional.clientReviews.length > 0 && (
              <section className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Client Reviews</h2>
                <div className="space-y-4">
                  {professional.clientReviews.map((review: any, index: number) => (
                    <div key={index} className="border-b border-border last:border-0 pb-4 last:pb-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{review.name}</h4>
                          <p className="text-xs text-muted-foreground">{review.date}</p>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Leaf key={i} className="w-4 h-4 text-primary fill-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

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
