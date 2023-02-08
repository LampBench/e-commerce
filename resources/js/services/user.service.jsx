import Repository from "./repository";

class UserService extends Repository {
    async getUsers() {
        return await this.get("users");
    }

    async create(data) {
        return await this.post("users", data);
    }

    async update(id, data) {
        return await this.put(`users/${id}`, data);
    }
}

export default new UserService();