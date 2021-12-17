<template>
  <ul class="card-list">
    <li
      class="card-list__item"
      v-for="(item, index) in CardValue"
      :key="item.i"
    >
      <Card
        :title="item.title"
        :Image="item.image"
        :Tag="item.Tag"
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
    margin-bottom: 40px;
    animation: cardUp 1 1s forwards;
    opacity: 0;

    /* SCSS */
    @for $i from 1 to 10 {
      &:nth-child(#{$i}) {
        animation-delay: ($i * 0.1) + s;
      }
    }

    &:nth-child(3n) {
      margin-right: 0;
    }

    @keyframes cardUp {
      0% {
        transform: translateY(30px);
      }

      100% {
        opacity: 1;
        transform: translateY(0px);
      }
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
      flex: 0 0 calc(50% - (20px / 2));
      margin-right: 0;
      height: 28vw;

      &:nth-child(3n) {
        margin-right: 0;
      }

      &:nth-child(odd) {
        margin-right: 20px;
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

      &:nth-child(odd) {
        margin-right: 0px;
      }

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
