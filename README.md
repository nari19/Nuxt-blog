# Nuxt and microCMS Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/6bd1f176-0b2d-4217-9e24-ac52e97f773f/deploy-status)](https://app.netlify.com/sites/eleline-jamstack-blog/deploys)

> eleline blog

JAMStack Blog

## Powered by

- [Nuxt](https://ja.nuxtjs.org/)
- [Netlify](https://www.netlify.com/)
- [microCMS](https://microcms.io/)

## Variable Setup

Create for `.env`

```env
API_KEY    = { microCMS API KEY }
baseApiUrl = { microCMS API path }
baseDesc   = { Description }
baseName   = { Author }
baseOgp    = { Static OGP Image Path }
baseUrl    = { Site URL }
```

## Build Setup

```bash
# install dependencies
$ yarn install
# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
