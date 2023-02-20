<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateDiscountRequest;
use App\Http\Resources\DiscountCollection;
use App\Services\DiscountService;
use App\Traits\RespondsWithHttpStatus;
use Illuminate\Http\Request;

class DiscountController extends Controller
{
    use RespondsWithHttpStatus;

    protected $service;

    public function __construct(DiscountService $service)
    {
        $this->service = $service;
    }

    public function index(Request $request)
    {
        $discounts = $this->service->applySortFilterSearch($request);
        return new DiscountCollection($discounts);
    }

    public function store(CreateDiscountRequest $request)
    {
        $discount = $this->service->create($request->all());
        return $this->respondWithSuccess(['discount' => $discount], 'Discount created successfully', 201);
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
