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
      colors: {
        "dark": "#232A3C",
        "medium": "#293245",
        "green": "#01C99B",
        "blue": "#3FBDF1",
        "red": "#FF605F",
        "yellow": "#FF9F31",
        "gray": "#707070",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'gradient-custom-green': 'linear-gradient(135deg, rgba(1, 201, 156, 0.15) 0%, rgba(1, 201, 156, 0) 100%)',
        'gradient-custom-blue': 'linear-gradient(135deg, rgba(3, 177, 249, 0.2) 0%, rgba(63, 189, 241, 0) 100%)',
        "gradient-custom-red": "linear-gradient(135deg, rgba(255, 107, 102, 0.2) 0%, rgba(0, 0, 0, 0) 100%)",
        'gradient-custom-yellow': 'linear-gradient(135deg, rgba(255, 159, 49, 0.15) 0%, rgba(255, 159, 49, 0) 100%)',
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
  plugins: [],
};
export default config;
