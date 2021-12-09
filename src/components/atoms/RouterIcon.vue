<template>
  <router-link :class="commonClass" :to="RouterLink">
    <i :class="['icon-' + iconClass, commonClass + '__icon']"></i>
  </router-link>
</template>

<script>
export default {
  props: {
    commonClass: {
      type: String,
      default: "class"
    },
    iconClass: {
      type: String,
      default: "home"
    },
    RouterLink: {
      type: String,
      default: "/"
    }
  },
  data() {
    return {};
  },
  mounted() {},

  methods: {}
};
</script>

<style lang="scss"></style>
