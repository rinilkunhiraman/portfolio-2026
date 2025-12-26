# Rinil Kunhiraman - Portfolio Website

A modern, headless CMS-powered portfolio website built with Next.js 15, Sanity CMS, TypeScript, and Tailwind CSS v4. Features dynamic content management, smooth animations, dark mode support, and comprehensive SEO optimization.

## 🚀 Features

### Content Management
- **Sanity CMS Integration**: Headless CMS for easy content updates without code changes
- **Real-time Preview**: Sanity Studio embedded at `/sanity/studio`
- **Structured Content**: Organized schemas for projects, skills, experience, and personal info
- **Image Optimization**: Sanity's image CDN with automatic optimization
- **ISR (Incremental Static Regeneration)**: Fresh content with 1-hour revalidation

### Core Functionality
- **Multi-Page Structure**: Dedicated pages for About, Skills, Projects, Experience, and Contact
- **Dynamic Routing**: Individual project detail pages with `/projects/[slug]`
- **Responsive Design**: Fully responsive layout across all devices
- **Dark Mode Support**: System-aware theme with manual toggle
- **Smooth Animations**: Engaging scroll animations and transitions
- **Interactive Components**: Skill filtering, animated counters, and hover effects

### SEO & Performance
- **SEO Optimized**: Dynamic metadata, Open Graph, Twitter Cards for all pages
- **Structured Data**: JSON-LD schemas (Person, Website, Project, Article, Breadcrumbs)
- **Performance**: Next.js 15 App Router, image optimization, code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity.io
- **Deployment**: Vercel (recommended)
- **Package Manager**: pnpm

## 📋 Prerequisites

