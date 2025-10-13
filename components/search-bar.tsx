import { Search, MapPin, Calendar, Sparkles } from "lucide-react"

export function SearchBar() {
  return (
    <div className="bg-background border-b border-border py-6">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center bg-white border border-border rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <button className="flex-1 text-left px-8 py-4 hover:bg-emerald-50 transition-colors group">
            <div className="flex items-center gap-2 mb-1">
              <MapPin className="w-4 h-4 text-orange-600" />
              <div className="font-extrabold text-sidebar-accent-foreground text-base">Where</div>
            </div>
            <div className="text-sm text-muted-foreground">Search location</div>
          </button>

          <div className="w-px h-12 bg-border" />

          <button className="flex-1 text-left px-8 py-4 hover:bg-blue-50 transition-colors group">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-amber-400" />
              <div className="text-base text-slate-800 font-bold">When</div>
            </div>
            <div className="text-sm text-muted-foreground">Add date</div>
          </button>

          <div className="w-px h-12 bg-border" />

          <button className="flex-1 text-left px-8 py-4 hover:bg-purple-50 transition-colors group">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-orange-800" />
              <div className="text-base text-card-foreground font-extrabold">Service Type</div>
            </div>
            <div className="text-sm text-muted-foreground">Add service</div>
          </button>

          <button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg p-4 m-2 transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
