<template>
  <div :class="classes">
    <label class="input-label">{{ label }}</label>
    <input
      :type="type"
      :disabled="disabled"
      class="input-field"
      v-model="inputValue"
      @input="validateInput"
    />
    <div class="input-error" v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import "./input.scss";

export default {
  name: "reg-input",
  props: {
    label: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: "text",
      validator: function (value) {
        return ["text", "email", "number", "dni"].indexOf(value) !== -1;
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
    disabled: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      default: "Chile",
      validator: function (value) {
        return ["Chile", "Brasil", "otro  Paises...."].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {
      inputValue: "",
      error: "",
    };
  },
  methods: {
    validateInput() {
      if (this.type === "email") {
        if (!this.isValidEmail(this.inputValue)) {
          this.error = "Correo electrónico no válido";
        } else {
          this.error = "";
        }
      } else if (this.type === "number") {
        if (!isNaN(this.inputValue)) {
          this.error = "Número no válido";
        } else {
          this.error = "";
        }
      } else if (this.type === "dni" && this.inputValue.length > 5) {
        console.log("dni validator", this.validateRut(this.inputValue));
        if (!this.validateRut(this.inputValue)) {
          this.error = "DNI no válido";
        } else {
          this.error = "";
        }
      }else if (this.type === "text") {
        if (!this.validateText(this.inputValue)) {
          this.error = "Text no válido";
        } else {
          this.error = "";
        }
      }
    },
    isValidEmail(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value) && value.length >= 5) {
        return false;
      }
      return true
    },
    validateText(value) {
      const textRegex = /^[a-zA-Z]+$/;
      if (!textRegex.test(value)) {
        return false;
      }
      return true
    },
    validateRut(rut) {
      rut = rut.replace(/\D/g, "");

      if (rut.length !== 9) {
        return false;
      }

      const rutDigits = rut.slice(0, 8);
      const digitVerify = rut.slice(8).toUpperCase();

      let plus = 0;
      let multiply = 2;

      for (let i = rutDigits.length - 1; i >= 0; i--) {
        plus += parseInt(rutDigits[i], 10) * multiply;
        multiply = multiply < 7 ? multiply + 1 : 2;
      }

      const digitAway = 11 - (plus % 11);

      if (digitAway === 10) {
        return digitVerify === "K";
      } else if (digitAway === 11) {
        return digitVerify === "0";
      } else {
        return digitVerify === digitAway.toString();
      }
    },
  },
    computed: {
    classes() {
      return {
        "reg-input": true,
        [`reg-input--${this.mode}`]: true,
        "hideLabel": !this.label,
      };
    },
  },
};
</script>
