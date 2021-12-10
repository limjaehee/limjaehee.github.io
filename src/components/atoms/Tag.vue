<template>
  <ul class="tag">
    <li class="tag__item" v-for="item in Tag" :key="item.i"># {{ item }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    Tag: {
      type: Array,
      default: null
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
.tag {
  display: flex;
  flex-wrap: wrap;

  &__item {
    background: #efefef;
    border-radius: 10px;
    padding: 4px 16px;
    color: #333;
    margin-right: 8px;
    @include font-size(16px);
    margin-bottom: 10px;
    &:hover {
      cursor: pointer;
      background: #ddd;
    }
  }
}
</style>
