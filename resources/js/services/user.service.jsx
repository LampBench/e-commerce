import Repository from "./repository";

class UserService extends Repository {
    async getUsers(params) {
        return await this.get(
            `users?page=${params.page}&sort=${params.sort}&order=${params.order}&per-page=${params.perPage}`
        );
    }

    async create(data) {
        return await this.post("users", data);
    }

    async update(id, data) {
        return await this.put(`users/${id}`, data);
    }
}

export default new UserService();
