<template>
  <div class="main">
    <h2 class="contents-title font-bold">新着記事</h2>
    <ArticleCard :posts="posts" />
  </div>
</template>

<script>
import ArticleCard from "../components/ArticleCard";

export default {
  head() {
    return {
      titleTemplate: null,
      title: "nari19"
    };
  },
  async asyncData({ env, $axios }) {
    const data = await $axios.$get(`${env.baseApiUrl}/articles?limit=10`, {
      headers: {
        "X-API-KEY": env.API_KEY
      }
    });
    return { posts: data };
  },
  components: {
    ArticleCard
  }
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 32px 128px;
  }
  @media screen and (min-width: 1264px) {
    padding: 32px 224px;
  }
}

.content-title {
  font-size: 1.42rem;
}
</style>
