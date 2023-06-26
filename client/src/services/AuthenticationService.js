import Api from '@/services/Api'

export default {
  register (credentials) {
    console.log('reg in')
    try {
      console.log('reg confirm in')
      return Api().post('register', credentials)
    } catch (error) {
      console.log(error)
    }
  },
  login (credentials) {
    console.log('log in await')
    try {
     return Api().post('login', credentials)
    } catch (error) {
      console.log(error)
    }
  }
}
