<template>
  <figure
    class="card"
    @click="$emit('click')"
    :class="{ darkmode: $store.state.darkmode }"
  >
    <div class="card__image">
      <ImageWrap :Image="Image"></ImageWrap>
    </div>
    <figcaption
      class="card__message"
      :class="{ darkmode: $store.state.darkmode }"
    >
      <h3
        class="card__message__title"
        :class="{ darkmode: $store.state.darkmode }"
      >
        {{ title }}
      </h3>
      <Tag :Tag="Tag"></Tag>
    </figcaption>
  </figure>
</template>

<script>
import ImageWrap from "../atoms/ImageWrap.vue";
import ButtonMessage from "../atoms/ButtonMessage.vue";
import Tag from "../atoms/Tag.vue";
export default {
  props: {
    title: {
      type: String,
      default: "제목입니다."
    },
    Image: {
      type: String,
      default: null
    },
    Tag: {
      type: Array,
      default: null
    }
  },
  data() {
    return {};
  },
  components: {
    ImageWrap,
    ButtonMessage,
    Tag
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss">
.card {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;

  &__image {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    transition: 0.5s;
    flex: none;
  }

  &.darkmode {
    &:hover {
      box-shadow: 0 1px 30px rgba(255, 255, 255, 0.15);
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.15);
    .card__image {
      flex: initial;
    }
  }

  &__message {
    justify-content: space-between;
    padding: 6px 10px 0;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);

    &.darkmode {
      background: rgba(0, 0, 0, 0.2);
    }

    &__title {
      @include font-size(16px);
      font-weight: 400;
      color: #333;
      transition: 0.5s;
      padding-bottom: 10px;

      &.darkmode {
        color: #fff;
      }
    }
  }
}

//웹
@media screen and (max-width: $wrapW) {
}

//태블릿
@media screen and (max-width: $tabletW) {
}

//모바일
@media screen and (max-width: $mobileW) {
  .card {
    display: block;
    &__message {
    }

    &__image {
      flex: none;
    }

    &__message {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      .tag {
        &__item {
          display: none;
          padding: 4px 10px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);

          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3) {
            display: block;
          }
        }

        &::after {
          content: "...";
          display: inline-block;
          align-self: center;
          color: #999;
          margin-bottom: 4px;
          @include font-size(20px);
        }
      }

      &.darkmode {
        .tag {
          &::after {
            color: #fff;
          }
        }
      }
    }
  }
}

//폴드
@media screen and (max-width: $foldW) {
}
</style>
