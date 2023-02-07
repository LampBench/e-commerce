import Repository from "./repository";

class AuthService extends Repository {
    async login(data) {
        return await this.post("login", data);
    }

    async register(data) {
        return await this.post("register", data);
    }

    async check() {
        return await this.get("me");
    }

    async logout() {
        return await this.post("logout");
    }
}

export default new AuthService();