Before you begin, ensure you have:
- **Node.js**: Version 18.0 or higher
- **pnpm**: Version 8.0 or higher (`npm install -g pnpm`)
- **Sanity Account**: Free account at [sanity.io](https://www.sanity.io)
- **Git**: For version control

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/portfolio-next-2025.git
cd portfolio-next-2025
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Set Up Sanity CMS

Create a `.env.local` file in the root directory:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Get your Sanity credentials:**
1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Create a new project or use existing
3. Copy your Project ID
4. Use `production` as dataset name

### 4. Start Development Server
```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

### 5. Access Sanity Studio
```bash
# Visit in browser:
http://localhost:3000/sanity/studio
```

Login with your Sanity account and start adding content!

## 📁 Project Structure

```
portfolio-next-2025/
├── app/                        # Next.js App Router
│   ├── about/                  # About page
│   ├── contact/                # Contact page
│   ├── experience/             # Experience page
│   ├── projects/               # Projects listing
│   │   └── [slug]/            # Individual project pages
│   ├── sanity/studio/         # Sanity Studio route
│   ├── skills/                # Skills page
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout with metadata
│   └── page.tsx               # Homepage
├── components/                 # React components
│   ├── layout/                # Layout components
│   │   ├── Header.tsx         # Navigation with theme toggle
│   │   └── Footer.tsx         # Footer with social links
│   ├── sections/              # Page sections
│   │   ├── Hero.tsx           # Hero with role rotation
│   │   ├── About.tsx          # About section
│   │   ├── Skills.tsx         # Skills with filtering
│   │   ├── Projects.tsx       # Project cards
│   │   ├── Experience.tsx     # Timeline view
│   │   ├── Contact.tsx        # Contact info
│   │   └── ProjectDetail.tsx  # Project detail view
│   ├── ui/                    # UI components
│   │   └── Animations.tsx     # Animation components
│   └── StructuredData.tsx     # JSON-LD component
├── lib/                       # Utilities
│   ├── actions.ts             # Server actions
│   ├── constants.ts           # Site constants
│   └── structured-data.ts     # SEO schemas
├── sanity/                    # Sanity CMS
│   ├── schemaTypes/           # Content schemas
│   │   ├── personalInfo.ts    # Personal info schema
│   │   ├── skill.ts           # Skill schema
│   │   ├── skillCategory.ts   # Skill category schema
│   │   ├── project.ts         # Project schema
│   │   ├── experience.ts      # Experience schema
│   │   ├── socialLink.ts      # Social link schema
│   │   ├── contactInfo.ts     # Contact info schema
│   │   └── siteSettings.ts    # Site settings schema
│   ├── lib/                   # Sanity utilities
│   │   ├── client.ts          # Sanity client
│   │   ├── image.ts           # Image URL builder
│   │   └── queries.ts         # GROQ queries
│   ├── env.ts                 # Environment config
│   └── structure.ts           # Studio structure
├── types/                     # TypeScript types
│   └── index.ts               # All type definitions
├── public/                    # Static assets
│   ├── og-image-placeholder.svg
│   └── favicon.svg
├── .env.local                 # Environment variables (create this)
├── next.config.ts             # Next.js config
├── sanity.config.ts           # Sanity Studio config
├── tailwind.config.js         # Tailwind config
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies
```

## 🎨 Content Management with Sanity

All content is managed through Sanity Studio. No code changes needed!

### Adding Content

1. **Access Sanity Studio**:
   - Local: `http://localhost:3000/sanity/studio`
   - Production: `https://yourdomain.com/sanity/studio`

2. **Available Content Types**:

#### Personal Information
- Name, title, roles, tagline
- Bio (rich text)
- Profile image
- Resume file upload
- Location, availability
- Email, phone
- Social media links

#### Skills
- Skill name and proficiency (0-100)
- Category (Frontend, Backend, Database, etc.)
- Icon/logo upload
- Years of experience
- Description

#### Skill Categories
- Category name and slug
- Description and icon
- Color theme
- Display order

#### Projects
- Title, slug, description
- Long description (rich text)
- Main image and gallery
- Category (Frontend, Backend, Full-stack, etc.)
- Technologies used
- Features, challenges, solutions
- Live URL, GitHub URL, demo URL
- Start/end dates, duration
- Client, team size, your role
- Featured flag

#### Experience
- Job title and company
- Type (Full-time, Part-time, Freelance, etc.)
- Location and dates
- Description (rich text)
- Responsibilities and achievements
- Technologies used
- Company logo and website

#### Social Links
- Platform (GitHub, LinkedIn, Twitter, etc.)
- URL and username
- Display settings (show in header, footer, hero, contact)

#### Site Settings
- Site title and description
- SEO metadata
- OG image
- Site URL
- Analytics IDs

### Publishing Content

1. **Create/Edit Content** in Sanity Studio
2. **Click "Publish"** button
3. **Wait ~1 hour** for ISR to update (or redeploy for immediate update)
4. Changes appear on your live site automatically!

## 🎨 Customization (Code Level)

### Styling
- **Colors**: Modify Tailwind classes in components
- **Fonts**: Update in `app/layout.tsx`
- **Animations**: Customize in `components/ui/Animations.tsx`

### Branding
- **OG Image**: Replace `public/og-image-placeholder.svg`
- **Favicon**: Replace `public/favicon.svg`
- **Logo**: Update in Header component

### SEO
- **Metadata**: Managed through Sanity Site Settings
- **Structured Data**: Auto-generated from content
- **Sitemap**: Auto-generated by Next.js

## 🚀 Deployment

### Vercel (Recommended)

Vercel is the best platform for Next.js apps and offers the best performance.

#### Step 1: Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-next-2025.git
git push -u origin main
```

#### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "Add New..." → "Project"
4. Import your repository
5. Configure environment variables:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

6. Click "Deploy"
7. Your site will be live at `https://your-project.vercel.app`

#### Step 3: Add Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` in environment variables

### Alternative: Netlify

```bash
# Build command
pnpm build

# Publish directory
.next

# Environment variables (same as Vercel)
```

### Docker Deployment

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio

# Or use docker-compose
docker-compose up -d
```

## 📱 Browser Support

- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions
- **Mobile**: iOS Safari 12+, Chrome Mobile 80+

## 🔧 Available Scripts

```bash
# Development server (http://localhost:3000)
pnpm dev

# Type checking
pnpm type-check

# Production build
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## 📊 Performance Features

- **Image Optimization**: Sanity CDN + Next.js Image component
- **ISR**: 1-hour revalidation for fresh content without rebuilding
- **Code Splitting**: Automatic route-based splitting
- **Font Optimization**: Next.js font optimization
- **Bundle Analysis**: Optimized imports and tree-shaking

## 🧪 Testing Checklist

Before deploying, verify:
- [ ] Sanity Studio accessible at `/sanity/studio`
- [ ] All pages load correctly (/, /about, /skills, /projects, /experience, /contact)
- [ ] Dynamic project pages work (`/projects/[slug]`)
- [ ] Dark mode toggle functions
- [ ] Skills filtering works
- [ ] Navigation is responsive
- [ ] Images load from Sanity CDN
- [ ] SEO metadata appears correctly
- [ ] Structured data validates (use [Schema.org validator](https://validator.schema.org/))

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Rebuild
pnpm build
```

### Sanity Connection Issues
- Verify `.env.local` has correct Sanity credentials
- Check Sanity project ID matches your project
- Ensure dataset name is correct (usually `production`)
- Verify CORS origins in Sanity dashboard

### Content Not Updating
- Wait for ISR revalidation (1 hour)
- Or trigger revalidation by redeploying
- Check content is published in Sanity Studio

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **Next.js** - The React framework for production
- **Sanity.io** - Headless CMS platform
- **Tailwind CSS** - Utility-first CSS framework
- **Vercel** - Deployment and hosting platform
- **TypeScript** - Type-safe JavaScript

## 📞 Contact

**Rinil Kunhiraman**
- Portfolio: [Your deployed URL]
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/YOUR_PROFILE)

---

**Built with ❤️ using Next.js 15, Sanity CMS, TypeScript, and Tailwind CSS v4**
