<template>
  <div>
    <h1>Welcome!</h1><br><br>
    <a class="button button1" href="/#/preference">Find a gym buddy now!</a>
    <button @click="getSchedule" class="button button1">See your match status here!</button>
  </div>

</template>

<script>
  import ScheduleService from '../services/ScheduleService'

  export default {
    methods: {
      async getSchedule () {
        try {
          console.log('here')
          const response = await ScheduleService.getSchedule()
          console.log(response)
          console.log('there')
          this.$router.push({ name: 'meetingConfirmation', params: { matches: JSON.stringify(response) } })
        } catch (error) {
          if (error.code === 'ECONNABORTED') {
            console.log('Request timed out')
          } else if (error.response && error.response.data && error.response.data.error) {
            console.log(error.response.data.error)
            this.error = error.response.data.error
          } else {
            console.log(error.message)
            this.error = 'An unexpected error occurred.'
          }
        }
      }
    }
  }

</script>
<style>
  .button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.button1 {
  background-color: white;
  color: black;
  border: 2px solid #555555;
}
.button1:hover {
  background-color: #555555;
  color: white;
}
</style>
