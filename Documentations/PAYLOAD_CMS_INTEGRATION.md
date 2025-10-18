# Payload CMS Integration Guide

## Overview
This guide provides instructions for integrating Payload CMS into the theGrowMe Marketplace for scalable content management and API creation.

## Why Payload CMS?
- **Headless CMS**: Built specifically for Next.js and TypeScript
- **API-First**: Automatically generates REST and GraphQL APIs
- **Type-Safe**: Full TypeScript support with auto-generated types
- **Customizable**: Flexible collections and fields
- **Authentication**: Built-in user authentication and authorization
- **Admin Panel**: Beautiful admin UI out of the box

## Installation Steps

### 1. Install Dependencies
```bash
cd /Users/sradhakrishnan/hackathon25/theGrowme_Marketplace
pnpm add payload @payloadcms/next @payloadcms/richtext-lexical @payloadcms/db-mongodb
pnpm add -D @payloadcms/ui
```

### 2. Environment Variables
Create or update `.env.local`:
```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/growme-marketplace
# or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/growme-marketplace

# Payload Configuration
PAYLOAD_SECRET=your-super-secret-key-here-change-this
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Optional: Email Configuration
EMAIL_FROM=noreply@growme.com
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASS=your-sendgrid-api-key
```

### 3. Create Payload Configuration
Create `payload.config.ts` in the root:
```typescript
import { buildConfig } from 'payload/config'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'

// Import collections
import { Professionals } from './collections/Professionals'
import { Services } from './collections/Services'
import { Bookings } from './collections/Bookings'
import { Reviews } from './collections/Reviews'
import { Users } from './collections/Users'

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  
  // Admin panel configuration
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- theGrowMe Admin',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },

  // Collections (data models)
  collections: [
    Professionals,
    Services,
    Bookings,
    Reviews,
    Users,
  ],

  // Editor configuration
  editor: lexicalEditor({}),

  // Database adapter
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),

  // TypeScript configuration
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },

  // File upload configuration
  upload: {
    limits: {
      fileSize: 5000000, // 5MB
    },
  },
})
```

## Collection Schemas

### 4. Create Collections Directory
Create `collections/` directory with the following files:

#### `collections/Professionals.ts`
```typescript
import { CollectionConfig } from 'payload/types'

export const Professionals: CollectionConfig = {
  slug: 'professionals',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'title', 'location', 'status'],
  },
  access: {
    read: () => true, // Public read access
    create: ({ req: { user } }) => !!user, // Only authenticated users
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'yearsExperience',
      type: 'number',
      required: true,
    },
    {
      name: 'certifications',
      type: 'text',
    },
    {
      name: 'about',
      type: 'textarea',
      required: true,
    },
    {
      name: 'responseTime',
      type: 'select',
      options: [
        { label: 'Within 30 minutes', value: 'within_30min' },
        { label: 'Within 1 hour', value: 'within_1hr' },
        { label: 'Within 2 hours', value: 'within_2hrs' },
        { label: 'Within 24 hours', value: 'within_24hrs' },
      ],
      defaultValue: 'within_2hrs',
    },
    {
      name: 'profileImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
    },
    {
      name: 'thingsToKnow',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'availability',
      type: 'array',
      fields: [
        {
          name: 'day',
          type: 'select',
          options: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday', 
            'Friday', 'Saturday', 'Sunday'
          ],
        },
        {
          name: 'timeSlots',
          type: 'array',
          fields: [
            { name: 'start', type: 'text' },
            { name: 'end', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'rating',
      type: 'number',
      min: 0,
      max: 5,
      admin: {
        readOnly: true, // Calculated from reviews
      },
    },
    {
      name: 'totalBookings',
      type: 'number',
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'weeklyBookings',
      type: 'number',
      defaultValue: 0,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Pending', value: 'pending' },
      ],
      defaultValue: 'pending',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
```

#### `collections/Services.ts`
```typescript
import { CollectionConfig } from 'payload/types'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'category',
      type: 'select',
      options: ['Yoga', 'Pilates', 'Meditation', 'Workshop'],
      required: true,
    },
    {
      name: 'professional',
      type: 'relationship',
      relationTo: 'professionals',
      required: true,
    },
  ],
}
```

