import Repository from "./repository";

class ProductService extends Repository {
    async create(data) {
        return await this.post("products", data);
    }
}

export default new ProductService();
