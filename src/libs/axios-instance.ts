import axios from "axios";
import Cookies from 'js-cookie'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})
console.log(Cookies.attributes)

axiosInstance.interceptors.request.use(
  (config) => {
    const TOKEN = Cookies.get('TOKEN')
    if (TOKEN) {
      config.headers.Authorization = `Bearer ${TOKEN}`;
    };
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
