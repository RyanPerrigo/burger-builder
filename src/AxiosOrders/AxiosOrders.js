import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://burgerbuilder2-26059.firebaseio.com/",
});

export default axiosInstance;