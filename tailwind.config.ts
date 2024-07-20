
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'dekstop': {'max': '1484px'},
      'laptop': {'max': '1250px'},
      'laptopL': {'max': '1145px'},
      'laptopS': {'max': '987px'},
      'tablet': {'max': '860px',},
      'tabletS': {'max': '687px',},
      'tabletXS': {'max': '588px',},
      'mobileL': {'max': '425px'},
      'mobileS': {'max': '385px'},
    },
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        roboto: ['var(--font-roboto)'],
        inter: ['var(--font-inter)'],
        manrope: ['var(--font-manrope)']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
