<template>
  <div class="wrapper">
    <form @submit.prevent="submitValues">
      <input
        :id="placeholder"
        v-show="!submitted"
        type="number"
        name="value"
        :placeholder="placeholder"
        v-model="value"
      />
      <input v-if="!submitted" type="submit" value="Submit" />
      <p v-else>{{ onSubmittedMessage }}</p>
    </form>
  </div>
</template>

<script>
import { EventBus } from "../utils/state/EventBus";

export default {
  name: "SalaryExpectationPanel",
  props: {
    placeholder: {
      type: String,
      required: false
    },
    onSubmittedMessage: {
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
        this.value = "";
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
