import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        foreground: "var(--color-text-primary)",
        card: {
          DEFAULT: "var(--color-surface)",
          foreground: "var(--color-text-primary)",
        },
        popover: {
          DEFAULT: "var(--color-surface)",
          foreground: "var(--color-text-primary)",
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-text)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-text)",
        },
        muted: {
          DEFAULT: "var(--color-surface)",
          foreground: "var(--color-text-muted)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "#09090B",
        },
        destructive: {
          DEFAULT: "var(--color-error)",
          foreground: "#FFFFFF",
        },
        border: "var(--color-border)",
        input: "var(--color-border)",
        ring: "var(--color-focus-ring)",

        // Hellenic Pantheon Explicit Tokens
        dionysus: "var(--color-primary)",
        poseidon: "var(--color-secondary)",
        helios: "var(--color-accent)",
        athena: "var(--color-success)",
        apollo: "var(--color-warning)",
        hades: "var(--color-error)",
        hermes: "var(--color-info)",
        erebus: "#09090B",
        parthenon: "var(--color-surface)",
      },
      borderRadius: {
        none: "0px",
        sharp: "2px",
        tactical: "4px",
        card: "8px",
        lg: "8px",
        md: "4px",
        sm: "2px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      minHeight: {
        touch: "44px",
      },
      minWidth: {
        touch: "44px",
      },
    },
  },
  plugins: [],
};

export default config;
