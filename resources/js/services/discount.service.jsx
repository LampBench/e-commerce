import Repository from "./repository";

class DiscountService extends Repository {
    async getDiscounts(params) {
        return await this.get(
            `discounts?page=${params.page}&sort=${params.sort}&order=${params.order}&per-page=${params.perPage}&search=${params.search}`
        );
    }

    async create(data) {
        return await this.post("discounts", data);
    }

    async update(id, data) {
        return await this.put(`discounts/${id}`, data);
    }
}

export default new DiscountService();
