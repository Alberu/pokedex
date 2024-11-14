/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        normal: {
          color: "#FFFFFF",
          background: "#ABAA99",
        },
        fire: {
          color: "#FFFFFF",
          background: "#EE8130",
        },
        water: {
          color: "#FFFFFF",
          background: "#6390F0",
        },
        electric: {
          color: "#000000",
          background: "#F7D02C",
        },
        grass: {
          color: "#FFFFFF",
          background: "#7AC74C",
        },
        ice: {
          color: "#000000",
          background: "#96D9D6",
        },
        fighting: {
          color: "#FFFFFF",
          background: "#C22E28",
        },
        poison: {
          color: "#FFFFFF",
          background: "#A33EA1",
        },
        ground: {
          color: "#FFFFFF",
          background: "#E2BF65",
        },
        flying: {
          color: "#000000",
          background: "#A98FF3",
        },
        psychic: {
          color: "#FFFFFF",
          background: "#F95587",
        },
        bug: {
          color: "#000000",
          background: "#A6B91A",
        },
        rock: {
          color: "#FFFFFF",
          background: "#B6A136",
        },
        ghost: {
          color: "#FFFFFF",
          background: "#735797",
        },
        dragon: {
          color: "#FFFFFF",
          background: "#6F35FC",
        },
        dark: {
          color: "#FFFFFF",
          background: "#705746",
        },
        steel: {
          color: "#000000",
          background: "#B7B7CE",
        },
        fairy: {
          color: "#000000",
          background: "#D685AD",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
    },
  },
  safelist: [
    "bg-normal-background", "text-normal-color",
    "bg-fire-background", "text-fire-color",
    "bg-water-background", "text-water-color",
    "bg-electric-background", "text-electric-color",
    "bg-grass-background", "text-grass-color",
    "bg-ice-background", "text-ice-color",
    "bg-fighting-background", "text-fighting-color",
    "bg-poison-background", "text-poison-color",
    "bg-ground-background", "text-ground-color",
    "bg-flying-background", "text-flying-color",
    "bg-psychic-background", "text-psychic-color",
    "bg-bug-background", "text-bug-color",
    "bg-rock-background", "text-rock-color",
    "bg-ghost-background", "text-ghost-color",
    "bg-dragon-background", "text-dragon-color",
    "bg-dark-background", "text-dark-color",
    "bg-steel-background", "text-steel-color",
    "bg-fairy-background", "text-fairy-color",
  ],
  plugins: ["tailwindcss-animate"],
};
