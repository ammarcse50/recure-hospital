import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()
  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    async function (error) {
      const status = error.response.status;
      if (status === 403 || status === 401)
      {
          await logOut();
          navigate('/login')
      }
        return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
