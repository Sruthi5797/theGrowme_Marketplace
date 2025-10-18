# Quick Reference - theGrowMe Marketplace

## 🚀 Common Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run linting
pnpm install         # Install dependencies
rm -rf .next         # Clear cache (if issues)
```

## 📁 Where to Find Things

| What you need | File location |
|--------------|---------------|
| Add instructor | `/app/professional/[id]/page.tsx` |
| Homepage content | `/app/page.tsx` |
| Header/navigation | `/components/header.tsx` |
| Professional portal | `/app/professional-portal/page.tsx` |
| Dashboard | `/components/professional/NurturerDashboard.tsx` |
| Discounts | `/app/discounts/page.tsx` |
| Categories | `/app/category/[slug]/page.tsx` |
| Styling | `/styles/globals.css` |

## 🎨 Quick Styling

```tsx
// Standard page layout
<div className="min-h-screen bg-gradient-to-br from-primary/5 via-emerald-50 to-green-50">
  <main className="max-w-6xl mx-auto px-6 py-12">
    {/* content */}
  </main>
</div>

// Card
<Card className="p-6">
  {/* content */}
</Card>

// Button
<Button size="lg" className="h-16 text-lg">
  Click me
</Button>

// Gradient background
className="bg-gradient-to-br from-purple-100 to-purple-50"
```

## 🔧 Professional Portal Flow

```
1. User clicks "I am a Professional"
2. Route: /professional-portal
3. Components load in order:
   - NurturerWelcome (onboarding)
   - NurturerDashboard (main view)
   - NurturerVibeCheck (optional daily)
```

## 📊 Data Structure

### Instructor Profile
```typescript
{
  id: "maya-yoga",
  name: "Maya Chen",
  title: "Yoga & Meditation Teacher",
  location: "Brooklyn, New York",
  rating: 4.99,
  yearsExperience: 8,
  totalBookings: 1543,
  weeklyBookings: 23,
  images: ["/yoga-image.jpg"],
  services: [...],
  reviews: [...]
}
```

### Professional Data
```typescript
{
  studioName: "Luna's Yoga",
  businessType: "Yoga" | "Pilates" | "Both",
  energyStyle: "Gentle & Restorative" | ...
}
```

## 🎯 Current Instructors

1. **maya-yoga** - Maya Chen (Yoga & Meditation)
2. **sophia-pilates** - Sophia Anderson (Pilates)
3. **luna-vinyasa** - Luna Martinez (Vinyasa Flow)
4. **kai-pilates** - Kai Thompson (Barre & Pilates)

## 🐛 Common Issues & Fixes

### "Cannot find module" error
**Cause**: TypeScript cache
**Fix**: Ignore if app runs fine, or restart VSCode

### Styling not applying
**Fix**: Check className syntax, verify Tailwind class exists

### Animation not working
**Fix**: Check framer-motion import, ensure "use client" at top

### Page not found
**Fix**: Check route file is in correct folder structure

## 🎨 Color Palette

```css
--primary: Green/Emerald
--accent-purple: Purple tones for yoga
--accent-emerald: Green tones for wellness
--accent-pink: Pink tones for gentle/feminine energy
--amber: Golden tones for energy/vitality
```

## 📱 Responsive Breakpoints

```tsx
// Mobile first
className="text-base md:text-lg lg:text-xl"
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="px-6 lg:px-12"
```

## 🔗 Important Links

- Homepage: `/`
- Professional Portal: `/professional-portal`
- Yoga Category: `/category/yoga`
- Pilates Category: `/category/pilates`
- Discounts: `/discounts`
- Resources: `/resources`

## 📝 Next Steps / TODOs

- [ ] Connect to database
- [ ] Add user authentication
- [ ] Implement booking system
- [ ] Add payment integration
- [ ] Create admin panel
- [ ] Mobile app version
- [ ] Email notifications
- [ ] Analytics tracking

## 💡 Pro Tips

1. **Always "use client"** for interactive components
2. **Use motion.div** for animations
3. **Keep emojis consistent** 🌿✨💚
4. **Test both paths** - student AND instructor
5. **Mobile first** - check responsive design
6. **Comments help** - add JSDoc to components
7. **Type everything** - use TypeScript properly
