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
    "nuxt-swiper",
  ],
  image: {
    format: ["webp"],
  },
  googleFonts: {
    families: {
      "Roboto Slab": {
        wght: [300, 400, 500, 600, 700],
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
      title: "Why Not Adventures",
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
          content:
            "Offering affordable tours to off the beaten track destinations",
        },
        {
          name: "keywords",
          content:
            "Affordable Tours, Less Traveled Destinations, Hidden Gems, Budget Travel, Why Not Adventures, Adventure Travel, Off the Beaten Path, Unique Destinations, Travel Deals, Adventure Tours, Explore the Unseen, Travel on a Budget, Discount Travel, Eco-Friendly Travel, Sustainable Tourism, Adventure Seekers, Unexplored Places, Travel Packages, Custom Travel Plans, Travel Itineraries",
        },
        { name: "theme-color", content: "#000000" },
        { name: "msapplication-TileColor", content: "#da532c" },
        { name: "msapplication-config", content: "/browserconfig.xml" },
        {
          property: "og:title",
          content: "Why Not Adventures - Adventure Tours",
        },
        {
          property: "og:description",
          content:
            "Offering affordable tours to off the beaten track destinations",
        },
        {
          property: "og:image",
          content: "https://whynotadventures.co.uk/images/pakistan-cover.png",
        },
        { property: "og:url", content: "https://whynotadventures.co.uk/" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://whynotadventures.co.uk/",
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
