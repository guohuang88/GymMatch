<template>
    <div>
      <h1>GymMatch</h1>
      <form @submit.prevent="login" method="post">
        <h2>Login</h2>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email" required>
        <br>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <br>
        <div v-if="error" class="error">{{ error }}</div>
        <br>
        <button type="submit" class="button button1">Login</button>
        <br>
        <a href="/#/register">Do not have an account? Create one now!</a>
      </form>
    </div>
  </template>

  <script>
  import AuthenticationService from '@/services/AuthenticationService'

  export default {
    data () {
      return {
        email: '',
        password: '',
        error: null
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
          console.log('Before committing mutations:', this.$store.state)
          this.$store.dispatch('setToken', response.token)
          this.$store.dispatch('setUser', response.user)
          console.log('After committing mutations:', this.$store.state)
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
