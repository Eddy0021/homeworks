<template>
  <div class="dropdown-container">
    <label v-if="label" :class="$style['dropdown-label']">{{ label }}</label>
    <select v-model="selectedOption" :disabled="disabled" :class="$style['dropdown-select']">
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

<style module>
@import '../../assets/stylesheets/components/SubComponents/Dropdown.scss';
</style>
