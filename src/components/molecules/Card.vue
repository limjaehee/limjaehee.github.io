<template>
  <div class="card" @click="$emit('click')">
    <div class="card__image">
      <ButtonMessage
        class="card__image__btn"
        :message="'자세히 보기'"
        :active="true"
      ></ButtonMessage>
      <ImageWrap :image="image"></ImageWrap>
    </div>
    <div class="card__message">
      <h3
        class="card__message__title"
        :class="{ darkmode: $store.state.darkmode }"
      >
        {{ title }}
      </h3>
      <i
        class="icon-keyboard_control card__message__icon"
        :class="{ darkmode: $store.state.darkmode }"
      ></i>
    </div>
  </div>
</template>

<script>
import ImageWrap from "../atoms/ImageWrap.vue";
import ButtonMessage from "../atoms/ButtonMessage.vue";
export default {
  props: {
    title: {
      type: String,
      default: "제목입니다."
    },
    image: {
      type: String,
      default: null
    }
  },
  data() {
    return {};
  },
  components: {
    ImageWrap,
    ButtonMessage
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss">
.card {
  width: 100%;
  height: 100%;

  &__image {
    width: 100%;
    height: calc(100% - 30px);
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    &__btn {
      position: absolute;
      right: 24px;
      top: 24px;
      opacity: 0;
      transition: 0.4s;
      z-index: 3;
    }

    &::after {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0);
      z-index: 2;
      transition: 0.5s;
    }
  }

  &:hover {
    cursor: pointer;
    .card__image {
      &__btn {
        opacity: 1;
      }
      &::after {
        background: rgba(0, 0, 0, 0.4);
      }
    }
  }

  &__message {
    display: flex;
    justify-content: space-between;
    padding-top: 6px;

    &__title {
      @include font-size(16px);
      font-weight: 300;
      color: #333;
      transition: 0.5s;

      &.darkmode {
        color: #fff;
      }
    }

    &__icon {
      @include font-size(24px);
      color: #999;
      transition: 0.5s;

      &.darkmode {
        color: #fff;
      }
    }
  }
}
</style>
