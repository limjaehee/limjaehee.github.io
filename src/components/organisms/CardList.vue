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
  padding-bottom: 15vh;
  column-width: 500px;
  column-gap: 15px;

  &__item {
    display: inline-block;
    margin: 0;
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    animation: cardUp 1 1s forwards;
    opacity: 0;

    $heights: (40vh, 45vh, 35vh, 35vh, 30vh, 50vh, 40vh, 35vh);

    $i: 0;

    @each $height in $heights {
      $i: $i + 1;
      &:nth-child(#{$i}) {
        height: $height;
      }
    }

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

@media screen and (max-width: 1820px) {
  .card-list {
    column-width: 350px;
  }
}

//태블릿
@media screen and (max-width: $tabletW) {
  .card-list {
    padding-bottom: 20vh;
    &__item {
    }
  }
}

//모바일
@media screen and (max-width: $mobileW) {
  .card-list {
    column-width: auto;
    column-gap: 0;
  }
}

//폴드
@media screen and (max-width: $foldW) {
}
</style>
