<template>
  <div>
    <h1>GymMatch</h1>
    <form action="/#/home">
      <h2>Register</h2>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" v-model="name">
      <br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" v-model="email">
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" v-model="password">
      <br>
      <label for="age">Age:</label>
      <input type="number" id="age" name="age" v-model="age">
      <br>
      <label for="gender">Gender:</label>
      <select for="gender" id="gender" name="gender" v-model="gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <br>
      <label for="gymFreq">Gym Frequency:</label>
      <select for="gymFreq" id="gymFreq" name="gymFreq" v-model="gymFreq">
        <option value="One time a week">One time a week</option>
        <option value="Two times a week">Two times a week</option>
        <option value="Three times a week">Three times a week</option>
        <option value="More than three times a week">More than three times a week</option>
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
      <button type="button" class="button button1" @click="register">Register</button>
      <br>
      <a href="http://localhost:8080/#/login">Already have an account? Click here to sign in!</a>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      age: '',
      gender: '',
      gymFreq: '',
      yearsOfExp: '',
      typesOfTraining: '',
      gymLocation: '',
      error: null
    }
  },
  methods: {
    async register () {
      console.log('button was clicked')
      try {
        console.log('reg can')
        const response = await AuthenticationService.register({
          name: this.name,
          email: this.email,
          password: this.password,
          age: this.age,
          gender: this.gender,
          gymFreq: this.gymFreq,
          yearsOfExp: this.yearsOfExp,
          typesOfTraining: this.typesOfTraining,
          gymLocation: this.gymLocation
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.token)
      } catch (error) {
        console.log('reg cannot')
        this.error = error.response.data.error
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