#### `collections/Bookings.ts`
```typescript
import { CollectionConfig } from 'payload/types'

export const Bookings: CollectionConfig = {
  slug: 'bookings',
  admin: {
    defaultColumns: ['professional', 'service', 'date', 'status'],
  },
  fields: [
    {
      name: 'professional',
      type: 'relationship',
      relationTo: 'professionals',
      required: true,
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      required: true,
    },
    {
      name: 'studentName',
      type: 'text',
      required: true,
    },
    {
      name: 'studentEmail',
      type: 'email',
      required: true,
    },
    {
      name: 'studentPhone',
      type: 'text',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'time',
      type: 'text',
      required: true,
    },
    {
      name: 'notes',
      type: 'textarea',
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Confirmed', value: 'confirmed' },
        { label: 'Completed', value: 'completed' },
        { label: 'Cancelled', value: 'cancelled' },
      ],
      defaultValue: 'pending',
    },
    {
      name: 'paymentStatus',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Paid', value: 'paid' },
        { label: 'Refunded', value: 'refunded' },
      ],
      defaultValue: 'pending',
    },
  ],
}
```

#### `collections/Reviews.ts`
```typescript
import { CollectionConfig } from 'payload/types'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    defaultColumns: ['professional', 'rating', 'author', 'createdAt'],
  },
  fields: [
    {
      name: 'professional',
      type: 'relationship',
      relationTo: 'professionals',
      required: true,
    },
    {
      name: 'author',
      type: 'text',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
    },
    {
      name: 'comment',
      type: 'textarea',
      required: true,
    },
    {
      name: 'verified',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
  timestamps: true,
}
```

#### `collections/Users.ts`
```typescript
import { CollectionConfig } from 'payload/types'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Professional', value: 'professional' },
        { label: 'Student', value: 'student' },
      ],
      required: true,
      defaultValue: 'student',
    },
    {
      name: 'professional',
      type: 'relationship',
      relationTo: 'professionals',
      admin: {
        condition: (data) => data.role === 'professional',
      },
    },
  ],
}
```

## Next.js Integration

### 5. Update `app/layout.tsx`
Add Payload initialization (if needed for admin panel):
```typescript
// No changes needed - Payload handles its own routes
```

### 6. Create API Routes
Payload automatically creates API routes at `/api/[collection]`

For custom endpoints, create `app/api/custom/route.ts`:
```typescript
import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'

export async function GET() {
  const payload = await getPayload({ config })
  
  const professionals = await payload.find({
    collection: 'professionals',
    where: {
      status: {
        equals: 'active',
      },
    },
  })
  
  return NextResponse.json(professionals)
}
```

## Using Payload in Components

### 7. Fetch Data in Server Components
```typescript
import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function ProfessionalsPage() {
  const payload = await getPayload({ config })
  
  const { docs: professionals } = await payload.find({
    collection: 'professionals',
    limit: 10,
  })
  
  return (
    <div>
      {professionals.map(pro => (
        <div key={pro.id}>{pro.name}</div>
      ))}
    </div>
  )
}
```

### 8. Client-Side API Calls
```typescript
'use client'

async function fetchProfessionals() {
  const response = await fetch('/api/professionals')
  const data = await response.json()
  return data.docs
}
```

## Admin Panel Access

Once configured, access the admin panel at:
```
http://localhost:3000/admin
```

Default admin user will be created on first run.

## Benefits for theGrowMe Marketplace

1. **Scalable Data Management**: Easily manage professionals, services, bookings
2. **Auto-Generated APIs**: REST and GraphQL endpoints out of the box
3. **Type Safety**: Auto-generated TypeScript types for all collections
4. **Admin Interface**: Beautiful UI for content management
5. **Authentication**: Built-in user roles and permissions
6. **File Uploads**: Handle professional photos and gallery images
7. **Relationships**: Link services to professionals, bookings to services
8. **Validation**: Field-level validation and constraints
9. **Hooks**: Add custom logic on create, update, delete operations
10. **Search**: Full-text search capabilities across collections

## Next Steps

1. Install dependencies
2. Set up MongoDB (local or Atlas)
3. Create collections directory and files
4. Configure payload.config.ts
5. Run migrations if needed
6. Access admin panel and create first professional
7. Update existing components to fetch from Payload APIs

## Migration Strategy

To migrate existing hardcoded data:
1. Create seed script to populate Payload collections
2. Update components to use Payload APIs instead of hardcoded data
3. Test thoroughly in development
4. Deploy with production database

## Resources

- [Payload CMS Docs](https://payloadcms.com/docs)
- [Next.js Integration](https://payloadcms.com/docs/getting-started/installation#nextjs)
- [MongoDB Setup](https://payloadcms.com/docs/database/mongodb)
