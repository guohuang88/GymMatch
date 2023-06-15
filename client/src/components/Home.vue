<template>
  <div>
    <h1>Welcome!</h1>
    <button>Start Matching</button>
    <button>Start Chatting</button>
    <button>Customisation</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      name: '',
      username: '',
      password: '',
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
        password: this.password,
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
