<template>
    <div>
      <h1>GymMatch</h1>
      <form action="/#/home">
        <h2>Login</h2>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email">
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
        <br>
        <br>
        <button type="button" class="button button1" @click="login">Login</button>
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
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          console.log(response)
          console.log('there')
          this.$router.push('/home')
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
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
