import axios from "axios";
import { clearAll } from "../utils/storage";

const axiosPrivate = axios.create({
  baseURL: "https://aplicacao-dindin.onrender.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      setTimeout(() => {
        window.location.replace("https://aplicacao-dindin.onrender.com");
        clearAll();
      }, 1000);
    }
    return Promise.reject(error);
  }
);

export default axiosPrivate;
