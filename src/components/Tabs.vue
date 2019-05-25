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
        placeholder="enter maximum offer"
        submittedMessage="Employer offer submitted!"
      />
    </div>

    <div v-show="selectedTab === 'Employee-Tab'">
      <SalaryExpectationPanel
        placeholder="enter minimum salary"
        submittedMessage="Employee salary expectation submitted!"
      />
    </div>
  </div>
</template>

<script>
import SalaryExpectationPanel from "./SalaryExpectationPanel";

export default {
  name: "Tabs",
  components: {
    SalaryExpectationPanel
  },
  data() {
    return {
      tabs: ["Employer-Tab", "Employee-Tab"],
      selectedTab: "Employer-Tab"
    };
  },
  methods: {
    selectTab(tab) {
      console.log(tab);
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
