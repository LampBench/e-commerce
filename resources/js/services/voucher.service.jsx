import Repository from "./repository";

class VoucherService extends Repository {
    async getVouchers(params) {
        return await this.get(
            `vouchers?page=${params.page}&sort=${params.sort}&order=${params.order}&per-page=${params.perPage}&search=${params.search}`
        );
    }

    async create(data) {
        return await this.post("vouchers", data);
    }

    async update(id, data) {
        return await this.put(`vouchers/${id}`, data);
    }
}

export default new VoucherService();
