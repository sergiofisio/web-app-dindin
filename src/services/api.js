import axios from "axios";
import { clearAll } from "../utils/storage";

const axiosPrivate = axios.create({
  baseURL: "https://app-dindin.herokuapp.com/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      setTimeout(() => {
        window.location.replace("https://app-dindin.herokuapp.com/");
        clearAll();
      }, 1000);
    }
    return Promise.reject(error);
  }
);

export default axiosPrivate;
