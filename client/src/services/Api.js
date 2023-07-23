import axios from 'axios'

export default () => {
  return axios.create({
	  baseURL: `http://13.212.116.130/api/`
  })
}
