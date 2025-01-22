import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
		  keyframes: {
			fadeInUp: {
			  '0%': { opacity: 0, transform: 'translateY(80px)' },
			  '100%': { opacity: 1, transform: 'translateY(0)' },
			},
		  },
		  animation: {
			fadeInUp: 'fadeInUp 1.5s ease-out',
		  },
		},
	  },  
	plugins: []
} satisfies Config;
