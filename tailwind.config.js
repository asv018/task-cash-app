/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "#fff",
        "cash-app-green": "#00d54b",
        black: "#000",
        silver: "#b6b6b6",
        whitesmoke: "#f8f6f6",
      },
      fontFamily: {
        "body-1-regular-16-22-03px": "Mulish",
        "hero-text": "Agrandir",
        "main-title": "Agrandir Heavy",
      },
      borderRadius: {
        "6xs": "7px",
      },
    },
    fontSize: {
      "3xs": "10px",
      xs: "12px",
      "21xl": "40px",
      base: "16px",
      "3xl": "22px",
      "174xl": "193px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
