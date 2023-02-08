import Repository from "./repository";

class CategoryService extends Repository {
    async getCategories(url = "categories") {
        return await this.get(url);
    }
}

export default new CategoryService();
