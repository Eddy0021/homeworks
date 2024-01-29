<template>
  <div :class="alertClass" v-if="show">
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

<style scoped>
.alert-info {
  background-color: #d9edf7;
  color: #31708f;
  border: 1px solid #bce8f1;
  padding: 15px;
  border-radius: 4px;
}

.alert-success {
  background-color: #dff0d8;
  color: #3c763d;
  border: 1px solid #d6e9c6;
  padding: 15px;
  border-radius: 4px;
}

.alert-warning {
  background-color: #fcf8e3;
  color: #8a6d3b;
  border: 1px solid #faebcc;
  padding: 15px;
  border-radius: 4px;
}

.alert-error {
  background-color: #f2dede;
  color: #a94442;
  border: 1px solid #ebccd1;
  padding: 15px;
  border-radius: 4px;
}

.alert-closable{
  background-color: #949494;
  color: #ffffff;
  border: 1px solid #000000;
  padding: 15px;
  border-radius: 4px;
}

.close-button {
  background-color: transparent;
  border: none;
  color: #ffffff;
  cursor: pointer;
  margin-top: 8px;
}
</style>

