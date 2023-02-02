import Repository from "./repository";

class AuthService extends Repository {
    async login(data) {
        return await this.post("login", data);
    }
}

export default new AuthService();