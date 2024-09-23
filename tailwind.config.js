/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
			screens: {
				'2xl': '1366px',
				'4k': '120em',
				'8k': '160em'
			}
    },
  },
  plugins: [],
};
