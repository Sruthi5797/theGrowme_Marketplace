"use client"

/**
 * Professional Portal Page
 * 
 * This is the main entry point for yoga/Pilates instructors.
 * Flow: Welcome (Onboarding) → Dashboard → Vibe Check
 * 
 * Views:
 * - welcome: Onboarding flow (name, type, teaching style)
 * - dashboard: Main instructor dashboard with stats and classes
 * - vibe-check: Daily mindfulness check-in
 */

import { useState } from "react"
import { NurturerWelcome, NurturerData } from "@/components/professional/NurturerWelcome"
import { NurturerDashboard } from "@/components/professional/NurturerDashboard"
import { NurturerVibeCheck } from "@/components/professional/NurturerVibeCheck"

type PortalView = "welcome" | "dashboard" | "vibe-check"

export default function ProfessionalPortalPage() {
  const [currentView, setCurrentView] = useState<PortalView>("welcome")
  const [nurturerData, setNurturerData] = useState<NurturerData | null>(null)

  // Handle completion of onboarding
  const handleOnboardingComplete = (data: NurturerData) => {
    setNurturerData(data)
    setCurrentView("dashboard")
  }

  // Navigate to daily vibe check
  const handleVibeCheck = () => {
    setCurrentView("vibe-check")
  }

  // Return to dashboard from vibe check
  const handleVibeCheckComplete = () => {
    setCurrentView("dashboard")
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Onboarding Flow */}
      {currentView === "welcome" && (
        <NurturerWelcome onComplete={handleOnboardingComplete} />
      )}

      {/* Main Dashboard */}
      {currentView === "dashboard" && nurturerData && (
        <NurturerDashboard
          studioName={nurturerData.name}
          onVibeCheck={handleVibeCheck}
        />
      )}

      {/* Daily Mindfulness Check */}
      {currentView === "vibe-check" && (
        <NurturerVibeCheck onComplete={handleVibeCheckComplete} />
      )}
    </div>
  )
}
