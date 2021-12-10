<template>
  <div class="input-and-label">
    <label :for="id" class="input-and-label__title">{{ title }}</label>
    <input
      :type="type"
      class="input-and-label__value"
      :id="id"
      :value="TextValue"
      @input="input($event.target.value)"
      :class="{ darkmode: $store.state.darkmode }"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: "test"
    },
    title: {
      type: String,
      default: "제목"
    },
    type: {
      type: String,
      default: "text"
    },
    TextValue: String
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {
    input(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style lang="scss">
.input-and-label {
  width: 100%;
  &__title {
    padding-bottom: 14px;
    display: block;
  }

  &__value {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 10px 10px;
    width: 100%;
    @include font-size(16px);
    box-sizing: border-box;
    background: transparent;

    &.darkmode {
      color: #fff;
    }
  }
}
</style>
