<template>
  <div id="app">
    <h1>
      Vue.js salary negotatior
    </h1>
    <Tabs />
    <ResultsModal
      v-if="resultSubmitted"
      employerOffer="100"
      employeeExpectation="100"
    />
  </div>
</template>

<script>
import Tabs from "./components/Tabs.vue";
import ResultsModal from "./components/ResultsModal.vue";

export default {
  name: "app",
  components: {
    Tabs,
    ResultsModal
  },
  computed: {
    resultSubmitted() {
      return false;
    }
  }
};

// TODONOW: clean up styling
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
