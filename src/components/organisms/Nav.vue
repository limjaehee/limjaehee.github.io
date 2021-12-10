<template>
  <nav id="gnb" class="nav">
    <transition name="up">
      <div class="nav-modal" v-if="Modal">
        <b class="nav-modal__title">안녕하세요!</b>
        <span class="nav-modal__time">08:00 PM</span>
        <ul class="nav-modal__list">
          <li class="nav-modal__list__item">
            <p>Darkmode {{ $store.state.darkmode ? "ON" : "OFF" }}</p>
            <SwichToggle
              :SwitchId="'DarkMode'"
              :isCheck="$store.state.darkmode"
              @switchEvt="darkMode"
            ></SwichToggle>
          </li>
        </ul>
      </div>
    </transition>
    <ul class="nav__wrapper" :class="{ darkmode: $store.state.darkmode }">
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
import SwichToggle from "../atoms/SwichToggle.vue";
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
      ],
      Modal: false
    };
  },
  components: {
    ButtonIcon,
    RouterIcon,
    SwichToggle
  },
  methods: {
    SettingClick() {
      this.Modal = !this.Modal;
    },
    darkMode(value) {
      this.$store.state.darkmode = value;
    }
  },
  mounted() {
    this.Modal = true;
    setTimeout(() => {
      this.Modal = false;
    }, 1000);
  }
};
</script>

<style lang="scss">
.nav {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

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

.nav-modal {
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(8px);
  position: absolute;
  right: 0;
  bottom: 60px;
  border-radius: 20px;
  color: #fff;
  width: 265px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 21px 24px;
  box-sizing: border-box;
  align-items: center;

  &__title {
    color: #fff;
    @include font-size(20px);
  }

  &__list {
    flex: 100%;
    margin-top: 20px;

    &__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
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
    border-top: 1px solid #dcdcdc;
    &__wrapper {
      width: 100%;
      border-radius: 0;
      background: #fff;

      &.darkmode {
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(8px);
      }

      &__list {
        padding: 0 20px;
      }
    }
  }
}
</style>
