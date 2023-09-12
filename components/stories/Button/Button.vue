<template>
  <button type="button" :disabled="disabled" :class="classes" v-on:click="onClick">
    <span class="iconLeft" v-if="iconLeft">
      <font-awesome-icon :icon="['fas', iconLeft]" />
    </span>
    {{ label }}
    <span class="iconRight" v-if="iconRight">
      <font-awesome-icon class="iconRight" v-if="iconRight" :icon="['fas', iconRight]" />
    </span>
  </button>
</template>

<script>
import "./button.scss";

export default {
  name: "reg-button",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "primary",
      validator: function (value) {
        return ["primary", "secondary", "text"].indexOf(value) !== -1;
      },
      required: true,
    },
    mode: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["default", "rounded"].indexOf(value) !== -1;
      },
      required: true,
    },
    size: {
      type: String,
      default: "default",
      validator: function (value) {
        return ["default", "small"].indexOf(value) !== -1;
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
  },

  computed: {
    classes() {
      return {
        "reg-btn": true,
        [`reg-btn--${this.mode}`]: true,
        [`reg-btn--${this.type}`]: true,
        "reg-btn--small": this.size == "small",
        "reg-btn--full-width": this.fullWidth,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick", this.label);
      console.log("emit onClick", this.label);
    },
  },
};
</script>
