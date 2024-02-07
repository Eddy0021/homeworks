<template>
  <button :class="typeClass" :disabled="disabled">
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

<style scoped>
@import '../../assets/stylesheets/components/SubComponents/Button.scss';
</style>
