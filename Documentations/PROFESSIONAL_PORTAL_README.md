# Professional Portal - Developer Documentation

## Overview
The Professional Portal is a dedicated space for yoga and Pilates instructors to manage their classes, students, and daily mindfulness practice.

## File Structure

```
app/
├── professional-portal/
│   └── page.tsx                 # Main portal entry point

components/
├── professional/
│   ├── NurturerWelcome.tsx     # Onboarding flow (3 steps)
│   ├── NurturerDashboard.tsx   # Main instructor dashboard
│   └── NurturerVibeCheck.tsx   # Daily mindfulness check-in
```

## User Flow

```
1. Click "I am a Professional" button (Header)
   ↓
2. /professional-portal → NurturerWelcome
   - Step 1: Enter studio/instructor name
   - Step 2: Select what they teach (Yoga/Pilates/Both)
   - Step 3: Choose teaching vibe
   ↓
3. NurturerDashboard
   - View weekly stats (classes, students, hours)
   - Check daily energy
   - See upcoming classes
   - Quick actions (Create class, Manage schedule)
   ↓
4. NurturerVibeCheck (Optional daily)
   - Select current mood
   - Set teaching intention
   ↓
5. Back to Dashboard
```

## Component Details

### NurturerWelcome
**Purpose**: Onboard new instructors
**Data Collected**:
- `studioName`: Instructor or studio name
- `businessType`: Yoga, Pilates, or Both
- `energyStyle`: Teaching vibe (Gentle, Dynamic, Grounding, Playful)

**State Management**:
- Uses local state for form progression
- Passes data via `onComplete` callback
- TODO: Save to database/localStorage

### NurturerDashboard
**Purpose**: Main instructor workspace
**Features**:
- Weekly statistics display
- Daily energy check-in
- Class listings with bookings
- Quick action buttons

**Data Sources** (Currently Hardcoded):
- Stats: Classes, students, hours
- Offerings: Class schedule
- TODO: Connect to real API/database

### NurturerVibeCheck
**Purpose**: Daily mindfulness practice
**Features**:
- Mood selection (6 options)
- Intention setting
- Saves state before returning

**Usage**: Optional daily ritual for teachers

## Key Technologies

- **Next.js 15**: App router, server/client components
- **Framer Motion**: Page transitions and animations
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Lucide Icons**: UI icons

## Data Flow

```
Professional Portal Page (State Container)
├── nurturerData: NurturerData | null
├── currentView: "welcome" | "dashboard" | "vibe-check"
│
├─→ NurturerWelcome
│   └─→ onComplete(data) → sets nurturerData, changes view
│
├─→ NurturerDashboard
│   ├── receives: studioName
│   └─→ onVibeCheck() → changes view to "vibe-check"
│
└─→ NurturerVibeCheck
    └─→ onComplete() → returns to dashboard
```

## Future Enhancements (TODOs)

### Backend Integration
- [ ] Save onboarding data to database
- [ ] Fetch real class statistics
- [ ] Load actual class schedule
- [ ] Store daily vibe check entries
- [ ] User authentication

### Features
- [ ] Edit profile/settings
- [ ] Create/edit classes
- [ ] View student roster
- [ ] Messaging system
- [ ] Calendar integration
- [ ] Analytics dashboard
- [ ] Payment integration

### UX Improvements
- [ ] Add loading states
- [ ] Error handling
- [ ] Form validation
- [ ] Responsive design refinements
- [ ] Accessibility improvements

## Styling Guide

**Color Palette**:
- Primary: Green (`primary` class)
- Accents: Purple, Emerald, Pink
- Gradients: Light, peaceful tones

**Typography**:
- Headers: Bold, welcoming
- Body: Soft, readable
- Emojis: Used for warmth 🌿✨💚

**Animations**:
- Subtle fade-ins
- Smooth transitions
- Non-distracting motion

## Testing Checklist

- [ ] Onboarding flow completion
- [ ] Dashboard data display
- [ ] Vibe check form submission
- [ ] Navigation between views
- [ ] Back button functionality
- [ ] Mobile responsiveness
- [ ] TypeScript type checking
- [ ] Console error-free

## Common Issues

**Issue**: Card component import error
**Fix**: TypeScript cache issue - restart dev server or ignore (runtime works)

**Issue**: Animations not smooth
**Fix**: Check framer-motion installation, verify motion.div usage

**Issue**: Navigation stuck
**Fix**: Verify state updates in callbacks, check console for errors

## Contact

For questions about the professional portal:
- Check component comments
- Review this README
- Test locally at `/professional-portal`
