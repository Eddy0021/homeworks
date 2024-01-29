<template>
  <div class="dropdown-container">
    <label v-if="label" class="dropdown-label">{{ label }}</label>
    <select v-model="selectedOption" :disabled="disabled" class="dropdown-select">
      <option v-for="option in options" :key="option.id" :value="option.value">{{ option.value }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface DropdownOption {
  id: number;
  value: string;
}

export default defineComponent({
  props: {
    options: {
      type: Array as PropType<DropdownOption[]>,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedOption: null as string | null,
    };
  },
});
</script>

<style scoped>
.dropdown-container {
  margin-bottom: 16px;
}

.dropdown-label {
  display: block;
  margin-bottom: 8px;
}

.dropdown-select {
  width: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
</style>
