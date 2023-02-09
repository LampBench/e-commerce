import Repository from "./repository";

class CategoryService extends Repository {
    async getCategories(params) {
        console.log(
            `categories?page=${params.page}&sort=${params.sort}&order=${params.order}&per-page=${params.perPage}`
        );
        return await this.get(
            `categories?page=${params.page}&sort=${params.sort}&order=${params.order}&per-page=${params.perPage}`
        );
    }
}

export default new CategoryService();
