import Repository from "./repository";

class GroupService extends Repository {
    async getGroups() {
        return await this.get("groups");
    }

    async getPermissions(id) {
        return await this.get(`groups/${id}`);
    }

    async updatePermissions(id, data) {
        let result = "";

        for (const [module, permissions] of Object.entries(data)) {
            for (const [permission, value] of Object.entries(permissions)) {
                if (value.checked) {
                    result += `roles[${module}][]=${permission}&`;
                }
            }
        }

        const roles = result.slice(0, -1);
        return await this.patch(`groups/${id}`, roles);
    }
}

export default new GroupService();