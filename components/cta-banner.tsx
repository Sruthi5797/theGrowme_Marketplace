export function CTABanner() {
  return (
    <div className="bg-gradient-to-r from-primary via-pink-400 to-rose-400 text-white border-sidebar-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 text-white bg-accent">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-card-foreground">Connect with 10,000+ Wellness &amp; Beauty Experts Near You</h2>
            <p className="max-w-2xl mx-auto text-zinc-800 leading-3 text-lg">
              Book self-care services that truly fit your style and needs today
            </p>
          </div>
          <button className="hover:bg-white/90 px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-lg bg-chart-5 text-background leading-4">
            Start here
          </button>
        </div>
      </div>
    </div>
  )
}
