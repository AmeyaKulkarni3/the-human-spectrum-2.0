import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/the-human-spectrum-2.0/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        collaboration: resolve(__dirname, "collaboration.html"),
        intervention: resolve(__dirname, "intervention.html"),
        mannmade: resolve(__dirname, "mannmade.html"),
        awareness: resolve(__dirname, "awareness.html"),
      },
    },
  },
});
