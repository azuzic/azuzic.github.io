/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
	theme: {
        extend: {
			screens: {
				xs: "480px",
				md2: "860px",
				"3xl": "1680px",
			},
            keyframes: {
                hueRotate: {
                    '0%': { filter: 'hue-rotate(0deg)' },
                    '50%': { filter: 'hue-rotate(45deg)'},
                    '100%': { filter: 'hue-rotate(0deg)' },
                },
            },
            animation: {
                'hue-rotate': 'hueRotate 60s linear infinite',
            },
			dropShadow: {
				AZ: "0px 0px 2px black",
				"pixelArt-1": ["1px 0px 0px white", "0px -1px 0px white", "0px 1px 0px white", "-1px 0px 0px white"],
				"pixelArt-2": ["2px 0px 0px white", "0px -2px 0px white", "0px 2px 0px white", "-2px 0px 0px white"],
				"pixelArt-3": ["3px 0px 0px white", "0px -3px 0px white", "0px 3px 0px white", "-3px 0px 0px white"],
				"pixelArt-4": ["4px 0px 0px white", "0px -4px 0px white", "0px 4px 0px white", "-4px 0px 0px white"],
			},
			borderWidth: {
				3: "3px",
			},
            colors: {
                AZ_from: "#34d399",
                AZ_to: "#22d3ee",
            }
        },
    },
    plugins: [],
};
