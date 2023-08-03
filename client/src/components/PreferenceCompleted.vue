<template>
    <div class="container">
        <v-card
        class="mx-auto"
        max-width="400"
        tile
        v-if="users.length > 0"
        >
        <v-list-item v-for="user in users" :key="user.id" three-line>
            <v-list-item-content>
                <v-list-item-title>Name: {{ user.name }}</v-list-item-title>
                <v-list-item-subtitle>
                    Gender: {{ user.gender }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                    Age: {{ user.age }}
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-btn @click="matchUser(user.id)">Match</v-btn>
        </v-list-item>
    </v-card>
    <div v-else>
            <div class="error">
                No users found. You may change your preference.
            </div>
            <v-btn :to="{name: 'preference'}">Change Preference</v-btn>
        </div>
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
    },
    methods: {
        matchUser (userId) {
            this.$router.push({ name: 'schedule', params: { userId } })
        }
    }
  }
  </script>
  <style scoped>
    .error {
      color: red;
    }
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
  </style>
