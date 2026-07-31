/** @type {import('tailwindcss').Config} */

/* Colors resolve to the CSS custom properties in design-system/tokens/.
   The <alpha-value> placeholder keeps opacity modifiers working — the
   shipped home page uses text-ink/85, border-ink/10 and
   decoration-muted/40, all of which must survive the rebrand. */
const withAlpha = (channel) => `rgb(var(${channel}) / <alpha-value>)`;

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./design-system/**/*.{js,jsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        /* Brand anchors */
        paper: withAlpha("--paper-rgb"),
        ink: withAlpha("--ink-rgb"),
        terracotta: {
          DEFAULT: withAlpha("--terracotta-rgb"),
          /* AA-safe variant for small text — see tokens/colors.css */
          text: withAlpha("--terracotta-text-rgb"),
        },
        muted: withAlpha("--muted-rgb"),

        /* Warm neutral ramp, replacing the stock cool grays */
        sand: {
          50: "var(--sand-50)",
          100: "var(--sand-100)",
          200: "var(--sand-200)",
          300: "var(--sand-300)",
          400: "var(--sand-400)",
          500: "var(--sand-500)",
          600: "var(--sand-600)",
          700: "var(--sand-700)",
          800: "var(--sand-800)",
          900: "var(--sand-900)",
        },

        /* Metric deltas — improvement / regression, not up / down */
        positive: "var(--positive)",
        negative: "var(--negative)",
      },

      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "Times New Roman", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },

      fontSize: {
        /* Serif display scale. The home page h1 is display-xl / 2xl / 3xl. */
        "display-sm": ["var(--display-sm)", { lineHeight: "var(--display-sm-lh)" }],
        "display-md": ["var(--display-md)", { lineHeight: "var(--display-md-lh)" }],
        "display-lg": ["var(--display-lg)", { lineHeight: "var(--display-lg-lh)" }],
        "display-xl": ["var(--display-xl)", { lineHeight: "var(--display-xl-lh)" }],
        "display-2xl": ["var(--display-2xl)", { lineHeight: "var(--display-2xl-lh)" }],
        "display-3xl": ["var(--display-3xl)", { lineHeight: "var(--display-3xl-lh)" }],
      },

      letterSpacing: {
        eyebrow: "var(--tracking-eyebrow)",
      },

      maxWidth: {
        prose: "var(--measure)",
        "prose-narrow": "var(--measure-narrow)",
        container: "var(--container-max)",
      },

      borderRadius: {
        DEFAULT: "var(--radius)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },

      boxShadow: {
        /* Flat by default — structure comes from rules, not elevation.
           These remain only for surfaces that genuinely float. */
        overlay: "var(--shadow-overlay)",
        modal: "var(--shadow-modal)",
      },

      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        "out-soft": "var(--ease-out-soft)",
      },

      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
      },
    },
  },
  plugins: [],
};
