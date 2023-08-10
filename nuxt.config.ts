import vuetify from "vite-plugin-vuetify";
// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  css: ["@/static/fonts/font.css", "@/assets/scss/index.scss"],
  build: { transpile: ["vuetify"] },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],
  runtimeConfig: {
    public: {
      baseURL: "https://jsonplaceholder.typicode.com/",
    },
  },
  vite: {
    plugins: [svgLoader()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/scss/vuetify/variables.scss";' +
            '@import "@/assets/scss/vuetify/reset.scss";',
        },
      },
    },
  },
});
