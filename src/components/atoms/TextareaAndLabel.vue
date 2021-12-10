<template>
  <div class="textarea-and-label">
    <label :for="id" class="textarea-and-label__title">{{ title }}</label>
    <textarea
      name=""
      class="textarea-and-label__value"
      :id="id"
      cols="30"
      rows="10"
      :value="TextValue"
      @input="input($event.target.value)"
      :class="{ darkmode: $store.state.darkmode }"
    ></textarea>
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
.textarea-and-label {
  width: 100%;
  &__title {
    padding-bottom: 14px;
    display: block;
  }

  &__value {
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 100%;
    padding: 10px;
    @include font-size(16px);
    box-sizing: border-box;
    background: transparent;

    &.darkmode {
      color: #fff;
    }
  }
}
</style>
