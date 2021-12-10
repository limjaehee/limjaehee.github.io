<template>
  <div class="modal-card" :class="{ darkmode: $store.state.darkmode }">
    <div class="modal-card__image">
      <ButtonIcon
        :iconClass="'prev'"
        :commonClass="'modal-card__btn'"
      ></ButtonIcon>
      <ImageWrap></ImageWrap>
    </div>
    <article>
      <h3>제목입니다.</h3>
      <Tag :Tag="Tag"></Tag>
    </article>
  </div>
</template>

<script>
import Tag from "../atoms/Tag.vue";
import ImageWrap from "../atoms/ImageWrap.vue";
import ButtonIcon from "../atoms/ButtonIcon.vue";
export default {
  data() {
    return {
      Tag: ["html", "css", "vue.js", "javascript"]
    };
  },

  mounted() {},
  components: {
    Tag,
    ImageWrap,
    ButtonIcon
  },

  methods: {}
};
</script>

<style lang="scss">
.modal-card {
  position: fixed;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);
  width: 82%;
  height: 80%;
  z-index: 50;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  overflow: hidden;
  transition: 0.5s;

  &.darkmode {
    background: #000;
    box-shadow: 0 3px 15px rgba(255, 255, 255, 0.08);
  }

  &__btn {
    position: absolute;
    left: 40px;
    top: 30px;

    &__icon {
      @include font-size(30px);
      color: #fff;
    }
  }

  &__image {
    width: 45%;
    position: relative;

    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.45) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    }
  }
}
</style>
