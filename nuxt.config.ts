// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.css"],
  modules: ["nuxt-lucide-icons", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Lora: {
        wght: [400, 500],
        ital: [100, 400],
      },
      "Roboto Flex": {
        wght: [100, 300, 400, 500, 700, 900],
        ital: [400],
      },
    },
    display: "swap",
  },
  plugins: ["~/plugins/rellax.client.js"],
  app: {
    head: {
      title: "Bath Spa",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          hid: "description",
          name: "description",
          content: "short description sentence",
        },
        { name: "keywords", content: "keyword, keyword, keyword" },
        { name: "theme-color", content: "#ffffff" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "msapplication-config", content: "/browserconfig.xml" },
        { property: "og:title", content: "Template - Short Tagline" },
        {
          property: "og:description",
          content:
            "Offering top-notch IT services and solutions tailored to your business needs. From cloud services to cybersecurity, weve got you covered.",
        },
        {
          property: "og:image",
          content: "https://www.yourwebsite.com/images/social-preview.png",
        },
        { property: "og:url", content: "https://www.yourwebsite.com/" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://benw151.github.io/template/index.html",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
    },
  },
});
