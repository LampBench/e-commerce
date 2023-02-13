import Repository from "./repository";

class AuthorService extends Repository {
    async getAuthors(params) {
        return await this.get(
            `authors?page=${params.page}&sort=${params.sort}&order=${params.order}&per-page=${params.perPage}&search=${params.search}`
        );
    }

    async create(data) {
        return await this.post("authors", data);
    }

    async update(id, data) {
        return await this.put(`authors/${id}`, data);
    }
}

export default new AuthorService();
