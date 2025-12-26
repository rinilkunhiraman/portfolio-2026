# Portfolio Sanity CMS Schemas

This directory contains all the Sanity CMS schemas for converting your static portfolio to a fully dynamic, content-managed website.

## 📋 **Schema Overview**

### **Core Content Schemas**

1. **`personalInfo.ts`** - Personal information for Hero & About sections
2. **`skill.ts`** - Individual technical skills with proficiency levels
3. **`skillCategory.ts`** - Skill groupings and categories
4. **`experience.ts`** - Work experience and project history
5. **`project.ts`** - Portfolio projects with rich content
6. **`socialLink.ts`** - Social media and professional links
7. **`contactInfo.ts`** - Contact details and form settings
8. **`siteSettings.ts`** - Global site configuration

---

## 🏗️ **Schema Details**

### **1. Personal Information (`personalInfo`)**
**Purpose**: Powers Hero and About sections
- Personal details (name, roles, tagline)
- Profile image with alt text
- Journey and motivation content (rich text)
- Key statistics with color themes
- Core values list
- Resume file upload
- Contact information (email, phone, location)

**Key Features**:
- Rich text editing for biography sections
- Customizable stats with color coding
- Professional role rotation for hero section

---

### **2. Skill Category (`skillCategory`)**
**Purpose**: Organizes skills into logical groups
- Category name and description
- Slug for URL-friendly navigation
- Color theme for visual consistency
- Optional category icon
- Display order and active status

**Default Categories**:
- Frontend, Backend, Database
- CMS, DevOps, Tools, Learning

---

### **3. Skill (`skill`)**
**Purpose**: Individual technical skills with detailed information
- Skill name and proficiency (0-100)
- Category reference (linked to skillCategory)
- Auto-calculated proficiency labels
- Optional skill icon/logo
- Years of experience
- Related projects linking
- Highlighting for featured skills

**Proficiency Levels**:
- Learning (0-59)
- Intermediate (60-69)
- Advanced (70-84)
- Expert (85-100)

---

### **4. Experience (`experience`)**
**Purpose**: Professional and project work history
- Job title, company, and type
- Date ranges with current position support
- Rich text description
- Key achievements list
- Technologies used (linked to skills)
- Company logo and website
- Related projects linking

**Experience Types**:
- Full-time, Part-time, Freelance
- Contract, Internship, Project
- Personal, Volunteer

---

### **5. Project (`project`)**
**Purpose**: Showcase portfolio projects with comprehensive details
- Project title, description (short & detailed)
- Category and status tracking
- Technologies used (linked to skills)
- Key features and challenges
- Multiple project images with captions
- Live demo and GitHub links
- Team size and role information
- Related experience linking

**Project Categories**:
- Frontend, Backend, Full-Stack
- Mobile, Data Engineering, DevOps
- Machine Learning, Design

---

### **6. Social Link (`socialLink`)**
**Purpose**: Social media and professional platform links
- Platform selection from predefined list
- Custom display names and usernames
- Optional custom icons
- Visibility controls (Hero, Contact, Footer)
- Display order management

**Supported Platforms**:
- GitHub, LinkedIn, Twitter/X
- Medium, Dev.to, Stack Overflow
- Instagram, YouTube, Discord
- Email, Website, RSS, and more

---

### **7. Contact Info (`contactInfo`)**
**Purpose**: Contact section content and form configuration
- Contact section title and description
- Primary and alternate email
- Phone number and location details
- Availability status and response time
- Preferred contact methods
- Working hours information
- Contact form settings and validation

**Form Features**:
- Customizable required fields
- Success/error messages
- Spam protection options
- Field validation rules

---

### **8. Site Settings (`siteSettings`)**
**Purpose**: Global website configuration and settings
- Site title, description, and SEO
- Logo, favicon, and social images
- Theme colors and mode preferences
- Navigation menu configuration
- Footer settings and quick links
- Analytics and tracking codes
- Feature toggles (blog, testimonials, etc.)
- Maintenance mode controls

**Theme Options**:
- Primary/secondary colors
- Light/Dark/System mode
- Theme toggle availability

---

## 🔗 **Schema Relationships**

### **Reference Connections**:
```
skill → skillCategory (many-to-one)
skill → project (many-to-many via relatedProjects)
experience → skill (many-to-many via technologies)
experience → project (one-to-many via relatedExperience)
project → skill (many-to-many via technologies)
project → experience (many-to-one via relatedExperience)
```

### **Content Flow**:
1. **Skills** are organized into **Categories**
2. **Projects** showcase specific **Skills**
3. **Experience** entries use **Skills** and create **Projects**
4. **Social Links** appear across multiple sections
5. **Site Settings** control global behavior

---

## 📊 **Content Management Benefits**

### **Dynamic Content**:
- No code changes needed for content updates
- Rich text editing with formatting
- Image management with optimization
- Structured data with validation

### **Scalability**:
- Easy to add new skills, projects, experiences
- Flexible categorization and filtering
- Reusable content components
- Cross-referencing between entities

### **User Experience**:
- Preview functionality in Sanity Studio
- Drag-and-drop ordering
- Bulk editing capabilities
- Content versioning and history

---

## 🛠️ **Implementation Notes**

### **Content Strategy**:
1. Start with **Site Settings** for global configuration
2. Create **Personal Information** for basic profile
3. Set up **Skill Categories** before adding skills
4. Add **Skills** with proper categorization
5. Create **Experience** entries with skill relationships
6. Build **Projects** linking to skills and experience
7. Configure **Social Links** for various sections
8. Set up **Contact Information** and form preferences

### **Best Practices**:
- Use consistent naming conventions
- Fill out all SEO-related fields
- Optimize images for web performance
- Link related content for better navigation
- Keep descriptions concise but informative
- Regularly update availability and contact info

---

## 🚀 **Next Steps**

After setting up these schemas:

1. **Install Sanity** packages in your Next.js project
2. **Configure Sanity Studio** with these schemas
3. **Create data fetching** functions for each schema
4. **Update components** to use dynamic data
5. **Build content entry** workflows in Sanity Studio
6. **Test and optimize** the content management experience

This schema structure provides a solid foundation for a fully dynamic, professionally managed portfolio website that can grow and evolve with your career.
