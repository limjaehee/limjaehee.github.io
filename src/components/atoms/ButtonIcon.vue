<template>
  <button :class="commonClass" @click="$emit('click')">
    <i :class="['icon-' + iconClass, commonClass + '__icon']"></i>
  </button>
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
