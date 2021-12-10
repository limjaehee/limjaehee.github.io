<template>
  <button class="button-message">{{ message }}</button>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "메시지"
    }
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {}
};
</script>

<style lang="scss">
.button-message {
  padding: 12px 14px;
  color: #fff;
  background: $c-color;
  border-radius: 30px;
  @include font-size(16px);
}
</style>
