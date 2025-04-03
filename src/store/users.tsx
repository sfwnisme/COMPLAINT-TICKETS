import axios from 'axios'
import Cookies from 'js-cookie'

const BASE_URL = import.meta.env.VITE_BASE_URL
axios.defaults.baseURL = BASE_URL
const token = `Bearer ${Cookies.get('TOKEN')}`

export const getAllUsers = async () => {
  axios.defaults.headers.common['Authorization'] = token
  const res = await axios.get('/users')
  return res
}
export const getAllData = async (endpoint: string) => {
  axios.defaults.headers.common['Authorization'] = token
  const res = await axios.get(endpoint)
  return res
}

export const getCurrentUser = async () => {
  axios.defaults.headers.common['Authorization'] = token
  const res = await axios.get('/users/me')
  return res
}