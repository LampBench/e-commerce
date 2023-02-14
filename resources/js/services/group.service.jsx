import Repository from "./repository";
import { mappingPermissions, mappingPermissionsToArray, mappingToString } from "../utils/function.helper";
class GroupService extends Repository {
    async getGroups() {
        return await this.get("groups");
    }

    async getPermissions(id) {
        return await this.get(`groups/${id}`);
    }

    async updatePermissions(id, data) {
        const roles = mappingPermissions(data, 'permissions');
        return await this.patch(`groups/${id}`, roles);
    }

    async updateGroup(id, data) {
        const dataMapped = mappingToString(data);
        console.log("Debug dataMapped: ", dataMapped);
        return await this.patch(`groups/${id}`, dataMapped);
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