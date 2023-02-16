<?php

namespace App\Http\Controllers;

use App\Http\Resources\GroupCollection;
use App\Traits\RespondsWithHttpStatus;
use App\Services\GroupService;
use App\Http\Requests\CreateGroupRequest;
use App\Http\Requests\UpdateGroupRequest;

class GroupController extends Controller
{
    use RespondsWithHttpStatus;

    protected $groupService;

    public function __construct(GroupService $groupService)
    {
        $this->groupService = $groupService;
    }

    public function index()
    {
        $groupList = $this->groupService->all();
        return $this->respondWithSuccess(['groups' => new GroupCollection($groupList)]);
    }

    public function store(CreateGroupRequest $request)
    {
        $this->authorize('create', 'App\Models\UserGroup');
        $group = $this->groupService->create($request->all());
        return $this->respondWithSuccess(['group' => $group]);
    }

    public function show($id)
    {
        $permissions = $this->groupService->getPermissionList($id);
        $group = $this->groupService->show($id);
        return $this->respondWithSuccess([
            'group' => $group,
            'permissions' => $permissions,
            'modules' => $this->groupService->getModuleList(),
        ]);
    }

    public function update(UpdateGroupRequest $request, $id)
    {
        $this->authorize('update', 'App\Models\UserGroup');
        $group = $this->groupService->update($request->all(), $id);
        return $this->respondWithSuccess(['group' => $group]);

    }

    public function destroy($id)
    {
        $this->authorize('delete', 'App\Models\UserGroup');
    }

    public function getModules()
    {
        $permissions = $this->groupService->mapPermissions('');
        return $this->respondWithSuccess([
            'permissions' => $permissions,
            'modules' => $this->groupService->getModuleList(),
        ]);
    }
}
