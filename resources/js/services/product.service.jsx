import Repository from "./repository";

class ProductService extends Repository {
    async getProducts(params) {
        let url = "products?";
        Object.keys(params).forEach(element => {
            if (element == "filterFields") {
                let filterFields = params[element];
                Object.keys(filterFields).forEach(filterField => {
                    if (filterFields[filterField].value !== "") {
                        url += filterFields[filterField].field + "=" + filterFields[filterField].value;
                        url += "&";
                    }
                })
            }
            else {
                url += element + "=" + params[element];
                url += "&";
            }
        });
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
