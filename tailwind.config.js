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
        normalTypeText: "#6C6C6C",
        normalTypeBackground: "#A8A77A",
        fireTypeText: "#FFFFFF",
        fireTypeBackground: "#EE8130",
        waterTypeText: "#FFFFFF",
        waterTypeBackground: "#6390F0",
        electricTypeText: "#000000",
        electricTypeBackground: "#F7D02C",
        grassTypeText: "#FFFFFF",
        grassTypeBackground: "#7AC74C",
        iceTypeText: "#000000",
        iceTypeBackground: "#96D9D6",
        fightingTypeText: "#FFFFFF",
        fightingTypeBackground: "#C22E28",
        poisonTypeText: "#FFFFFF",
        poisonTypeBackground: "#A33EA1",
        groundTypeText: "#FFFFFF",
        groundTypeBackground: "#E2BF65",
        flyingTypeText: "#000000",
        flyingTypeBackground: "#A98FF3",
        psychicTypeText: "#FFFFFF",
        psychicTypeBackground: "#F95587",
        bugTypeText: "#000000",
        bugTypeBackground: "#A6B91A",
        rockTypeText: "#FFFFFF",
        rockTypeBackground: "#B6A136",
        ghostTypeText: "#FFFFFF",
        ghostTypeBackground: "#735797",
        dragonTypeText: "#FFFFFF",
        dragonTypeBackground: "#6F35FC",
        darkTypeText: "#FFFFFF",
        darkTypeBackground: "#705746",
        steelTypeText: "#000000",
        steelTypeBackground: "#B7B7CE",
        fairyTypeText: "#000000",
        fairyTypeBackground: "#D685AD",
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
  plugins: ["tailwindcss-animate"],
};
