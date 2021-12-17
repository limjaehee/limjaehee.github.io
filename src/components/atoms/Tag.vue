<template>
  <ul class="tag">
    <li class="tag__item" v-for="item in Tag" :key="item.i">
      <span class="tag__item__icon">#</span> {{ item }}
    </li>
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
    border-radius: 6px;
    padding: 4px 16px;
    color: #333;
    margin-right: 8px;
    @include font-size(14px);
    margin-bottom: 10px;

    &__icon {
      font-weight: 700;
    }
    &:hover {
      cursor: pointer;
      background: #ddd;
    }
  }
}
</style>
