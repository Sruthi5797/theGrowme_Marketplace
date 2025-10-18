"use client"

/**
 * Nurturer Welcome Component - Comprehensive Onboarding
 * 
 * Multi-step onboarding that collects all info for professional profile:
 * 1. Import option (Google Business or manual)
 * 2. Basic info (name, title, location)
 * 3. Professional details (experience, certifications, about)
 * 4. Contact information
 * 5. Services & pricing
 * 6. Additional details & photos
 * 
 * @param onComplete - Callback with collected data
 */

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ChevronLeft, 
  Upload, 
  MapPin, 
  Mail, 
  Phone, 
  Award, 
  DollarSign, 
  Image as ImageIcon,
  CheckCircle,
  Plus,
  Trash2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Logo } from "@/components/Logo"

interface NurturerWelcomeProps {
  onComplete: (data: NurturerData) => void
}

export interface NurturerData {
  name: string
  title: string
  location: string
  yearsExperience: number
  certifications: string
  about: string
  email: string
  phone: string
  responseTime: string
  services: Array<{
    name: string
    duration: string
    price: string
    description: string
  }>
  thingsToKnow: string[]
  googleBusinessImported?: boolean
  consentGiven?: boolean
  gdprAccepted?: boolean
}

export function NurturerWelcome({ onComplete }: NurturerWelcomeProps) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<NurturerData>({
    name: "",
    title: "",
    location: "",
    yearsExperience: 0,
    certifications: "",
    about: "",
    email: "",
    phone: "",
    responseTime: "Within 2 hours",
    services: [],
    thingsToKnow: [],
    googleBusinessImported: false,
    consentGiven: false,
    gdprAccepted: false,
  })

  const [currentService, setCurrentService] = useState({
    name: "",
    duration: "",
    price: "",
    description: ""
  })

  const [currentThingToKnow, setCurrentThingToKnow] = useState("")

  // Test data for quick testing
  const fillTestData = () => {
    setData({
      name: "Maya Patel",
      title: "Yoga & Meditation Instructor",
      location: "Brooklyn, New York",
      yearsExperience: 8,
      certifications: "RYT-500, E-RYT 200, Yin Yoga Certified",
      about: "I've been teaching yoga for over 8 years, specializing in vinyasa flow and restorative practices. My approach combines traditional yoga philosophy with modern mindfulness techniques. I believe in creating a safe, inclusive space where students of all levels can explore their practice and find inner peace.",
      email: "maya.patel@example.com",
      phone: "(555) 234-5678",
      responseTime: "Within 1 hour",
      services: [
        {
          name: "Private Yoga Session",
          duration: "60 min",
          price: "$85",
          description: "One-on-one personalized yoga practice tailored to your goals and needs"
        },
        {
          name: "Group Vinyasa Flow",
          duration: "75 min",
          price: "$30",
          description: "Dynamic flowing sequences linking breath with movement for all levels"
        },
        {
          name: "Restorative Yoga",
          duration: "90 min",
          price: "$35",
          description: "Gentle, relaxing practice using props to support deep relaxation and healing"
        }
      ],
      thingsToKnow: [
        "Yoga mat and props provided",
        "Wear comfortable, breathable clothing",
        "Arrive 10 minutes early for check-in",
        "Please bring your own water bottle",
        "First-time students receive 20% off"
      ],
      googleBusinessImported: false,
      consentGiven: true,
      gdprAccepted: true,
    })
  }

  // Handle Google Business Profile Import
  const handleGoogleImport = () => {
    // TODO: Implement actual Google Business API integration
    const mockGoogleData: Partial<NurturerData> = {
      name: "Sample Yoga Studio",
      location: "Brooklyn, New York",
      phone: "(555) 123-4567",
      about: "Certified yoga instructor with passion for mindful movement",
      yearsExperience: 5,
      googleBusinessImported: true,
    }
    setData({ ...data, ...mockGoogleData })
    setStep(1) // Skip to verification step
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  const handleNext = () => {
    if (step < 6) setStep(step + 1)
  }

  const handleComplete = () => {
    onComplete(data)
  }

  const addService = () => {
    if (currentService.name && currentService.price) {
      setData({
        ...data,
        services: [...data.services, currentService]
      })
      setCurrentService({ name: "", duration: "", price: "", description: "" })
    }
  }

  const removeService = (index: number) => {
    setData({
      ...data,
      services: data.services.filter((_, i) => i !== index)
    })
  }

  const addThingToKnow = () => {
    if (currentThingToKnow.trim()) {
      setData({
        ...data,
        thingsToKnow: [...data.thingsToKnow, currentThingToKnow.trim()]
      })
      setCurrentThingToKnow("")
    }
  }

  const removeThingToKnow = (index: number) => {
    setData({
      ...data,
      thingsToKnow: data.thingsToKnow.filter((_, i) => i !== index)
    })
  }

  const updateField = (field: keyof NurturerData, value: any) => {
    setData({ ...data, [field]: value })
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-emerald-50 to-green-50 py-8 sm:py-12 relative overflow-hidden">
      {/* Floating animated elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-1/2 right-20 w-16 h-16 bg-green-200/30 rounded-full blur-xl"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="w-full max-w-3xl mx-auto relative z-10">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex gap-2 justify-center mb-4">
            {[0, 1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-400 ${
                  idx === step ? "w-12 bg-primary" : idx < step ? "w-8 bg-primary/60" : "w-8 bg-border"
                }`}
              />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Step {step + 1} of 7
          </p>
        </div>

        {/* Back button */}
        {step > 0 && (
          <button
            onClick={handleBack}
            className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Step 0: Import Option */}
            {step === 0 && (
              <div className="space-y-8">
                {/* Animated Logo */}
                <div className="flex justify-center mb-6">
                  <Logo size="lg" showText={true} />
                </div>

                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-bold">Welcome! Let's get you set up 🌿</h2>
                  <p className="text-lg text-muted-foreground">
                    Choose how you'd like to create your profile
                  </p>
                </div>

                {/* Quick Test Data Button (for development) */}
                <div className="text-center">
                  <Button
                    onClick={() => {
                      fillTestData()
                      setStep(6) // Jump to review
                    }}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    🧪 Fill Test Data (Dev Only)
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-8 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary"
                    onClick={handleGoogleImport}>
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <Upload className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">Import from Google</h3>
                      <p className="text-sm text-muted-foreground">
                        Quickly import your business info, reviews, and contact details from Google Business Profile
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-primary">
                        <CheckCircle className="w-4 h-4" />
                        <span>Fastest setup</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8 hover:shadow-lg transition-all cursor-pointer border-2 hover:border-primary"
                    onClick={() => setStep(1)}>
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                        <Award className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="text-xl font-semibold">Create Manually</h3>
                      <p className="text-sm text-muted-foreground">
                        Fill in your details step-by-step. Takes about 10 minutes to complete
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-emerald-600">
                        <CheckCircle className="w-4 h-4" />
                        <span>Full control</span>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {/* Step 1: Basic Information */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center">Basic Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Full Name *</label>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      placeholder="e.g., Maya Patel"
                      className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Professional Title *</label>
                    <input
                      type="text"
                      value={data.title}
                      onChange={(e) => updateField("title", e.target.value)}
                      placeholder="e.g., Yoga & Meditation Instructor"
                      className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Location *
                    </label>
                    <input
                      type="text"
                      value={data.location}
                      onChange={(e) => updateField("location", e.target.value)}
                      placeholder="e.g., Brooklyn, New York"
                      className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!data.name || !data.title || !data.location}
                  className="w-full h-12 text-lg"
                >
                  Continue
                </Button>
              </div>
            )}

            {/* Step 2: Professional Details */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center">Professional Background</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Years of Experience *</label>
                    <input
                      type="number"
                      value={data.yearsExperience || ""}
                      onChange={(e) => updateField("yearsExperience", parseInt(e.target.value) || 0)}
                      placeholder="e.g., 5"
                      min="0"
                      max="50"
                      className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Award className="w-4 h-4" />
                      Certifications & Credentials
                    </label>
                    <input
                      type="text"
                      value={data.certifications}
                      onChange={(e) => updateField("certifications", e.target.value)}
                      placeholder="e.g., RYT-500, E-RYT 200"
                      className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-all"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      List your certifications (optional but recommended)
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">About You *</label>
                    <textarea
                      value={data.about}
                      onChange={(e) => updateField("about", e.target.value)}
                      placeholder="Share your teaching philosophy, experience, and what makes your practice unique..."
                      rows={6}
                      className="w-full p-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-all resize-none"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {data.about.length}/500 characters
                    </p>
                  </div>
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!data.yearsExperience || !data.about}
                  className="w-full h-12 text-lg"
                >
                  Continue
                </Button>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-center">Contact Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={data.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={data.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Typical Response Time</label>
                    <select
                      value={data.responseTime}
                      onChange={(e) => updateField("responseTime", e.target.value)}
                      className="w-full h-12 px-4 rounded-xl border-2 border-border focus:border-primary focus:outline-none transition-all"
                    >
                      <option value="Within 30 minutes">Within 30 minutes</option>
                      <option value="Within 1 hour">Within 1 hour</option>
                      <option value="Within 2 hours">Within 2 hours</option>
                      <option value="Within 24 hours">Within 24 hours</option>
                    </select>
                  </div>
                </div>

                <Button
                  onClick={handleNext}
                  disabled={!data.email || !data.phone}
                  className="w-full h-12 text-lg"
                >
                  Continue
                </Button>
              </div>
            )}

            {/* Step 4: Services & Pricing */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-center mb-2">Your Services</h2>
                  <p className="text-center text-muted-foreground">
                    Add the classes or sessions you offer
                  </p>
                </div>
                
                {/* Added Services List */}
                {data.services.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-semibold">Your Offerings ({data.services.length})</h3>
                    {data.services.map((service, index) => (
                      <Card key={index} className="p-4 flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="font-semibold">{service.name}</h4>
                          <p className="text-sm text-muted-foreground">{service.duration} • {service.price}</p>
                          <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                        </div>
                        <button
                          onClick={() => removeService(index)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </Card>
                    ))}
                  </div>
                )}

                {/* Add Service Form */}
                <Card className="p-6 space-y-4 border-2 border-dashed">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add a Service
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <input
                        type="text"
                        value={currentService.name}
                        onChange={(e) => setCurrentService({...currentService, name: e.target.value})}
                        placeholder="Service name (e.g., Private Yoga Session)"
                        className="w-full h-10 px-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={currentService.duration}
                        onChange={(e) => setCurrentService({...currentService, duration: e.target.value})}
                        placeholder="60 min"
                        className="w-full h-10 px-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none"
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    value={currentService.price}
                    onChange={(e) => setCurrentService({...currentService, price: e.target.value})}
                    placeholder="Price (e.g., $75)"
                    className="w-full h-10 px-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none"
                  />

                  <textarea
                    value={currentService.description}
                    onChange={(e) => setCurrentService({...currentService, description: e.target.value})}
                    placeholder="Brief description of this service..."
                    rows={3}
                    className="w-full p-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none resize-none"
                  />

                  <Button
                    onClick={addService}
                    disabled={!currentService.name || !currentService.price}
                    variant="outline"
                    className="w-full"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Service
                  </Button>
                </Card>

                <Button
                  onClick={handleNext}
                  disabled={data.services.length === 0}
                  className="w-full h-12 text-lg"
                >
                  Continue
                </Button>
              </div>
            )}

            {/* Step 5: Things to Know */}
            {step === 5 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-center mb-2">Things Students Should Know</h2>
                  <p className="text-center text-muted-foreground">
                    Important information for your clients (what to bring, wear, expect)
                  </p>
                </div>
                
                {/* Added Items */}
                {data.thingsToKnow.length > 0 && (
                  <div className="space-y-2">
                    {data.thingsToKnow.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="flex-1 text-sm">{item}</span>
                        <button
                          onClick={() => removeThingToKnow(index)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Add Item Form */}
                <Card className="p-4 border-2 border-dashed">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={currentThingToKnow}
                      onChange={(e) => setCurrentThingToKnow(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addThingToKnow()}
                      placeholder="e.g., Yoga mat and props provided"
                      className="flex-1 h-10 px-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none"
                    />
                    <Button
                      onClick={addThingToKnow}
                      disabled={!currentThingToKnow.trim()}
                      variant="outline"
                      size="sm"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>

                <div className="space-y-2">
                  <Button
                    onClick={handleNext}
                    className="w-full h-12 text-lg"
                  >
                    Continue
                  </Button>
                  <Button
                    onClick={handleNext}
                    variant="ghost"
                    className="w-full"
                  >
                    Skip for now
                  </Button>
                </div>
              </div>
            )}

            {/* Step 6: Review & Submit */}
            {step === 6 && (
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <h2 className="text-3xl font-bold">Review Your Profile</h2>
                  <p className="text-muted-foreground">
                    Make sure everything looks good before we create your profile
                  </p>
                </div>

                <Card className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{data.name}</h3>
                    <p className="text-muted-foreground">{data.title}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {data.location}
                    </p>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Experience</h4>
                    <p className="text-sm">{data.yearsExperience} years</p>
                    {data.certifications && (
                      <p className="text-sm text-muted-foreground">{data.certifications}</p>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <p className="text-sm">{data.email}</p>
                    <p className="text-sm">{data.phone}</p>
                    <p className="text-xs text-muted-foreground">Responds {data.responseTime.toLowerCase()}</p>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">Services ({data.services.length})</h4>
                    <div className="space-y-2">
                      {data.services.map((service, i) => (
                        <div key={i} className="text-sm">
                          <span className="font-medium">{service.name}</span>
                          <span className="text-muted-foreground"> • {service.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {data.thingsToKnow.length > 0 && (
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Things to Know</h4>
                      <ul className="text-sm space-y-1">
                        {data.thingsToKnow.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card>

                {/* Consent & GDPR Section */}
                <Card className="p-6 space-y-4 border-2 border-primary/20 bg-primary/5">
                  <div className="flex items-start gap-2">
                    <div className="pt-1">
                      <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Important: Background Verification</h4>
                      <p className="text-sm text-muted-foreground">
                        Your profile will undergo verification before going live. This typically takes 1-2 business days. We'll verify your:
                      </p>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1 ml-4">
                        <li>• Professional certifications</li>
                        <li>• Contact information</li>
                        <li>• Business credentials</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                {/* Consent Checkboxes */}
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={data.consentGiven || false}
                        onChange={(e) => updateField("consentGiven", e.target.checked)}
                        className="w-5 h-5 rounded border-2 border-primary text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">
                        I confirm that all information provided is true and accurate
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Providing false information may result in account suspension
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={data.gdprAccepted || false}
                        onChange={(e) => updateField("gdprAccepted", e.target.checked)}
                        className="w-5 h-5 rounded border-2 border-primary text-primary focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">
                        I accept the Terms of Service, Privacy Policy, and GDPR data processing terms
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        We protect your data in compliance with GDPR regulations. 
                        <a href="/privacy" className="text-primary hover:underline ml-1">Read our Privacy Policy</a>
                      </p>
                    </div>
                  </label>
                </div>

                <div className="space-y-3">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      onClick={handleComplete}
                      disabled={!data.consentGiven || !data.gdprAccepted}
                      className="w-full h-12 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {data.consentGiven && data.gdprAccepted ? (
                        <>Create My Profile ✨</>
                      ) : (
                        <>Please accept the terms to continue</>
                      )}
                    </Button>
                  </motion.div>
                  <p className="text-center text-xs text-muted-foreground">
                    🔒 Your data is encrypted and secure. Profile will be reviewed within 1-2 business days.
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
