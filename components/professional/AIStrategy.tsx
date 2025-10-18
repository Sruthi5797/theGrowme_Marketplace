"use client"

/**
 * AI Strategy Component
 * 
 * Mockup AI-powered business insights and growth recommendations
 * Analyzes business metrics and provides personalized strategies
 */

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  TrendingUp, 
  TrendingDown,
  Target,
  Users,
  DollarSign,
  Calendar,
  ArrowRight,
  Lightbulb,
  Star,
  ChevronDown,
  ChevronUp,
  RefreshCw
} from "lucide-react"

interface Insight {
  id: string
  type: "opportunity" | "warning" | "achievement"
  title: string
  description: string
  metric?: string
  action?: string
  impact: "high" | "medium" | "low"
}

interface Strategy {
  id: string
  category: string
  title: string
  description: string
  steps: string[]
  estimatedImpact: string
  timeframe: string
}

export function AIStrategy() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [expandedStrategy, setExpandedStrategy] = useState<string | null>(null)

  const insights: Insight[] = [
    {
      id: "1",
      type: "opportunity",
      title: "Peak Booking Hours Identified",
      description: "Your students prefer booking between 6-8 PM on weekdays",
      metric: "+40% conversion",
      action: "Add more evening slots",
      impact: "high"
    },
    {
      id: "2",
      type: "achievement",
      title: "Student Retention Excellent",
      description: "85% of your students return for multiple sessions",
      metric: "15% above average",
      impact: "high"
    },
    {
      id: "3",
      type: "warning",
      title: "Weekend Availability Low",
      description: "High demand for Saturday classes with limited slots",
      metric: "12 waitlisted",
      action: "Consider weekend expansion",
      impact: "medium"
    },
    {
      id: "4",
      type: "opportunity",
      title: "Package Deals Performing Well",
      description: "Students buying 5-class packages have 90% completion rate",
      metric: "$850 avg value",
      action: "Promote packages more",
      impact: "high"
    }
  ]

  const strategies: Strategy[] = [
    {
      id: "1",
      category: "Revenue Growth",
      title: "Launch Membership Program",
      description: "Create a tiered membership system to increase recurring revenue and student commitment",
      steps: [
        "Design 3 membership tiers: Basic ($99/mo), Premium ($179/mo), Elite ($299/mo)",
        "Offer exclusive benefits like priority booking and workshop access",
        "Set up automated billing through Stripe integration",
        "Launch with early-bird 20% discount for first 50 members"
      ],
      estimatedImpact: "+$3,200/month recurring revenue",
      timeframe: "2-3 weeks to launch"
    },
    {
      id: "2",
      category: "Student Engagement",
      title: "Start a Wellness Challenge",
      description: "Create a 30-day mindfulness challenge to boost engagement and attract new students",
      steps: [
        "Design challenge with daily practices and milestones",
        "Create private WhatsApp group for participants",
        "Offer completion certificate and showcase on Instagram",
        "Partner with local wellness brands for prizes"
      ],
      estimatedImpact: "15-20 new students, increased social media reach",
      timeframe: "1 week preparation"
    },
    {
      id: "3",
      category: "Operational Efficiency",
      title: "Automate Class Reminders",
      description: "Reduce no-shows by 60% with automated SMS and email reminders",
      steps: [
        "Connect calendar with automated messaging system",
        "Set up 24-hour and 2-hour reminder sequences",
        "Include class prep checklist and studio location",
        "Add one-click reschedule option for flexibility"
      ],
      estimatedImpact: "Save 5 hours/week, reduce no-shows by 60%",
      timeframe: "2 days to set up"
    },
    {
      id: "4",
      category: "Marketing",
      title: "Leverage Student Testimonials",
      description: "Turn satisfied students into your best marketing channel",
      steps: [
        "Request video testimonials from top 10 long-term students",
        "Create highlight reel for Instagram and website",
        "Offer referral incentive: Give $20, Get $20 credit",
        "Share success stories in monthly newsletter"
      ],
      estimatedImpact: "20-30% increase in new student inquiries",
      timeframe: "Ongoing, 1 week to launch"
    }
  ]

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setTimeout(() => setIsAnalyzing(false), 2000)
  }

  const toggleStrategy = (id: string) => {
    setExpandedStrategy(expandedStrategy === id ? null : id)
  }

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="p-6 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3 className="text-xl font-semibold">AI Business Strategy</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Personalized insights and recommendations based on your business data
            </p>
          </div>
          <Button 
            size="sm"
            onClick={handleAnalyze}
            disabled={isAnalyzing}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            {isAnalyzing ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Refresh Insights
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Key Metrics Overview */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-xs font-semibold text-green-600">+18%</span>
          </div>
          <p className="text-2xl font-bold">$8,450</p>
          <p className="text-xs text-muted-foreground">Monthly Revenue</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-xs font-semibold text-blue-600">+12</span>
          </div>
          <p className="text-2xl font-bold">67</p>
          <p className="text-xs text-muted-foreground">Active Students</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-xs font-semibold text-purple-600">92%</span>
          </div>
          <p className="text-2xl font-bold">48</p>
          <p className="text-xs text-muted-foreground">Classes This Month</p>
        </Card>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-orange-600" />
            </div>
            <span className="text-xs font-semibold text-orange-600">4.9</span>
          </div>
          <p className="text-2xl font-bold">85%</p>
          <p className="text-xs text-muted-foreground">Retention Rate</p>
        </Card>
      </div>

      {/* AI Insights */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-yellow-600" />
          <h4 className="font-semibold">Smart Insights</h4>
        </div>
        
        <div className="space-y-3">
          {insights.map((insight) => (
            <div
              key={insight.id}
              className={`p-4 rounded-lg border-l-4 ${
                insight.type === "opportunity" 
                  ? "bg-green-50 border-green-500" 
                  : insight.type === "warning"
                  ? "bg-yellow-50 border-yellow-500"
                  : "bg-blue-50 border-blue-500"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-semibold text-sm">{insight.title}</h5>
                    {insight.impact === "high" && (
                      <span className="px-2 py-0.5 bg-white rounded text-xs font-semibold">
                        High Impact
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {insight.description}
                  </p>
                  {insight.metric && (
                    <p className="text-xs font-semibold text-green-700">
                      {insight.metric}
                    </p>
                  )}
                </div>
                {insight.action && (
                  <Button size="sm" variant="outline" className="flex-shrink-0">
                    {insight.action}
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Growth Strategies */}
      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-purple-600" />
          <h4 className="font-semibold">Recommended Growth Strategies</h4>
        </div>
        
        <div className="space-y-3">
          {strategies.map((strategy) => (
            <Card 
              key={strategy.id}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <div
                className="p-4 cursor-pointer"
                onClick={() => toggleStrategy(strategy.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-semibold">
                        {strategy.category}
                      </span>
                      {expandedStrategy === strategy.id ? (
                        <ChevronUp className="w-4 h-4 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      )}
                    </div>
                    <h5 className="font-semibold mb-1">{strategy.title}</h5>
                    <p className="text-sm text-muted-foreground">
                      {strategy.description}
                    </p>
                    
                    <div className="flex items-center gap-4 mt-3 text-xs">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-green-600" />
                        <span className="text-muted-foreground">{strategy.estimatedImpact}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-blue-600" />
                        <span className="text-muted-foreground">{strategy.timeframe}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {expandedStrategy === strategy.id && (
                <div className="px-4 pb-4 pt-2 border-t bg-gray-50">
                  <h6 className="text-sm font-semibold mb-3">Action Steps:</h6>
                  <div className="space-y-2">
                    {strategy.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-sm text-muted-foreground flex-1">{step}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1">
                      Start This Strategy
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <Button variant="outline">
                      Learn More
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </Card>

      {/* AI Assistant CTA */}
      <Card className="p-6 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">Need Personalized Guidance?</h4>
            <p className="text-sm text-purple-100">
              Chat with our AI business coach for customized advice tailored to your goals
            </p>
          </div>
          <Button variant="secondary" className="flex-shrink-0">
            <Sparkles className="w-4 h-4 mr-2" />
            Chat with AI Coach
          </Button>
        </div>
      </Card>
    </div>
  )
}
