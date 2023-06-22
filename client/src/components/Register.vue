<template>
  <div>
    <h1>GymMatch</h1>
    <form>
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
        <option value="male">Male</option>
        <option value="female">female</option>
      </select>
      <br>
      <label for="gymFreq">Gym Frequency:</label>
      <select for="gymFreq" id="gymFreq" name="gymFreq" v-model="gymFreq">
        <option value="one">One time a week</option>
        <option value="two">Two times a week</option>
        <option value="three">Three times a week</option>
        <option value="moreThanThree">More than three times a week</option>
      </select>
      <br>
      <label for="yearsOfExp">Years of Experience:</label>
      <select for="yearsOfExp" id="yearsOfExp" name="yearsOfExp" v-model="yearsOfExp">
        <option value="lessThanOne">Less than one year</option>
        <option value="one">One year</option>
        <option value="two">Two years</option>
        <option value="moreThanTwo">More than two years</option>
      </select>
      <br>
      <label for="typesOfTraining">Types of Training:</label>
      <select for="typesOfTraining" id="typesOfTraining" name="typesOfTraining" v-model="typesOfTraining">
        <option value="cali">Calisthenics</option>
        <option value="body">Body Building</option>
        <option value="power">Power Lifting</option>
      </select>
      <br>
      <label for="gymLocation">Choose a gym:</label>
      <select for="gymLocation" id="gymLocation" name="gymLocation" v-model="gymLocation">
        <option value="activesg">ActiveSG</option>
        <option value="anytime">Anytime Fitness</option>
        <option value="gymbox">Gym Box</option>
      </select>
      <br>
      <div class="error" v-html="error"></div>
      <br>
      <button @click="register">Register</button>
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
</style>
