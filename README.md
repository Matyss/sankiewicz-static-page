# Mirosław Sankiewicz - Law Firm Website

A professional, modern website for Mirosław Sankiewicz Law Firm in Szczecin, Poland. Built with React, TypeScript, and Tailwind CSS for optimal performance and user experience.

## 🌐 Live Website

- **Production URL:** https://miroslawsankiewicz.pl

## ✨ Features

- **Professional Design** - Clean, modern layout optimized for law firm services
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Contact Form Integration** - EmailJS integration with OVH Email Pro
- **Performance Optimized** - Fast loading times with Vite build system
- **SEO Ready** - Semantic HTML structure for better search engine visibility

## 🛠️ Technology Stack

- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS + shadcn/ui components
- **Build Tool:** Vite
- **Email Service:** EmailJS with OVH Email Pro
- **Hosting:** OVH Shared Hosting

## 🚀 Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

```bash
# Clone the repository
git clone https://github.com/Matyss/sankiewicz-static-page.git

# Navigate to project directory
cd sankiewicz-static-page

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## 📧 Email Configuration

The contact form uses EmailJS to send emails directly to `adwokat@miroslawsankiewicz.pl`. The configuration is handled automatically through the integrated EmailJS service.

## 🚀 Deployment

### Deployment to OVH Hosting

The website is hosted on OVH shared hosting and deployed via FTP:

1. **Make your changes** and test locally with `npm run dev`
2. **Build the production site:**
   ```bash
   npm run build
   ```
3. **Deploy to OVH:**
   ```bash
   ./deploy.sh
   ```
   (You'll be prompted for your FTP password)

4. **Commit and push to Git** for backup:
   ```bash
   git add .
   git commit -m "Your update description"
   git push origin main
   ```

### Deployment Workflow
- ✅ Build → Deploy → Git backup
- The `deploy.sh` script uploads all files from `dist/` to OVH hosting
- Site is live at https://miroslawsankiewicz.pl immediately after deployment

## 📝 Content Management

### Updating Content

- **Text content:** Edit React components in `src/components/`
- **Images:** Replace files in `src/assets/`
- **Contact information:** Update `ContactSection.tsx`
- **Services:** Modify `ServicesSection.tsx`
- **Testimonials:** Edit `TestimonialsSection.tsx`

### Key Sections

- **Hero Section** - Main banner with lawyer introduction
- **About Section** - Professional background and experience
- **Services Section** - Legal specializations
- **Testimonials** - Client reviews and feedback
- **Contact Section** - Contact form and office information

## 🔧 Technical Details

- **OVH Hosting:** Shared hosting with FTP access
- **SSL Certificate:** Let's Encrypt (free, auto-renewing)
- **Email:** OVH Email Pro with full DKIM/SPF configuration

## 📞 Support

For technical support or modifications, contact the development team.

---

**Built with ❤️ for professional legal services in Szczecin**
