<template>
    <v-toolbar fixed class="cyan" dark>
      <v-toolbar-title class="mr-4">
        <router-link
          v-if="!$store.state.isUserLoggedIn"
          class="home"
          tag="span"
          to="/"
          >
          GymMatch
        </router-link>
        <router-link
          v-if="$store.state.isUserLoggedIn"
          class="home"
          tag="span"
          to="/home"
          >
          GymMatch
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          text
          dark
          :to="{
            name: 'login'
          }">
          Login
        </v-btn>

        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          text
          dark
          :to="{
            name: 'register'
          }">
          Sign Up
        </v-btn>

        <v-btn
          v-if="$store.state.isUserLoggedIn"
          text
          dark
          @click="logout">
          Log Out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </template>

  <script>
  export default {
    methods: {
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
            name: 'introduction'
        })
      }
    }
  }
  </script>

  <style scoped>
  .home {
    cursor: pointer;
  }

  .home:hover {
    color: #E9E;
  }
  </style>
