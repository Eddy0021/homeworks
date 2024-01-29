<template>
  <div class="checkbox-container">
    <input type="checkbox" :checked="checked" :disabled="disabled" @input="$emit('update:checked', $event.target.checked)" class="checkbox-input" />
    <label v-if="label" class="checkbox-label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.checkbox-container {
  display: flex;
  align-items: center;
}

.checkbox-input {
  margin-right: 8px;
}

</style>
