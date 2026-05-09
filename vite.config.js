import { sveltekit } from "@sveltejs/kit/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
// import mkcert from "vite-plugin-mkcert";, mkcert()

export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
});
