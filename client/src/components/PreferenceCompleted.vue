<template>
    <div>
        <h2>Matched Users:</h2>
        <ul>
            <li v-for="user in users" :key="user.id">
                <p>Name: {{ user.name }}</p>
                <p>Gender: {{ user.gender }}</p>
                <p>Age: {{ user.age }}</p>
                <!-- Add other user information as needed -->
            </li>
        </ul>
  </div>
  </template>

  <script>

  export default {
    data () {
        return {
            users: [] // Empty array to hold the parsed user data
        }
    },
    created () {
        console.log('-----Im here')

        if (this.$route.params.users) {
            this.users = JSON.parse(this.$route.params.users)
            console.log('HELO')
            console.log(this.users)
        }
    }
  }
  </script>
  <style scoped>
    .error {
      color: red;
    }
  </style>
