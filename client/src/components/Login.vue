<template>
    <div>
      <h1>GymMatch</h1>
      <form>
        <h2>Login</h2>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email">
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
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
        password: ''
      }
    },
    methods: {
      async login () {
        try {
          console.log('here')
          const res = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          console.log('there')
          this.$store.dispatch('setToken', res.data.token)
          this.$store.dispatch('setUser', res.data.token)
        } catch (error) {
          console.log('error')
          this.error = error.response.data.error
        }
      }
    }
  }
  </script>
  <style></style>
