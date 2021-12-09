<template>
  <nav id="gnb" class="nav">
    <ul class="nav__wrapper">
      <li v-for="item in Nav" :key="item.i" class="nav__wrapper__list">
        <RouterIcon
          :RouterLink="item.link"
          :commonClass="'gnb-button'"
          :iconClass="item.icon"
        ></RouterIcon>
      </li>
      <li class="nav__wrapper__list">
        <ButtonIcon
          :commonClass="'gnb-button'"
          :iconClass="'setting'"
          @click="SettingClick()"
        ></ButtonIcon>
      </li>
    </ul>
  </nav>
</template>

<script>
import ButtonIcon from "../atoms/ButtonIcon.vue";
import RouterIcon from "../atoms/RouterIcon.vue";
export default {
  data() {
    return {
      Nav: [
        {
          link: "/",
          icon: "home"
        },
        {
          link: "/aa",
          icon: "talk"
        },
        {
          link: "/bb",
          icon: "user"
        }
      ]
    };
  },
  components: {
    ButtonIcon,
    RouterIcon
  },
  mounted() {},
  methods: {
    SettingClick() {
      console.log("setting");
    }
  }
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  &__wrapper {
    display: flex;
    justify-content: center;
    padding: 15px 20px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(8px);
    box-sizing: border-box;

    &__list {
      padding: 0 20px;
    }
  }
}
.gnb-button {
  color: #848484;
  &.router-link-active {
    color: #000;
  }
  &__icon {
    @include font-size(24px);
  }
}

@media screen and (max-width: $mobileW) {
  .nav {
    width: 100%;
    bottom: 0;
    border-top: 1px solid #000;
    &__wrapper {
      width: 100%;

      &__list {
        padding: 0 20px;
      }
    }
  }
}
</style>
