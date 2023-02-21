import Repository from "./repository";

class ManufacturerService extends Repository {
    async getManufacturers(params) {
        return await this.get(
            `manufacturers?page=${params.page}&sort=${params.sort}&order=${params.order}&per-page=${params.perPage}&search=${params.search}`
        );
    }

    async create(data) {
        return await this.post("manufacturers", data);
    }

    async update(id, data) {
        return await this.put(`manufacturers/${id}`, data);
    }
}

export default new ManufacturerService();
