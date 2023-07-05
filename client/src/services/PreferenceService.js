import Api from '@/services/Api'

export default {
  async preference (credentials) {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const response = await Api().post('preference', credentials, {
        timeout: 5000,
        headers: headers
      })
      console.log(response.data)
      return response.data
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
