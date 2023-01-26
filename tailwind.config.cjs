/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		gridTemplateColumns: {
			fit: 'repeat(auto-fit, minmax(100px, 1fr))',
		},
	},
	plugins: [],
};
