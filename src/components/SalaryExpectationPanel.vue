<template>
  <div class="wrapper">
    <input
      v-show="!submitted"
      type="number"
      :placeholder="placeholder"
      v-model="value"
    />
    <button v-show="!submitted" v-on:click.prevent="onSubmit">Submit</button>
    <p v-show="submitted">{{ submittedMessage }}</p>
  </div>
</template>

<script>
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
    }
  },
  data() {
    return {
      submitted: false,
      value: ""
    };
  },
  methods: {
    onSubmit() {
      if (isNaN(this.value) || this.value === "" || this.value <= 0) {
        console.log("Please, input a number");
      } else {
        console.log("Submit: ", this.value);
        this.value = "";
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
