"use client"

import { Header } from "@/components/header"
import { Play, Headphones, Video, FileText } from "lucide-react"

export default function ResourcesPage() {
  const podcasts = [
    {
      title: "The Beauty Business Blueprint",
      host: "Emma Davis",
      episodes: 45,
      image: "/makeup-artist-applying-makeup.jpg",
      description: "Learn how to grow your beauty business from industry experts",
    },
    {
      title: "Wellness Wisdom",
      host: "Sarah Johnson",
      episodes: 32,
      image: "/spa-treatment-with-stones.jpg",
      description: "Insights on holistic wellness and spa management",
    },
    {
      title: "Hair Talk with Michael",
      host: "Michael Chen",
      episodes: 28,
      image: "/hairstylist-cutting-hair.jpg",
      description: "Latest trends and techniques in hair styling",
    },
  ]

  const articles = [
    {
      title: "10 Tips to Boost Your Booking Rate",
      author: "Lisa Anderson",
      readTime: "5 min read",
      category: "Business Growth",
    },
    {
      title: "Creating an Instagram Strategy That Works",
      author: "David Martinez",
      readTime: "8 min read",
      category: "Marketing",
    },
    {
      title: "Client Retention: Building Lasting Relationships",
      author: "Sophia Williams",
      readTime: "6 min read",
      category: "Client Care",
    },
    {
      title: "Pricing Your Services: A Complete Guide",
      author: "Emma Davis",
      readTime: "10 min read",
      category: "Business",
    },
  ]

  const videos = [
    {
      title: "Advanced Makeup Techniques Masterclass",
      creator: "Emma Davis",
      duration: "45:30",
      views: "12.5K",
    },
    {
      title: "Building Your Personal Brand",
      creator: "Michael Chen",
      duration: "32:15",
      views: "8.2K",
    },
    {
      title: "Massage Therapy Best Practices",
      creator: "Sarah Johnson",
      duration: "28:45",
      views: "15.3K",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="px-6 lg:px-20 py-12">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-muted-foreground">
            Podcasts, articles, and content created by our community of professionals
          </p>
        </div>

        {/* Podcasts Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Headphones className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Podcasts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((podcast, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative h-48">
                  <img
                    src={podcast.image || "/placeholder.svg"}
                    alt={podcast.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="flex items-center gap-2 text-white">
                      <Play className="w-5 h-5" />
                      <span className="text-sm font-medium">{podcast.episodes} episodes</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{podcast.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">Hosted by {podcast.host}</p>
                  <p className="text-sm text-foreground/80">{podcast.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Tutorials Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Video className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Video Tutorials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-pink-500/20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-primary ml-1" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground mb-1">By {video.creator}</p>
                  <p className="text-xs text-muted-foreground">{video.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Articles Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Articles & Guides</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-muted-foreground">By {article.author}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary via-pink-500 to-orange-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Want to Share Your Expertise?</h2>
          <p className="text-xl mb-8 opacity-90">Join our community and create content that inspires others</p>
          <button className="bg-white text-primary font-semibold px-8 py-3 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-200">
            Become a Creator
          </button>
        </section>
      </main>
    </div>
  )
}
