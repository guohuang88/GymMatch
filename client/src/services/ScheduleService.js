import Api from '@/services/Api'

export default {
  async schedule (credentials) {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await Api().post('schedule', credentials, {
      timeout: 5000,
      headers: headers
    })
    console.log(response.data)
    return response.data
  },
  async getSchedule (credentials) {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await Api().get('home', credentials, {
      timeout: 5000,
      headers: headers
    })
    console.log(response.data)
    return response.data
  },
  async updateMeetingStatus (credentials) {
    const headers = {
      'Content-Type': 'application/json'
    }
    const response = await Api().put('meetingConfirmation', credentials, {
      timeout: 5000,
      headers: headers
    })
    console.log(response.data)
    return response.data
  }
}
