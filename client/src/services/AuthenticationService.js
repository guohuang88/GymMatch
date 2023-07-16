import Api from '@/services/Api'

export default {
  async register (credentials) {
    const headers = {
      'Content-Type': 'application/json'
    }
    console.log('reg in')
    try {
      console.log('reg confirm in')
      const response = await Api().post('register', credentials, {
        timeout: 5000,
        headers: headers
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
    }
  },
  async login (credentials) {
    console.log('log in await')
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const response = await Api().post('login', credentials, {
        timeout: 5000,
        headers: headers
     })
     return response.data
    } catch (error) {
      console.log(error)
    }
  }
}
