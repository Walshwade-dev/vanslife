/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      bkg: "hsl(var(--color-bkg) / <alpha-value> )",
      content: "hsl(var(--color-content) / <alpha-value> )",
      hovering: "hsl(var(--color-content-hv) / <alpha-value> )",
      hostLw: "hsl(var(--color-hostLw) / <alpha-value> )",
      hostUp: "hsl(var(--color-hostUp) / <alpha-value> )",
    },
  },
  fontFamily: {
    'inter': ['Inter var, sans-serif']
  },
  plugins: [("daisyui")],
  daisyui: {
    themes: ["light", "dark"]
  }
};
