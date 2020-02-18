const axios = require("axios");
require('dotenv').config();
const {
  API_KEY,
  baseApiUrl,
  baseUrl,
  baseName,
  baseDesc,
  baseOgp
} = process.env;

module.exports = {
  head: {
    htmlAttrs: {
      lang: "ja",
      prefix: "og: http://ogp.me/ns#"
    },
    title: "ELELINE",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "og:site_name", property: "og:site_name", content: baseName },
      { hid: "description", name: "description", content: baseDesc },
      { hid: "og:type", property: "og:type", content: "article" },
      { hid: "og:url", property: "og:url", content: baseUrl },
      { hid: "og:title", property: "og:title", content: baseName },
      { hid: "og:description", property: "og:description", content: baseDesc },
      {
        hid: "og:image",
        property: "og:image",
        content: `https://eleline.dev/${baseOgp}/common.png`
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@eleline5" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#8a2be2" },
  build: {
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    postcss: {
      plugins: {
        "postcss-preset-env": {
          autoprefixer: {}
        }
      }
    }
  },
  css: [{ src: "~/assets/scss/style.scss", lang: "scss" }],
  plugins: ["~/plugins/prism"],
  modules: [
    "nuxt-webfontloader",
    "@nuxtjs/pwa",
    "@nuxtjs/axios",
    "@nuxtjs/markdownit",
    "@nuxtjs/tailwindcss"
  ],
  markdownit: {
    preset: "default",
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true,
    xhtmlOut: true,
    langPrefix: "language-",
    quotes: "“”‘’",
    highlight: function(/*str, lang*/) {
      return "";
    }
  },
  manifest: {
    name: "eleline",
    lang: "ja",
    short_name: "eleline",
    title: "Nuxt * microCMS",
    "og:title": "Nuxt * microCMS",
    description: "Nuxt * microCMS",
    "og:description": "Nuxt * microCMS",
    theme_color: "#8a2be2",
    background_color: "#fcfcfc"
  },
  workbox: {
    dev: true
  },
  webfontloader: {
    google: {
      families: ["Quicksand:400,500,600"]
    }
  },
  tailwindcss: {
    configPath: "~/config/tailwind.config.js",
    cssPath: "~/assets/css/tailwind.css"
  },
  env: {
    API_KEY: process.env.API_KEY,
    baseApiUrl: process.env.baseApiUrl,
    baseName: baseName,
    baseDesc: baseDesc,
    baseUrl: baseUrl,
    baseOgp: baseOgp
  },
  generate: {
    routes() {
      return axios
        .get(`${process.env.baseApiUrl}/blog`, {
          headers: {
            "X-API-KEY": process.env.API_KEY
          }
        })
        .then(res => {
          return JSON.parse(JSON.stringify(res.data.contents)).map(content => {
            return {
              route: "/posts/" + content.id,
              payload: content
            };
          });
        })
        .catch(console.error);
    }
  }
};
