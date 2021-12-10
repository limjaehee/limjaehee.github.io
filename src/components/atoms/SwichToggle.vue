<template>
  <div class="c-switch">
    <input
      type="checkbox"
      class="c-switch__input"
      :id="SwitchId"
      v-model="switchCheck"
      @change="SwitchEvt()"
    />
    <label class="c-switch__label" :for="SwitchId">
      <span class="c-switch__label__point"></span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    //스위치 아이디
    SwitchId: String,
    //체크 여부
    isCheck: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      switchCheck: this.isCheck
    };
  },
  methods: {
    SwitchEvt() {
      return this.$emit("switchEvt", this.switchCheck);
    }
  },
  mounted() {},
  computed: {}
};
</script>

<style lang="scss">
$Margin: 4px;
.c-switch {
  &__input {
    display: none;
    //체크됨
    &:checked + .c-switch__label .c-switch__label__point {
      $Right: calc(100% - #{$Margin});
      left: $Right;
      transform: translate(-100%, -50%);
    }

    &:checked + .c-switch__label {
      background: rgba(255, 255, 255, 0.5);
    }
  }
  &__label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    border-radius: 34px;
    transition: 0.5s;
    width: 85px;
    height: 44px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);

    &__point {
      position: absolute;
      display: block;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      background-color: #fff;
      transition: all 0.4s ease;
      left: $Margin;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
