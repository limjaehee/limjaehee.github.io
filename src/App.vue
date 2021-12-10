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
</style>
