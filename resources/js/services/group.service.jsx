import Repository from "./repository";
import { mappingPermissions, mappingPermissionsToArray } from "../utils/function.helper";
class GroupService extends Repository {
    async getGroups() {
        return await this.get("groups");
    }

    async getPermissions(id) {
        return await this.get(`groups/${id}`);
    }

    async updatePermissions(id, data) {
        const roles = mappingPermissions(data, 'roles');
        return await this.patch(`groups/${id}`, roles);
    }

    async getModules() {
        return await this.get("groups/modules");
    }

    async createGroup(data) {
        data['permissions'] = mappingPermissionsToArray(data['permissions']);
        return await this.post("groups", data);
    }
}

export default new GroupService();