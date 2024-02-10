<template>
  <div :class="$style[alertClass]" v-if="show">
    <p>{{ message }}</p>
    <button v-if="closable" @click="closeAlert" class="close-button">Close</button>
  </div>
</template>


<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info',
    },
    message: {
      type: String,
      default: '1'
    },
    closable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  computed: {
    alertClass() {
      return `alert-${this.type}`;
    },
  },
  methods: {
    closeAlert() {
      this.show = false;
    },
  },
};
</script>

<style module>
@import '../../assets/stylesheets/components/SubComponents/Alter.scss';
</style>

