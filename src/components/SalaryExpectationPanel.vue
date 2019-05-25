<template>
  <div class="wrapper">
    <input
      v-show="!submitted"
      type="number"
      :placeholder="placeholder"
      v-model="value"
    />
    <button v-show="!submitted" v-on:click.prevent="submitValues">
      Submit
    </button>
    <p v-show="submitted">{{ submittedMessage }}</p>
  </div>
</template>

<script>
import { EventBus } from "../utils/EventBus";

// TODONOW: rename props
// TODONOW: delete up down from input
export default {
  name: "SalaryExpectationPanel",
  props: {
    placeholder: {
      type: String,
      required: false
    },
    submittedMessage: {
      type: String,
      required: false
    },
    submitEvent: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      submitted: false,
      value: ""
    };
  },
  methods: {
    submitValues() {
      if (isNaN(this.value) || this.value === "" || this.value <= 0) {
        console.log("Please, input a number"); // TODONOW: improve
      } else {
        EventBus.$emit(this.submitEvent, parseInt(this.value, 10));
        this.submitted = true;
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  border: 2px black;
  border-style: solid;
  width: 60%;
  padding: 35px 0;
  margin: 5px auto;
}
</style>
