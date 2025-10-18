"use client"

/**
 * Nurturer Vibe Check Component
 * 
 * Daily mindfulness check-in for instructors
 * Helps teachers ground themselves before teaching by:
 * 1. Selecting their current mood/energy
 * 2. Setting an intention for their teaching
 * 
 * @param onComplete - Callback when check-in is complete
 */

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface NurturerVibeCheckProps {
  onComplete: () => void
}

export function NurturerVibeCheck({ onComplete }: NurturerVibeCheckProps) {
  const [selectedMood, setSelectedMood] = useState("")
  const [intention, setIntention] = useState("")

  // Mood options for instructors
  const moods = [
    { emoji: "😌", label: "Peaceful" },
    { emoji: "⚡", label: "Energized" },
    { emoji: "🌟", label: "Inspired" },
    { emoji: "💚", label: "Grateful" },
    { emoji: "🧘", label: "Centered" },
    { emoji: "🌸", label: "Gentle" },
  ]

  // Complete check-in and return to dashboard
  const handleComplete = () => {
    if (selectedMood && intention) {
      // TODO: Save mood and intention to database
      onComplete()
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-primary/5 via-emerald-50 to-green-50">
      <div className="w-full max-w-2xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center">
            <Sparkles className="w-12 h-12 text-amber-500" />
          </div>
          <h1 className="text-4xl font-bold">Daily Check-In 🌿</h1>
          <p className="text-lg text-muted-foreground">
            Ground yourself before you teach
          </p>
        </motion.div>

        {/* Mood Selection */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-center">How are you feeling?</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => setSelectedMood(mood.label)}
                className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${
                  selectedMood === mood.label
                    ? "border-primary bg-primary/10 shadow-lg scale-105"
                    : "border-border bg-white hover:border-primary/50"
                }`}
              >
                <span className="text-4xl">{mood.emoji}</span>
                <span className="text-sm font-medium">{mood.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Intention */}
        {selectedMood && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-center">
              What would you like to cultivate in your teaching today?
            </h3>
            <textarea
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
              placeholder="e.g., Patience, playfulness, deep presence..."
              className="w-full h-32 p-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-all resize-none"
              autoFocus
            />
          </motion.div>
        )}

        {/* Complete Button */}
        {selectedMood && intention && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <Button onClick={handleComplete} size="lg" className="px-12 h-12 text-lg">
              Complete Check-In ✨
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
