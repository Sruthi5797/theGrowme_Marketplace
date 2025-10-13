export function HeroCTASection() {
  return (
    <section className="
relative bg-gradient-to-br from-primary/10 via-emerald-50 to-green-50 py-20 px-6 lg:px-20 -mx-6 lg:-mx-20 mb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance">
          Connect with <span className="text-primary">10,000+</span> Wellness & Beauty Experts
        </h1>
        <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Book self-care services that truly fit your style and needs — all in one place.
        </p>
        <div className="flex flex-col items-center gap-3">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
            Start Your Journey
          </button>
          <p className="text-sm text-muted-foreground">
            Free to explore • No commitments • Fully private
          </p>
        </div>
      </div>
    </section>
  )
}
