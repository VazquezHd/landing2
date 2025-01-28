import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
        colors: {
          //AQUI ESTAN LOS COLORES A MODIFICAR
          secondary : "#DA1212",
          darkBg: "#041562"
        },
        backgroundImage: {
          "gradient-cover" : 
            "linear-gradient(90.21deg, #041562 -5.91% , #11468F)",
          },
      },
    },
  plugins: [],
};
export default config;
