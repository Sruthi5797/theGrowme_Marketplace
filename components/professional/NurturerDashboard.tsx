"use client"

/**
 * Nurturer Dashboard Component
 * 
 * Main dashboard for yoga/Pilates instructors showing:
 * - Weekly stats (classes, students, hours)
 * - Daily energy check-in
 * - Upcoming classes with booking counts
 * - Quick actions for class management
 * 
 * @param studioName - Name of the instructor or studio
 * @param onVibeCheck - Callback to open daily mindfulness check
 */

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Heart, TrendingUp, Calendar, Users, Clock } from "lucide-react"
import Link from "next/link"
import { IntegratedApps } from "./IntegratedApps"
import { AIStrategy } from "./AIStrategy"
import { Logo } from "@/components/Logo"

interface NurturerDashboardProps {
  studioName: string
  onVibeCheck: () => void
}

export function NurturerDashboard({ studioName, onVibeCheck }: NurturerDashboardProps) {
  const [todaysVibe, setTodaysVibe] = useState("")

  // Energy check-in options
  const vibeOptions = ["Energized ⚡", "Calm 🌊", "Focused 🎯", "Grateful 💚"]

  // Sample class offerings - TODO: Connect to real data
  const offerings = [
    {
      title: "Morning Vinyasa Flow",
      benefit: "Start the day with mindful movement",
      bookings: 12,
      nextClass: "Tomorrow 8:00 AM",
      color: "from-purple-100 to-purple-50",
      iconColor: "text-purple-500",
    },
    {
      title: "Core Strength Pilates",
      benefit: "Build stability and inner power",
      bookings: 8,
      nextClass: "Today 6:00 PM",
      color: "from-emerald-100 to-emerald-50",
      iconColor: "text-emerald-500",
    },
    {
      title: "Restorative Evening Yoga",
      benefit: "Unwind and release the day",
      bookings: 15,
      nextClass: "Today 7:30 PM",
      color: "from-pink-100 to-pink-50",
      iconColor: "text-pink-500",
    },
  ]

  // Weekly statistics - TODO: Connect to real data
  const stats = [
    { label: "Classes This Week", value: "24", icon: Calendar, color: "text-blue-600" },
    { label: "Active Students", value: "42", icon: Users, color: "text-green-600" },
    { label: "Hours of Flow", value: "128", icon: Clock, color: "text-amber-600" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-emerald-50 to-green-50">
      {/* Header */}
      <header className="border-b border-border/50 py-6 px-6 bg-white/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-start gap-4">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Logo size="md" showText={false} />
            </Link>
            <div>
              <Link href="/" className="text-xl font-bold text-primary hover:text-primary/80 mb-1 block">
                theGrowMe
              </Link>
              <h1 className="text-2xl font-bold">Welcome back, {studioName} 🌿</h1>
              <p className="text-muted-foreground">Your energy creates ripples of calm</p>
            </div>
          </div>
          <Button onClick={onVibeCheck} variant="outline">
            Daily Vibe Check
          </Button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Stats Overview */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Today's Vibe */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="text-xl font-semibold">How's your energy today?</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {vibeOptions.map((vibe) => (
              <button
                key={vibe}
                onClick={() => setTodaysVibe(vibe)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  todaysVibe === vibe
                    ? "border-primary bg-primary/10 shadow-md"
                    : "border-border bg-white hover:border-primary/50"
                }`}
              >
                <span className="font-medium">{vibe}</span>
              </button>
            ))}
          </div>
        </motion.section>

        {/* Your Offerings */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-pink-500" />
            <h3 className="text-xl font-semibold">Your Offerings</h3>
          </div>
          <div className="grid gap-6">
            {offerings.map((offering) => (
              <Card
                key={offering.title}
                className={`p-6 bg-gradient-to-br ${offering.color} border-2 border-border/50 hover:shadow-lg transition-all`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">{offering.title}</h4>
                    <p className="text-muted-foreground mb-4">{offering.benefit}</p>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{offering.bookings} bookings</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{offering.nextClass}</span>
                      </div>
                    </div>
                  </div>
                  <TrendingUp className={`w-6 h-6 ${offering.iconColor}`} />
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Quick Actions */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Button size="lg" className="h-16 text-lg">
              Create New Class
            </Button>
            <Button size="lg" variant="outline" className="h-16 text-lg">
              Manage Schedule
            </Button>
          </div>
        </motion.section>

        {/* Integrated Apps */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <IntegratedApps />
        </motion.section>

        {/* AI Strategy & Insights */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <AIStrategy />
        </motion.section>
      </main>
    </div>
  )
}
