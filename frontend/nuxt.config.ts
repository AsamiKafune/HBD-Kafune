// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  runtimeConfig: {
    public: {
      enpointAPI: "backend url"
    }
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Kafune | Vtuber",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "HBD Kafune",
        },
        { name: "author", content: "MagicLab" },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "Thailand" },
        { name: "theme-color", content: "#b8a8ff" },
        { name: "og:title", content: "MagicLab | HBD Kafune" },
        { name: "og:description", content: "HBD Kafune" },
        { name: "og:image", content: "" },
      ],
    }
  },
  modules: ["@nuxtjs/tailwindcss"]
})