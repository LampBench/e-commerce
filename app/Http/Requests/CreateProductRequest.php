<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateProductRequest extends FormRequest
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
            'category_id' => 'nullable|exists:categories,id',
            'manufacturer_id' => 'nullable|exists:manufacturers,id',
            'status' => 'required|in:1,2,3',
            'name' => 'required|string|max:255',
            'summary' => 'nullable|string',
            'price' => 'required|numeric',
            'photos' => 'nullable|string',
            'quantity' => 'required|integer',
        ];
    }
}
