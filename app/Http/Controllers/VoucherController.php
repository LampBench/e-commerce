<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\VoucherService;
use App\Traits\RespondsWithHttpStatus;
use App\Http\Requests\CreateVoucherRequest;

class VoucherController extends Controller
{
    use RespondsWithHttpStatus;

    protected $voucherService;

    public function __construct(VoucherService $voucherService)
    {
        $this->voucherService = $voucherService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vouchers = $this->voucherService->all();
        return $vouchers;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateVoucherRequest $request)
    {
        $voucher = $this->voucherService->create($request->all());
        return $this->respondWithSuccess(['voucher' => $voucher], 'Voucher created successfully', 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $voucher = $this->voucherService->show($id);
        return $this->respondWithSuccess(['voucher' => $voucher], 'Voucher retrieved successfully', 200);
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
