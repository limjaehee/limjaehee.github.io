<template>
  <div class="modal-card" :class="{ darkmode: $store.state.darkmode }">
    <div class="modal-card__btn-wrap">
      <ButtonIcon
        :iconClass="'prev'"
        :commonClass="'modal-card__btn'"
        @click="$emit('close')"
      ></ButtonIcon>
    </div>
    <div class="modal-card__image">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        @slideChange="changeSwiperIndex"
        class="modal-card__swiper"
      >
        <swiper-slide
          class="modal-card__swiper__slide"
          v-for="item in SubImage"
          :key="item.i"
        >
          <a
            :href="require('../../assets/image/content/' + item)"
            class="modal-card__image__open"
            target="_blank"
          >
            <ImageWrap :Image="item"></ImageWrap>
          </a>
        </swiper-slide>
      </swiper>
      <ul class="pagenation">
        <li
          class="pagenation__button"
          @click="PageNation(index)"
          v-for="(item, index) in SubImage.length"
          :key="item.i"
          :class="{ on: index == SwiperIndex }"
        ></li>
      </ul>
    </div>
    <article class="modal-card-detail" ref="cardDetail">
      <div class="modal-card-detail__buttons">
        <ButtonMessage
          v-if="github != null && github != ''"
          @click="goPage(github)"
          :message="'깃허브'"
          :active="false"
          class="modal-card-detail__buttons__item"
        ></ButtonMessage>
        <ButtonMessage
          :message="'방문하기'"
          v-if="link != null && link != ''"
          @click="goPage(link)"
          :active="true"
          class="modal-card-detail__buttons__item"
        ></ButtonMessage>
      </div>
      <h2 class="modal-card-detail__title">
        {{ title }}
      </h2>
      <Tag :Tag="Tag"></Tag>
      <ul class="modal-card-detail__list">
        <li
          v-for="item in CardDetail"
          :key="item.i"
          class="modal-card-detail__list__item"
        >
          <TitleAndText :title="item.title" :text="item.text"></TitleAndText>
        </li>
      </ul>
      <h3 class="modal-card__ohter-title">다른 작품 보기</h3>
      <ul class="modal-card__other-image">
        <li
          class="modal-card__other-image__item"
          v-for="(item, index) in NextImage"
          :key="item.i"
          @click="$emit('current', index), scrollTop()"
        >
          <ImageWrap :Image="item"></ImageWrap>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import Tag from "../atoms/Tag.vue";
import ImageWrap from "../atoms/ImageWrap.vue";
import ButtonIcon from "../atoms/ButtonIcon.vue";
import TitleAndText from "../atoms/TitleAndText.vue";
import ButtonMessage from "../atoms/ButtonMessage.vue";
export default {
  props: {
    title: {
      type: String,
      default: "제목입니다."
    },
    Tag: {
      type: Array,
      default: null
    },
    CardDetail: {
      type: Array,
      default: null
    },
    github: {
      type: String,
      default: null
    },
    link: {
      type: String,
      default: null
    },
    SubImage: {
      type: Array,
      default: null
    },
    NextImage: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      //스와이퍼
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      SwiperIndex: 0
    };
  },
  mounted() {},
  components: {
    Tag,
    ImageWrap,
    ButtonIcon,
    TitleAndText,
    ButtonMessage
  },

  methods: {
    goPage(link) {
      var win = window.open(link, "_blank");
      win.focus();
    },
    //swiper index구하기 -----------------------------
    changeSwiperIndex() {
      this.SwiperIndex = this.$refs.mySwiper.$swiper.activeIndex;
      console.log(this.SwiperIndex);
    },
    //스와이퍼 페이지 이동
    PageNation(i) {
      this.$refs.mySwiper.$swiper.slideTo(i);
    },
    scrollTop() {
      setTimeout(() => {
        var CardDetail = document.querySelector(".modal-card-detail");
        var Card = document.querySelector(".modal-card");
        this.$refs.mySwiper.$swiper.slideTo(0);

        CardDetail.scroll({
          behavior: "smooth",
          left: 0,
          top: 0
        });
        Card.scroll({
          behavior: "smooth",
          left: 0,
          top: 0
        });
      }, 0);
    }
  }
};
</script>

<style lang="scss">
.modal-card {
  position: fixed;
  left: 50%;
  top: 48%;
  transform: translate(-50%, -50%);
  width: calc(100% - 16rem);
  height: 80%;
  z-index: 50;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  overflow: hidden;

  &.darkmode {
    background: #1b1d20;
    box-shadow: 0 3px 15px rgba(255, 255, 255, 0.08);
    color: #fff;
  }

  &__btn-wrap {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100px;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.45) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 45%;
    z-index: 2;
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
    flex: 0 0 45%;
    position: relative;

    &__open {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  &__swiper {
    width: 100%;
    height: 100%;
    overflow: hidden;

    &__slide {
    }
  }

  &-detail {
    padding: 100px 0 50px 40px;
    height: 100%;
    overflow: auto;
    box-sizing: border-box;
    width: 65%;
    position: relative;

    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #aaa;
      border-radius: 10px;
    }

    &__buttons {
      position: absolute;
      top: 30px;
      right: 50px;

      &__item {
        margin-left: 10px;
      }
    }

    &__title {
      font-weight: 300;
      padding-bottom: 20px;
    }

    &__list {
      &__item {
        padding-top: 60px;
      }
    }
  }

  &__ohter-title {
    font-weight: 400;
    padding-top: 40px;
  }

  &__other-image {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 20px 0 0;
    box-sizing: border-box;

    &__item {
      width: 30%;
      height: 120px;
      cursor: pointer;
      position: relative;

      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.2);
        opacity: 0;
        transition: 0.5s;
      }

      &:hover {
        &::after {
          opacity: 1;
        }
      }
    }
  }
}

.pagenation {
  position: absolute;
  bottom: 30px;
  z-index: 2;
  left: 0;
  display: flex;
  left: 50%;
  transform: translateX(-50%);

  &__button {
    width: 30px;
    height: 5px;
    background: #fff;
    display: block;

    &.on {
      background: $c-color;
    }
  }
}

//웹
@media screen and (max-width: $wrapW) {
  .modal-card {
    width: calc(100% - 4rem);
  }
}

//태블릿
@media screen and (max-width: $tabletW) {
}

//모바일
@media screen and (max-width: $mobileW) {
  .modal-card {
    width: calc(100% - 2rem);
    display: block;
    height: 80%;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &__btn {
      left: 20px;
    }

    &__btn-wrap {
      position: sticky;
      width: 100%;
      height: 100px;
      z-index: 3;
    }

    &__image {
      width: 100%;
      height: 400px;
      margin-top: -100px;
    }

    &-detail {
      width: 100%;
      overflow: visible;
      padding: 100px 1rem 50px 1rem;
      height: auto;
      overflow: hidden;

      &__buttons {
        right: 1rem;
      }

      &__list {
        &__item {
          padding-top: 40px;
        }
      }
    }

    &__other-image {
      padding: 20px 0px 0 0;

      &__item {
        height: 80px;
      }
    }
  }
}
</style>
