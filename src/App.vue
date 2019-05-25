<template>
  <div id="app">
    <h1>
      Vue.js salary negotatior
    </h1>
    <div><span>Employer tab</span> / <span>Employee tab</span></div>
    <SalaryExpectationPanel placeholder="Employer" />
  </div>
</template>

<script>
import SalaryExpectationPanel from "./components/SalaryExpectationPanel.vue";

export default {
  name: "app",
  components: {
    SalaryExpectationPanel
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
