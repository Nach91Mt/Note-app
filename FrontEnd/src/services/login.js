import axios from 'axios'

const baseUrl = '/user/login'

const login = async credentials => {
  try {
    const { data } = await axios.post(baseUrl, credentials)
    return data
  } catch (e) {
    console.log(e)
  }
}
export default { login }
