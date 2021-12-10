<template>
  <ul class="card-list">
    <li
      class="card-list__item"
      v-for="(item, index) in CardValue"
      :key="item.i"
    >
      <Card
        :title="item.title"
        :image="item.image"
        @click="$emit('click', index)"
      ></Card>
    </li>
  </ul>
</template>

<script>
import Card from "../molecules/Card.vue";
export default {
  props: {
    CardValue: {
      type: Array,
      default: null
    }
  },
  data() {
    return {};
  },
  components: {
    Card
  },
  mounted() {},

  methods: {}
};
</script>

<style lang="scss">
.card-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 15vh;

  &__item {
    height: 20vw;
    flex: 0 0 calc(100% / 3 - 64px / 3);
    margin-right: 32px;
    padding-top: 40px;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}

//웹
@media screen and (max-width: $wrapW) {
}

//태블릿
@media screen and (max-width: $tabletW) {
  .card-list {
    padding-bottom: 20vh;
    &__item {
      flex: 0 0 calc(100% / 2 - 32px / 2);
      margin-right: 16px;
      height: 28vw;

      &:nth-child(2n) {
        margin-right: 0;
      }
      &:nth-child(3n) {
        margin-right: 16px;
      }
    }
  }
}

//모바일
@media screen and (max-width: $mobileW) {
  .card-list {
    padding-bottom: 15vh;
    display: block;
    &__item {
      margin-right: 0;
      height: 80vw;

      &:nth-child(2n) {
        margin-right: 0;
      }
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
}

//폴드
@media screen and (max-width: $foldW) {
}
</style>
