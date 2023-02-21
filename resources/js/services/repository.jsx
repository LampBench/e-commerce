import axios from "./base.service";
import { decode } from "js-base64";
export default class Repository {
    constructor() {
        this.axios = axios;
        // add token to request header

        this.axios.interceptors.request.use(
            (config) => {
                const token = decode(localStorage.getItem("TOKEN") || "");
                if (token) {
                    config.headers["Authorization"] = "Bearer " + token;
                }
                return config;
            }
        );

        this.axios.interceptors.response.use(
            (response) => {
                return response;
            }
        );
    }

    async get(url) {
        return await this.axios.get(url);
    }

    async post(url, data) {
        return await this.axios.post(url, data);
    }

    async put(url, data) {
        return await this.axios.put(url, data);
    }

    async delete(url) {
        return await this.axios.delete(url);
    }

    async patch(url, data) {
        return await this.axios.patch(url + '?' + data);
    }
}