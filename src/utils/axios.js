import axios from "axios";

const BASE_URL='http://192.168.8.150:5001'

const axiosApi = (url, options) => {
    const instance = axios.create({
        baseURL: url,
        responseType: "json",
        ...options
    })
    return instance
}

export const defaultInstance = axiosApi(BASE_URL)