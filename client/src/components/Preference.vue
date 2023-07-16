<template>
    <div>
        <form action="/#/preferenceCompleted">
        <h2>Let us know your preferred gym buddy's information</h2>
        <label for="gender">Gender:</label>
        <select for="gender" id="gender" name="gender" v-model="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br>
        <label for="yearsOfExp">Years of Experience:</label>
        <select for="yearsOfExp" id="yearsOfExp" name="yearsOfExp" v-model="yearsOfExp">
          <option value="Less than one year">Less than one year</option>
          <option value="One year">One year</option>
          <option value="Two years">Two years</option>
          <option value="More than two years">More than two years</option>
        </select>
        <br>
        <label for="typesOfTraining">Types of Training:</label>
        <select for="typesOfTraining" id="typesOfTraining" name="typesOfTraining" v-model="typesOfTraining">
          <option value="Calisthenics">Calisthenics</option>
          <option value="Body Building">Body Building</option>
          <option value="Power Lifting">Power Lifting</option>
        </select>
        <br>
        <label for="gymLocation">Choose a gym:</label>
        <select for="gymLocation" id="gymLocation" name="gymLocation" v-model="gymLocation">
          <option value="ActiveSG">ActiveSG</option>
          <option value="Anytime Fitness">Anytime Fitness</option>
          <option value="Gym Box">Gym Box</option>
        </select>
        <br>
        <div class="error" v-html="error"></div>
        <br>
        <button type="button" class="button button1" @click="preference">Submit</button>
      </form>
    </div>
  </template>

  <script>
  import PreferenceService from '../services/PreferenceService'

  export default {
    data () {
      return {
        gender: '',
        yearsOfExp: '',
        typesOfTraining: '',
        gymLocation: '',
        error: null
      }
    },
    methods: {
      async preference () {
        console.log('Button was clicked')
        try {
          const response = await PreferenceService.preference({
            gender: this.gender,
            yearsOfExp: this.yearsOfExp,
            typesOfTraining: this.typesOfTraining,
            gymLocation: this.gymLocation
          })
          console.log(response) // Access the response data

          // const matchedUsers = await response
          // console.log(matchedUsers + '===========')
          console.log('true')
          this.$router.push({ name: 'preferenceCompleted', params: { users: JSON.stringify(response) } })
          console.log('Continuing after successful response')

          // Handle the response data as needed
        } catch (error) {
          if (error.code === 'ECONNABORTED') {
            console.log('Request timed out')
          } else {
            console.log(error.message)
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
