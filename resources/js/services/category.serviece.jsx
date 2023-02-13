import Repository from "./repository";

class CategoryService extends Repository {
    async getCategories(params) {
        return await this.get(
            `categories?page=${params.page}&sort=${params.sort}&order=${params.order}&per-page=${params.perPage}&search=${params.search}`
        );
    }
}

export default new CategoryService();
