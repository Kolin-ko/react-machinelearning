import axios from "axios";

const http = axios.create({
    baseURL: "https://flask-model-diabetes-production-0407.up.railway.app/api",
    headers: {
        Accept: "application/json"
    }
})

export default http;
