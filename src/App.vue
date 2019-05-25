<template>
  <div id="app">
    <h1>
      Vue.js salary negotatior
    </h1>
    <Tabs />
    <ResultsModal
      v-if="showModal"
      :isSuccess="isSuccess"
      :employerOffer="employerOffer"
      :employeeExpectation="employeeExpectation"
      @close-modal="hasModalBeenShown = true"
    />
  </div>
</template>

<script>
import Tabs from "./components/Tabs.vue";
import ResultsModal from "./components/ResultsModal.vue";
import { doExpectationsMatch } from "./utils/calculations";
import { EventBus } from "./utils/state/EventBus";
import { events } from "./utils/state/events";

export default {
  name: "app",
  components: {
    Tabs,
    ResultsModal
  },
  data() {
    return {
      employerOffer: null,
      employeeExpectation: null,
      hasModalBeenShown: false
    };
  },
  computed: {
    showModal() {
      return this.resultSubmitted() && !this.hasModalBeenShown;
    },
    isSuccess() {
      return doExpectationsMatch(this.employerOffer, this.employeeExpectation);
    }
  },
  methods: {
    resultSubmitted() {
      return this.employerOffer && this.employeeExpectation ? true : false;
    }
  },
  mounted() {
    EventBus.$on(
      events.SUBMIT_EMPLOYER_OFFER,
      value => (this.employerOffer = value)
    );

    EventBus.$on(
      events.SUBMIT_EMPLOYEE_EXPECTATION,
      value => (this.employeeExpectation = value)
    );
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 25vh;
}
</style>
