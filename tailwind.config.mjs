/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				azulclaro:'#418CD0',
				azulOscuro:'#285084',
				grisclaro:'#DDE1E0'
			},
		},
	},
	plugins: [],
}
