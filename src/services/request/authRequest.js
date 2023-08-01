import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";


const token = localStorage.getItem('OJToken') || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjQsImV4cCI6MTY5MDg3ODgwMiwibmJmIjoxNjkwNzkyNDAyLCJpYXQiOjE2OTA3OTI0MDJ9.Qt_0u-nc1VE-Feaw55_eUqlDUN3QQfxnvBjCuuHguSM"

class XXRequest {
    constructor(token,baseURL,timeout) {
        this.instance = axios.create({
            headers: {
                Authorization: `${token}`
            },
            baseURL,
            timeout
        })

        this.instance.interceptors.response.use((res) => {
            return res.data
        }, err => {
            return err
        })
    }

    request(config) {
        return this.instance.request(config)
    }
    get(config) {
        return this.request({ ...config, method: "get" })
    }
    post(config) {
        return this.request({ ...config, method: "post" })
    }

}

export default new XXRequest(token,BASE_URL,TIMEOUT)