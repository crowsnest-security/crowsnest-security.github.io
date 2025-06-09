module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./docs/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./blog/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./docusaurus.config.js",
    "./*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
    },
  },
  plugins: [],
};
