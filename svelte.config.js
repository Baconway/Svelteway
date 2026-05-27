import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    alias: {
      $modules: "src/routes/modules",
    },
    adapter: adapter({
      images: {
        sizes: [16, 32, 332],
        domains: ["image.bway.lol"],
      },
    }),
  },
};

export default config;
