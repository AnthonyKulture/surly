import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'tablet': '992px',
        'laptop': '1280px',
      },
      colors: {
        // 60% - Neutral/Background colors (dominant)
        background: "#FFFFFF",
        "background-off": "#FAFBF9",
        "background-subtle": "#F5F6F4",
        foreground: "#0a0a0a",
        "foreground-muted": "#6B7280",

        // 30% - Primary colors (supporting)
        primary: {
          DEFAULT: "#005e53",
          50: "#e6f2f1",
          100: "#cce5e3",
          200: "#99cbc7",
          300: "#66b1ab",
          400: "#33978f",
          500: "#005e53", // DEFAULT
          600: "#004840",
          700: "#003630",
          800: "#002420",
          900: "#001210",
          light: "#007a6c",
          dark: "#004840",
          "gradient-start": "#00a693", // Lighter green for gradients
          "gradient-end": "#005e53",   // Darker green for gradients
        },

        // 10% - Accent colors (highlights)
        accent: {
          DEFAULT: "#ecff73",
          50: "#feffeb",
          100: "#fdffd7",
          200: "#fbffaf",
          300: "#f9ff87",
          400: "#f7ff5f",
          500: "#ecff73", // DEFAULT
          600: "#d4e85a",
          700: "#bcd041",
          800: "#a4b828",
          900: "#8ca00f",
          dim: "#d4e85a",
          subtle: "rgba(236, 255, 115, 0.12)",
          glow: "rgba(236, 255, 115, 0.4)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Perfect Fourth Scale (1.333 ratio) - Modern Typography Hierarchy
        // Base: 16px (1rem)

        // Display: Hero sections - Maximum impact
        display: ["clamp(3.157rem, 8vw, 4.209rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],

        // Hero: Main page titles
        hero: ["clamp(2.369rem, 6vw, 3.157rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],

        // Headline: Section H2 titles
        headline: ["clamp(2.369rem, 5vw, 3.157rem)", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "600" }],

        // Title: H3, Card titles
        title: ["clamp(1.333rem, 2.5vw, 1.777rem)", { lineHeight: "1.3", fontWeight: "600" }],

        // Body text - Optimal readability
        "body-xl": ["1.333rem", { lineHeight: "1.6" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.5" }],

        // Small elements
        small: ["0.875rem", { lineHeight: "1.5" }],
        micro: ["0.75rem", { lineHeight: "1.4" }],

        // Tags/Labels
        tag: ["0.6875rem", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      },
      spacing: {
        // Harmonious 8px-based scale
        xs: "0.5rem",    // 8px
        sm: "1rem",      // 16px
        md: "1.5rem",    // 24px
        lg: "2rem",      // 32px
        xl: "3rem",      // 48px
        "2xl": "4rem",   // 64px
        "3xl": "6rem",   // 96px
        "4xl": "8rem",   // 128px
        "5xl": "10rem",  // 160px
        "6xl": "12rem",  // 192px
      },
      boxShadow: {
        // Subtle elevation system
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 3px 0 rgba(0, 0, 0, 0.02)",
        sm: "0 2px 4px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.03)",
        DEFAULT: "0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",
        md: "0 6px 12px -2px rgba(0, 0, 0, 0.08), 0 3px 6px -2px rgba(0, 0, 0, 0.05)",
        lg: "0 10px 20px -3px rgba(0, 0, 0, 0.1), 0 4px 8px -2px rgba(0, 0, 0, 0.06)",
        xl: "0 20px 30px -5px rgba(0, 0, 0, 0.12), 0 8px 12px -4px rgba(0, 0, 0, 0.08)",

        // Colored shadows for accent elements
        "accent-sm": "0 2px 8px 0 rgba(236, 255, 115, 0.2)",
        "accent-md": "0 4px 16px 0 rgba(236, 255, 115, 0.3)",
        "accent-lg": "0 8px 24px 0 rgba(236, 255, 115, 0.4)",

        "primary-sm": "0 2px 8px 0 rgba(0, 94, 83, 0.15)",
        "primary-md": "0 4px 16px 0 rgba(0, 94, 83, 0.2)",
        "primary-lg": "0 8px 24px 0 rgba(0, 94, 83, 0.25)",

        // Legacy
        lime: "0 4px 20px rgba(236, 255, 115, 0.4)",
        card: "0 10px 40px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 20px 50px rgba(0, 0, 0, 0.12)",
      },

      transitionTimingFunction: {
        linear: "linear",
        "in-out-subtle": "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
      },
      transitionDuration: {
        DEFAULT: "150ms",
        slow: "300ms",
        800: "800ms",
        1000: "1000ms",
        1200: "1200ms",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-fast": "marquee 25s linear infinite",
        "scroll-infinite": "scroll-infinite 40s linear infinite",
        pulse: "pulse 2s infinite",
        "pulse-move": "pulseMove 3s linear infinite",
        float1: "float1 6s ease-in-out infinite",
        float2: "float2 7s ease-in-out infinite",
        float3: "float3 8s ease-in-out infinite",
        float4: "float4 6.5s ease-in-out infinite",
        "float-card": "floatCard 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        blob: "blob 7s infinite",
        "spin-slow": "spin 3s linear infinite",
        "spin-medium": "spin 2s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scroll-infinite": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(1.2)" },
        },
        pulseMove: {
          "0%": { left: "0", opacity: "1" },
          "100%": { left: "calc(100% - 8px)", opacity: "0" },
        },
        float1: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-8px) rotate(-0.5deg)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(0.5deg)" },
        },
        float4: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(-1deg)" },
        },
        floatCard: {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-8px) scale(1.01)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

