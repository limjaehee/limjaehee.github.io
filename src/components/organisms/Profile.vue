<template>
  <div class="profile" :class="{ darkmode: $store.state.darkmode }">
    <div class="profile__picture">
      <ImageWrap></ImageWrap>
    </div>
    <p class="profile__name">임재희</p>
    <em class="profile__comment">안녕하세요 어쩌구 저쩌구 입니다.</em>
    <p>
      Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Repellat
      debitis<br /><br />
      totam nam fuga, maxime vitae quia magni<br />
      sapiente provident veritatis velit<br />
      aperiam dolore beatae id <br />quod qui sit molestiae tenetur.
    </p>
    <h3 class="profile__sub-title">Study</h3>
    <div class="profile__button-wrapper">
      <ButtonIcon
        :iconClass="'github'"
        :commonClass="'profile__button'"
        @click="goPage('https://github.com/limjaehee')"
      ></ButtonIcon>
      <ButtonIcon
        :iconClass="'vimeo'"
        :commonClass="'profile__button'"
        @click="goPage('https://velog.io/@rhak39')"
      ></ButtonIcon>
    </div>
    <h3 class="profile__sub-title">Skills</h3>
    <ul class="profile__skills">
      <li
        class="profile__skills__item"
        v-for="item in skills"
        :key="item.i"
        :class="{ darkmode: $store.state.darkmode }"
      >
        {{ item }}
      </li>
    </ul>
    <h3 class="profile__sub-title">Career</h3>
    <p class="profile__sub-text">
      <em
        class="profile__sub-text__title"
        :class="{ darkmode: $store.state.darkmode }"
        >The Join</em
      >
      2020.11.02~2021.11.30
    </p>
    <h3 class="profile__sub-title">Activity</h3>
    <p class="profile__sub-text">
      <em
        class="profile__sub-text__title"
        :class="{ darkmode: $store.state.darkmode }"
        >이젠아카데미(모바일 웹 &#38; 앱디자인)</em
      >
      2020.05.15~2020.10.06
    </p>
  </div>
</template>

<script>
import ImageWrap from "../atoms/ImageWrap.vue";
import ButtonIcon from "../atoms/ButtonIcon.vue";
export default {
  data() {
    return {
      skills: [
        "JavaScript",
        "Vue.js",
        "jQuery",
        "Html",
        "Scss",
        "Css",
        "Git (형상관리)",
        "Chart.js",
        "D3.js",
        "Illustrator",
        "Photoshop",
        "Adobe Xd"
      ]
    };
  },

  mounted() {},
  components: {
    ImageWrap,
    ButtonIcon
  },
  methods: {
    goPage(link) {
      var win = window.open(link, "_blank");
      win.focus();
    }
  }
};
</script>

<style lang="scss">
.profile {
  text-align: center;
  position: relative;
  z-index: 2;
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
  padding-bottom: 150px;

  &.darkmode {
    color: #fff;
    &::before {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
    }
  }

  &::before {
    content: "";
    width: 100%;
    background: #f8f8f8;
    height: 100%;
    display: block;
    position: absolute;
    left: 0;
    top: 180px;
    z-index: -1;
    border-radius: 20px 20px 0 0;
  }

  &__picture {
    width: 130px;
    height: 130px;
    border-radius: 100%;
    overflow: hidden;
    display: inline-block;
  }
  &__name {
    @include font-size(24px);
    padding-top: 10px;
  }

  &__comment {
    color: #b1b1b1;
    @include font-size(18px);
    font-style: unset;
    padding-bottom: 54px;
  }

  &__sub-title {
    font-weight: 400;
    @include font-size(18px);
    padding: 65px 0 35px;
  }

  &__button-wrapper {
    display: flex;
  }

  &__button {
    width: 60px;
    height: 60px;
    background: #888;
    border-radius: 100%;
    margin: 0 8px;
    transition: 0.5s;

    &:hover {
      background: $c-color;
    }

    &__icon {
      @include font-size(34px);
      color: #fff;
    }
  }

  &__skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 480px;

    &__item {
      color: #2c2c2c;
      padding: 0 8px;
      margin-bottom: 4px;

      &.darkmode {
        color: #fff;
      }
    }
  }

  &__sub-text {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;

    &__title {
      font-weight: 300;
      font-style: unset;
      vertical-align: middle;

      &.darkmode {
        &::after {
          background: #fff;
        }
      }

      &::after {
        content: "";
        display: inline-block;
        width: 1px;
        height: 16px;
        margin: 0 16px 0 10px;
        background: #000;
        vertical-align: middle;
      }
    }
  }
}

//모바일
@media screen and (max-width: $mobileW) {
  .profile {
    padding-top: 50px;

    &::before {
      top: 110px;
    }

    &__picture {
      width: 90px;
      height: 90px;
    }
  }
}
</style>
