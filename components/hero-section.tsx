export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-emerald-50 to-green-50 py-20 px-6 lg:px-20 -mx-6 lg:-mx-20 mb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Grow Together with <span className="text-primary">10,000+</span> Wellness Enthusiasts
        </h1>
        <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Join a thriving community of beauty and wellness professionals and clients. Discover services, connect with
          experts, and transform your well-being journey.
        </p>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
            Explore Professionals
          </button>
          <button className="bg-white hover:bg-gray-50 text-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all border-2 border-border">
            Learn More
          </button>
        </div>
        <div className="mt-12 flex flex-wrap gap-8 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">10,000+ Active Members</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">500+ Verified Professionals</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span className="text-muted-foreground">50,000+ Sessions Booked</span>
          </div>
        </div>
      </div>
    </section>
  )
}
