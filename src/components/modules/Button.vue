<template>
  <button :class="typeClass" :disabled="disabled">
    <slot></slot>
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
  },
  computed: {
    typeClass() {
      return `button-${this.type}`;
    },
  },
};
</script>

<style scoped>
button{
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-primary {
  background-color: rgb(105, 105, 199);
  color: white;
}

.button-secondary {
  background-color: lightgray;
  color: black;
}

.button-disabled {
  background-color: #d3d3d3;
  color: #a0a0a0;
  cursor: not-allowed !important;
}
</style>
