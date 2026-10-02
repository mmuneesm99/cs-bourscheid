export default defineNuxtConfig({
  compatibilityDate: "2026-10-02",
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "fr", class: "scroll-smooth" },
      title: "CS Buurschent | Cercle Sportif Bourscheid",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "Cercle Sportif Bourscheid — club de football de la FLF 2. Division. Matchs, effectif et contact au terrain In der Ae à Michelau."
        }
      ],
      link: [
        { rel: "icon", href: "/images/logo.png", type: "image/png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        }
      ]
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  }
})
