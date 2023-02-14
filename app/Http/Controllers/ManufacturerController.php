<?php

namespace App\Http\Controllers;

use App\Http\Resources\ManufacturerCollection;
use App\Services\ManufacturerService;
use Illuminate\Http\Request;
use App\Http\Requests\CreateManufactureRequest;
use App\Traits\RespondsWithHttpStatus;
use App\Http\Resources\ManufacturerResource;

class ManufacturerController extends Controller
{
    use RespondsWithHttpStatus;

    protected $service;

    public function __construct(ManufacturerService $service)
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
        $manufacturers = $this->service->applySortFilterSearch($request);
        return new ManufacturerCollection($manufacturers);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateManufactureRequest $request)
    {
        $manufacturer = $this->service->create($request->all());
        return $this->respondWithSuccess([
            'manufacturer' => new ManufacturerResource($manufacturer)
        ], 'Manufacturer created successfully', 201);
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
    public function destroy($id)
    {
        //
    }
}
