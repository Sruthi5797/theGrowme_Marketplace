export function CTABanner() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-emerald-50 to-green-50 py-20 px-6 lg:px-20 -mx-6 lg:-mx-20 mb-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Connect with <span className="text-primary">10,000+</span> Wellness & Beauty Experts Near You
        </h2>
        <p className="text-lg text-muted-foreground mb-3 max-w-2xl mx-auto">
          Book self-care services that truly fit your style and needs today
        </p>
        <div className="flex flex-col items-center gap-2">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
            Start here
          </button>
          <p className="text-sm text-muted-foreground">
            Free to explore • No commitments • Fully private
          </p>
        </div>
      </div>
    </section>
  )
}
