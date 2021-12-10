<template>
  <div class="title-and-text">
    <component :is="type" class="title-and-text__title">{{ title }}</component>
    <p v-html="text" class="title-and-text__text"></p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "제목"
    },
    text: {
      type: String,
      default: "본문"
    },
    type: {
      type: String,
      default: "h3"
    }
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss">
.title-and-text {
  &__title {
    font-weight: 400;
  }

  h2 {
    padding-bottom: 40px;
  }

  h3 {
    padding-bottom: 16px;
  }
}

//모바일
@media screen and (max-width: $mobileW) {
  .title-and-text {
    h2 {
      padding-bottom: 30px;
    }

    h3 {
      padding-bottom: 8px;
    }
  }
}
</style>
