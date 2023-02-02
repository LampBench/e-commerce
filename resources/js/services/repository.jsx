import axios from "./base.service";

export default class Repository {
    constructor() {
        this.axios = axios;
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
        return await this.axios.patch(url, data);
    }
}