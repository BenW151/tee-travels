// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.css"],
  modules: [
    "nuxt-lucide-icons",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    'nuxt-swiper',
  ],
  image: {
    format: ["webp"],
  },
  googleFonts: {
    families: {
      Lexend: {
        wght: [300, 400, 500],
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
    pageTransition: { name: "page", mode: "out-in", appear: true },
    head: {
      title: "Ben Ward",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          hid: "description",
          name: "description",
          content: "Offering top-notch web development services to help businesses succeed online.",
        },
        { name: "keywords", content: "Web, Development, WebDev, Benward, Web Development Services, Ben Ward, Web Development, Web Developer, Developer" },
        { name: "theme-color", content: "#000000" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "msapplication-config", content: "/browserconfig.xml" },
        { property: "og:title", content: "Ben Ward - Web Development Services" },
        {
          property: "og:description",
          content: "Offering top-notch web development services to help businesses succeed online.",
        },
        {
          property: "og:image",
          content: "https://benward.io/images/index-background.png",
        },
        { property: "og:url", content: "https://benward.io/" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://benward.io/",
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
