import Repository from "./repository";
import { transformURL } from './transform-url.service';

class ProductService extends Repository {
    async getProducts(params) {
        let url = transformURL("products?", params);
        return await this.get(url);
    }

    async create(data) {
        return await this.post("products", data);
    }

    async update(id, data) {
        return await this.put(`products/${id}`, data);
    }
}

export default new ProductService();
