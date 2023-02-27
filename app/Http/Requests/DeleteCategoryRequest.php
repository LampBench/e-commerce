<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Database\Query\Builder;

class DeleteCategoryRequest extends FormRequest
{
    protected function prepareForValidation(): void
    {
        $this->merge([
            'category_id' => $this->route('category'),
        ]);
    }
    public function messages(): array
    {
        return [
            'category_id.unique' => 'This category already has products',

        ];
    }

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
            'category_id' =>  Rule::unique('products')->where(function (Builder $query) {
                return $query->where('category_id', $this->category_id);
            }),

        ];
    }
}
