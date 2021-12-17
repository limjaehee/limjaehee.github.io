<template>
  <div id="app" :class="{ darkmode: $store.state.darkmode }">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("./assets/css/reset.scss");
#app {
  transition: 0.5s;
}

#app.darkmode {
  background: #000;
  color: #fff;
}

h2 {
  @include font-size(36px);
}

h3 {
  @include font-size(20px);
}

//태블릿
@media screen and (max-width: $tabletW) {
  //이너
  html,
  body {
    font-size: $tablet;
  }
}

//모바일
@media screen and (max-width: $mobileW) {
  //이너
  html,
  body {
    font-size: $mobile;
  }

  h2 {
    @include font-size(30px);
  }
}

//폴드
@media screen and (max-width: $foldW) {
  //이너
  html,
  body {
    font-size: $fold;
  }
}

/* 전환효과 (Up) */
.up-enter-active {
  transition: all 0.25s ease;
}
.up-leave-active {
  transition: all 0.25s cubic-bezier(1, 0.5, 0.8, 1);
}
.up-enter,
.up-leave-active {
  opacity: 0;
  transform: translateY(100%);
}

/* 전환효과 (Center) */
@keyframes scale {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}
.center-enter-active {
  animation: scale 0.3s;
}
.center-leave-active {
  animation: scale 0.3s reverse;
}
</style>
