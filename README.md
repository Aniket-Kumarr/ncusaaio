# USAAIO NC Website

A modern, responsive website for the United States Artificial Intelligence Organization of North Carolina (USAAIO NC). This website showcases the organization's mission, events, team, and provides comprehensive information about AI initiatives in North Carolina.

## 🚀 Features

- **Modern Design**: Beautiful, responsive UI with smooth animations
- **Comprehensive Information**: Detailed sections covering all aspects of USAAIO NC
- **Interactive Elements**: Smooth scrolling, hover effects, and micro-interactions
- **Mobile-First**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

## 🎨 Design System

- **Color Palette**: Professional blue and yellow accent colors
- **Typography**: Inter for body text, Poppins for headings
- **Components**: Reusable UI components with consistent styling
- **Animations**: Framer Motion animations for enhanced user experience

## 🏗️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Poppins)

## 📁 Project Structure

```
ncusaaio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage component
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── Features.tsx         # Features showcase
│   ├── About.tsx            # About section
│   ├── Events.tsx           # Events section
│   ├── Team.tsx             # Team section
│   ├── Contact.tsx          # Contact form and info
│   └── Footer.tsx           # Footer component
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ncusaaio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Sections Overview

### 🏠 Hero Section
- Compelling headline and call-to-action
- Animated neural network visualization
- Key statistics and achievements
- Professional branding

### ⭐ Features
- 8 key features with icons and descriptions
- Hover effects and animations
- Call-to-action for community engagement

### 📖 About
- Mission statement and core values
- Key achievements and impact metrics
- Economic and social impact data
- North Carolina focus

### 📅 Events
- Featured events with detailed information
- Event types and statistics
- Registration and information links
- Event proposal system

### 👥 Team
- Leadership team profiles
- Advisory board information
- Team statistics and achievements
- Career opportunities

### 📞 Contact
- Interactive contact form
- Multiple contact methods
- Social media links
- Location information

### 🦶 Footer
- Comprehensive navigation links
- Social media presence
- Contact information
- Quick stats and branding

## 🎯 Key Features

- **Responsive Navigation**: Mobile-friendly navigation with dropdown menus
- **Smooth Animations**: Scroll-triggered animations using Framer Motion
- **Interactive Forms**: Contact form with validation and success states
- **Professional Branding**: Consistent USAAIO NC branding throughout
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Start Production Server
```bash
pnpm start
```

### Lint and Type Check
```bash
pnpm lint
pnpm type-check
```

## 🎨 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Blue shades */ },
  secondary: { /* Gray shades */ },
  accent: { /* Yellow shades */ }
}
```

### Content
Update content in individual component files:
- `components/Hero.tsx` - Main headline and statistics
- `components/About.tsx` - Mission and values
- `components/Team.tsx` - Team member information
- `components/Events.tsx` - Event details

### Styling
Modify global styles in `app/globals.css` and component-specific styles using Tailwind classes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🏢 About USAAIO NC

The United States Artificial Intelligence Organization of North Carolina (USAAIO NC) is dedicated to fostering innovation, collaboration, and growth in the AI ecosystem across North Carolina. Our mission is to accelerate AI innovation by creating a collaborative ecosystem that connects talent, resources, and opportunities.

## 📞 Contact

- **Email**: hello@usaaio-nc.org
- **Phone**: +1 (919) 555-0123
- **Address**: RTP Innovation Center, Durham, NC 27709
- **Website**: [usaaio-nc.org](https://usaaio-nc.org)

---

Built with ❤️ in North Carolina
