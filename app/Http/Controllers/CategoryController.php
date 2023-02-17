<?php

namespace App\Http\Controllers;

use App\Http\Requests\DeleteCategoryRequest;
use App\Http\Resources\CategoryCollection;
use App\Models\Category;
use App\Services\CategoryService;
use App\Traits\RespondsWithHttpStatus;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    use RespondsWithHttpStatus;

    protected $service;

    public function __construct(CategoryService $service)
    {
        $this->service = $service;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $categories = $this->service->applySortFilterSearch($request);
        return new CategoryCollection($categories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $category = $this->service->create($request->all());
        return $this->respondWithSuccess(["category" => $category], "Category created successfully", 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(DeleteCategoryRequest $request, $id)
    {
        $this->authorize('delete', 'App\Models\Category');
        $category = $this->service->delete($id);
        return $this->respondWithSuccess(["category" => $category]);
    }
}
