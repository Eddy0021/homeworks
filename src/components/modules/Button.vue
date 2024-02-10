<template>
  <button :class="$style[typeClass]" :disabled="disabled">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "button"
    }
  },
  computed: {
    typeClass() {
      return `button-${this.type}`;
    },
  },
};
</script>

<style module>
@import '../../assets/stylesheets/components/SubComponents/Button.scss';
</style>
