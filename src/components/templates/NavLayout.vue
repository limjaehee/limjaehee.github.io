<template>
  <div class="nav-layout">
    <VInner>
      <slot />
    </VInner>
    <Nav></Nav>
  </div>
</template>

<script>
import Nav from "../organisms/Nav.vue";
import VInner from "./VInner.vue";
export default {
  components: {
    Nav,
    VInner
  }
};
</script>

<style lang="scss">
.nav-layout {
  width: 100%;
  height: 100%;
}
</style>
