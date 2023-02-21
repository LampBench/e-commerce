import Repository from "./repository";

class ProductService extends Repository {
    async getProducts(params) {
        return await this.get(
            `products?page=${params.page}&sort=${params.sort}&order=${params.order}&per-page=${params.perPage}&search=${params.search}`
        );
    }

    async create(data) {
        return await this.post("products", data);
    }

    async update(id, data) {
        return await this.put(`products/${id}`, data);
    }
}

export default new ProductService();
