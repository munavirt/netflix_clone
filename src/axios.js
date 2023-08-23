import axios from "axios";
import {apiBaseUrl} from './constants/constants'

const axiosInstance = axios.create({
    baseURL: apiBaseUrl,

  });

export default axiosInstance