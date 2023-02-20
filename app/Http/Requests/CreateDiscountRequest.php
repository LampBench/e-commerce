<?php

namespace App\Http\Requests;

use App\Rules\CheckProductDoNotHaveDiscount;
use Illuminate\Foundation\Http\FormRequest;

class CreateDiscountRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'product_id' => ['required', 'int', 'exists:products,id', new CheckProductDoNotHaveDiscount($this->start_date)],
            'type' => 'required|in:1,2',
            'value' => 'required|numeric',
            'start_date' => 'required|date_format:Y-m-d',
            'end_date' => 'nullable|date_format:Y-m-d',
        ];
    }
}
