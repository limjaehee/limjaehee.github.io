<template>
  <div class="v-inner">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss">
.v-inner {
  margin: 0 auto;
  transition: 0.2s;
  box-sizing: border-box;
  width: 100%;
  padding: 0 8rem;
}

//웹
@media screen and (max-width: $wrapW) {
  //이너
  .v-inner {
    padding: 0 2rem;
  }
}

//모바일
@media screen and (max-width: $mobileW) {
  //이너
  .v-inner {
    padding: 0 1rem;
  }
}
</style>
