<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'category_name' => $this->category_name,
            'manufacturer_name' => $this->manufacturer_name,
            'name' => $this->name,
            'photos' => $this->photos,
            'quantity' => $this->quantity,
            'status' => $this->status,
            'price' => $this->price,
            'end_date' => $this->end_date,
            'discount_amount' => $this->discount_amount,
            'final_price' => $this->final_price,
            'average_rating_star' => $this->average_rating_star,
            'number_of_reviews' => $this->number_of_reviews
        ];
    }
}
