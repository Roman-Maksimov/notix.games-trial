import sharedConfig from "@notix.games/ui/tailwind.config.ts";
import { Config } from "tailwindcss";

export default {
  presets: [sharedConfig],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
