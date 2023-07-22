import Api from '@/services/Api'

export default {
  async register (credentials) {
    const headers = {
      'Content-Type': 'application/json'
    }
    console.log('reg in')
    console.log('reg confirm in')
    const response = await Api().post('register', credentials, {
      timeout: 5000,
      headers: headers
    })
    console.log(response.data)
    return response.data
  },
  async login (credentials) {
    console.log('log in await')
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await Api().post('login', credentials, {
      timeout: 5000,
      headers: headers
    })
    return response.data
  }
}
