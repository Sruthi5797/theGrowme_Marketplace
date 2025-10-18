# theGrowMe Marketplace - Code Structure Guide

## 📁 Project Overview

A Next.js marketplace focused exclusively on **Yoga & Pilates** professionals and students.

## 🗂️ Directory Structure

```
theGrowMe_Marketplace/
│
├── app/                           # Next.js App Router
│   ├── page.tsx                  # Homepage (student view)
│   ├── layout.tsx                # Root layout
│   ├── professional-portal/      # 👨‍🏫 INSTRUCTOR PORTAL
│   │   └── page.tsx             # Portal entry (onboarding → dashboard)
│   ├── professional/[id]/        # Individual instructor profiles
│   │   └── page.tsx             # Profile with reviews, stats, booking
│   ├── category/[slug]/          # Category pages (yoga, pilates)
│   │   └── page.tsx             # Filtered instructor listings
│   ├── discounts/                # Special offers page
│   │   └── page.tsx
│   └── resources/                # Podcasts, articles, videos
│       └── page.tsx
│
├── components/                    # Reusable components
│   ├── professional/             # 👨‍🏫 INSTRUCTOR COMPONENTS
│   │   ├── NurturerWelcome.tsx  # Onboarding (3 steps)
│   │   ├── NurturerDashboard.tsx # Main dashboard
│   │   └── NurturerVibeCheck.tsx # Daily mindfulness
│   │
│   ├── ui/                       # Base UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   │
│   ├── header.tsx                # Main navigation
│   ├── hero-section.tsx          # Homepage hero
│   ├── categories-scroll.tsx     # Category navigation
│   ├── professional-card.tsx     # Instructor card display
│   ├── discount-card.tsx         # Discount offer cards
│   └── [other components]
│
├── lib/
│   └── utils.ts                  # Utility functions (cn, etc.)
│
├── public/                        # Static assets
│
└── styles/
    └── globals.css               # Global styles, Tailwind config
```

## 🎯 Two Main User Paths

### 1. Student/Client Path (Main Marketplace)
```
Homepage (/) 
  → Browse Categories (yoga, pilates)
  → View Instructors
  → Click Instructor → Profile Page (/professional/[id])
  → See Reviews, Stats, Services
  → Book Session
```

**Key Pages:**
- `/` - Homepage with featured instructors
- `/category/yoga` - All yoga instructors
- `/category/pilates` - All Pilates instructors
- `/professional/maya-yoga` - Individual instructor profile
- `/discounts` - Special package deals
- `/resources` - Learning content

### 2. Professional/Instructor Path (Portal)
```
Click "I am a Professional" 
  → /professional-portal
  → Onboarding (name, type, style)
  → Dashboard
  → Manage classes, view stats
  → Daily vibe check
```

**Key Files:**
- `/app/professional-portal/page.tsx` - Portal container
- `/components/professional/NurturerWelcome.tsx` - Onboarding
- `/components/professional/NurturerDashboard.tsx` - Main workspace
- `/components/professional/NurturerVibeCheck.tsx` - Mindfulness

## 📊 Data Flow

### Current State (Hardcoded)
All data is currently static/hardcoded:
- Instructor profiles in `/app/professional/[id]/page.tsx`
- Homepage instructors in `/app/page.tsx`
- Categories in `/app/category/[slug]/page.tsx`

### Future State (Database)
```
Components → API Routes → Database
  ↓
Real-time data
User authentication
Booking system
Payment processing
```

## 🎨 Design System

### Colors
- **Primary**: Green/Emerald (wellness theme)
- **Accents**: Purple, Pink, Amber
- **Backgrounds**: Light gradients (primary/5, emerald-50)

### Typography
- **Headers**: Bold, large (text-2xl, text-4xl)
- **Body**: Medium weight (text-base, text-lg)
- **Emojis**: Used throughout for warmth 🌿✨💚

### Components
- **Rounded**: Most elements use rounded-xl or rounded-2xl
- **Shadows**: Subtle shadows on cards
- **Animations**: Framer Motion for smooth transitions

## 🔑 Key Features

### For Students
✅ Browse yoga/Pilates instructors
✅ View detailed profiles with reviews (leaf icons, not stars)
✅ See stats (years experience, bookings)
✅ Expandable service details
✅ Class packages and discounts
✅ Near me events
✅ Live online classes

### For Instructors
✅ Quick onboarding (3 questions)
✅ Dashboard with weekly stats
✅ Class management interface
✅ Daily mindfulness check-in
✅ Energy/vibe tracking
⏳ Student roster (TODO)
⏳ Payment integration (TODO)
⏳ Calendar sync (TODO)

## 🧩 Component Patterns

### Server vs Client Components
```tsx
// Default: Server Component (no "use client")
export default function Page() { }

// Client Component (has interactivity)
"use client"
export function InteractiveComponent() { }
```

### Layout Pattern
```tsx
<div className="min-h-screen bg-background">
  <Header />
  <main className="max-w-6xl mx-auto px-6 py-12">
    {/* Content */}
  </main>
</div>
```

### Animation Pattern
```tsx
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Animated content */}
</motion.div>
```

## 🔧 Common Tasks

### Add a New Instructor
1. Edit `/app/professional/[id]/page.tsx`
2. Add to `professionalsData` object
3. Add to homepage `/app/page.tsx` in `wellnessProfessionals`
4. Add to relevant category in `/app/category/[slug]/page.tsx`

### Add a New Component
1. Create in `/components/` or `/components/ui/`
2. Use TypeScript for type safety
3. Export as named export
4. Import where needed

### Update Styling
- Global styles: `/styles/globals.css`
- Component styles: Inline Tailwind classes
- Theme colors: Defined in `globals.css` (--primary, etc.)

## 🐛 Troubleshooting

### TypeScript Errors
- Often just linting cache issues
- Check if app actually compiles (`npm run dev`)
- Clear cache: `rm -rf .next`
- Restart dev server

### Import Not Found
- Check file path is correct
- Verify file has proper export
- Try absolute import with `@/`
- Restart TypeScript server in VSCode

### Styling Not Working
- Check Tailwind class names
- Verify `className` not `class`
- Check if parent has required layout
- Inspect in browser DevTools

## 📚 Documentation

- `PROFESSIONAL_PORTAL_README.md` - Detailed portal docs
- Component comments - Inline documentation
- This file - Overall structure

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
npm run dev

# Open browser
http://localhost:3000

# Test professional portal
http://localhost:3000/professional-portal
```

## 📝 Notes

- **Focus**: Yoga & Pilates only (no other wellness services)
- **Vibe**: Light, peaceful, mindful
- **Stack**: Next.js 15, TypeScript, Tailwind, Framer Motion
- **Status**: Frontend MVP (no backend yet)
