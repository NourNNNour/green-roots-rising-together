
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for environmental theme
				green: {
					50: '#ecf8f2',
					100: '#d1f0e0',
					200: '#a4e0c2',
					300: '#76d1a3',
					400: '#48c185',
					500: '#2D6A4F', // primary green
					600: '#1E4835',
					700: '#173828',
					800: '#10281c',
					900: '#081410',
				},
				earth: {
					50: '#f9f5f1',
					100: '#f3e9e1',
					200: '#e7d3c3',
					300: '#dbbd9c',
					400: '#cfa67e',
					500: '#A98467', // primary earth
					600: '#87644a',
					700: '#654c38',
					800: '#433225',
					900: '#221913',
				},
				cream: {
					50: '#fffcf7',
					100: '#fef8ee',
					200: '#fdf5de',
					300: '#F0EAD2', // primary cream
					400: '#e6d9b2',
					500: '#d6c382',
					600: '#c4aa58',
					700: '#a78a3a',
					800: '#765f2b',
					900: '#3b3015',
				},
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				opensans: ['Open Sans', 'sans-serif'],
				tajawal: ['Tajawal', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			backgroundColor: {
				'dark': '#1a1f2c',
				'dark-card': '#222222',
				'dark-accent': '#2c2c2c',
				'dark-hover': '#333333',
			},
			textColor: {
				'dark-text': '#e5e7eb',
				'dark-muted': '#9ca3af',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
