"use client"

import { Trophy, Target, Award, TrendingUp } from "lucide-react"

export function GamificationWidget() {
  return (
    <div className="border border-border rounded-xl p-6 bg-gradient-to-br from-primary/5 to-emerald-50">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="w-5 h-5 text-primary" />
        <h3 className="font-semibold">Your Wellness Journey</h3>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm">Sessions Completed</span>
          </div>
          <span className="font-semibold text-primary">12</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm">Wellness Streak</span>
          </div>
          <span className="font-semibold text-primary">7 days</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm">Progress Level</span>
          </div>
          <span className="font-semibold text-primary">Level 3</span>
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Next Level</span>
            <span className="text-xs font-semibold">75%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-emerald-500" style={{ width: "75%" }} />
          </div>
        </div>
      </div>
    </div>
  )
}
