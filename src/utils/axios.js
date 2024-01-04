import axios from "axios";

const BASE_URL='https://api.smallcloud.monster'

const axiosApi = (url, options) => {
    const instance = axios.create({
        baseURL: url,
        headers: {"Content-Type" : "application/json"},
        responseType: "json",
        ...options
    })
    return instance
}

export const defaultInstance = axiosApi(BASE_URL)