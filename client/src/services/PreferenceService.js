import Api from '@/services/Api'

export default {
  async preference (credentials) {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await Api().post('preference', credentials, {
      timeout: 5000,
      headers: headers
    })
    console.log(response.data)
    return response.data
  }
}
