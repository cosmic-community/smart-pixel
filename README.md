# Smart Pixel Professional Services Website

![Smart Pixel Website](https://imgix.cosmicjs.com/dee1b530-8294-11f0-83d8-7b0502815c4d-photo-1551288049-bebda4e38f71-1756223634881.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional services website built with Astro and powered by Cosmic CMS. Showcase your services, team, case studies, and client testimonials with a fast, SEO-optimized static site.

## Features

- 🚀 **Lightning Fast Performance** - Static site generation with Astro
- 📱 **Fully Responsive Design** - Optimized for all devices
- 🎨 **Modern UI/UX** - Professional design with smooth animations
- 📊 **Dynamic Content** - Powered by your existing Cosmic CMS structure
- 🔍 **SEO Optimized** - Built-in SEO best practices
- 💼 **Service Showcase** - Interactive service cards with pricing
- 👥 **Team Profiles** - Professional team member showcases
- 📈 **Case Studies** - Detailed project portfolios with results
- 💬 **Client Testimonials** - Social proof with ratings and photos
- 📞 **Contact Integration** - Professional contact forms

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=68add5bd1f09167261d59014&clone_repository=68ade06b1f09167261d590aa)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create a content model for a company website with services, team members, testimonials, and case studies

### Code Generation Prompt

> Set up an Astro website powered by my existing content

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Frontend**: Astro 4.x, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Cosmic Headless CMS
- **Icons**: Lucide Icons
- **Deployment**: Vercel/Netlify Ready

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic CMS account with your content

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up your environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Add your Cosmic credentials:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Start the development server:
   ```bash
   bun run dev
   ```

5. Open [http://localhost:4321](http://localhost:4321) in your browser

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '../lib/cosmic';

// Get all services
const { objects: services } = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching Team Members
```typescript
// Get all team members
const { objects: teamMembers } = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

### Fetching Case Studies
```typescript
// Get all case studies
const { objects: caseStudies } = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1);
```

## Cosmic CMS Integration

This website leverages your existing Cosmic content structure:

- **Services** (`services`) - Service offerings with descriptions and pricing
- **Team Members** (`team-members`) - Team profiles with photos and bios  
- **Case Studies** (`case-studies`) - Project portfolios with detailed results
- **Testimonials** (`testimonials`) - Client feedback with ratings and photos

All content is managed through your Cosmic dashboard and automatically reflected on the website.

## Deployment Options

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy with automatic builds on push

### Netlify
1. Connect your repository to Netlify
2. Add environment variables in site settings
3. Set build command: `bun run build`
4. Set publish directory: `dist`

The website will automatically rebuild when you update content in Cosmic CMS.
<!-- README_END -->