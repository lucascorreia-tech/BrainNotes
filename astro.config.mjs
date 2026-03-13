// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  site: "https://lucascorreia-tech.github.io",
  base: "/BrainNotes",
  vite: {
    plugins: [tailwindcss()],
  },
=======
  site: 'https://lucascorreia-tech.github.io',
  base: '/BrainNotes',
  vite: {
    plugins: [tailwindcss()]
  }
>>>>>>> e21a75d2e51dcb22dab608d3f1032e6859e80044
});
