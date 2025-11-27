import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        Accept: "application/json"
    }
})  
http.interceptors
export default http;
