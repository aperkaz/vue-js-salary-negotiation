<template>
  <div>
    <ul>
      <span
        class="tabs"
        v-for="tab in tabs"
        :class="{ activeTab: selectedTab === tab }"
        :key="tab"
        @click="selectTab(tab)"
        >{{ tab }}</span
      >
    </ul>

    <div v-show="selectedTab === 'Employer-Tab'">
      <SalaryExpectationPanel
        placeholder="Enter maximum offer"
        submittedMessage="Employer offer submitted!"
        :submitEvent="submitEmployerOfferEvent"
      />
    </div>

    <div v-show="selectedTab === 'Employee-Tab'">
      <SalaryExpectationPanel
        placeholder="Enter minimum salary"
        submittedMessage="Employee salary expectation submitted!"
        :submitEvent="submitEmployeeExpectationEvent"
      />
    </div>
  </div>
</template>

<script>
import SalaryExpectationPanel from "./SalaryExpectationPanel";
import { events } from "../utils/events";

export default {
  name: "Tabs",
  components: {
    SalaryExpectationPanel
  },
  data() {
    return {
      tabs: ["Employer-Tab", "Employee-Tab"],
      selectedTab: "Employer-Tab",
      submitEmployerOfferEvent: events.SUBMIT_EMPLOYER_OFFER,
      submitEmployeeExpectationEvent: events.SUBMIT_EMPLOYEE_EXPECTATION
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    }
  }
};
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
}
.tabs {
  margin-left: 20px;
  cursor: pointer;
}
.activeTab {
  color: #16c0b0;
  text-decoration: underline;
}
</style>
