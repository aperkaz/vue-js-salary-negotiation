<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h2 v-if="success">Success</h2>
            <h2 v-else>Failure</h2>
          </div>

          <div class="modal-body">
            <div>
              <p>Maximum offer was: {{ employerOffer }}</p>
              <p>Minimum expected salary was: {{ employeeExpectation }}</p>
              <br/>
              <p>The temperature in London: {{temperatureLondon}}°C</p>
               <br/>
            </div>
          </div>

          <button @click="$emit('close')">
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// TODONOW: refactor modal

// TODONOW: clean styling

// TODONOW: extract key from API call. https://github.com/motdotla/dotenv#readme. Mention it on the Docs
export default {
  name: "ResultsModal",
  props: {
    employerOffer: {
      type: Number,
      required: true
    },
    employeeExpectation: {
      type: Number,
      required: true
    },
    success: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      temperatureLondon: null
    };
  },
  mounted() {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=d84eb0ab097e973587b1c4e200d525b5"
      )
      .then(res => (this.temperatureLondon = res.data.main.temp))
      .catch(e => console.error(e));
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h2 {
  margin-top: 0;
  color: #0d4acc;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
