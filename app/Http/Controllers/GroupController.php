<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\RespondsWithHttpStatus;
use App\Services\GroupService;

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
        return $this->respondWithSuccess($groupList);
    }

    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }

    public function getPermission($id)
    {
        $permissions = $this->groupService->getPermissionList($id);
        return $this->respondWithSuccess($permissions);
    }

    public function updatePermission(Request $request, $id)
    {
        $permissions = $this->groupService->updatePermission($id, $request->roles);
        return $this->respondWithSuccess($permissions);
    }
}
