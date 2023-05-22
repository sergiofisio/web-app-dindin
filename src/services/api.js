import axios from "axios";
import { clearAll } from "../utils/storage";

const axiosPrivate = axios.create({
  baseURL: "https://app-dindin.onrender.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      setTimeout(() => {
        window.location.replace("https://app-dindin.onrender.com");
        clearAll();
      }, 1000);
    }
    return Promise.reject(error);
  }
);

export default axiosPrivate;
