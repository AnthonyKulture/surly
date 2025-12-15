# SURLY.FR - Next.js + TypeScript + TailwindCSS

A modern, fully responsive landing page for Surly - the specialized recruitment and freelance marketplace for Banking & Insurance sector.

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Font**: Inter (via `next/font`)

## 📁 Project Structure

```
surly-refonte/
├── app/
│   ├── globals.css      # Tailwind + custom styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ClientsMarquee.tsx
│   │   ├── Constat.tsx
│   │   ├── Process.tsx
│   │   ├── Stats.tsx
│   │   ├── Mission.tsx
│   │   ├── Piliers.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Talents.tsx
│   │   ├── Promesse.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeader.tsx
│       └── AnimatedCounter.tsx
├── hooks/
│   └── useIntersectionObserver.ts
├── lib/
│   └── utils.ts
├── tailwind.config.ts
└── package.json
```

## ✨ Features

### Sections
1. **Hero** - Dynamic profile cards, animated counters, trust logos
2. **Clients Marquee** - Infinite scrolling client logos
3. **Le Constat** - Problem statement with animated cards
4. **Process** - 3-step process with connectors
5. **Stats** - Animated counters with ticker bar
6. **Mission** - Value proposition with matching visualization
7. **3 Piliers** - Key differentiators grid
8. **Testimonials** - Client testimonials with featured card
9. **Talents** - Featured expert profiles
10. **Promesse** - CTA section
11. **Contact** - Form with validation

### Technical Features
- ✅ **Scroll Animations** - Intersection Observer hooks
- ✅ **Animated Counters** - requestAnimationFrame-based
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Mobile Navigation** - Animated hamburger menu
- ✅ **Smooth Scrolling** - Custom scroll behavior
- ✅ **Form Handling** - React state management
- ✅ **TypeScript** - Full type safety
- ✅ **TailwindCSS** - Utility-first styling
- ✅ **SEO Optimized** - Metadata configuration
- ✅ **Image Optimization** - Next.js Image component

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:

```ts
colors: {
  primary: {
    DEFAULT: "#005e53",  // Main green
    light: "#007a6c",
    dark: "#004840",
  },
  accent: {
    DEFAULT: "#ecff73",  // Lime accent
  },
}
```

### Typography
The Inter font is loaded via `next/font` in `app/layout.tsx`.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔗 External Links

- **Application**: https://app.surly.fr
- **Talent Portal**: https://app.surly.fr/postulant

## 📄 License

© 2024 Surly. All rights reserved.
