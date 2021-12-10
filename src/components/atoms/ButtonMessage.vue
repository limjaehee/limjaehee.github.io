<template>
  <button
    class="button-message"
    :class="{ on: active }"
    @click="$emit('click')"
  >
    {{ message }}
  </button>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "메시지"
    },
    active: {
      type: Boolean,
      default: false
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
  background: #b4b4b4;
  border-radius: 30px;
  @include font-size(16px);

  &.on {
    background: $c-color;
  }
}

//모바일
@media screen and (max-width: $mobileW) {
  .button-message {
    padding: 8px 12px;
  }
}
</style>
