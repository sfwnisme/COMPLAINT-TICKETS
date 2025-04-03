import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  validateStatus: (status) => status >= 200 && status < 300,
})

export default axiosInstance