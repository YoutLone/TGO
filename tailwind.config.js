/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        teak: {
          50: "#f6f3ee",
          100: "#e9e0d4",
          200: "#d6c4ad",
          300: "#c1a581",
          400: "#b18d5d",
          500: "#9b7446",
          600: "#7f5c35",
          700: "#61452a",
          800: "#493522",
          900: "#35271c"
        },
        lacquer: {
          50: "#fff5f5",
          100: "#ffe3e3",
          200: "#ffbdbd",
          300: "#ff8f8f",
          400: "#ff5e5e",
          500: "#f83030",
          600: "#d81f1f",
          700: "#b11818",
          800: "#861414",
          900: "#5f1010"
        },
        jade: {
          50: "#effaf6",
          100: "#d9f4e9",
          200: "#b4e9d5",
          300: "#83d8bc",
          400: "#4dc49f",
          500: "#2aa881",
          600: "#1d8f6b",
          700: "#176f53",
          800: "#135744",
          900: "#0f4034"
        }
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "system-ui", "sans-serif"],
        myanmar: ["Noto Serif Myanmar", "serif"]
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(248, 48, 48, 0.45)",
        soft: "0 15px 50px -30px rgba(53, 39, 28, 0.6)"
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(circle at 20% 20%, rgba(248, 48, 48, 0.15), transparent 45%), radial-gradient(circle at 80% 10%, rgba(42, 168, 129, 0.15), transparent 35%), radial-gradient(circle at 30% 90%, rgba(155, 116, 70, 0.25), transparent 40%)",
        "paper": "linear-gradient(120deg, rgba(255,255,255,0.9), rgba(246,243,238,0.9)), url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\" viewBox=\"0 0 120 120\"><g fill=\"%23e6dccf\" fill-opacity=\"0.5\"><circle cx=\"10\" cy=\"10\" r=\"1.5\"/><circle cx=\"60\" cy=\"40\" r=\"1.2\"/><circle cx=\"90\" cy=\"90\" r=\"1.7\"/></g></svg>')"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 6s ease infinite"
      }
    }
  },
  plugins: []
};
