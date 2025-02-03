import lineClamp from '@tailwindcss/line-clamp';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Ensure your file paths are correct
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
};
