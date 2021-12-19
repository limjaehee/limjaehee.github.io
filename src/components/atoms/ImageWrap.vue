<template>
  <div
    :style="background(Image)"
    class="image-wrap"
    :class="{ not: !ImageNull(), darkmode: $store.state.darkmode }"
  >
    <i class="image-wrap__not-icon icon-image" v-if="!ImageNull()"></i>
    <p class="image-wrap__not-txt" v-if="!ImageNull()">
      이미지 준비중 입니다.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    Image: {
      type: String,
      default: null
    }
  },
  methods: {
    ImageNull() {
      if (this.Image != null && this.Image != "") {
        return true;
      } else {
        false;
      }
    },
    background(Image) {
      if (this.ImageNull()) {
        return (
          "backgroundImage : url(" +
          require("../../assets/image/content/" + Image) +
          ")"
        );
      }
    }
  }
};
</script>

<style lang="scss">
.image-wrap {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #aaa;
  transition: 0.5s;

  &.not.darkmode {
    background: #333333;
  }

  &.not {
    background: #efefef;
  }

  &__not-icon {
    @include font-size(80px);
    margin-bottom: 15px;
    transition: 0.5s;
  }
}
</style>
