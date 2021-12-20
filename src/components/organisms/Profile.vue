<template>
  <div class="profile" :class="{ darkmode: $store.state.darkmode }">
    <div class="profile__picture">
      <ImageWrap :Image="'profile.jpg'"></ImageWrap>
    </div>
    <article class="profile__box introduce">
      <i class="icon-quotes-start1"></i>
      <i class="icon-quotes-end1"></i>
      <h3 class="profile__sub-title">
        안녕하세요:) <br />프론트엔드 2년차
        <strong class="profile__sub-title__strong">임재희</strong>입니다
      </h3>
      <p
        class="profile__sub-comment"
        :class="{ darkmode: $store.state.darkmode }"
      >
        <strong class="profile__sub-comment__strong"
          >"안되는건 없다 일단 해보자"</strong
        >라는 마인드로 <br />html, jQuery, css에만 안주하지 않고 <br />vue.js와
        scss, git을 배우며 <br /><strong class="profile__sub-comment__strong"
          >프론트엔드로의 전문성을 높혀가고 있습니다.</strong
        >
      </p>
    </article>
    <article class="profile__box">
      <h3 class="profile__sub-title">
        저는 이렇게
        <strong class="profile__sub-comment__strong">공부</strong>합니다
      </h3>
      <p
        class="profile__sub-comment"
        :class="{ darkmode: $store.state.darkmode }"
      >
        꾸준한 공부를 위해 벨로그에
        <strong class="profile__sub-comment__strong"
          >지식을 기록하며 공유</strong
        >하고<br />
        깃허브에
        <strong class="profile__sub-comment__strong">코드 소스를 정리</strong
        >해놓고 있습니다.<br />
        해당 버튼을 클릭하시면 사이트로 이동합니다.
      </p>
      <ul class="profile__study">
        <li class="profile__study__item">
          <ButtonIcon
            :iconClass="'github'"
            :commonClass="'profile__button'"
            @click="goPage('https://github.com/limjaehee')"
          ></ButtonIcon>
        </li>
        <li class="profile__study__item">
          <ButtonIcon
            :iconClass="'vimeo'"
            :commonClass="'profile__button'"
            @click="goPage('https://velog.io/@rhak39')"
          ></ButtonIcon>
        </li>
      </ul>
    </article>
    <article class="profile__box">
      <h3 class="profile__sub-title">
        <strong class="profile__sub-comment__strong">언어</strong>와
        <strong class="profile__sub-comment__strong">스킬</strong>을 배우는 것을
        좋아해요
      </h3>
      <Tag :Tag="skills" class="profile__skills"></Tag>
    </article>
    <article class="profile__box">
      <h3 class="profile__sub-title">
        또한, 이런 <strong class="profile__sub-comment__strong">활동</strong>을
        했어요
      </h3>
      <p class="profile__sub-text" :class="{ darkmode: $store.state.darkmode }">
        <em
          class="profile__sub-text__title"
          :class="{ darkmode: $store.state.darkmode }"
          >이젠아카데미(모바일 웹 &#38; 앱디자인)</em
        >
        2020.05.15~2020.10.06
      </p>
    </article>
    <article class="profile__box">
      <h3 class="profile__sub-title">
        마지막으로 제
        <strong class="profile__sub-comment__strong">커리어</strong>입니다 :)
      </h3>
      <p class="profile__sub-text" :class="{ darkmode: $store.state.darkmode }">
        <em
          class="profile__sub-text__title"
          :class="{ darkmode: $store.state.darkmode }"
          >The Join</em
        >
        2020.11.02~2021.11.30
      </p>
    </article>
  </div>
</template>

<script>
import ImageWrap from "../atoms/ImageWrap.vue";
import ButtonIcon from "../atoms/ButtonIcon.vue";
import Tag from "../atoms/Tag.vue";
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
    ButtonIcon,
    Tag
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
  padding-bottom: 250px;

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
    background: #f5f5f5;
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

  &__sub-title {
    font-weight: 200;
    @include font-size(20px);
    padding: 0 0 18px;

    br {
      display: none;
    }

    &__strong {
      font-weight: 600;
    }
  }

  &__sub-comment {
    color: #999;
    font-weight: 200;

    &.darkmode {
      color: rgba(255, 255, 255, 0.7);
    }

    &__strong {
      font-weight: 600;
    }
  }

  &__box {
    margin-top: 70px;

    &.introduce {
      position: relative;

      .profile__sub-title {
        opacity: 0;
        animation: titleLeft 1 1s forwards;
      }

      .profile__sub-comment {
        opacity: 0;
        animation: titleRight 1 1s forwards;
      }
      @keyframes titleRight {
        0% {
          opacity: 0;
          transform: translateX(20px);
        }

        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes titleLeft {
        0% {
          opacity: 0;
          transform: translateX(-20px);
        }

        100% {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .icon-quotes-start1 {
        position: absolute;
        left: -60px;
        top: -20px;
        @include font-size(50px);
        color: rgba(0, 0, 0, 0.07);
      }
      .icon-quotes-end1 {
        position: absolute;
        right: -60px;
        bottom: -20px;
        @include font-size(50px);
        color: rgba(0, 0, 0, 0.07);
      }
    }
  }

  &__study {
    display: flex;
    justify-content: center;
    padding-top: 20px;
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
    max-width: 500px;
    justify-content: center;
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
        background: #1b1d20;
        vertical-align: middle;
      }
    }
  }
}

//모바일
@media screen and (max-width: $mobileW) {
  .profile {
    padding: 50px 1rem 140px;
    &__sub-title {
      br {
        display: block;
      }
    }

    &::before {
      top: 110px;
    }

    &__picture {
      width: 90px;
      height: 90px;
    }

    &__box {
      margin-top: 70px;

      &.introduce {
        .icon-quotes-start1 {
          left: -2px;
          top: -25px;
        }
        .icon-quotes-end1 {
          right: -2px;
          top: -18px;
        }
      }
    }

    &__sub-text {
      display: block;
      color: #999;

      &.darkmode {
        color: #dcdcdc;
      }

      &__title {
        display: block;
        font-weight: 400;
        color: #555;

        &.darkmode {
          color: #fff;
          font-weight: 300;
        }

        &::after {
          display: none;
        }
      }
    }
  }
}

//폴드
@media screen and (max-width: $foldW) {
}
</style>
