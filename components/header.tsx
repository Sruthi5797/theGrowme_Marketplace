import Link from "next/link"

export function Header() {
  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
            theGrowMe
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="https://discord.gg/thegrowme"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Community
          </a>
          <Link href="/discounts" className="text-sm font-medium hover:text-primary transition-colors">
            Discounts
          </Link>
          <Link href="/resources" className="text-sm font-medium hover:text-primary transition-colors">
            Resources
          </Link>
          <Link href="/#professionals" className="text-sm font-medium hover:text-primary transition-colors">
            Professionals
          </Link>
        </nav>

        <div className="flex items-center gap-4 text-transparent">
          <button className="bg-gradient-to-r from-primary via-pink-400 to-rose-400 px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200 bg-sidebar-ring font-extrabold text-neutral-50 text-base">
            I am a Professional
          </button>
        </div>
      </div>
    </header>
  )
}
