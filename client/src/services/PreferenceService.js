import Api from '@/services/Api'

export default {
    async preference (credentials) {
        console.log('in')
        try {
          console.log('confirm in')
          const response = await Api().post('preference', credentials)
          return response.data
        } catch (error) {
          console.log(error)
          throw error
        }
      }
}
