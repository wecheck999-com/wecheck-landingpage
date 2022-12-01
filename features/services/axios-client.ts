import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://backend.wecheck999.com/',
    headers: {
        "Content-Type": "application/json",
    }
});

axiosClient.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

axiosClient.interceptors.response.use(
    function (response) {
        return response;
    },
   async function (error) {
         const originalRequest = error.config;
        return Promise.reject(error);
    }
)

export default axiosClient;