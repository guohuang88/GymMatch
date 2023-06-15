<template>
    <div>
      <h1>GymMatch</h1>
      <form>
        <h2>Login</h2>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email">
        <br>
        <label for="pass">Password:</label>
        <input type="password" id="pass" v-model="pass">
        <br>
        <button @click="login">Login</button>
        <br>
        <a href="http://localhost:8080/#/register">Do not have an account? Create one now!</a>
      </form>
    </div>
  </template>

  <script>
  import AuthenticationService from '@/services/AuthenticationService'

  export default {
    data () {
      return {
        email: '',
        pass: ''
      }
    },
    methods: {
      async login () {
        const res = await AuthenticationService.login({
          email: this.email,
          pass: this.pass
        })
        console.log(res.data)
      }
    }
  }
  </script>
  <style></style>
