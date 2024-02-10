<template>
  <input @input="updateInput" :type="type" :placeholder="placeholder" :disabled="disabled" :class="$style['custom-input']" />
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style module>
@import '../../assets/stylesheets/components/SubComponents/InputField.scss';
</style>
