import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Dark Navy Blue
        secondary: '#334155', // Slate Blue (for text/subheaders)
        accent: '#FFDAB9', // Peach (Peach Puff)
        'accent-dark': '#FDBA74', // Darker Peach (for hover states)
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
