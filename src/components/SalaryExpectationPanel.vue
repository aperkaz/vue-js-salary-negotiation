<template>
  <div class="wrapper">
    <p>{{ placeholder }} salary expectation Panel</p>
    <input type="number" :placeholder="placeholder" v-model="value" />
    <button v-show="!submitted" v-on:click.prevent="onSubmit">Submit</button>
  </div>
</template>

<script>
export default {
  name: "SalaryExpectationPanel",
  props: {
    placeholder: {
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
  padding: 15px 0 35px 0;
  margin: 30px auto;
}
</style>
