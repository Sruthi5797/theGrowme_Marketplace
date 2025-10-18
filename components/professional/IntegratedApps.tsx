"use client"

/**
 * Integrated Apps Component
 * 
 * Shows connected third-party integrations for the professional's business
 * Displays connection status, quick actions, and integration health
 */

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Calendar, 
  CreditCard, 
  Video, 
  Mail, 
  MessageSquare,
  Instagram,
  CheckCircle,
  XCircle,
  Settings,
  Plus,
  ExternalLink,
  TrendingUp,
  Users
} from "lucide-react"

interface Integration {
  id: string
  name: string
  icon: any
  connected: boolean
  description: string
  stats?: {
    label: string
    value: string
  }
  color: string
}

export function IntegratedApps() {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: "google-calendar",
      name: "Google Calendar",
      icon: Calendar,
      connected: true,
      description: "Sync your class schedule and availability",
      stats: {
        label: "Classes this week",
        value: "12"
      },
      color: "bg-blue-500"
    },
    {
      id: "stripe",
      name: "Stripe",
      icon: CreditCard,
      connected: true,
      description: "Process payments and manage subscriptions",
      stats: {
        label: "Revenue this month",
        value: "$2,450"
      },
      color: "bg-purple-500"
    },
    {
      id: "zoom",
      name: "Zoom",
      icon: Video,
      connected: true,
      description: "Host virtual yoga sessions",
      stats: {
        label: "Virtual classes",
        value: "8 scheduled"
      },
      color: "bg-blue-600"
    },
    {
      id: "mailchimp",
      name: "Mailchimp",
      icon: Mail,
      connected: false,
      description: "Email marketing and newsletters",
      color: "bg-yellow-500"
    },
    {
      id: "whatsapp",
      name: "WhatsApp Business",
      icon: MessageSquare,
      connected: true,
      description: "Communicate with students instantly",
      stats: {
        label: "Active conversations",
        value: "23"
      },
      color: "bg-green-500"
    },
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      connected: false,
      description: "Share your practice and grow your community",
      color: "bg-pink-500"
    }
  ])

  const connectedCount = integrations.filter(i => i.connected).length
  const totalCount = integrations.length

  const handleConnect = (id: string) => {
    setIntegrations(prev => 
      prev.map(int => 
        int.id === id ? { ...int, connected: true } : int
      )
    )
  }

  const handleDisconnect = (id: string) => {
    setIntegrations(prev => 
      prev.map(int => 
        int.id === id ? { ...int, connected: false } : int
      )
    )
  }

  return (
    <Card className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Integrated Apps</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {connectedCount} of {totalCount} apps connected
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-muted-foreground">All systems operational</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Integration Progress</span>
          <span>{Math.round((connectedCount / totalCount) * 100)}%</span>
        </div>
        <div className="h-2 bg-border rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${(connectedCount / totalCount) * 100}%` }}
          />
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {integrations.map((integration) => {
          const Icon = integration.icon
          return (
            <Card 
              key={integration.id}
              className={`p-4 transition-all hover:shadow-md ${
                integration.connected ? 'border-primary/30' : 'border-border'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-10 h-10 ${integration.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm">{integration.name}</h4>
                    {integration.connected ? (
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                  
                  <p className="text-xs text-muted-foreground mb-3">
                    {integration.description}
                  </p>

                  {integration.connected && integration.stats && (
                    <div className="mb-3 p-2 bg-primary/5 rounded-md">
                      <p className="text-xs text-muted-foreground">{integration.stats.label}</p>
                      <p className="text-sm font-semibold">{integration.stats.value}</p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    {integration.connected ? (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 text-xs flex-1"
                          onClick={() => {/* Open settings */}}
                        >
                          <Settings className="w-3 h-3 mr-1" />
                          Settings
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-7 text-xs"
                          onClick={() => handleDisconnect(integration.id)}
                        >
                          <XCircle className="w-3 h-3" />
                        </Button>
                      </>
                    ) : (
                      <Button
                        size="sm"
                        className="h-7 text-xs flex-1"
                        onClick={() => handleConnect(integration.id)}
                      >
                        <Plus className="w-3 h-3 mr-1" />
                        Connect
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="pt-4 border-t flex flex-col sm:flex-row gap-3">
        <Button variant="outline" className="flex-1">
          <ExternalLink className="w-4 h-4 mr-2" />
          Browse App Marketplace
        </Button>
        <Button variant="outline" className="flex-1">
          <Settings className="w-4 h-4 mr-2" />
          Manage Integrations
        </Button>
      </div>

      {/* Integration Benefits */}
      <div className="bg-gradient-to-br from-primary/5 to-emerald-50 rounded-lg p-4 space-y-3">
        <h4 className="font-semibold text-sm flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary" />
          Unlock More with Integrations
        </h4>
        <div className="grid sm:grid-cols-2 gap-3 text-xs">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">Automate booking confirmations</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">Sync payments automatically</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">Send class reminders via SMS</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">Track student engagement</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
