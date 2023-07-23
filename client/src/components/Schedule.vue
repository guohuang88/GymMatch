<template>
    <div>
        <form @submit.prevent="schedule" method="post">
        <h2>Select a date to meet!</h2>
        <label for="meetingDate">Date:</label>
        <input type="date" id="meetingDate" name="meetingDate" v-model="meetingDate" required>
        <br>
        <label for="meetingTime">Time:</label>
        <input type="time" id="meetingTime" name="meetingTime" v-model="meetingTime" required>
        <br>
        <label for="gymLocation">Gym Location:</label>
        <select for="gymLocation" id="gymLocation" name="gymLocation" v-model="gymLocation" required>
            <option value="ActiveSG">ActiveSG</option>
            <option value="Anytime Fitness">Anytime Fitness</option>
            <option value="Gym Box">Gym Box</option>
        </select>
        <br>
        <div v-if="error" class="error">{{ error }}</div>
        <br>
        <button type="submit" class="button button1">Submit</button>
      </form>
    </div>
</template>

<script>
  import ScheduleService from '../services/ScheduleService'

  export default {
    data () {
      return {
        meetingDate: '',
        meetingTime: '',
        gymLocation: '',
        error: null
      }
    },
    methods: {
      async schedule () {
        try {
          const userId = this.$store.state.user.id
          const matchedUserId = this.$route.params.userId
          console.log('userID: ', userId)
          const response = await ScheduleService.schedule({
            userId: userId,
            matchedUserId: matchedUserId,
            meetingDate: this.meetingDate,
            meetingTime: this.meetingTime,
            gymLocation: this.gymLocation,
            meetingStatus: 'Pending'
          })
          console.log(response) // Access the response data
          this.$router.push({ name: 'meetingConfirmation',
            params: {
                matches: JSON.stringify(response)
            }
        })
          console.log('Continuing after successful response')

          // Handle the response data as needed
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

<style scoped>
    .error {
      color: red;
    }
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
