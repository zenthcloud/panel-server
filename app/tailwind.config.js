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
        // Panel Client theme colors
        aether: {
          primary: "#6366f1", // Indigo
          secondary: "#8b5cf6", // Purple
          accent: "#4f46e5", // Darker indigo
          cosmic: "#3730a3", // Deep cosmic blue
          "cosmic-dark": "#1e1b4b", // Darker cosmic blue
          subtle: "#c7d2fe", // Light indigo
          "cosmic-gradient-start": "#a5b4fc",
          "cosmic-gradient-end": "#818cf8",
        },
        // Noir et blanc par défaut
        background: "#000",
        foreground: "#fff",
        card: {
          DEFAULT: "#111",
          foreground: "#fff",
        },
        popover: {
          DEFAULT: "#111",
          foreground: "#fff",
        },
        primary: {
          DEFAULT: "#fff",
          foreground: "#000",
        },
        secondary: {
          DEFAULT: "#222",
          foreground: "#fff",
        },
        muted: {
          DEFAULT: "#222",
          foreground: "#fff",
        },
        accent: {
          DEFAULT: "#fff",
          foreground: "#000",
        },
        destructive: {
          DEFAULT: "#ff0000",
          foreground: "#fff",
        },
        border: "#333",
        input: "#222",
        ring: "#fff",
        chart: {
          1: "#fff",
          2: "#ccc",
          3: "#888",
          4: "#444",
          5: "#000",
        },
        sidebar: {
          DEFAULT: "#111",
          foreground: "#fff",
          primary: "#fff",
          "primary-foreground": "#000",
          accent: "#fff",
          "accent-foreground": "#000",
          border: "#333",
          ring: "#fff",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
