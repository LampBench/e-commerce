import Repository from "./repository";

class VoucherService extends Repository {

    async create(data) {
        return await this.post("vouchers", data);
    }

    async update(id, data) {
        return await this.put(`vouchers/${id}`, data);
    }
}

export default new VoucherService();
