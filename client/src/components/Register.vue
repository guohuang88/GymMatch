<template>
  <div>
    <h1>GymMatch</h1>
    <form>
      <h2>Register</h2>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name">
      <br>
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">
      <br>
      <label for="pass">Password:</label>
      <input type="password" id="pass" v-model="pass">
      <br>
      <label for="age">Age:</label>
      <input type="number" id="age" v-model="age">
      <br>
      <label for="gender">Gender:</label>
      <select name="gender" id="gender" v-model="gender">
        <option value="male">Male</option>
        <option value="female">female</option>
      </select>
      <br>
      <label for="gymFreq">Gym Frequency:</label>
      <select for="gymFreq" id="gymFreq" v-model="gymFreq">
        <option value="one">One time a week</option>
        <option value="two">Two times a week</option>
        <option value="three">Three times a week</option>
        <option value="moreThanThree">More than three times a week</option>
      </select>
      <br>
      <label for="yoe">Years of Experience:</label>
      <select for="yoe" id="yoe" v-model="yoe">
        <option value="lessThanOne">Less than one year</option>
        <option value="one">One year</option>
        <option value="two">Two years</option>
        <option value="moreThanTwo">More than two years</option>
      </select>
      <br>
      <label for="tot">Types of Training:</label>
      <select for="tot" id="tot" v-model="tot">
        <option value="cali">Calisthenics</option>
        <option value="body">Body Building</option>
        <option value="power">Power Lifter</option>
      </select>
      <br>
      <label for="gymLoc">Choose a gym:</label>
      <select for="gymLoc" id="gymLoc" v-model="gymLoc">
        <option value="activesg">ActiveSG</option>
        <option value="body">Anytime Fitness</option>
        <option value="power">Gym Box</option>
      </select>
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
      username: '',
      pass: '',
      age: '',
      gender: '',
      gymFreq: '',
      yoe: '',
      tot: '',
      gymLoc: ''
    }
  },
  methods: {
    async register () {
      const res = await AuthenticationService.register({
        name: this.name,
        username: this.username,
        pass: this.pass,
        age: this.age,
        gender: this.gender,
        gymFreq: this.gymFreq,
        yoe: this.yoe,
        tot: this.tot,
        gymLoc: this.gymLoc
      })
      console.log(res.data)
    }
  }
}
</script>
<style></style>
