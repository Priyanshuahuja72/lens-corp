import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xl': '1440px',
        'lg': '1024px',
        'md': '768px',
        'sm':'320px',
      },
      colors: {
        "dark": "#232A3C",
        "medium": "#293245",
        "green": "#01C99B",
        "blue": "#3FBDF1",
        "red": "#FF605F",
        "orangered":"#ff5d5b",
        "yellow": "#FF9F31",
        "gray": "#707070",
        "darkgray": "#828282",
        "semiblue": "#272e5c",
        "servicecard": "#1b1c1e",
        "lightblack": "#242424"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-custom-green': 'linear-gradient(135deg, rgba(1, 201, 156, 0.15) 0%, rgba(1, 201, 156, 0) 100%)',
        'gradient-custom-blue': 'linear-gradient(135deg, rgba(3, 177, 249, 0.2) 0%, rgba(63, 189, 241, 0) 100%)',
        "gradient-custom-red": "linear-gradient(135deg, rgba(255, 107, 102, 0.2) 0%, rgba(0, 0, 0, 0) 100%)",
        'gradient-custom-yellow': 'linear-gradient(135deg, rgba(255, 159, 49, 0.15) 0%, rgba(255, 159, 49, 0) 100%)',
        'gradient-custom-ai': 'linear-gradient(54deg, #0091ff 0, #9cfeff 100%)',
      },
      backgroundOpacity: {
        '15': '0.15', // opacity: 0.15 (15%)
      },
      keyframes: {
        "animate-substance": {
          '0%, 75%, 100%' : {opacity: '0' },
          '25%, 50%': {opacity: '1'}
        },
      },
      animation: {
        'animate-substance-1': "animate-substance ease-in-out 4.5s infinite",
        'animate-substance-2': "animate-substance ease-in-out 5.5s infinite",
        'animate-substance-3': "animate-substance ease-in-out 6s infinite",
        'animate-substance-4': "animate-substance ease-in-out 5.5s infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['responsive'], // Enable responsive variants if needed
    },
  },
  plugins: [
    function ({ addUtilities }: {addUtilities: any}) {
      const newUtilities = {
        '.custom-text-gradient': {
          '--gr-4': 'linear-gradient(54deg, #0091ff 0, #9cfeff 100%)',
          background: 'var(--gr-4)',
          color: 'transparent',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
export default config;
