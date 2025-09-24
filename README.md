# Mirosław Sankiewicz - Law Firm Website

A professional, modern website for Mirosław Sankiewicz Law Firm in Szczecin, Poland. Built with React, TypeScript, and Tailwind CSS for optimal performance and user experience.

## 🌐 Live Website

- **Testing URL:** https://matyss.github.io/sankiewicz-static-page/
- **Production URL:** miroslawsankiewicz.pl *(when ready)*

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
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

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

### Automatic Deployment (Current Setup)

The website automatically deploys to GitHub Pages when changes are pushed to the `main` branch:

1. **Push changes** to `main` branch
2. **GitHub Actions** automatically builds the site
3. **Deployed** to https://matyss.github.io/sankiewicz-static-page/

### Custom Domain Setup (When Ready)

To switch to the custom domain `miroslawsankiewicz.pl`:

1. **Update DNS** records to point to GitHub Pages
2. **Configure custom domain** in GitHub Pages settings
3. **Update base URL** in `vite.config.ts`

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

## 🔧 Hosting Alternatives

This project is designed for static hosting and works with:

- ✅ **GitHub Pages** (current)
- ✅ **Netlify** (with form handling)
- ✅ **Vercel**
- ✅ **Cloudflare Pages**

## 📞 Support

For technical support or modifications, contact the development team.

---

**Built with ❤️ for professional legal services in Szczecin**
