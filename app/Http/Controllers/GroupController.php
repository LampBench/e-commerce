<?php

namespace App\Http\Controllers;

use App\Http\Resources\GroupCollection;
use Illuminate\Http\Request;
use App\Traits\RespondsWithHttpStatus;
use App\Services\GroupService;
use App\Http\Requests\CreateGroupRequest;

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
        $groupList = new GroupCollection($this->groupService->all());
        return $this->respondWithSuccess($groupList);
    }

    public function store(CreateGroupRequest $request)
    {
        $this->authorize('create', 'App\Models\UserGroup');
        $group = $this->groupService->create($request->all());
        return $this->respondWithSuccess($group);
    }

    public function show($id)
    {
        $permissions = $this->groupService->getPermissionList($id);
        $group = $this->groupService->show($id);
        return $this->respondWithSuccess([
            'group' => $group,
            'permissions' => $permissions,
            'modules' => config('modules')
        ]);
    }

    public function update(Request $request, $id)
    {
        $this->authorize('update', 'App\Models\UserGroup');
        $permissions = $this->groupService->update($request->roles, $id);
        return $this->respondWithSuccess($permissions);
    }

    public function destroy($id)
    {
        $this->authorize('delete', 'App\Models\UserGroup');
    }
}
