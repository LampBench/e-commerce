import axios from "axios";
import { decode } from "js-base64";

const API_URL = "http://localhost:8000/api";

export default axios.create({
    baseURL: API_URL,
    headers: {
        "Content-type": "application/json",
    },
});
